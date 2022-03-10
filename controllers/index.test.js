const indexController = require('./index')
const sinon = require('sinon')

describe('index controller', () => {
  it('should render home', () => {
    const res ={
      render: function(){}
    }
    const mock = sinon.mock(res)
    mock.expects('render').once().withArgs('home')
    indexController.home({}, res)
  })
})
