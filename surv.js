// put js here
document.getElementById('surprise').addEventListener('ended',myHandler,false);
    function myHandler(e) {
       window.location.href = "surveillance.html";


    }
    console.log("video ended")

// const video = document.querySelector('video');

// video.addEventListener('ended', (event) => {
//   console.log('Video stopped either because 1) it was over, ' +
//       'or 2) no further data is available.');
// });