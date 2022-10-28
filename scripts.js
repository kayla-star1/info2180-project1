/* Add your JavaScript to this file */
windows.onload = function(){
    var myForm = document.querySelector(#form);

    myForm.addEventListener('submit', function (ele) {
        console.log('form submitted');
        var valFail =false;

        var email = document.querySelector('#email');

        if(!isValidEmail(email.value.trim())){
            valFail= true;
            displayMessage(email, valFail);
        }
    });

        function isValidEmail(emailAddress) {
            return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(emailAddress);
          }
        function displayMessage(email, valFail){
            let msg= document.getElementById("message");
            if (valFail == true){
                msg.textContent = "Please enter a valid address."
            }
            else{
                msg.textContent= "Thank you! Your email address"+ email
            }
           
        }

   
}


