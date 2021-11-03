const CustomersModel = require("../models/customers");

const { crypto } = require("../utils/password");

function index(req, res) {
    const { cadastro } = req.query;
  res.render("register", {
    title: "Registro de Clientes",
    cadastro,
  });
}

async function add(req, res) {
   
  const { name, age, email, password } = req.body;

  const passwordCrypto = await crypto(password);

  const register = new CustomersModel({
    name,
    age,
    email,
    password: passwordCrypto,
  });

  register.save();
  res.redirect("/register?cadastro=ok");
}


async function listUsers(req, res) {
  const users = await CustomersModel.find();

  res.render("list", {
    title: "Lista de Usuários",
    users,
  });
}

async function indexEdit(req, res) {

  const { id } = req.query

 const user = await CustomersModel.findById(id) 

  res.render('edit', {
    title: 'Editar Usuário',
    user,
  })
}

async function edit(req, res) {
  const { name, age, email } = req.body;

  const { id } = req.params

  const user = await CustomersModel.findById(id)

  user.name = name
  user.age = age
  user.email = email

  user.save()

  res.render('edit', {
    title: 'Editar Usuário',
    user,
    message: "Alterado com sucesso"
  })


}

module.exports = {
  index,
  add,
  listUsers,
  indexEdit,
  edit,
};
