import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    //Gets us all of the keys of an object that we pass into it and gives it to us in an array.
    collections => Object.keys(collections).map(key => collections[key]) //Gets the value of our collections object at that key which will give us an array of items that we're trying  to get.
)
// By wrapping this function is memoize, we're saying that whenever this function gets called and receives collectionUrlParam, I want to memoize the return of this function (in this case we return a selector). If this function gets called again with the same collectionUrlParam, don't rerun this function because we'll return the same value as last time, which we've memoized so just return the selector that's been stored.
export const selectCollection = memoize(collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
));