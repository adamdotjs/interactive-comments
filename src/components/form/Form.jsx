import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Avatar from '../avatar/Avatar';
import Button from '../button/Button';
import styles from './form.module.css';

const Form = () => {
	const { user } = useContext(UserContext);

	return (
		<form>
			<textarea name="" id="" rows="5"></textarea>
			<div className={styles.formFooter}>
				<Avatar src={user.image?.webp} />
				<Button>Send</Button>
			</div>
		</form>
	);
};

export default Form;
