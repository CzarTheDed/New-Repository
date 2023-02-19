let displayScore = document.getElementById("score")
displayScore.textContent = 0
let count = 0


//displayScore. textContent = 0 changes the html from 120 to 0
//then we initialize count to zero so we can add 1 to it and solve with it
//if you put "count = 0" in function it wont work bc you are saying "when button is clicked let it be = 0"
//hence it will = 0 once the  button is clicked, while we want it to be added by one instead

let guestScore = document.getElementById("display2")
guestScore.textContent = 0
guestCount = 0

function sumOne() {
    
    displayScore.textContent = count += 1
   
}

function sumTwo() {
    displayScore.textContent = count += 2
}

function minOne() {
    displayScore.textContent = count -= 1
}

//GUEST

function plusOne() {
    
    guestScore.textContent = guestCount += 1
   
}

function plusTwo() {
    guestScore.textContent = guestCount += 2
}

function remOne() {
    guestScore.textContent = guestCount -= 1
}