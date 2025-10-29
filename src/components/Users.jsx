import { FaPen } from "react-icons/fa";
import { ImBin2 } from "react-icons/im";
import { IoMdEye } from "react-icons/io";
import { useLoaderData } from "react-router";

const Users = () => {
	const initialUsers = useLoaderData();

	return (
		<div className="container py-10!">
			<h2 className="mb-4 text-center">
				Total Users : {initialUsers.length}
			</h2>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Serial</th>
							<th>Name</th>
							<th>Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{initialUsers.map((user, idx) => (
							<tr key={user._id}>
								<th>
									{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
								</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td className="flex items-center gap-2 w-10">
									<button className="bg-green-700 h-9 px-2 rounded cursor-pointer">
										<IoMdEye className="text-[22px] text-white" />
									</button>
									<button className="bg-[#DDA000] h-9 px-2 rounded cursor-pointer">
										<FaPen className="text-[20px] text-white" />
									</button>
									<button className="bg-red-500 h-9 px-2 rounded cursor-pointer">
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
