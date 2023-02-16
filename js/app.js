
function getPin(){
    const pin = generatePin();
    const pinStr = pin + '';
    if(pinStr.length === 4){
        return pin; 
    }else {
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random() * 10000)
    return random;
}


//Get Generate Pin
document.getElementById('btn-generate').addEventListener('click', function(){
   const getPinVal = getPin();
   const getVal = document.getElementById('input-value');  
   getVal.value = getPinVal;

});
document.getElementById('btn-calculator').addEventListener('click', function(event){
        const calNumber = event.target.innerText;
        const typeNumber = document.getElementById('type-number');
        const previousNumber = typeNumber.value;
        if(isNaN(calNumber)){
            if( calNumber === 'C') {
                typeNumber.value = "";
            }else if(calNumber === '<'){
                 const digits = previousNumber.split('');
                 digits.pop();
                 const reamingDigit = digits.join('');
                 typeNumber.value = reamingDigit;
            }
        }else{ 
            const newTypeNumber = previousNumber + calNumber; 
            typeNumber.value = newTypeNumber;

        }

});


document.getElementById('btn-submit').addEventListener('click', function(){
    const genPin = document.getElementById('input-value').value;
    const typePin = document.getElementById('type-number').value;
    const typeNumber = document.getElementById('type-number');
    const worngBtn = document.getElementById('btn-worng');
    const wrightBtn = document.getElementById('btn-right');

    if(genPin === typePin){ 
        wrightBtn.style.display = "block";
        worngBtn.style.display = "none";
    }else {
        worngBtn.style.display = "block";
        wrightBtn.style.display = "none";
    }
    typeNumber.value = "";

});