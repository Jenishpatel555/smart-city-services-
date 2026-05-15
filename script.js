
function openLogin(){
    document.getElementById('loginModal').style.display='block';
}

function closeLogin(){
    document.getElementById('loginModal').style.display='none';
}

window.onclick=function(event){
    const modal=document.getElementById('loginModal');
    if(event.target===modal){
        closeLogin();
    }
}

document.getElementById('loginForm').addEventListener('submit',function(e){
    e.preventDefault();

    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    if(email==='admin@smartcity.com' && password==='smart123'){
        alert('Login Successful!');
        closeLogin();
    } else {
        alert('Invalid Credentials');
    }
});

document.getElementById('complaintForm').addEventListener('submit',function(e){
    e.preventDefault();
    alert('Complaint Registered Successfully!');
    this.reset();
});

document.getElementById('feedbackForm').addEventListener('submit',function(e){
    e.preventDefault();
    alert('Feedback Submitted!');
    this.reset();
});
