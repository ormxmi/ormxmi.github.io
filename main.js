let lines = document.getElementsByClassName("lines");
let width = window.innerWidth;
let words = document.getElementsByClassName("span-home");
let colors = ['rgba(244, 185, 66,0.7)','rgba(65, 83, 244,0.7)','rgba(65, 244, 106,0.7)'];
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


window.onscroll = function (e) {
    

      var vertical_position = 0;
      if (pageYOffset)//usual
        vertical_position = pageYOffset;
      else if (document.documentElement.clientHeight)//ie
        vertical_position = document.documentElement.scrollTop;
      else if (document.body)//ie quirks
        vertical_position = document.body.scrollTop;
    
      document.getElementsByClassName("lines-container")[0].style.transform = "rotate(-3deg) translateX("+(vertical_position - 50)+"px)";
    
  
  }

document.body.addEventListener("mousemove",(e)=>{
  if(width<600) return;
    document.getElementsByClassName("header-inner-name")[0].style.transform = "rotate(-2deg) translate("+e.clientX/50+"px, "+e.clientY/70+"px)";
})