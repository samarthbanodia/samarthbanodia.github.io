// Dark/Light Mode Toggle
// const themeToggle = document.getElementById('theme-switch');
const body = document.body;

var themeToggle = document.getElementById('theme-switch__checkbox').checked;



var checkbox = document.getElementById('theme-switch__checkbox');

checkbox.addEventListener('change', function() {
  body.classList.toggle('dark');

  if (this.checked) {
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }
});


themeToggle.addEventListener( () => {
  body.classList.toggle('dark');
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('dark') || themeToggle == 'true' ) {
    console.log('dark modeeeee')
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});
