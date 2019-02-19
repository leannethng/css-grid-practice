window.onscroll = function() {
    
    if (document.documentElement.clientWidth > 600) {    
        scrollFunction();
    }
};


// function scrollFunction() {
// if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
//     document.getElementById("header").style.height = "50px";
//     document.getElementById("header-text").style.fontSize = "1rem";
//     // document.getElementById("container").style.paddingTop = "150px";

// } else {
//     document.getElementById("header").style.height = "200px";
//     document.getElementById("header-text").style.fontSize = "3rem";
//     // document.getElementById("container").style.paddingTop = "200px";
// }
// } 


//try querySelector -----  document.querySelector('#demo-id');


function scrollFunction() {
    if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190 ) {
        document.getElementById("navbar").style.position = "fixed";
        // document.getElementById("header-text").style.fontSize = "1rem";
        // document.getElementById("container").style.paddingTop = "150px";
    
    } else {
        document.getElementById("navbar").style.position = "inherit";
        // document.getElementById("header-text").style.fontSize = "3rem";
        // document.getElementById("container").style.paddingTop = "200px";
    }
    } 