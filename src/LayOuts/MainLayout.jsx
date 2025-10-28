import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
	return (
		<>
			<div className="flex flex-col min-h-screen">
				<div>
					<Header />
				</div>
				<div className="grow flex items-center justify-center">
					<Outlet />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default MainLayout;
