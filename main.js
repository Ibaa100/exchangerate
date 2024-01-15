var registerForm=document.querySelector('.registerForm');
registerForm.onsubmit= function(e){
    e.preventDefault();
    var result="Amount in chosen currency : ";
    var elements=e.target.elements;
    var currency={
        amount: elements['amount'].value,
        exchange: elements['exchange'].value,
    }
    if(currency.exchange==='dinar'){
        currency.amount*=0.19;
        result+=`${currency.amount} JOD`;
    }else if(currency.exchange==='dollar'){
        currency.amount*=0.27;
        result+=`${currency.amount} $`;
    }else{
        result+=`${currency.amount} ₪`;
    }
    var finalresult= document.querySelector('.result');
    finalresult.innerHTML=result;
}
