import styles from './comment.module.css';
import Avatar from '../avatar/Avatar';
import IconButton from '../icon-button/IconButton';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

const PlusIcon = () => {
	return (
		<svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
				fill="var(--light-blue)"
			/>
		</svg>
	);
};

const MinusIcon = () => {
	return (
		<svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
				fill="var(--light-blue)"
			/>
		</svg>
	);
};

const Card = ({ comment }) => {
	const { content, createdAt, score, user } = comment;
	const [votes, setVotes] = useState(score);
	const { user: myUser } = useContext(UserContext);

	return (
		<div className={styles.comment}>
			<div className={styles.commentHeader}>
				<Avatar src={user.image.webp} />
				<h2>{user.username}</h2>
				{user.username === myUser.username && <span className={styles.youIcon}>you</span>}
				<p>{createdAt}</p>
			</div>
			<p>{content}</p>
			<div className={styles.commentFooter}>
				<div className={styles.counter}>
					<button
						onClick={() => setVotes((prevVotes) => prevVotes + 1)}
						className={styles.voteButton}
					>
						<PlusIcon />
					</button>
					<span className={styles.count}>{votes}</span>
					<button
						onClick={() => setVotes((prevVotes) => prevVotes - 1)}
						className={styles.voteButton}
					>
						<MinusIcon />
					</button>
				</div>
				{user.username === myUser.username ? (
					<div className={styles.buttonGroup}>
						<IconButton icon="/images/icon-delete.svg" color="red">
							Delete
						</IconButton>
						<IconButton icon="/images/icon-edit.svg">Edit</IconButton>
					</div>
				) : (
					<IconButton icon="/images/icon-reply.svg">Reply</IconButton>
				)}
			</div>
		</div>
	);
};

const Comment = ({ comment }) => {
	return (
		<div>
			<Card comment={comment} />
			{comment.replies.length ? (
				<div className={styles.replies}>
					{comment.replies.map((reply) => {
						return <Card comment={reply} key={reply.id} />;
					})}
				</div>
			) : null}
		</div>
	);
};

export default Comment;
