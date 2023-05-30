let seg = 0
let min = 0
let hr = 0
let num 
let timer = false


//iniciar cronometro//
function start(){
    if(timer===false)
    {time();
    num= setInterval(time, 1000)}
    timer = true
}

//pausar cronometro//
function stop(){
    clearInterval(num)
    timer = false
}

//zerar cronometro//
function end(){
   clearInterval(num)
   seg=0
   min=0
   hr=0
   document.getElementById("tempo").innerHTML="00:00:00"
   timer = false
}


function time(){
    seg++
    
    if(seg >= 60){
        min++
        seg = 0
    }

    if(min >= 60){
        hr++
        min =0 
    }
    document.getElementById("tempo").innerHTML=zeros(hr)+":"+zeros(min)+":"+zeros(seg)
}

function zeros(digit){
    if(digit<10){
        return("0"+digit)
    }
    else{
        return(digit)
    }
}

let dk = document.getElementById("theme")
let lt = document.getElementById("theme1")
let bd = document.body
bd = true



//A partir de agora é o modo noturno.//
let color1 = document.getElementById("titulo");
let color2 = document.getElementById("corpo")
let color3 = document.getElementById("tempo")
let color4 = document.getElementById("theme")
let color5 = document.getElementById("theme1")

function light(){
    color1.style.color = "black"
    color2.style.backgroundColor = "white"
    color3.style.color = "black"
    color4.style.backgroundColor = "white"
    color5.style.backgroundColor = "white"
}

function dark(){
    color1.style.color = "white"
    color2.style.backgroundColor = "black"
    color3.style.color = "white"
    color4.style.backgroundColor = "rgb(80, 80, 80)"
    color4.style.borderRadius = "10px"
    color5.style.backgroundColor = "rgb(80, 80, 80)"
    color5.style.borderRadius = "10px"
}



