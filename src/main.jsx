import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./LayOuts/MainLayout";
import Home from "./components/Home";
import AddUser from "./components/AddUser";

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
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
