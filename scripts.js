/* Add your JavaScript to this file */
window.onload = function(){
    var myForm = document.querySelector("form");
    

    myForm.addEventListener('submit', function (ele) {
    console.log('form submitted');
    ele.preventDefault();

    
    var msg = document.getElementsByClassName("message")[0]

    if((document.getElementById("email").value == "")){
        msg.textContent= "Please enter a valid address"
        return false;
    }
    else{
        msg.textContent= "Thank you! Your email address" + " "+ email.value
        return true;
    }
        
    });
   
}


