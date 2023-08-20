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

function generateSVGCode(text, textColor, shape, shapeColor) {
  // Generate the SVG code based on the user's input
  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <${shape} fill="${shapeColor}">
        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
      </${shape}>
    </svg>
  `;
}

const fs = require('fs');

function saveSVGFile(svgCode) {
  fs.writeFileSync('logo.svg', svgCode);
}

function printOutput() {
  console.log('Generated logo.svg');
}
