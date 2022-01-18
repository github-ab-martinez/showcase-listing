import React from "react";
import Entry from "./Entry";
import Pagination from "./Pagination";

class EntryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEntries: this.props.entries.slice(0, 10),
      currentPage: 1,
      resultsPerPage: 10,
    };
  }

  paginateEntries(page) {
    this.setState({
      currentPage: page,
      currentEntries: this.props.entries.slice(
        page * this.state.resultsPerPage - this.state.resultsPerPage,
        page * this.state.resultsPerPage
      ),
    });
  }

  render() {
    return (
      <div className="entry-list">
        <ul>
          {this.state.currentEntries.map((entry) => (
            <li key={entry.id}>
              <Entry data={entry} />
            </li>
          ))}
        </ul>
        <Pagination
          clickHandler={this.paginateEntries.bind(this)}
          currentPage={this.state.currentPage}
          totalPages={Math.ceil(
            this.props.entries.length / this.state.resultsPerPage
          )}
        />
      </div>
    );
  }
}

export default EntryList;
