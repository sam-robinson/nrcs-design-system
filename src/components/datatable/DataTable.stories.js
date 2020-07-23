import React, { useState } from "react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { DataTable } from "./DataTable";
import { FlatButton } from "components/buttons/Buttons";
import Icon from "@mdi/react";
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiPlusBox,
  mdiTrashCan,
  mdiCloseCircle,
  mdiFileExport,
  mdiViewColumn
} from "@mdi/js";

export default {
  title: "Components|DataTable"
};

export const DataTableDefault = () => {
  // required to have a primaryProperty for accessibility
  // tells which column to use for row actions and for accessibility aria labeling
  const primaryProperty = "id";

  // action functions
  const onRemove = id => {
    // remove row with primary property (id in this case)
    // data.filter()? etc.
    console.log("deleting " + id);

    let result = data.filter(rowdata => rowdata[primaryProperty] !== id);

    // update grid rows
    setData(result);
  };

  const actions = id => (
    <FlatButton
      iconOnly={mdiCloseCircle}
      onClick={() => {
        onRemove(id);
      }}
    />
  );

  // Columns: array of objects
  // primary = unique identifier for accessiblitly, if none, uses first column
  // header = what's displayed
  // align = left (default), right, or center
  let columns = [
    {
      primary: true,
      property: "id",
      header: "Id",
      visible: true,
      sort: true,
      filter: true,
      align: "center"
    },
    {
      property: "name",
      header: "Name",
      visible: true,
      sort: true,
      filter: true
    },
    {
      property: "power",
      header: "Super Power",
      visible: true,
      sort: true,
      filter: true
    },
    {
      property: "notes",
      header: "Notes",
      visible: true,
      sort: true,
      filter: true
    },
    {
      property: "timestamp",
      header: "Last Updated",
      visible: true,
      sort: true,
      filter: true
    },
    {
      property: "actions",
      header: "Actions",
      visible: true,
      sort: false,
      filter: false,
      align: "center"
    }
  ];

  let initData = [
    {
      id: "A",
      name: "Astro-Man",
      power: "Is always alert for an alien attack",
      notes: "He has asthma!",
      timestamp: "12/20/1922",
      actions: actions("A")
    },
    {
      id: "B",
      name: "Bubble-Man",
      power: "Blows big bubbles at bullies",
      notes: "He's a bad boy, is bald, and wears boots.",
      timestamp: "4/14/1937",
      actions: actions("B")
    },
    {
      id: "C",
      name: "Captain Cloud",
      power: "Calmly catches crookes",
      notes: "He has a cape he's so cool.",
      timestamp: "12/20/1922",
      actions: actions("C")
    },
    {
      id: "D",
      name: "Danger Man",
      power: "Does daring deeds every day",
      notes: "He's dramatic, doesn't have a dog, but duels with dragons!",
      timestamp: "12/20/1922",
      actions: actions("D")
    },
    {
      id: "E",
      name: "The Eagle",
      power: "Easily eyes evildoers everwhere",
      notes: "He's exciting and other birds envy him.",
      timestamp: "12/20/1922",
      actions: actions("E")
    },
    {
      id: "F",
      name: "The Firefly",
      power: "Fights felons in the forest",
      notes: "She doesn't need a flashlight, flies fast, and has fat feet.",
      timestamp: "12/20/1922",
      actions: actions("F")
    },
    {
      id: "G",
      name: "Goo Girl",
      power: "Shoots great gobs of goo",
      notes: "She wears goggles and gloves. She grins and giggles with glee.",
      timestamp: "12/20/1922",
      actions: actions("G")
    },
    {
      id: "H",
      name: "Huge Man",
      power: "Is happy to help heros and never harms humans",
      notes: "He's not exactly handsome... even his hands are hairy!",
      timestamp: "12/20/1922",
      actions: actions("H")
    }
  ];

  const [data, setData] = useState(initData);

  let noData = [];

  return (
    <div>
      <ContentHeaderH1>DataTable - Default</ContentHeaderH1>

      <p className="lead">
        A DataTable that provides paging, sorting, single or mutliple selection,
        actions bar.
      </p>
      <p className="text-danger">Under construction...</p>

      <DataTable columns={columns} data={data} />

      <h3 className="mt-4">No Data</h3>

      <DataTable columns={columns} data={noData} />

      <h3 className="mt-4">Small</h3>

      <DataTable columns={columns} data={noData} size="sm" />
    </div>
  );
};

DataTableDefault.story = {
  name: "DataTable - Default"
};
