window.onload = function(){
    validationForm();
};

function validationForm() {
   
  const regForm = document.getElementsByClassName('reg-form')  
  const fName = document.getElementById('reg-fname')
  const lName = document.getElementById('reg-lname')
  const userName = document.getElementById('username')
  const password = document.getElementById('password')
  const repassword = document.getElementById('repassword')
  const errorElement = document.getElementById
  regForm.addEventListener('submit', (e) => {
      let messages = []
      if (regForm.value === ' ' || reg-fname.value == null){
         messages.push('Name is required') 
      }
      
      if (messages.length > 0){
         er.preventDefault() 
      }
      
      
  })
    
}