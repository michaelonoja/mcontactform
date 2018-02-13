// Initialize Firebase
var config = {
  apiKey: "AIzaSyAjaRdRx_28F-DcAhzaus2Jx8F2zshf-AE",
  authDomain: "contactform-facbc.firebaseapp.com",
  databaseURL: "https://contactform-facbc.firebaseio.com",
  projectId: "contactform-facbc",
  storageBucket: "",
  messagingSenderId: "500924846921"
};
firebase.initializeApp(config);

//firebase initialization
var msgref=firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();
//Get Values
  var name    = getInputVal('name');
  var company = getInputVal('company');
  var email   = getInputVal('email');
  var phone   = getInputVal('phone');
  var message = getInputVal('message');
  
  //save message
  saveMessage(name,company,email,phone,message);
  //show alert
  document.querySelector('.alert').style.display='block';
  //setting the timeout
  setTimeout(function(){
    document.querySelector('.alert').style.display='none';
  },3000);
  document.getElementById('contactForm').reset();
}
  // Function to get form values
function getInputVal(id){
return document.getElementById(id).value;
}

function saveMessage(name,company,email,phone,message){
  var newMessageRef = msgref.push();
  newMessageRef.set({
    name:name,
    company:company,
    email:email,
    phone:phone,
    message:message
  })
}

 