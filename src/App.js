import React, { Fragment } from 'react';

import Header from './components/Layout/Header';
import FoodItems from './components/Meals/FoodItems';

function App() {
	return (
		<Fragment>
			<Header />
			<main>
				<FoodItems />
			</main>
		</Fragment>
	);
}

export default App;
