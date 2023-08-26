import { BrowserRouter, Routes as BaseRoutes, Route, Navigate } from "react-router-dom";
import { Home, Product } from "../pages/home";
import { Cart } from "../pages/home/components";
interface RoutesProps {}

const Routes = (props: RoutesProps) => (
	<BrowserRouter>
		<BaseRoutes>
			<Route path="">
				<Route index element={<Home />} />
				<Route path="product" element={<Product/>} />
				<Route path="cart" element={<Cart/>} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>
		</BaseRoutes>
	</BrowserRouter>
);

export default Routes;
