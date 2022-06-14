import styles from './iconbutton.module.css';

const IconButton = ({ icon, color = 'blue', children }) => {
	return (
		<button className={`${styles.iconButton} ${color && styles[color]}`}>
			<img src={icon} alt="" />
			{children}
		</button>
	);
};

export default IconButton;
