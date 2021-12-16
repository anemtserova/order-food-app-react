import React from 'react';
import OrderForm from './OrderForm';

import styles from './SingleFoodItem.module.css';

const SingleFoodItem = ({ title, ingredients, calories, className }) => {
	const price = `$${(Math.ceil(Math.random() * 11 + 15) * 1.05).toFixed(2)}`;

	return (
		<li className={className}>
			<div className={styles.meal}>
				<div className={styles.title}>
					<h3>{title}</h3>
				</div>
				<div className={styles.description}>
					{ingredients.map((item) => {
						return <li>{item}</li>;
					})}
				</div>
				<div className={styles.price}>{price}</div>
				<div className={styles.cals}>{calories}</div>
			</div>
			<div className="">
				<OrderForm />
			</div>
		</li>
	);
};

export default SingleFoodItem;
