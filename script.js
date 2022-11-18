let price = 0;
let discount = 1;
let allowedCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function checkDiscount(){

    let codeToCheck = document.getElementById('inputDiscount').value;

    for(i=0; i<allowedCodes.length; i++){

        if (codeToCheck == allowedCodes[i]){
            document.getElementById('inputDiscount').style.color="green";
            allowedCodes.splice(i, 1);
            discount = 0.75;

            console.log(allowedCodes);
            return true;
        }
    }

    //document.getElementById('inputDiscount').classList.add("text-danger");
    document.getElementById('inputDiscount').style.color="red";
    console.log("Discount code invalid or not found");
    return false;
}

function getPrices(){
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
            console.log("Price is " + price.toFixed(2));
            break;

        case 2:
            price = numHours * 15.5 * discount; 
            console.log("Price is " + price.toFixed(2));
            break;

        case 3:
            price = numHours * 30.5 * discount;
            console.log("Price is " + price.toFixed(2));
            break;
        
        default:
            console.log("Bruh");
            break;
    }
}

function submitForm(event){

    getPrices();

    event.preventDefault();

}