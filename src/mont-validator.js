
const dateValidation = (numero) => {
    let today = new Date();
    let n1 = numero;
    console.log(n1);

    if (n1 <= 12 && n1 > 0 && typeof numero !== "string"){
        console.log("this is correct");
        return true; 
    }else {
                console.log("this is incorrect, you use a not allowed input");
        return false;
        
    }
    

}

dateValidation(12);