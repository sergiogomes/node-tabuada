const tabuadaController = require('./tabuada')
const sinon = require('sinon')

describe('tabuada controller', () => {
  it('should render number list', () => {
    const numbers = []
    for (let i = 0; i <= 100; i ++) {
      numbers.push(i)
    }
    const res ={
      render: function(){}
    }
    const mock = sinon.mock(res)
    mock.expects('render').once().withArgs('tabuada/list', { numbers })
    tabuadaController.list({}, res)
  })

  it('should render multiplied table', () => {
    const multiplyTable = []
    const num = 10
    for (let i = 0; i <= 100; i ++) {
      multiplyTable.push({
        num,
        i,
        result: num * i
      })
    }
    const res ={
      render: function(){}
    }
    const mock = sinon.mock(res)
    mock.expects('render').once().withArgs('tabuada/table', {
      num,
      multiplyTable,
    })
    tabuadaController.table({ params: { num }}, res)
  })
})
