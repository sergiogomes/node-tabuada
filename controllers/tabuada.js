const list = (req, res) => {
  const numbers = []
  for (let i = 0; i <= 100; i ++) {
    numbers.push(i)
  }
  res.render('tabuada/list', { numbers })
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
