let cl = console.log;


const digitalClock = document.getElementById("digitalClock")

// let d = new Date();

// cl(d)

// let hr = d.getHours();
// let min = d.getMinutes();
// let sec = d.getSeconds();
// let session = "AM"

// if(hr >= 12){
//     session ="PM"
// }
// if(hr >= 12){
//     hr = hr - 12 
// }

// // if(hr < 10 ){
// //     hr = "0" + hr
// // }

// // hr = hr < 10 ? ("0" + hr) : hr
// // min = min < 10 ? ("0" + min) : min
// // sec = sec < 10 ? ("0" + sec) : sec

// hr = setZero(hr);
// min  = setZero(min);
// sec = setZero(sec);



// cl(hr , min , sec)
// let result = `${hr} : ${min} : ${sec} ${session}`
// digitalClock.innerHTML = result

function dClock() {
    let d = new Date();


let hr = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
let session = "AM"

if(hr >= 12){
    session ="PM"
}
if(hr >= 12){
    hr = hr - 12 
}

// if(hr < 10 ){
//     hr = "0" + hr
// }

// hr = hr < 10 ? ("0" + hr) : hr
// min = min < 10 ? ("0" + min) : min
// sec = sec < 10 ? ("0" + sec) : sec

hr = setZero(hr);
min  = setZero(min);
sec = setZero(sec);



cl(hr , min , sec)
let result = `${hr} : ${min} : ${sec} ${session}`
digitalClock.innerHTML = result;
setTimeout(dClock , 1000)
}

dClock();

function  setZero(num){
    return (num < 10 ) ? ("0" + num ) :num ;
}