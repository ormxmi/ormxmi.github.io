let lines = document.getElementsByClassName("lines");
let width = window.innerWidth;
let height = window.innerHeight;
document.getElementsByClassName("big-lines-container")[0].style.height = height+"px";
document.getElementsByClassName("who-section")[0].style.top = height + "px";
let words = document.getElementsByClassName("span-home");
let colors = ['rgba(244, 185, 66,0.7)','rgba(65, 83, 244,0.7)','rgba(65, 244, 106,0.7)'];
let scrollCount = 0;let lastVerticalPos = 0;let opacity = 0;let startUpdatingOpacity = false;


for(let i = 0; i<lines.length; i++){
    lines[i].addEventListener("mousemove",()=>{
        lines[i].style.marginLeft = "100px"; 
        setTimeout(()=>{
          
            lines[i].style.marginLeft = "0px"; 
           
        },2000)
    })
}
let lastWordSpanId = -1,lastColorsId=-1,wordSpanId,colorSpanId;
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
  if(n==1)scrollToWho();
}
function scrollToWho(){

  window.scrollTo({
    top: height,
    behavior: 'smooth'
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
document.body.addEventListener("touchmove", (e)=>{
  if(!startUpdatingOpacity){
    if(window.pageYOffset>0){
      scrollToWho();
    }
  }
});

/* window.onscroll = function (e) {

      var vertical_position = 0;
      
      if (pageYOffset)//usual
        vertical_position = pageYOffset;
      else if (document.documentElement.clientHeight)//ie
        vertical_position = document.documentElement.scrollTop;
      else if (document.body)//ie quirks
        vertical_position = document.body.scrollTop;


      if(vertical_position>lastVerticalPos)scrollCount++;
      if(scrollCount==1) scrollToWho();
     lastVerticalPos = vertical_position;
     if(vertical_position<200){
      document.getElementsByClassName("lines-container")[0].style.transform = "rotate(-3deg) translateX("+(vertical_position)+"px)";  
     }
}
*/
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

// projects below
if(pageYOffset==height){

}
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
////////////////////////////////////
if(width<=900){
  document.getElementsByClassName("who-section")[0].addEventListener('touchmove', function(e) {
   if(opacity<1)e.preventDefault();
    document.getElementsByClassName("vertical-line-who-section")[0].style.transform = "translateX("+(e.touches[0].clientX)+"px)";
  }, false);
  
  document.getElementsByClassName("who-section")[0].addEventListener("touchmove",(e)=>{
    if(opacity<1) e.preventDefault();
  
    if(startUpdatingOpacity){
      if(opacity<1){
      opacity+=0.005;
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
}
///////////////////////////////////////////////////////