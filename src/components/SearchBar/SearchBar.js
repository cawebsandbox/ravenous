import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term:'',
      location:'',
      sortBy:'best_match'
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOption) {
    if(this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy:sortByOption});
  }

  handleTermChange(e) {
    this.setState({term:e.target.value});
  }

  handleLocationChange(e) {
    this.setState({location:e.target.value});
  }

  handleSearch(e) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>{sortByOption}</li>;
    });
  }

  render() {
    let x = (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Location?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Lets Go</a>
        </div>
      </div>
    );
    return x;
  }
}

export default SearchBar;
