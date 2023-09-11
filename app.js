var acc = document.getElementsByClassName("accordion1");
var i;

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });

    var acc1 = document.getElementsByClassName("accordion2");
    var j;

for(j = 0; j < acc1.length; j++){
    acc1[j].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });

    var acc2 = document.getElementsByClassName("accordion3");
    var k; 

    for(k = 0; j < acc2.length; k++){
    acc2[k].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
 }   
}}






