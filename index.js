const inquirer = require('inquirer');

function promptUser() {
  return inquirer.prompt([
    {
      name: 'text',
      message: 'Enter the text (up to three characters):',
      validate: function (value) {
        // Ensure the input is valid and contains up to three characters
        return value.length <= 3 ? true : 'Please enter up to three characters.';
      }
    },
    {
      name: 'textColor',
      message: 'Enter the text color:'
    },
    {
      name: 'shape',
      type: 'list',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square']
    },
    {
      name: 'shapeColor',
      message: 'Enter the shape color:'
    }
  ]);
}

promptUser()
  .then(answers => {
    // Continue with the next steps
  })
  .catch(error => {
    console.error(error);
  });

