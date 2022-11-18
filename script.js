let price = 0;
let discount = 1;
let allowedCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

let priceAlert = document.getElementById('outputPrice');

function checkDiscount(){

    let codeToCheck = document.getElementById('inputDiscount').value;
    let discountMessage = document.getElementById('discountAlert');

    for(i=0; i<allowedCodes.length; i++){

        if (codeToCheck == allowedCodes[i]){

            document.getElementById('inputDiscount').classList.add("text-success", "fw-bold");
            discountMessage.innerHTML = "Valid Code: 25% discount applied";
            discountMessage.classList.remove("d-none");
            allowedCodes.splice(i, 1);
            discount = 0.75;

            console.log(allowedCodes);
            return true;
        }
    }

    document.getElementById('inputDiscount').classList.add("text-danger", "fw-bold");
    discountMessage.innerHTML = "Input code missing or invalid";
    discountMessage.classList.remove("text-success", "d-none");
    discountMessage.classList.add("text-danger");
    console.log("Discount code invalid or not found");
    return false;
}

function calculatePrice(){
    let numHours = document.getElementById('inputHours').value;
    let workType = document.getElementById('inputWork').value;

    numHours = parseInt(numHours);
    workType = parseInt(workType);

    if(isNaN(numHours)){
        console.log("Well, something went wrong.");
        return false;
    }

    checkDiscount();

    switch(workType){

        case 1:
            price = numHours * 20.5  * discount;
            outputPrice.innerHTML = "The final price is: " + price.toFixed(2) + "&#8364";
            break;

        case 2:
            price = numHours * 15.3 * discount; 
            outputPrice.innerHTML = "The final price is: " + price.toFixed(2) + "&#8364";
            break;

        case 3:
            price = numHours * 33.6 * discount;
            outputPrice.innerHTML = "The final price is: " + price.toFixed(2) + "&#8364";
            break;
        
        default:
            console.log("Bruh");
            break;
    }
}

function submitForm(event){

    calculatePrice();

    event.preventDefault();

}