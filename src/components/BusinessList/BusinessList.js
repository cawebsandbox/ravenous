import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    let x = (
      <div className="BusinessList">
        {this.props.businesses.map(business => <Business business={business} key={business.id} />)}
      </div>
    );
    return x;
  }
}

export default BusinessList;
