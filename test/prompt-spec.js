var inquirer = require('inquirer');
var bddStdin = require('..');
var questions = [{
    type: 'input',
    name: 'answer_one',
    message: 'question one?',
    default: function () {
      return '1'
    }
  }, {
    type: 'input',
    name: 'answer_two',
    message: 'question two?'
  }, {
    type: 'input',
    name: 'answer_three',
    message: 'question three?'
  }
]

describe('prompt from inquirer', function () {
  it('asks one question', function () {
    bddStdin('one');
    return inquirer.prompt([questions[0]])
      .then(function (answers) {
        var response = answers['answer_one']
        console.assert(response === 'one', 'received response ' + response);
      });
  });

  it('asks two questions', function () {
    bddStdin('one', 'two');
    return inquirer.prompt([questions[0], questions[1]])
      .then(function (answers) {
        var response = answers['answer_one']
        console.assert(response === 'one', 'received response ' + response);
        response = answers['answer_two']
        console.assert(response === 'two', 'received response ' + response);
      });
  });

  it('asks three questions', function () {
    bddStdin('one', 'two', 'three');
    return inquirer.prompt(questions)
      .then(function (answers) {
        console.log('answers', answers)
        var response = answers['answer_one']
        console.assert(response === 'one', 'received response ' + response);
        response = answers['answer_two']
        console.assert(response === 'two', 'received response ' + response);
        response = answers['answer_three']
        console.assert(response === 'three', 'received response ' + response);
      });
  });
});
