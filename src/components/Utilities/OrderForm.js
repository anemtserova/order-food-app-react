import styles from './OrderForm.module.css';

import FormInput from './FormInput';

const OrderForm = (props) => {
	return (
		<form className={styles.form}>
			<FormInput
				label="Qty"
				input={{
					id: 'qty',
					type: 'number',
					min: '1',
					max: '10',
					defaultValue: '1',
					step: '1',
				}}
			/>
			<button>+ Add</button>
		</form>
	);
};

export default OrderForm;
