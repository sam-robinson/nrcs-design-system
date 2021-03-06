import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from "reactstrap";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { PrimaryButton, FlatButton } from "components/buttons/Buttons";
import Search from "components/inputs/Search";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Inputs/Search",
};

export const SearchDefault = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <ContentHeaderH1>Search - Default</ContentHeaderH1>
      Basic search field.
      <Row>
        <Col sm="12" md="6">
          <p>This is my component:</p>
          <Search />

          <p>TEMPORARY:</p>

          <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
              <PrimaryButton>Search</PrimaryButton>
            </InputGroupAddon>
          </InputGroup>
          <p>Icon only</p>

          <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
              <PrimaryButton className="btn-icon">
                <Icon className="mdi" path={mdiMagnify} />
              </PrimaryButton>
            </InputGroupAddon>
          </InputGroup>

          <h3>Small</h3>

          <InputGroup>
            <Input bsSize="sm" />
            <InputGroupAddon addonType="append">
              <PrimaryButton size="sm">Search</PrimaryButton>
            </InputGroupAddon>
          </InputGroup>
          <p>Icon only</p>
          <InputGroup>
            <Input bsSize="sm" />
            <InputGroupAddon addonType="append">
              <PrimaryButton size="sm" className="btn-icon">
                <Icon className="mdi" path={mdiMagnify} size={0.8} />
              </PrimaryButton>
            </InputGroupAddon>
          </InputGroup>

          <h3>Filter</h3>
          <InputGroup>
            <Input />
            <InputGroupButtonDropdown
              addonType="append"
              isOpen={dropdownOpen}
              toggle={toggleDropDown}
            >
              <DropdownToggle outline caret color="primary">
                Filter
              </DropdownToggle>

              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </InputGroupButtonDropdown>
            <InputGroupAddon addonType="append">
              <PrimaryButton>Search</PrimaryButton>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

SearchDefault.story = {
  name: "Search - Default",
};
