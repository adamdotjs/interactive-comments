import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Avatar from '../avatar/Avatar';
import styles from './form.module.css';

const Form = () => {
	const { user } = useContext(UserContext);

	return (
		<form>
			<textarea name="" id="" rows="5"></textarea>
			<div className={styles.formFooter}>
				<Avatar src={user.image?.webp} />
				<button>Send</button>
			</div>
		</form>
	);
};

export default Form;
