// Importer les outils react
import ReactDOM from "react-dom";

// Importer notre premier composant App
import{ App } from "./App";

// Cibler la div dont l'id est root
const divRoot = document.getElementById("root");

// créer un noeud racine react à partir de la div root -> dom virtuel
const reactRoot = ReactDOM.createRoot(divRoot);

// Injecter notre premier composant le noeud racine
reactRoot.render(<App />);

