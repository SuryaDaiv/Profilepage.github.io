const introPara = document.getElementById('Intro');

introPara.addEventListener('click', updateName);

function updateName() {
    let userName = prompt("Please type your nama, so I can address properly. Thank you");
    introPara.textContent = "Welcome " + userName + " How are you doing. Below is the resume of Surya Veera Reddy, Thank you for visiting.";
}