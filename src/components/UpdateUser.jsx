import { useLoaderData, useNavigate } from "react-router";

const UpdateUser = () => {
	const user = useLoaderData();
	const navigate = useNavigate();

	const handleUpdateUser = (e) => {
		e.preventDefault();
		let name = e.target.name.value;
		let email = e.target.email.value;
		if (!name) {
			name = user.name;
		}
		if (!email) {
			email = user.email;
		}

		const updateInfo = { name, email };

		fetch(`http://localhost:3000/users/${user._id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updateInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					alert("User Updated Successfully!");
					e.target.reset();
					navigate("/users");
				}
			});
	};
	return (
		<div className="container">
			<div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
				<div className="card-body">
					<h2 className="text-3xl text-center">Update User!</h2>
					<form onSubmit={handleUpdateUser}>
						<fieldset className="fieldset">
							<label className="label">Name</label>
							<input
								type="text"
								className="input outline-none"
								defaultValue={user.name}
								name="name"
							/>
							<label className="label">Email</label>
							<input
								type="email"
								className="input outline-none"
								defaultValue={user.email}
								name="email"
							/>
							<button className="btn btn-neutral mt-4">
								Update User
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateUser;
