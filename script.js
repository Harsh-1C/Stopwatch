let time = document.querySelector(".time");
let start = document.querySelector("#btn1");
let stop = document.querySelector("#btn2");
let reset = document.querySelector("#btn3");

let mili = 0;
let sec=0;
let hr = 0;
let min = 0;
let interval = 0;
start.addEventListener("click", ()=>{
    
    if(interval==0){
        calcTime();
    }
    stop.addEventListener("click",()=>{
        clearInterval(interval);
        interval = 0;
    })

    // time.innerHTML = "harsh";
})

reset.addEventListener("click",()=>{
    if(interval == 0){
        time.innerHTML = "00:00:00:00";
        mili = 0;
        sec = 0;
        hr=0;
        min =0;
    }
    else{
        alert("Please first stop it!!")
    }
    // interval = -1;
})


function calcTime(){
    interval = setInterval(() => {
        mili++;
        sec += Math.floor(mili/100);
        min += Math.floor(sec/60);
        hr += Math.floor(min/60);
        mili = mili%100;
        min = min%60;
        sec = sec%60;
        let mi = mili.toString().padStart(2,'0');
        let s = sec.toString().padStart(2,'0');
        let m = min.toString().padStart(2,'0');
        let h = hr.toString().padStart(2,'0');

        // console.log("0"+sec.length);
        // if(sec.length == 1) sec.toString() = "0"+sec.toString();
        time.innerHTML = h+":"+m+":"+s+":"+mi;
    }, 10);

}