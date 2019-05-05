
let width = window.innerWidth;
let height = window.innerHeight;
document.getElementsByClassName("big-lines-container")[0].style.height = height+"px";
let lastWordSpanId = -1,lastColorsId=-1,wordSpanId,colorSpanId;
let hasMouse = false;
var touchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
let notScrolledToWho = true, notScrolledToProjects = true,notScrolledToContact = true;
let words = document.getElementsByClassName("span-home");
let colors = ['rgba(244, 185, 66,0.7)','rgba(65, 83, 244,0.7)','rgba(65, 244, 106,0.7)'];
let scrollCount = 0;let lastVerticalPos = 0;let opacity = 0;let startUpdatingOpacity = false;
let currentlyScrolling = false;
let bodyRect = document.body.getBoundingClientRect();
let moving = false, flashedLetters = false;

if(!touchDevice){

  window.onscroll = function (e) {
   onScrollFn(e.target);
  }
}
function onScrollFn(el){

  
  if(currentlyScrolling) return;
  var vertical_position = 0;
  if (pageYOffset)//usual
    vertical_position = pageYOffset;
  else if (document.documentElement.clientHeight)//ie
    vertical_position = document.documentElement.scrollTop;
  else if (document.body)//ie quirks
    vertical_position = document.body.scrollTop;
 if(vertical_position>=200+window.innerHeight*2&&(notScrolledToContact)){
  notScrolledToContact=false;
  moving=true;
  setTimeout(()=>{
    moving=false;
  },1000)
  scrollToContact();
 
 }
 else if(vertical_position>=300+window.innerHeight&&(notScrolledToProjects)){
  notScrolledToProjects=false;
  moving=true;
  setTimeout(()=>{
    moving=false;
  },1000)
  scrollToProjects();

 }
 else if(vertical_position>=100&&(notScrolledToWho)){
  notScrolledToWho = false;
  moving=true;
  setTimeout(()=>{
    
    moving=false;
  },1000)
  scrollToWho();
 }
 else if(vertical_position<100){
  document.getElementsByClassName("lines-container")[0].style.transform = "rotate(-3deg) translateX("+(vertical_position)+"px)";  
 }

}


  document.body.addEventListener('touchmove',(e)=>{
    if(!moving){
      onScrollFn(e);
    }
  });


setInterval(()=>{
  wordSpanId = Math.floor(Math.random() * words.length);
  while(wordSpanId==lastWordSpanId) wordSpanId = Math.floor(Math.random() * words.length);
  lastWordSpanId = wordSpanId
  while(lastColorsId==colorSpanId) colorSpanId =  Math.floor(Math.random() * colors.length);
  lastColorsId=colorSpanId;
  words[wordSpanId].style.transitionDuration = "0.2s";
  words[wordSpanId].style.color = colors[colorSpanId];
  
  setTimeout(()=>{
    words[wordSpanId].style.color = "rgba(255, 255, 255, 0.7)";
  },2000)
},2100)

function scrollBody(n){
  currentlyScrolling = true;
  if(n==1)scrollToWho();
  if(n==2)scrollToProjects();
  if(n==3)scrollToContact();
  setTimeout(()=>{
    currentlyScrolling = false;
  },1500)
}
function scrollToContact(){
  $(function(){
    $([document.documentElement, document.body]).stop().animate({
    scrollTop: $(".contact-section").offset().top
    }, 1000);
  });
  setTimeout(scrolledToContactFn,1100);
  

}
function scrollToProjects(){
  

  $(function(){
    $([document.documentElement, document.body]).stop().animate({
    scrollTop: $(".projects-section").offset().top
    }, 1000);
  });
}

