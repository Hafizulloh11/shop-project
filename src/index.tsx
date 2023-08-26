import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Provider } from "react-redux";
import { store } from "./app";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<Provider store={store}>
	<MantineProvider withNormalizeCSS>
		<Routes />
  <Notifications position="top-right"/>
	</MantineProvider>
	</Provider>
);
