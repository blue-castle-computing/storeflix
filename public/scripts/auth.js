// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user information
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user - asyncronous, returns a promise of a credential handled in .then
  // password > 6 chars. When signed up, the user can be seen in the firebase console authentication
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    // close the signup modal & reset form - get the id '#modal-signup from index.html modal id
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('user signed out');
  })
 });