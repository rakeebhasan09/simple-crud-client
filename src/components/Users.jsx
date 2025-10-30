import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { IoMdEye } from "react-icons/io";
import { Link, useLoaderData } from "react-router";

const Users = () => {
	const initialUsers = useLoaderData();
	const [users, setUsers] = useState(initialUsers);

	// Delete User
	const handleDeleteUser = (id) => {
		fetch(`http://localhost:3000/users/${id}`, {
			method: "delete",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount) {
					const remainingUsers = users.filter(
						(user) => user._id !== id
					);
					setUsers(remainingUsers);
				}
			});
	};

	return (
		<div className="container py-10!">
			<h2 className="mb-4 text-center">Total Users : {users.length}</h2>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Serial</th>
							<th>Name</th>
							<th>Email</th>
							<th className="text-center w-40">Action</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{users.map((user, idx) => (
							<tr key={user._id}>
								<th>
									{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
								</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td className="flex items-center justify-center gap-2 w-40">
									<Link
										to={`/user-details/${user._id}`}
										className="bg-green-700 h-9 px-2 flex items-center justify-center rounded cursor-pointer"
									>
										<IoMdEye className="text-[22px] text-white" />
									</Link>
									<Link
										to={`/update-user/${user._id}`}
										className="bg-[#DDA000] h-9 px-2 flex items-center justify-center rounded cursor-pointer"
									>
										<FaPen className="text-[20px] text-white" />
									</Link>
									<button
										onClick={() =>
											handleDeleteUser(user._id)
										}
										className="bg-red-500 h-9 px-2 rounded cursor-pointer"
									>
										<ImBin2 className="text-[20px] text-white" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
