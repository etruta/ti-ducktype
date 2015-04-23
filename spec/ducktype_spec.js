var ducktype = require('ducktype');

var person = ducktype({
  name: String,
  age: Number
});

describe('ducktype module: Test Basic types', function(){
	it("Number test 2.3: should return true", function () {
      expect(ducktype.number.test(2.3)).toEqual(true);
  });
  it("Number test 'hi': should return false", function () {
      expect(ducktype.number.test('hi')).toEqual(false);
  });
});

describe('ducktype module: Test Structured objects', function(){
  it("Person John, 34: should return true", function () {
      expect(person.test({name: 'John', age: 34})).toEqual(true);
  });
  it("Person John: should return false", function () {
      expect(person.test({name: 'John'})).toEqual(false);
  });
});