const list = (req, res) => {
  res.render('tabuada/list')
}

const table = (req, res) => {
  res.render('tabuada/table', {
    num: req.params.num
  })
}

module.exports = {
  list,
  table,
}
