const list = (req, res) => {
  const numbers = []
  for (let i = 0; i <= 100; i ++) {
    numbers.push(i)
  }
  res.render('tabuada/list', { numbers })
}

const table = (req, res) => {
  const multiplyTable = []
  const num = req.params.num
  for (let i = 0; i <= 100; i ++) {
    multiplyTable.push({
      num,
      i,
      result: num * i
    })
  }
  res.render('tabuada/table', {
    num: req.params.num,
    multiplyTable,
  })
}

module.exports = {
  list,
  table,
}
