const router = require("express").Router();

const CustomersController = require("../controllers/customers");
const IndexController = require("../controllers/index");

//rotaindex
router.get("/", IndexController.index);

//cadastrar registro
router.get("/register", CustomersController.index);
router.post("/register/add", CustomersController.add);

//listar usuarios
router.get('/list', CustomersController.listUsers)

//editar usuarios
router.get('/edit', CustomersController.indexEdit)
router.post('/edit/:id', CustomersController.edit)

//remover usuarios
router.get('/remove/:id', CustomersController.removeUser)

router.use((req, res) => {
  //pagina de erro 404
  res.send("Página não encontrada");
});

module.exports = router;
