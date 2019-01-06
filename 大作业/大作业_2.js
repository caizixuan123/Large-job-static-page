var j = 5;
var left = document.getElementById("second_img_4");
var right = document.getElementById("second_img_2");
var imgchlidren = document.getElementById("second_div_8").children;
var imglook = document.getElementById("second_img_5");
var imglookbig = document.getElementById("look_4");
var i = 0;
left.onclick = function(){
    imgchlidren[i].style.border="2px solid white";
    i++;
    if(i == imgchlidren.length){
        i = i%imgchlidren.length;
    }
    imgchlidren[i].style.border="2px solid #ff9003";
    imglook.src = "img/pp"+i+".jpeg";
    imglookbig.src = "img/pp"+i+".jpeg";
}
right.onclick = function(){
    imgchlidren[i].style.border="2px solid white";
    if(i == 0){
        i = imgchlidren.length-1;
    }
    else{
        i--;
    }
    imgchlidren[i].style.border="2px solid #ff9003";
    imglook.src = "img/pp"+i+".jpeg";
    imglookbig.src = "img/pp"+i+".jpeg";
}
var ml_1 = document.getElementById("second_button_1");
var ml_2 = document.getElementById("second_button_5");
var p_9 = document.getElementById("second_p_9");
ml_1.onclick = function(){
    ml_2.style.border = "1px solid white";
    // ml_2.style.background.image.url = "";
    ml_2.style.backgroundImage = "url()";
    ml_1.style.border = "1px solid #ff0655";
    ml_1.style.backgroundImage = "url('img/duigou.png')";
    p_9.innerText = '"150ml"';
}
ml_2.onclick = function(){
    ml_1.style.border = "1px solid white";
    ml_1.style.backgroundImage = "url()";
    ml_2.style.border = "1px solid #ff0655";
    ml_2.style.backgroundImage = "url('img/duigou.png')";
    p_9.innerText = '"200ml"'
}
var button_1 = document.getElementById("second_button_2");
var button_2 = document.getElementById("second_button_6");
var input = document.getElementById("second_p_7");
var temp = 1;
button_1.onclick = function(){
    if(temp == 1){
        alert("不能再减了");
    }
    else{
        temp--;
        input.value = temp;
    }
}

button_2.onclick = function(){
    if(temp == j){
        alert("不能再加了");
    }
    else{
        temp++;
        input.value = temp;
    }
}
var max_1 = document.getElementById("max_1");
var button_4 = document.getElementById("second_button_4");
var max = document.getElementById("max");
button_4.onclick = function(){
    max_1.style.display ="block";
    max.style.opacity = "0.5";
}
var fourth_button_1 = document.getElementById("fourth_button_1");
fourth_button_1.onclick = function(){
    max_1.style.display ="none"
    max.style.opacity = "1";
}


var look_1 = document.getElementById("look_1");
var look_2 = document.getElementById("look_2");
var box = document.getElementById("second");
var box_1 = document.getElementById("second_div_2");
var box_2 = document.getElementById("second_div_3");
var box_3 = document.getElementById("max");
var box_4 = document.getElementById("second_div_5");
var look_4 = document.getElementById("look_4");
look_3.onmouseover = function(){
    look_1.style.display = "block";
    look_2.style.display = "block";
}
look_3.onmouseout = function(){
    look_1.style.display = "none";
    look_2.style.display = "none";
}
look_3.onmousemove = function(ev){
    var scrollPos;  
    if (window.pageYOffset) {  
    scrollPos = window.pageYOffset; }  
    else if (document.compatMode && document.compatMode != 'BackCompat')  
    { scrollPos = document.documentElement.scrollTop; }  
    else if (document.body) { scrollPos = document.body.scrollTop; }  
    var oL=ev.clientX-box.offsetLeft-box_1.offsetLeft-box_2.offsetLeft-box_3.offsetLeft-box_4.offsetLeft-look_1.offsetWidth/2;
    var oT=ev.clientY+scrollPos-box.offsetTop-box_1.offsetTop-box_2.offsetTop-box_3.offsetTop-box_4.offsetTop-look_1.offsetHeight/2;
    var oMaxw=look_3.offsetWidth-look_1.offsetWidth;
    var oMaxh=look_3.offsetHeight-look_1.offsetHeight;
     
    oL=oL>oMaxw?oMaxw:oL<0?0:oL;
    oT=oT>oMaxh?oMaxh:oT<0?0:oT;
    look_1.style.left=oL+'px';
    look_1.style.top=oT+'px';


    var scale = look_4.offsetHeight/look_3.offsetHeight;
    look_4.style.left = -oL*scale+'px';
    look_4.style.top = -oT*scale+'px';
    
}


var box_a = document.getElementById("second_div_1").children;

box_a[0].onmouseover = function(){
    box_a[0].style.backgroundColor = 'red';
}
box_a[0].onmouseout = function(){
    box_a[0].style.backgroundColor = 'black';
}
box_a[1].onmouseover = function(){
    box_a[1].style.backgroundColor = 'red';
}
box_a[1].onmouseout = function(){
    box_a[1].style.backgroundColor = 'black';
}
box_a[2].onmouseover = function(){
    box_a[2].style.backgroundColor = 'red';
}
box_a[2].onmouseout = function(){
    box_a[2].style.backgroundColor = 'black';
}
box_a[3].onmouseover = function(){
    box_a[3].style.backgroundColor = 'red';
}
box_a[3].onmouseout = function(){
    box_a[3].style.backgroundColor = 'black';
}
box_a[3].onmouseover = function(){
    box_a[3].style.backgroundColor = 'red';
}
box_a[4].onmouseout = function(){
    box_a[4].style.backgroundColor = 'black';
}
box_a[4].onmouseover = function(){
    box_a[4].style.backgroundColor = 'red';
}
box_a[5].onmouseout = function(){
    box_a[5].style.backgroundColor = 'black';
}
box_a[5].onmouseover = function(){
    box_a[5].style.backgroundColor = 'red';
}
box_a[5].onmouseout = function(){
    box_a[5].style.backgroundColor = 'black';
}
box_a[6].onmouseover = function(){
    box_a[6].style.backgroundColor = 'red';
}
box_a[6].onmouseout = function(){
    box_a[6].style.backgroundColor = 'black';
}
box_a[7].onmouseover = function(){
    box_a[7].style.backgroundColor = 'red';
}
box_a[7].onmouseout = function(){
    box_a[7].style.backgroundColor = 'black';
}



