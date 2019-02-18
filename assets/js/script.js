window.onscroll = function() {
    
    if (document.documentElement.clientWidth > 600) {    
        scrollFunction();
    }
};


function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
    document.getElementById("header").style.height = "30px";
    document.getElementById("header-text").style.fontSize = "1rem";
} else {
    document.getElementById("header").style.height = "200px";
    document.getElementById("header-text").style.fontSize = "1.8rem";
}
} 
