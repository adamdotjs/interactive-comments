import styles from './avatar.module.css';

const Avatar = ({ src, username }) => {
	return (
		<div className={styles.avatar}>
			<img src={src} alt={`Picture of ${username}`} />
		</div>
	);
};

export default Avatar;
