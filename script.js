// Used queryselector to get all the elements the form attribute
// Queryselector will return an array-like object that can be iterated over
// hence there is no need for hard-coding it as before.
// Same thing too for the step indicator as well
const arrSteps = document.querySelectorAll("form");
const stepIndicator = document.querySelectorAll(".step-indicator button");

const nextBtn = document.getElementById('nextBtn')
const backBtn = document.getElementById('prevBtn')

// Used a single index to monitor the movement through the list of forms and step indicator
let index = 0;





nextBtn.addEventListener('click', function () {
  backBtn.style.visibility = 'visible'
  // Since this button has two diiferent textContent depending on what form is displayed
  // I checked if the current textContent contains the word next in it
  // if it does then the functionality executed will be moving to the next page
  // else if it contains the word confirm, it will execute the confirm fuctionality
  if(nextBtn.textContent.includes("Next")) {

    if(index < (arrSteps.length - 1)) {
      arrSteps[index].style.display = 'none'
      arrSteps[index + 1].style.display = 'flex'
  
      Object.assign(stepIndicator[index].style,{
        border: "solid 2px white",
        background: "none",
        color: "white"
      })
    
      Object.assign(stepIndicator[index + 1].style,{
        border: "none",
        backgroundColor: "#bfe2fd",
        color: "#02295a"
      })
      // Increment index after every click for the next form
      index++;
    }
    if(index === (arrSteps.length - 1)) {
      // changes the button's textCotnent to confirm once the form displayed is the last form
      nextBtn.textContent = 'Confirm';
      Object.assign(nextBtn.style,{
        color:"white",
        backgroundColor:"#473dff"
      })
    }
  }
// The confirm functionality to be executed when the button textContent is confirm
  else if(nextBtn.textContent.includes("Confirm")) {
    arrSteps[3].style.display = "none"
    document.getElementById('final-message').style.display = "flex"
    nextBtn.style.visibility = "hidden"
    backBtn.style.visibility = "hidden"
  }
})

backBtn.addEventListener('click', function () {
  // Change the next button textContent from confirm to next step and style differently
  nextBtn.textContent = "Next Step";
  Object.assign(nextBtn.style,{
    color:"white",
    backgroundColor:"#02295a"
  })

  // if the index is < the length of the form array and greater than 0
  // move to the previous form by decrementing the index
  // Same thing is applied to the step indicator as well
  if(index < arrSteps.length && index > 0) {
    arrSteps[index].style.display = "none";
    arrSteps[index - 1].style.display = "flex";

    Object.assign(stepIndicator[index].style,{
      border: "solid 2px white",
      background: "none",
      color: "white"
    })
  
    Object.assign(stepIndicator[index - 1].style,{
      border: "none",
      backgroundColor: "#bfe2fd",
      color: "#02295a"
    })
  }
  // if index is 0 or less, hide the back button as that is the first element and it has no element before it
  if((index - 1) <= 0) {
    backBtn.style.visibility = "hidden";
  }
  
  // Decrement index to simulate page moving backward;
  index --
 
})


const toggleBtn = document.querySelector('.toggle-switch')
var priceElMonth1 = document.querySelector('.price-text-month-one')
var priceElMonth2 = document.querySelector('.price-text-month-two')
var priceElMonth3 = document.querySelector('.price-text-month-three')

var priceElYear1 = document.querySelector('.price-text-year-one')
var priceElYear2 = document.querySelector('.price-text-year-two')
var priceElYear3 = document.querySelector('.price-text-year-three')

var priceBonus1 = document.querySelector('.year-bonus-1')
var priceBonus2 = document.querySelector('.year-bonus-2')
var priceBonus3 = document.querySelector('.year-bonus-3')

toggleBtn.addEventListener("click",() =>{
priceElMonth1.classList.toggle("hide")
priceElMonth2.classList.toggle("hide")
priceElMonth3.classList.toggle("hide")


priceElYear1.classList.toggle("active")
priceElYear2.classList.toggle("active")
priceElYear3.classList.toggle("active")

priceBonus1.classList.toggle("active")
priceBonus2.classList.toggle("active")
priceBonus3.classList.toggle("active")
})