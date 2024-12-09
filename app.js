const country = {
    USD: 'US',
    CAD: 'CA',
    GBP: 'GB',
    EUR: 'EU',
    AUD: 'AU',
    INR: 'IN',
    JPY: 'JP',
    CNY: 'CN',
    KRW: 'KR',
    BRL: 'BR',
    MXN: 'MX',
    ZAR: 'ZA',
    RUB: 'RU',
    SEK: 'SE',
    CHF: 'CH',
    NOK: 'NO',
    DKK: 'DK',
    PLN: 'PL',
    ARS: 'AR',
    EGP: 'EG',
    AED: 'AE',
    NGN: 'NG',
    THB: 'TH',
    PHP: 'PH',
    IDR: 'ID',
    MYR: 'MY',
    SGD: 'SG',
    HKD: 'HK',
    NZD: 'NZ',
    COP: 'CO',
    CLP: 'CL',
    PEN: 'PE',
    VEF: 'VE',
    PKR: 'PK',
    BDT: 'BD',
    TWD: 'TW',
    VND: 'VN',
    HUF: 'HU',
    CZK: 'CZ',
    RON: 'RO',
    BGN: 'BG',
    HRK: 'HR',
    MKD: 'MK',
    ALL: 'AL',
    KWD: 'KW',  
    BHD: 'BH',  
    OMR: 'OM',  
    QAR: 'QA',  
    JOD: 'JO',  
    LBP: 'LB',  
    EEK: 'EE',  
    LTL: 'LT',  
    LVL: 'LV',  
    GEL: 'GE',  
    AFN: 'AF',  
    MAD: 'MA',
    TND: 'TN',  
    ZWL: 'ZW',  
    MNT: 'MN',  
    KZT: 'KZ',  
    LKR: 'LK',  
    TJS: 'TJ',  
    UGX: 'UG',  
    KES: 'KE',  
};
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}"
let select1= document.querySelector(".from select");
let select2= document.querySelector(".to select");

const  drop_down=document.querySelectorAll(".dropdown select");

for( let select of drop_down){
for( cur_code in country){
    let new_node= document.createElement("option");
    new_node.innerText= [cur_code];
    new_node.value=[cur_code];
    select.append(new_node);
   
    if(select.name==="From" && cur_code=== "USD"){
        new_node.selected="selected";
    
    }
    else if(select.name==="To" && cur_code=== "INR"){
        new_node.selected="selected";
    }
};
select.addEventListener("change" ,(evt)=>{
    update_flag(evt.target);

});

};
function update_flag(element){
    let  name = element.value;
    let src1=`https://flagsapi.com/${country[name]}/flat/64.png`;
    let n1= element.parentElement.querySelector("img");
    n1.src= src1;
};

let btn= document.querySelector("form button");

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let data= document.querySelector(" input");
    let val= data.value
    if(val==="" || val<=0){
        val=1;
       data.value=1;
    }
    console.log(val);
    console.log(select1.value,select2.value);
    let URL= `${BASE_URL}/${select1.value.toLowerCase()}/${select2.value.toLowerCase()}`;
    let response= await fetch(URL);
    let data1= await response.json();
    console.log(data1);
    

});


