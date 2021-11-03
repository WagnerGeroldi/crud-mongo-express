function index(req, res) {
  res.render("index", {
    title: "Início",
  });
}

module.exports = {
    index

}