import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT =  3030;

// Middleware
app.use(cors());
app.use(express.json());

// 📂 Définir le dossier du frontend
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "dist")));

// 🚀 Servir index.html pour toutes les routes inconnues (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur sur http://localhost:${PORT}`);
});
