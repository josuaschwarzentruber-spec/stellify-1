import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Splash-Screen verstecken sobald React gemountet ist
if (window._hsl) window._hsl();
