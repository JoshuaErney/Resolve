document.getElementById('themeSwitch').addEventListener('change', function(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });
  