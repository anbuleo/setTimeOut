// function changeMessage() {
//     var messages = [
//         "Wishing you a day filled with joy and laughter!",
//         "May this year be the best one yet!",
//         "Happy Birthday! Enjoy every moment of your special day!",
//         "May all your wishes come true!",
//         "Cheers to another year of amazing adventures!",
//     ];

//     var randomIndex = Math.floor(Math.random() * messages.length);
//     var birthdayMessage = document.getElementById("birthdayMessage");

//     // Remove and re-add the 'animate' class to trigger the animation
//     birthdayMessage.classList.remove("animate");
//     void birthdayMessage.offsetWidth; // Force reflow
//     birthdayMessage.classList.add("animate");

//     birthdayMessage.textContent = messages[randomIndex];

//     // Play the music
//     var birthdayMusic = document.getElementById("birthdayMusic");
//     birthdayMusic.play();
// }
// Initialize the birthdate
var birthDate = new Date("1999/01/18"); // Replace with your birthdate in "YYYY-MM-DD" format



function calculateAge() {
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();

    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

// function updateAgeCounter() {
//     var ageElement = document.getElementById("age");
//     var minutesElement = document.getElementById("minutes");
//     var secondsElement = document.getElementById("seconds");

//     var currentDate = new Date();
//     var elapsedTime = currentDate - birthDate;
//     var seconds = Math.floor(elapsedTime / 1000);
//     var minutes = Math.floor(seconds / 60);
//     var remainingSeconds = seconds % 60;

//     ageElement.textContent = calculateAge();
//     minutesElement.textContent = minutes;
//     secondsElement.textContent = remainingSeconds;
// }

{/* <div class="container">
            <h1>Happy Birthday!</h1>
            <h3>Sheeba</h3>
            <p id="birthdayMessage" class="animate">Wishing you a day filled with joy and laughter!</p>
            <!-- <p id="ageCounter">You are <span id="age">0</span> years, <span id="minutes">0</span> minutes, and <span id="seconds">0</span> seconds old!</p> -->
            <button onclick="changeMessage()">Change Message</button>
    
            <!-- Add the audio element for music -->
            <audio id="birthdayMusic" controls loop hidden autoplay>
                <source src="./assets/faded-electric-piano-version-180274.mp3" type="audio/mp3">
                Your browser does not support the audio tag.
            </audio>
        </div> */}

function startCountDown(){
    

    setTimeout(()=>{

        var birthdayMusic = document.getElementById("birthdayMusic");
        birthdayMusic.play();
        let button =  document.getElementById('startButton').setAttribute('hidden','true')
        let heading = document.getElementById('heading').innerText = `Don't get Angry `
        let message = document.getElementById("birthdayMessage").innerText= `wait for 10 sec`
        setTimeout(()=>{
            let message = document.getElementById("birthdayMessage").innerText= `wait for 9 sec`
            setTimeout(()=>{
                let message = document.getElementById("birthdayMessage").innerText= `wait for 8 sec`
                setTimeout(()=>{
                    let message = document.getElementById("birthdayMessage").innerText= `wait for 7 sec`
                    setTimeout(()=>{
                        let message = document.getElementById("birthdayMessage").innerText= `wait for 6 sec`
                        setTimeout(()=>{
                            let message = document.getElementById("birthdayMessage").innerText= `wait for 5 sec`
                            setTimeout(()=>{
                                let message = document.getElementById("birthdayMessage").innerText= `wait for 4 sec`
                                setTimeout(()=>{
                                    let message = document.getElementById("birthdayMessage").innerText= `wait for 3 sec`
                                    setTimeout(()=>{
                                        let message = document.getElementById("birthdayMessage").innerText= `wait for 2 sec`
                                        setTimeout(()=>{
                                            let body = document.body.style.background = `url('./assets/9674891.jpg') no-repeat`
                                            let message = document.getElementById("birthdayMessage").innerText= `wait for 1 sec`
                                            document.getElementById("birthdayMessage").innerText= `Wishing you a day filled with joy and laughter!`
                                            document.getElementById('QuotesButton').removeAttribute('hidden')
                                            let heading = document.getElementById('heading').innerText = `Happy Brithday!! `

                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)

        },1000)
    },1000)
   

    
}

function changeMessage() {
    var messages = [
        "Wishing you a day filled with joy and laughter!",
        "May this year be the best one yet!",
        "Happy Birthday! Enjoy every moment of your special day!",
        "May all your wishes come true!",
        "Cheers to another year of amazing adventures!",
    ];

    var randomIndex = Math.floor(Math.random() * messages.length);
    var birthdayMessage = document.getElementById("birthdayMessage");

    birthdayMessage.classList.remove("animate");
    void birthdayMessage.offsetWidth;
    birthdayMessage.classList.add("animate");

    birthdayMessage.textContent = messages[randomIndex];

   

    
}
