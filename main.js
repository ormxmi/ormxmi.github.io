let lines = document.getElementsByClassName("lines");
let width = window.innerWidth;
for(let i = 0; i<lines.length; i++){
    lines[i].addEventListener("mousemove",()=>{
        lines[i].style.marginLeft = "100px"; 
        setTimeout(()=>{
          
            lines[i].style.marginLeft = "0px"; 
           
        },2000)
    })
}

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