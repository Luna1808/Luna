import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./page/Home";
import Formulario from "./page/Formulario";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Home />
        <Formulario></Formulario>
    </StrictMode>
);
