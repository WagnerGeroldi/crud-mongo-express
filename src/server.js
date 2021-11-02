const express = require("express");
const path = require("path");
const app = express();

//definindo o template
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')) // para encontrar dentro do src

//midleware para o server receber os dados do formulario
app.use(express.urlencoded({ extended: true }));

//gerar itens publicos
const publicFolder = path.join(__dirname, "public"); //public é a pasta
const expressPublic = express.static(publicFolder); // usar arquivos publicos
app.use(expressPublic);

//rotas

app.get("/", (req, res) => {
  res.render("index", {
    title: "Início",
  });
});

app.use((req, res) => {
  //pagina de erro 404
  res.send("Página não encontrada");
});

// server execute
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Servidor rodadando na porta ${port}`));
