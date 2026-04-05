//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Focus first input on load
codes[0].focus();

codes.forEach((code, idx) => {

  // Handle typing
  code.addEventListener('input', (e) => {
    const value = e.target.value;

    // Allow only one digit
    if (value.length > 1) {
      e.target.value = value.slice(0, 1);
    }

    // Move to next input
    if (value && idx < codes.length - 1) {
      codes[idx + 1].focus();
    }
  });

  // Handle backspace
  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      
      if (code.value === '' && idx > 0) {
        codes[idx - 1].focus();
      } else {
        code.value = '';
      }
    }
  });

});