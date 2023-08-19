// Step 1: Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step 2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // Step 3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // Danger: DO NOT VERIFY email password on the client side
    // step 4: verify email and password
    if(email === 'shoabur.rahman.chishty@g.bracu.ac.bd' && password === 'abcd'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Bhai password vule gesen? Taka pathan password pathiye dicchi');
    }
})