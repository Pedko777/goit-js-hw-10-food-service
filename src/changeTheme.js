const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchControl = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');

themeSwitchControl.addEventListener('change', themeChangeHandler);

function themeChangeHandler() {
  themeSwitchControl.checked
    ? localStorage.setItem('theme', Theme.DARK)
    : localStorage.setItem('theme', Theme.LIGHT);

  body.setAttribute('class', localStorage.getItem('theme'));
}

if (localStorage.getItem('theme') === Theme.DARK) {
  themeSwitchControl.checked = true;
  body.setAttribute('class', localStorage.getItem('theme', Theme.DARK));
}
