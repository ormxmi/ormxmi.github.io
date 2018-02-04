$(document).ready(function(){
    var markTextFn,underScoreFn;var spanIdLeft = 1 ;var blackRectSpanList = document.getElementsByClassName("blackRectSpan");
    var heightPage = $(document).height();var underline = 1;
    $('.left').click(()=>{
        $('.left').css("width","50%");
        $('.right').css("width","50%");
        
    })
    $('.right').click(()=>{
        $('.left').css("width","50%");
        $('.right').css("width","50%");
      
    })
    $('#leftAnchor').mouseenter(function(){
        $('.left').css("width","70%");
        $('.right').css("width","30%");
       
    })
    $('#rightAnchor').mouseenter(function(){
        $('.right').css("width","70%");
        $('.left').css("width","30%");
       
    })
    $('.scrllDwn').click(()=>{
        $('html,body').animate({scrollTop:heightPage},777)
    })
    $('.blackRect>h1').hover(function(){
        
        $(this).css("cursor","pointer");
        markTextFn= setInterval(function(){
        if(spanIdLeft==0){$('.blackRectSpan').css("background-color","rgba(216, 86, 88,0)")
        }
        
        $(blackRectSpanList[spanIdLeft-1]).css("mix-blend-mode","color");
        $(blackRectSpanList[spanIdLeft]).css("mix-blend-mode","lighten");
        $(blackRectSpanList[spanIdLeft]).css("background-color","rgba(216, 86, 88,0.7)");
        $(blackRectSpanList[spanIdLeft-1]).css("background-color","rgba(216, 86, 88,0)");
        
        
        
        spanIdLeft++;
        if(spanIdLeft==blackRectSpanList.length+1){spanIdLeft=0;}
    },100)
    },function(){
        clearInterval(markTextFn); $('.blackRect').find('span').css("background-color","rgba(0,0,0,0)");
        $('.blackRect').find('span').css("mix-blend-mode","color");
        spanIdLeft = 0;
       
    })
    
     $('.whiteRect').hover(function(){
        $('.whiteRect>h1').css("border","3px solid rgba(255,255,255,1)");
        $('.whiteRect>h1').css("cursor","pointer");
        $('#whiteRectUnder').css("display","inline");
        underScoreFn = setInterval(function(){
        if(underline%2!=0)
        {$('#whiteRectUnder').css("color","rgba(255,255,255,0)");
        }
        else
        {$('#whiteRectUnder').css("color","white");
        }
        underline++;
         },600)
    },function(){
         clearInterval(underScoreFn); 
         $('#whiteRectUnder').css("display","none");
        $('.whiteRect>h1').css("border","3px solid rgba(255,255,255,0)");
    }) 
    $('#volumeOnBtn').click(()=>{
        var volume = document.getElementById("bgPlay");
        $(this)
        .find('[data-fa-i2svg]')
        .toggleClass('fa-volume-up')
        .toggleClass('fa-volume-down');
        $(this).css("font-size","2em");
        if(!(volume.paused)){
            volume.pause();
            console.log("pause()");
        }
        else{
            volume.play();
            console.log("play()");
        }
    })
    
    setTimeout(function(){
    $('#volumeOnBtn').fadeTo("slow",0.1);
        },3000)
    
    $('#volumeOnBtn').hover(function(){
        $(this).fadeTo("slow",1);
        
    },function(){
        $(this).fadeTo("slow",0.1);
        
    });
    
    
   

var randomWords = ["tick tock", "12/03/1998","チョコレート","どこで","クロック","pursued","vending","pity","excess"];
var randomWord = 0,lastRandomWord=0,h1tag="",lasth1tag="",word="",i=0,lasti=0;
var randWidth = 0,lastRandWidth=0,randWidthCSS="";
setInterval(function(){
    
    while(randWidth==lastRandWidth){randWidth= Math.floor((Math.random() * 80) + 10);}
    lastRandWidth=randWidth;
    randWidthCSS=randWidth.toString()+"vw";
    
    while(i==lasti){i=Math.floor((Math.random() * 3 + 1));} //not repeating the same h1 box 2 times
    lasti = i; 
    while(lastRandomWord==randomWord){randomWord = Math.floor((Math.random() * 9))}; //not repeating the same text 2 times
    lastRandomWord=randomWord;
    if(h1tag!=""){ //doing this only if it is not the first time looping the setInterval
    
    document.getElementById(lasth1tag).innerHTML= "";} //removes the last random red word in the white half 
    
    h1tag = "leftRandomTextBox" + i.toString();
    lasth1tag = h1tag; // targets the last random word so we can clear it the next loop
    $("#"+h1tag).css("left",randWidthCSS);
    $("#"+h1tag).css("left");
    word = randomWords[randomWord];
    document.getElementById(h1tag).innerHTML= word;
    
    
},378);
    
    
    
})