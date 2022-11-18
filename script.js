let price = 0;

function getPrices(){
    let numHours = document.getElementById('inputHours').value;
    let workType = document.getElementById('inputWork').value;

    numHours = parseInt(numHours);
    workType = parseInt(workType);

    if(isNaN(numHours)){
        console.log("Well, something went wrong.");
        return false;
    }

    switch(workType){

        case 1:
            price = numHours * 20.5;
            console.log("Price is " + price.toFixed(2));
            break;

        case 2:
            price = numHours * 15.5;
            console.log("Price is " + price.toFixed(2));
            break;

        case 3:
            price = numHours * 30.5;
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