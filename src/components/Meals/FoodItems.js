import React, { Fragment } from 'react';

import FoodItemList from './FoodItemList';
import FoodItemsSummery from './FoodItemSummary';

const FoodItems = () => {
	return (
		<Fragment>
			<FoodItemsSummery />
			<FoodItemList />
		</Fragment>
	);
};

export default FoodItems;
