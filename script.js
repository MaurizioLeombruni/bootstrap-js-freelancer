//Dichiariamo le variabili di base.

let price = 0;
let discount = 1;
let allowedCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

let priceAlert = document.getElementById('outputPrice');

//Dichiariamo gli oggetti necessari a compilare la pagina.

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

//La funzione compileSiteCards() stila dinamicamente la parte del portfolio.

function compileSiteCards(){

    for(i=0; i<portfolioPages.length; i++){

        //Creiamo tutti gli elementi HTML necessari.

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

        //Aggiungiamo le classi per un layout più carino e responsivo.
    
        divColumn.classList.add("col-sm-6", "col-lg-4", "mb-5");
        divCard.classList.add("card", "border", "shadow");
        divButtons.classList.add("d-grid", "gap-2", "d-md-block", "mb-3");
        cardImage.classList.add("card-img-top");
        cardTitle.classList.add("card-title", "fw-bold", "mt-2");
        cardButtonPreview.classList.add("btn", "btn-info", "text-nowrap");
        cardButtonVisit.classList.add("btn", "btn-outline-info", "me-md-2", "text-nowrap");
    
        //Assegnamo ai bottoni il tipo e il testo; sono uguali per tutti gli elementi.

        cardButtonPreview.type = "button";
        cardButtonVisit.type = "button";
        cardButtonPreview.appendChild(previewText);
        cardButtonVisit.appendChild(visitText);

        //L'immagine viene assegnata dinamicamente in base alla proprietà dell'oggetto. L'alt, per chiarezza, viene assegnato
        //con il nome del sito.

        cardImage.src = "./assets/img/portfolio/" + portfolioPages[i].siteImage;
        cardImage.alt = portfolioPages[i].siteName;

        //Il titolo viene preso dalle proprietà dell'oggetto e assegnato al suo elemento HTML.

        cardTitleText = document.createTextNode(portfolioPages[i].siteName);
        cardTitle.appendChild(cardTitleText);

        //Si esegue l'assegnazione di tutti gli elementi al rispettivo padre nel codice HTML.

        document.getElementById('portfolioContainer').appendChild(divColumn);

        divColumn.appendChild(divCard);
        divCard.appendChild(cardImage);
        divCard.appendChild(cardTitle);
        divCard.appendChild(divButtons);
        divButtons.appendChild(cardButtonPreview);
        divButtons.appendChild(cardButtonVisit);

    }

}

    //La funzione checkDiscount() controlla il codice inserito nell'apposito form e stabilisce se c'è uno sconto o meno da applicare.

function checkDiscount(){

    let codeToCheck = document.getElementById('inputDiscount').value;
    let discountMessage = document.getElementById('discountAlert');

    //Scorre l'array dei codici per cercare se il codice immesso è effettivamente valido.

    for(i=0; i<allowedCodes.length; i++){

        if (codeToCheck == allowedCodes[i]){

            //Se il codice è valido, diamo un messaggio di conferma, settiamo il moltiplicatore del 25% dello sconto, e togliamo il codice
            //dall'array.

            document.getElementById('inputDiscount').classList.add("text-success", "fw-bold");
            discountMessage.innerHTML = "Valid Code: 25% discount applied";
            discountMessage.classList.remove("d-none");
            allowedCodes.splice(i, 1);
            discount = 0.75;

            console.log(allowedCodes);
            return true;
        }
    }

    //Altrimenti, finiamo con un messaggio di errore.

    document.getElementById('inputDiscount').classList.add("text-danger", "fw-bold");
    discountMessage.innerHTML = "Input code missing or invalid";
    discountMessage.classList.remove("text-success", "d-none");
    discountMessage.classList.add("text-danger");
    console.log("Discount code invalid or not found");
    return false;
}

//La funzione calculatePrice() calcola il prezzo se tutti gli elementi del form sono validi.

function calculatePrice(){
    let numHours = document.getElementById('inputHours').value;
    let workType = document.getElementById('inputWork').value;

    //Ci assicuriamo che i valori numerici siano effettivamente dei numeri.

    numHours = parseInt(numHours);
    workType = parseInt(workType);

    //Se le ore immesse non sono un valore valido, termina la funzione.

    if(isNaN(numHours)){
        outputPrice.innerHTML = "Missing or invalid entries";
        return false;
    }

    //Controlliamo lo sconto.

    checkDiscount();

    //Infine, stabiliamo il prezzo in base alla scelta del tipo di lavoro da parte dell'utente.
    //Il prezzo viene calcolato in base alle ore specificate, il prezzo base di ogni lavoro, e il possibile sconto.

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

//Le funzioni checkName(), checkSurname() e checkEmail() verificano se i loro rispettivi input sono validi, ritornando vero o falso
//e notificando l'utente in caso di errore.

function checkName(string){

    //Ci assicuriamo che l'input sia effettivamente una stringa, poi togliamo i numeri.
    //Nessuno ha numeri nel proprio nome o cognome, vero?

    string = string.toString();
    let noNumbers = string.replace(/[0-9]/g, '');

    //Un input invalido è una stringa vuota o una stringa di soli numeri. Notifichiamo l'utente in caso di errore, e togliamo la
    //notifica quando un input corretto viene eseguito.

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

    //Per le email controlliamo se la stringa include una chiocciola.
    if(string.trim() === "" || !string.includes("@")){

        document.getElementById('emailMessage').classList.remove("d-none");
        return false;

    } else {
        document.getElementById('emailMessage').classList.add("d-none");
        return true;

    }

}

//La funzione submitForm() verifica la validità degli input. Se anche solo un input è invalido, termina la funzione, altrimenti calcola il prezzo
//e informa l'utente.

function submitForm(event){

    event.preventDefault();

    let userName = document.getElementById('inputName').value;
    let userSurname = document.getElementById('inputSurname').value;
    let userEmail = document.getElementById('inputEmail').value;

    let isNameValid = checkName(userName);
    let isSurnameValid = checkSurname(userSurname);
    let isEmailValid = checkEmail(userEmail);

    if(!isNameValid || !isSurnameValid || !isEmailValid){

        outputPrice.innerHTML = "Please check if your information is correct.";
        return false;
    }

    calculatePrice();

}

//Compiliamo il portfolio all'avvio della pagina.

compileSiteCards();