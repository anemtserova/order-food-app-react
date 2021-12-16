import React from 'react';
import CartIcon from './CartIcon';

import styles from '../Cart/CartButton.module.css';

const CartButton = (props) => {
	return (
		<button className={styles.button}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>3</span>
		</button>
	);
};

export default CartButton;
