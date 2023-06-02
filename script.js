/** Implement a click function to which writes digits on calculator screen */

/** Implement a function which clears digits from calculator screen upon clicking AC button */

/** Implement a function which enters digit to screen upon pressing any number button and decimal point */

/** Implement a function for adding/subtracting/multiplying/dividin
}*/
function click(digit) {
  var screen = document.getElementById('screentext');
  var currentValue = screen.innerHTML;
  screen.innerHTML = currentValue === '0' ? digit : currentValue + digit;
}

function clearScreen() {
  var screen = document.getElementById('screen');
  screen.innerHTML = '0';
}
function click(digit) {
  var screen = document.getElementById('screen');
  var currentValue = screen.innerHTML;

  // Allow only one decimal point
  if (digit === '.' && currentValue.includes('.')) {
    return;
  }

  // Replace '0' or previous result with the entered digit
  if (currentValue === '0' || currentValue === 'NaN' || currentValue === 'Infinity') {
    screen.innerHTML = digit;
  } else {
    screen.innerHTML = currentValue + digit;
  }
}

function clearScreen() {
  var screen = document.getElementById('screen');
  screen.innerHTML = '0';
}

// Event listener for keyboard input
document.addEventListener('keydown', function(event) {
  var key = event.key;

  // Check if the pressed key is a digit or a decimal point
  if (!isNaN(key) || key === '.') {
    click(key);
  }
});
var calculation = '';

    function click(value) {
      var screen = document.getElementById('screen');
      calculation += value;
      screen.innerHTML = calculation;
    }

    function calculate() {
      var screen = document.getElementById('screen');
      var result;
      try {
        result = eval(calculation);
      } catch (error) {
        result = 'Error';
      }
      screen.innerHTML = result;
      calculation = result.toString();
    }

    function clearScreen() {
      var screen = document.getElementById('screen');
      screen.innerHTML = '0';
      calculation = '';
    }
  