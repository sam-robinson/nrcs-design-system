import React from "react";

import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

class KitchenSink extends React.Component {
  render() {
    return (
      <div>
        <h1 className="docs">Components</h1>
        <button type="button" class="btn btn-primary">
          Primary
        </button>
        <button type="button" class="btn btn-secondary">
          Secondary
        </button>
        <button type="button" class="btn btn-success">
          Success
        </button>
        <button type="button" class="btn btn-danger">
          Danger
        </button>
        <button type="button" class="btn btn-warning">
          Warning
        </button>
        <button type="button" class="btn btn-info">
          Info
        </button>
        <button type="button" class="btn btn-light">
          Light
        </button>
        <button type="button" class="btn btn-dark">
          Dark
        </button>

        <button type="button" class="btn btn-link">
          Link
        </button>
        <br />
        <br />
        <button type="button" class="btn btn-primary">
          <Icon className="mdi" path={mdiAccount} />
          Icon
        </button>
        <button type="button" class="btn btn-primary">
          <Icon className="mdi" path={mdiAccount}>
            Icon
          </Icon>
        </button>
      </div>
    );
  }
}

export default KitchenSink;