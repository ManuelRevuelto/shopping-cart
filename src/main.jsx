import { createRoot } from "react-dom/client";
import App from "./App";
import './style.css'
import { FiltersProvider } from "./context/filters";

const root = createRoot(document.getElementById("app"));
root.render(
    <FiltersProvider>
        <App />
    </FiltersProvider>
);