import React, { useEffect, useState } from 'react';

import Card from '../Utilities/Card';
import SingleFoodItem from '../Utilities/SingleFoodItem';

import styles from './FoodItemList.module.css';

const FoodItemList = () => {
	const [foodList, setFoodList] = useState([]);
	const getFoodList = async () => {
		const resp = await fetch('https://burgersapi.p.rapidapi.com/get-burgers', {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'burgersapi.p.rapidapi.com',
				'x-rapidapi-key': '40ebbe3ed3msh3a39f76c326acf4p14e3c2jsnb80f8a9d0f8c',
			},
		});
		if (!resp.ok) {
			const message = `An error has occured: ${resp.status}`;
			throw new Error(message);
		}
		const getResp = await resp.json();
		return setFoodList(getResp.burgers);
	};

	console.log('Food list', foodList);

	useEffect(() => {
		getFoodList();
	}, []);

	return (
		<section className={styles['food-item']}>
			<Card>
				{foodList.map((item, i) => (
					<SingleFoodItem
						className={styles['food-item-card']}
						title={item.name}
						key={i}
						calories={item.calories}
						ingredients={item.ingredients}>
						{item.name}
					</SingleFoodItem>
				))}
			</Card>
		</section>
	);
};

export default FoodItemList;
