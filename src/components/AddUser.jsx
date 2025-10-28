const AddUser = () => {
	return (
		<div className="container">
			<div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
				<div className="card-body">
					<h2 className="text-3xl text-center">Add New User!</h2>
					<form>
						<fieldset className="fieldset">
							<label className="label">Name</label>
							<input
								type="text"
								className="input outline-none"
								placeholder="Type Name"
							/>
							<label className="label">Email</label>
							<input
								type="email"
								className="input outline-none"
								placeholder="Type Email"
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
