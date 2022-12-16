const togglethis = document.querySelector('.toggle-switch')
const arcadePlan = document.getElementById('arcade-plan')
const advancedPlan = document.getElementById('advanced-plan')

let selectedBilling = document.getElementById("selected-billing")
let constPrice = document.querySelector('.price')
let advancedPrice = document.querySelector('.price-2')
let proPrice = document.querySelector('.price-3')

togglethis.onclick = function yearlyToggle(){

console.log("i am working!")


advancedPlan.onclick = function changeText(){
if(advancedPlan.textContent.includes("2 months free")){
    selectedBilling.textContent = "Advanced (yearly)"
    constPrice.textContent = "$120/yr"
}
}

arcadePlan.onclick = function changeText(){
    if(arcadePlan.textContent.includes("2 months free")){
        selectedBilling.textContent = "Aracade (yearly)"
        constPrice.textContent = "$90/yr"
    }
    }
}




arcadePlan.onclick = function changeText() {
    selectedBilling.textContent = "Arcade (monthly)"
    constPrice.textContent = "$9/mo"
}


advancedPlan.onclick = function changeText() {
    selectedBilling.textContent = "Advanced (monthly)"
    constPrice.textContent = "$12/mo" 
}

