function closePopUp(){
  console.log("close");
  popup.setAttribute('class', 'hidden');
  
}

function scrollToElement(id) {
  const element = document.getElementById(id);
  
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

let btn = document.getElementById('menu-btn');
let menu= document.getElementById('menu');
console.log("--- btn ---" + btn);
console.log("--- btn menu---" + menu);
if (btn) {
btn.addEventListener('click', navToggle);
console.log("-------YES btn-----------");
}
else console.log("---NO btn ---");

// toggle Mobile Menu
function navToggle(){
  console.log("-------------------------");
  btn.classList.toggle('open');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
}


const btnmob = document.getElementById('menu-btn-mobile');
const menumob= document.getElementById('menu-mobile');
console.log("--- btn MOB---" + btnmob);
console.log("--- btn menumob---" + menumob);
if (btnmob) {
btnmob.addEventListener('click', navToggleMob);
console.log("-------YES btn MOB-----------");
}
else console.log("---NO btn MOB---");

// toggle Mobile Menu
function navToggleMob(){
  console.log("--------vavToggleMob--------");
  btnmob.classList.toggle('open');
  menumob.classList.toggle('hidden');
  menumob.classList.toggle('flex');
}





//document.getElementById('sendEmailButton').addEventListener('click', function() 
function Getstart()
{
  var email = document.getElementById('email').value;
  console.log("email is: " + email);
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.value== "") {
    alertDiv.setAttribute('class', 'visible');
    return; 
  }
  else {
    alertDiv.setAttribute('class', 'hidden');
    popup.setAttribute('class', 'visible');
    
    console.log("email  valida");
    document.getElementById('email').value="";
    document.getElementById('telefono').value="";
    document.getElementById('first-name').value="";
    document.getElementById('last-name').value="";
    document.getElementById('about').value="";    
    scrollToElement("hero")     ;
  }
}





