import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment ">
        {/* <form className="ui form" onSubmit={()=>this.onFormSubmit()}></form> alternate way to fix the binding of this keyword */}
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
