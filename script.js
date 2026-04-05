const codes = document.querySelectorAll('.code');

// focus first input on load
codes[0].focus();

codes.forEach((code, idx) => {

  // typing forward
  code.addEventListener('input', (e) => {
    const value = e.target.value;

    // allow only one character
    if (value.length > 1) {
      e.target.value = value.slice(0, 1);
    }

    if (value && idx < codes.length - 1) {
      codes[idx + 1].focus();
    }
  });

  // backspace handling
  code.addEventListener('keydown', (e) => {
    if (e.key === "Backspace") {
      
      if (code.value === "" && idx > 0) {
        codes[idx - 1].focus();
      }
    }
  });

});