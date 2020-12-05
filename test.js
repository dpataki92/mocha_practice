let expect = require('chai').expect;

let name = 'React Quickly'
let url = ['http://reactquickly.co', 'https://www.manning.com/books/react-quickly']

const addNums = (a,b) => {
    return a+b;
}

let obj = {
    "firstProp": 1,
    "secondProp": 2
}


describe('name and url', function() {
    it('must match the values', function(done){
      expect(name).to.be.a('string')
      expect(name).to.equal('React Quickly')
      expect(url).to.have.length(2)
      expect(url).to.have.deep.property('[1]', 'https://www.manning.com/books/react-quickly')
        .with.length(43)
      done()
    })
  })

describe('function and object', function() {
    it('must return the correct result and properties', function(done) {
        let testAddition = addNums(10, 90);
        expect(testAddition).to.equal(100);
        expect(Object.keys(obj)).to.have.length(2);
        expect(obj).to.have.deep.property('firstProp', 1);
        done()
    })
})