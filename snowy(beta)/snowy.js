

const btn = document.querySelector('.button-49')
var recognition = new webkitSpeechRecognition();

var x = document.getElementById("myAudio");
btn.addEventListener("click", (e)=>{
  e.preventDefault
  listenForCommand()
})





// function listenForCommand(command) {
//   recognition.start();
//   recognition.onresult = function(event) {
//     var last = event.results.length - 1;
//     var transcript = event.results[last][0].transcript;
//     var recognizedCommand = event.results[0][0].transcript;
//     if(transcript.includes(command)) {
//         var wordsAfterCommand = transcript.substring(transcript.search(command) + command.length).trim();
//         console.log("Command recognized: " + command);
//         console.log("Words after command: " + wordsAfterCommand);
//       }
//     }
  
// }






function listenForCommand(command) {
  

  recognition.onresult = function(event) {
  // recognition.interimResults = true;
  // recognition.maxAlternatives = 10;
    var last = event.results.length - 1;
    var transcript = event.results[last][0].transcript;
    var recognizedCommand = event.results[0][0].transcript;
    if (recognizedCommand.includes('search')) {
      command = 'search'
    }
    if (recognizedCommand.toLowerCase().includes('search')) {
      if(transcript.includes(command)) {
        var wordsAfterCommand = transcript.substring(transcript.search(command) + command.length).trim();
        x.play();
        console.log("Command recognized: " + command);
        console.log("Words after command: " + wordsAfterCommand);
        
        
        window.open(`https://www.google.com/search?q=${wordsAfterCommand}`)
        window.open(`https://www.youtube.com/results?search_query=${wordsAfterCommand}`)
        window.open(`https://en.wikipedia.org/wiki/${wordsAfterCommand}`)
        
    }
    }
  }
  recognition.start();
}
