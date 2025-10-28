import { Link } from "react-router";

const Home = () => {
	return (
		<div className="container text-center">
			<Link to="/add-user" className="btn btn-primary">
				Add User
			</Link>
		</div>
	);
};

export default Home;
