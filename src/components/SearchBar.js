import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment" style={{ marginTop: "1vh" }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label>Video Search</label>
            <input
              type="text"
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
