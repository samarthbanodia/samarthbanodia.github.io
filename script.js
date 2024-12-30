// Dark/Light Mode Toggle
// const themeToggle = document.getElementById('theme-switch');
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });

  const body = document.body;
  const checkbox = document.getElementById('theme-switch__checkbox');
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    checkbox.checked = true;
  }

  checkbox.addEventListener('change', function() {
    body.classList.toggle('dark');
    
    // Save theme preference
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    
    // Update favicon based on theme
    const favicon = document.querySelector("link[rel='icon']");
    if (body.classList.contains('dark')) {
      favicon.href = "icons8-oggy-dark.gif"; // Create a dark version of your favicon
    } else {
      favicon.href = "icons8-oggy.gif";
    }
  });
});
