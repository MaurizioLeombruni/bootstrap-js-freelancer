let price = 0;
let discount = 1;
let allowedCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

let priceAlert = document.getElementById('outputPrice');

let portfolioPages = [

    {
        siteName: "Cabin Website",
        siteImage: "cabin.png"
    },

    {
        siteName: "Cake Website",
        siteImage: "cake.png"
    },

    {
        siteName: "Circus Website",
        siteImage: "circus.png"
    },

    {
        siteName: "Not Twitch TV",
        siteImage: "game.png"
    },

    {
        siteName: "Safe Website",
        siteImage: "safe.png"
    },

    {
        siteName: "Ocean Website",
        siteImage: "submarine.png"
    }

]

function compileSiteCards(){

    for(i=0; i<portfolioPages.length; i++){

        let divColumn = document.createElement('div');
        let divCard = document.createElement('div');
        let divButtons = document.createElement('div');
    
        let cardImage = document.createElement('img');
        let cardTitle = document.createElement('h5');
        let cardTitleText;
    
        let cardButtonPreview = document.createElement('button');
        let cardButtonVisit = document.createElement('button');
        let previewText = document.createTextNode("Preview");
        let visitText = document.createTextNode("Visit Site");
    
        divColumn.classList.add("col-sm-6", "col-lg-4", "mb-5");
        divCard.classList.add("card", "border", "shadow");
        divButtons.classList.add("d-grid", "gap-2", "d-md-block", "mb-3");
        cardImage.classList.add("card-img-top");
        cardTitle.classList.add("card-title", "fw-bold", "mt-2");
        cardButtonPreview.classList.add("btn", "btn-info", "text-nowrap");
        cardButtonVisit.classList.add("btn", "btn-outline-info", "me-md-2", "text-nowrap");
    
        cardButtonPreview.type = "button";
        cardButtonVisit.type = "button";
        cardButtonPreview.appendChild(previewText);
        cardButtonVisit.appendChild(visitText);

        cardImage.src = "./assets/img/portfolio/" + portfolioPages[i].siteImage;
        cardImage.alt = portfolioPages[i].siteName;

        cardTitleText = document.createTextNode(portfolioPages[i].siteName);
        cardTitle.appendChild(cardTitleText);

        document.getElementById('portfolioContainer').appendChild(divColumn);

        divColumn.appendChild(divCard);
        divCard.appendChild(cardImage);
        divCard.appendChild(cardTitle);
        divCard.appendChild(divButtons);
        divButtons.appendChild(cardButtonPreview);
        divButtons.appendChild(cardButtonVisit);

    }


}

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
        outputPrice.innerHTML = "Missing or invalid entries";
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

function checkName(string){

    string = string.toString();
    let noNumbers = string.replace(/[0-9]/g, '');

    if(noNumbers.trim() === ''){
        document.getElementById('nameMessage').classList.remove("d-none");
        return false;

    } else {

        document.getElementById('nameMessage').classList.add("d-none");
        return true;

    }

}

function checkSurname(string){

    string = string.toString();
    let noNumbers = string.replace(/[0-9]/g, '');

    if(noNumbers.trim() === ''){

        document.getElementById('surnameMessage').classList.remove("d-none");
        return false;

    } else {

        document.getElementById('surnameMessage').classList.add("d-none");
        return true;

    }

}

function checkEmail(string){

    string = string.toString();
    if(string.trim() === "" || !string.includes("@")){

        document.getElementById('emailMessage').classList.remove("d-none");
        return false;

    } else {
        document.getElementById('emailMessage').classList.add("d-none");
        return true;

    }

}

function submitForm(event){

    event.preventDefault();

    let userName = document.getElementById('inputName').value;
    let userSurname = document.getElementById('inputSurname').value;
    let userEmail = document.getElementById('inputEmail').value;

    let isNameValid = checkName(userName);
    let isSurnameValid = checkSurname(userSurname);
    let isEmailValid = checkEmail(userEmail);

    if(!isNameValid || !isSurnameValid || !isEmailValid){

        console.log("Something's missing or incorrect in the form.")
        return false;
    }

    calculatePrice();

}

compileSiteCards();