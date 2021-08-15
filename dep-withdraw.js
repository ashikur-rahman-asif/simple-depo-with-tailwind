//handle deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositinput= document.getElementById('deposit-input')
    const newdepositamounttext=depositinput.value;
    const newdepositamount=parseFloat(newdepositamounttext)
    console.log(newdepositamount)

//
const deposittotal=document.getElementById('deposit-total')
const previousdeposittext=deposittotal.innerText
const previousdepositamount=parseFloat(previousdeposittext)
const newdeposittotal=previousdepositamount+newdepositamount

deposittotal.innerText=newdeposittotal;



//update balance

const balancetotal=document.getElementById('balance-total');

const balancetotaltext= balancetotal.innerText


const previousbalancetotal=parseFloat(balancetotaltext)
const newbalancetotal=previousbalancetotal+newdepositamount;
balancetotal.innerText=newbalancetotal

//clear
depositinput.value=''

})

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawinput=document.getElementById('withdraw-input')
   
    const withdrawamounttext=withdrawinput.value
    const newwithdrawamount=parseFloat(withdrawamounttext)

    //set withdraw total

    const withdrawtotal=document.getElementById('withdraw-total')

    const previouswithdrawtext=withdrawtotal.innerText
    const previouswithdrawtotal=parseFloat(previouswithdrawtext)
    const newwithdrawtotal=previouswithdrawtotal+newwithdrawamount
    withdrawtotal.innerText=newwithdrawtotal
    const balancetotal=document.getElementById('balance-total')
    const previousbalancetext=balancetotal.innerText
    const previousbalancetotal= parseFloat(previousbalancetext)
    const newbalancetotal=previousbalancetotal-newwithdrawamount
    balancetotal.innerText=newbalancetotal

    //clear
    withdrawinput.value=''



})