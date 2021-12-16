import React, { Fragment } from 'react';
import CartButton from '../Cart/CartButton';

import bluePlate from '../../assets/burgerNfries.jpg';

import styles from './Header.module.css';

const Header = (props) => {
	return (
		<Fragment>
			<header className={styles.header}>
				<h1>Blue Burger Haus</h1>
				<CartButton />
			</header>
			<div className={styles.mainImage}>
				<img src={bluePlate} alt="a plate of food on a blue background" />
			</div>
		</Fragment>
	);
};

export default Header;