function scrollToWho(){

  $(function(){
    $([document.documentElement, document.body]).stop().animate({
    scrollTop: $(".who-section").offset().top
    }, 1000);
  });
  
  

  setTimeout(flashLetters,600);
  setTimeout(()=>{
    document.getElementsByClassName("begin-swiping-info")[0].style.opacity = 1;
    setTimeout((event)=>{
      document.getElementsByClassName("begin-swiping-info")[0].style.opacity = 0;
      startUpdatingOpacity = true;
      document.getElementsByClassName("vertical-line-who-section")[0].style.opacity = 1;
     
    },1000)
    
  },1700)
}
function flashLetters(){
  if(flashedLetters) return;
  flashLetters = true;
  let letters = document.getElementsByClassName("who-letter");
  let i = 0,v = 0;
  var flashing = setInterval(()=>{
    letters[i].style.display = "block";
    setTimeout(()=>{
      letters[v].style.display = "none";
      v++;
    },145)
    i++;
    if(i>=3) clearInterval(flashing);
  },155)
 
}
function previewProject(projectId, el){
  switch(projectId){
    case 0: document.getElementsByClassName("image-preview")[0].style.backgroundImage = "url('img/showcase/chess-preview.gif')";
            document.getElementsByClassName("projects-section")[0].style.backgroundImage = "url('img/showcase/chess-preview.gif')";
    break;
    case 1: document.getElementsByClassName("image-preview")[0].style.backgroundImage = "url('img/showcase/home-preview.gif')";
            document.getElementsByClassName("projects-section")[0].style.backgroundImage = "url('img/showcase/home-preview.gif')";
    break;
    case 2: document.getElementsByClassName("image-preview")[0].style.backgroundImage = "url('img/showcase/winxp-preview.gif')";
            document.getElementsByClassName("projects-section")[0].style.backgroundImage = "url('img/showcase/winxp-preview.gif')";
    break;
    case 3: document.getElementsByClassName("image-preview")[0].style.backgroundImage = "url('img/showcase/art-preview.gif')";
            document.getElementsByClassName("projects-section")[0].style.backgroundImage = "url('img/showcase/art-preview.gif')";
    break;
  }
  for(var i = 0; i<document.getElementsByClassName("projects-inner-heading").length; i++){
    if(document.getElementsByClassName("projects-inner-heading")[i].id==el.id){
      document.getElementsByClassName("projects-inner-heading")[i].style.color = "white";
      document.getElementsByClassName("projects-inner-heading")[i].style.backgroundColor = "rgba(0,0,111,1)";
      
      document.getElementById("image-preview-inner-cover-anchor").href = "https://ormxmi.github.io/"+el.id+"/";
      if(el.id == "annamaria") document.getElementById("image-preview-inner-cover-anchor").href = "https://an2a.me";
    }
    else{
      document.getElementsByClassName("projects-inner-heading")[i].style.color = "rgba(255,255,255,0.7)";
      document.getElementsByClassName("projects-inner-heading")[i].style.backgroundColor = "unset";
    }
  }
}


  document.getElementsByClassName("who-section")[0].addEventListener("mousemove",(e)=>{
    if(width<600) return;

    
    if(opacity<1) document.getElementsByClassName("vertical-line-who-section")[0].style.transform = "translateX("+(e.clientX)+"px)";
      if(startUpdatingOpacity){
      if(opacity<1){
      opacity+=0.0035;
      document.getElementsByClassName("about-me")[0].style.opacity = opacity.toString();
      document.getElementsByClassName("circle")[0].style.opacity = opacity.toString();
      document.getElementsByClassName("circle")[1].style.opacity = opacity.toString();
      }
      else {
        document.getElementsByClassName("vertical-line-who-section")[0].style.transition = "1s ease-in-out";
        document.getElementsByClassName("who-section-page-number")[0].style.backgroundColor = "#fff";
        console.log("translateX("+width/4+"px)");
        document.getElementsByClassName("vertical-line-who-section")[0].style.transform = "translateX("+width/4+"px)";
      }
  }
  })
document.body.addEventListener("mousemove",(e)=>{
  if(width<600) return;
    document.getElementsByClassName("header-inner-name")[0].style.transform = "rotate(-2deg) translate("+e.clientX/50+"px, "+e.clientY/70+"px)";
})

// projects section below


let whiteFontH1 = false;
setInterval(()=>{
  if(whiteFontH1){
    document.getElementsByClassName("projects-section-heading")[0].style.color = "#fff";
    whiteFontH1 = false;
  }
  else{
    document.getElementsByClassName("projects-section-heading")[0].style.color = "#000";
    whiteFontH1 = true;
  }
},1000)

let projectNamesContainerWidth = 0;
for(var i = 0 ; i<document.getElementsByClassName("projects-inner-heading").length; i++){
  projectNamesContainerWidth+=document.getElementsByClassName("projects-inner-heading")[i].offsetWidth;
  document.getElementsByClassName("projects-names-container")[0].style.minWidth = projectNamesContainerWidth+"px";
}

document.getElementsByClassName("projects-inner-heading")[0].style.color = "white";
document.getElementsByClassName("projects-inner-heading")[0].style.backgroundColor = "rgba(0,0,111,1)";

document.getElementsByClassName("image-preview")[0].addEventListener("mouseenter",()=>{
  document.getElementsByClassName("image-preview-inner-cover")[0].style.opacity = "1";
  setTimeout(()=>{
    document.getElementById("image-preview-inner-cover-anchor").style.display = "inline-block";
  },100)
  
})
document.getElementsByClassName("image-preview")[0].addEventListener("mouseleave",()=>{
  document.getElementsByClassName("image-preview-inner-cover")[0].style.opacity = "0";
  document.getElementById("image-preview-inner-cover-anchor").style.display = "none";
})

// contact section below


function scrolledToContactFn(){
  document.getElementsByClassName("contact-header")[0].style.opacity = "1";
  document.getElementsByClassName("contact-header")[0].style.padding = "0px 11px";
  document.getElementsByClassName("contact-header")[0].style.filter = " hue-rotate(180deg)";
  
}
////////////////////////////////////

  document.getElementsByClassName("who-section")[0].addEventListener('touchmove', function(e) {
   if(opacity<1)e.preventDefault();
    document.getElementsByClassName("vertical-line-who-section")[0].style.transform = "translateX("+(e.touches[0].clientX)+"px)";
   
  }, false);
  
  document.getElementsByClassName("who-section")[0].addEventListener("touchmove",(e)=>{
    if(opacity<1) e.preventDefault();
  
    if(startUpdatingOpacity){
      if(opacity<1){
      opacity+=0.015;
      document.getElementsByClassName("about-me")[0].style.opacity = opacity.toString();
      document.getElementsByClassName("circle")[0].style.opacity = opacity.toString();
      document.getElementsByClassName("circle")[1].style.opacity = opacity.toString();
      }
      else if(opacity>=1){
        document.getElementsByClassName("vertical-line-who-section")[0].style.transition = "1s ease-in-out";

        document.getElementsByClassName("vertical-line-who-section")[0].style.transform = "translateX("+width/4+"px)";
      }
  }
  })

/////////////////////////////////////////////////////
