import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
	const user = useLoaderData();
	const navigate = useNavigate();
	return (
		<>
			<section>
				<div className="flex items-center gap-5">
					<img
						className="w-40 h-40 rounded-full"
						src="https://i.ibb.co.com/1GHn519F/user-one.png"
						alt="User Image Static"
					/>
					<div>
						<h3 className="font-semibold text-[35px]">
							{user.name}
						</h3>
						<p>{user.email}</p>
					</div>
				</div>
				<div className="mt-8 text-center">
					<button
						onClick={() => navigate(-1)}
						className="btn btn-neutral"
					>
						Back
					</button>
				</div>
			</section>
		</>
	);
};

export default UserDetails;
