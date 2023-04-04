document.addEventListener('DOMContentLoaded',(loaded)=>{
console.log('Document loaded');

});


//jquery oh baby

$(document).ready(function(){
    $(function(){
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });

});
