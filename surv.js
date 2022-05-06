// put js here
document.getElementById('surprise').addEventListener('ended',myHandler,false);
    function myHandler(e) {
       window.location.href = "surveillance.html";


    }
    console.log("video ended")


// function on() {
//   document.getElementById("overlay").style.display = "block";
// }

// function off() {
//   document.getElementById("overlay").style.display = "none";
// }

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('myaudio').play();
}

