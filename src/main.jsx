import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./LayOuts/MainLayout";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import UpdateUser from "./components/UpdateUser";

const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "add-user",
				Component: AddUser,
			},
			{
				path: "users",
				loader: () => fetch("http://localhost:3000/users"),
				Component: Users,
			},
			{
				path: "user-details/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:3000/users/${params.id}`),
				Component: UserDetails,
			},
			{
				path: "update-user/:id",
				loader: ({ params }) =>
					fetch(`http://localhost:3000/users/${params.id}`),
				Component: UpdateUser,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
