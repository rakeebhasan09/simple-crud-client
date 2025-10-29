const AddUser = () => {
	const handleAddUser = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const userInfo = { name, email };
		fetch("http://localhost:3000/users", {
			method: "post",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(userInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert("New User Added.");
					e.target.reset();
				}
			});
	};
	return (
		<div className="container">
			<div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
				<div className="card-body">
					<h2 className="text-3xl text-center">Add New User!</h2>
					<form onSubmit={handleAddUser}>
						<fieldset className="fieldset">
							<label className="label">Name</label>
							<input
								type="text"
								className="input outline-none"
								placeholder="Type Name"
								name="name"
							/>
							<label className="label">Email</label>
							<input
								type="email"
								className="input outline-none"
								placeholder="Type Email"
								name="email"
							/>
							<button className="btn btn-neutral mt-4">
								Add User
							</button>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddUser;
