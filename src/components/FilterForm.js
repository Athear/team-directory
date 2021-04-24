import React from "react";

function FilterForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.filter}
          name="filter"
          type="text"
          className="form-control"
          placeholder="Filter"
          id="filter"
        />
      </div>
    </form>
  );
}

export default FilterForm;
