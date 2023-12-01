

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}




    
// Check if dark mode is enabled in local storage
const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

// Apply dark mode styles if enabled
if (darkModeEnabled) {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode when the button is clicked
let darkMode = document.getElementById('dark-mode-toggle')
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save the user's preference in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkMode.textContent = darkMode.textContent ==  "Dark" ? "Light" : "Dark";
    } 
    
    else {
        localStorage.setItem('darkMode', 'disabled');
    }
});






let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


