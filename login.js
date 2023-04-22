/*****************  Login page validations ***************************/

const form = document.getElementById('login-form')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const usernameError = document.getElementById('username-error')
const passwordError = document.getElementById('password-error')
const loginError = document.getElementById('login-error')
const loginContainer = document.querySelector('.login-container')
const results = document.querySelector('.results')
const loginDiv = document.getElementById('login-div')

results.classList.add('notVisible')
loginContainer.classList.add('isVisible')

// define array of users
const users = [
  {
    username: 'user1',
    password: 'password1',
  },
  {
    username: 'user2',
    password: 'password2',
  },
  {
    username: 'user3',
    password: 'password3',
  },
]

form.addEventListener('submit', function (event) {
  event.preventDefault() // prevent the form from submitting

  // reset error messages
  usernameError.textContent = ''
  passwordError.textContent = ''

  const username = usernameInput.value.trim()
  const password = passwordInput.value.trim()

  // validate the username and password
  const user = users.find(
    (u) => u.username === username && u.password === password
  )
  if (username === '') {
    usernameError.textContent = 'Please enter a username.'
  } else if (password === '') {
    passwordError.textContent = 'Please enter a password.'
  } else if (!user) {
    loginError.textContent = 'Invalid username or password. Please try again.'
  } else {
    console.log('Logged in')

    loginContainer.classList.add('notVisible')
    loginDiv.classList.remove('login-container')

    results.classList.remove('notVisible')
    results.classList.add('isVisible')
  }
})
