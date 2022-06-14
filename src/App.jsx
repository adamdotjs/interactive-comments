import { useState, useEffect, useContext } from 'react';
import { UserContext } from './context/UserContext';
import Comment from './components/comment/Comment';
import Form from './components/form/Form';
import Container from './components/container/Container';

function App() {
	const [comments, setComments] = useState([]);
	const { user, setUser } = useContext(UserContext);

	console.log(user);
	useEffect(() => {
		fetch('./data.json')
			.then((res) => res.json())
			.then((data) => {
				setComments(data.comments);
				setUser(data.currentUser);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Container>
			{comments.length &&
				comments.map((comment) => {
					return <Comment comment={comment} key={comment.id} />;
				})}
			<Form />
		</Container>
	);
}

export default App;
