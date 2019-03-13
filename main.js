let lines = document.getElementsByClassName("lines");
let width = window.innerWidth;
let height = window.innerHeight;
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

function scrollToWho(){
  window.scrollTo({
    top: height+50,
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

window.onscroll = function (e) {
    

      var vertical_position = 0;
      
      if (pageYOffset)//usual
        vertical_position = pageYOffset;
      else if (document.documentElement.clientHeight)//ie
        vertical_position = document.documentElement.scrollTop;
      else if (document.body)//ie quirks
        vertical_position = document.body.scrollTop;


      if(vertical_position>lastVerticalPos)scrollCount++;
      if(scrollCount==13) scrollToWho();
     lastVerticalPos = vertical_position;
     if(vertical_position<200){
      document.getElementsByClassName("lines-container")[0].style.transform = "rotate(-3deg) translateX("+(vertical_position)+"px)";  
     }
     

  }
  document.getElementsByClassName("who-section")[0].addEventListener("mousemove",(e)=>{
    if(width<600) return;

    
      document.getElementsByClassName("vertical-line-who-section")[0].style.transform = "translateX("+(e.clientX)+"px)";
      if(startUpdatingOpacity){
      if(opacity<1){opacity+=0.0035;
      document.getElementsByClassName("about-me")[0].style.opacity = opacity.toString();
      document.getElementsByClassName("circle")[0].style.opacity = opacity.toString();
      document.getElementsByClassName("circle")[1].style.opacity = opacity.toString();
      }
  }
  })
document.body.addEventListener("mousemove",(e)=>{
  if(width<600) return;
    document.getElementsByClassName("header-inner-name")[0].style.transform = "rotate(-2deg) translate("+e.clientX/50+"px, "+e.clientY/70+"px)";
})