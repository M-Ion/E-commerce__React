import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ collections }) => (
  
  <div className='shop-page'>
    <CollectionsOverview />
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);