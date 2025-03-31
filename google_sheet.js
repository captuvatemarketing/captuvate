const scriptURL = 'https://script.google.com/macros/s/AKfycbxYGpI8Gg2OV_pEMSNS4bD4mSJ7Tx4IK5kOYdHMkhbGTyiZE7-hq29B0U2eKFRCBYekJQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})