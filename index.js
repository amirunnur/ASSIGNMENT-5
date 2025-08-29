// // heart count
 let heartCount = 0;
const heartCountEl1 = document.getElementById('heart-count')
 document.getElementById('heart1').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl1.textContent = heartCount 
     
 })
const heartCountEl2 = document.getElementById('heart-count')
 document.getElementById('heart2').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl2.textContent = heartCount 
     

 })
const heartCountEl3 = document.getElementById('heart-count')
 document.getElementById('heart3').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl3.textContent = heartCount 
    

 })
const heartCountEl4 = document.getElementById('heart-count')
 document.getElementById('heart4').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl4.textContent = heartCount 
     

 })
const heartCountEl5 = document.getElementById('heart-count')
 document.getElementById('heart5').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl5.textContent = heartCount
     

 })
const heartCountEl6 = document.getElementById('heart-count')
 document.getElementById('heart6').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl6.textContent = heartCount
    

 })
const heartCountEl7 = document.getElementById('heart-count')
 document.getElementById('heart7').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl7.textContent = heartCount
    

 })
const heartCountEl8 = document.getElementById('heart-count')
 document.getElementById('heart8').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl8.textContent = heartCount 
     

 })
const heartCountEl9 = document.getElementById('heart-count')
 document.getElementById('heart9').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl9.textContent = heartCount 
    

 })


//  call function
const callHistoryData = []
let coinCount = 100;
const callHistoryEl = document.getElementById('call-history')
const coinCountEl1 = document.getElementById('coin-count')
document.getElementById('call1').addEventListener('click',function(){
if(coinCount<20){
        alert('Not enough coin to call!');
        return ;
    }
    coinCount-=20;
    coinCountEl1.textContent = coinCount;
    alert('Calling National Emergency - 999')

    
       
   
})


const coinCountEl2 = document.getElementById('coin-count')
document.getElementById('call2').addEventListener('click',function(){
if(coinCount<20){
        alert('Not enough coin to call!');
        return ;
    }
    coinCount-=20;
    coinCountEl2.textContent = coinCount;
    alert('Calling to Police Helpline - 999')
    
})
const coinCountEl3 = document.getElementById('coin-count')
document.getElementById('call3').addEventListener('click',function(){
if(coinCount<20){
        alert('Not enough coin to call!');
        return ;
    }
    coinCount-=20;
    coinCountEl3.textContent = coinCount;
    alert('Calling for Fire Service - 999')
    
})
const coinCountEl4 = document.getElementById('coin-count')
document.getElementById('call4').addEventListener('click',function(){
if(coinCount<20){
        alert('Not enough coin to call!');
        return ;
    }
    coinCount-=20;
    coinCountEl4.textContent = coinCount;
    alert('Calling for Ambulance - 1994-999999')
    
})
const coinCountEl5 = document.getElementById('coin-count')
document.getElementById('call5').addEventListener('click',function(){
if(coinCount<20){
        alert('Not enough coin to call!');
        return ;
    }
    coinCount-=20;
    coinCountEl5.textContent = coinCount;
    alert('Calling to Women and child helpline - 109')
    
})
const coinCountEl6 = document.getElementById('coin-count')
document.getElementById('call6').addEventListener('click',function(){
if(coinCount<20){
        alert('Not enough coin to call!');
        return ;
    }
    coinCount-=20;
    coinCountEl6.textContent = coinCount;
    alert('Calling to Anti-corruption helpline - 106')
    
})
const coinCountEl7 = document.getElementById('coin-count')
document.getElementById('call7').addEventListener('click',function(){
if(coinCount<20){
        alert('Not enough coin to call!');
        return ;
    }
    coinCount-=20;
    coinCountEl7.textContent = coinCount;
    alert('Calling to Electricity Helpline - 16276')
    
})
const coinCountEl8 = document.getElementById('coin-count')
document.getElementById('call8').addEventListener('click',function(){
if(coinCount<20){
        alert('Not enough coin to call!');
        return ;
    }
    coinCount-=20;
    coinCountEl8.textContent = coinCount;
    alert('Calling to Brac helpline - 16445')
    
})
const coinCountEl9 = document.getElementById('coin-count')
document.getElementById('call9').addEventListener('click',function(){
if(coinCount<20){
        alert('Not enough coin to call!');
        return ;
    }
    coinCount-=20;
    coinCountEl9.textContent = coinCount;
    alert('Calling to Bangladesh railway helpline - i63')

   
    
})
// text copy
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text-copy1');
    const copyButton = document.getElementById('copy-btn1'); 
    const copyCountElement = document.getElementById('copy-count');
    let copyCount = 0;

    copyButton.addEventListener('click', async () => {
        const textToCopy = textElement.innerText;

        try {
            await navigator.clipboard.writeText(textToCopy);
            copyCount++;
            copyCountElement.innerText = copyCount;
            alert('Text copied! ');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text. Please try again.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text-copy2');
    const copyButton = document.getElementById('copy-btn2'); 
    const copyCountElement = document.getElementById('copy-count');
    let copyCount = 0;

    copyButton.addEventListener('click', async () => {
        const textToCopy = textElement.innerText;

        try {
            await navigator.clipboard.writeText(textToCopy);
            copyCount++;
            copyCountElement.innerText = copyCount;
            alert('Text copied! ');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text. Please try again.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text-copy3');
    const copyButton = document.getElementById('copy-btn3'); 
    const copyCountElement = document.getElementById('copy-count');
    let copyCount = 0;

    copyButton.addEventListener('click', async () => {
        const textToCopy = textElement.innerText;

        try {
            await navigator.clipboard.writeText(textToCopy);
            copyCount++;
            copyCountElement.innerText = copyCount;
            alert('Text copied! ');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text. Please try again.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text-copy4');
    const copyButton = document.getElementById('copy-btn4'); 
    const copyCountElement = document.getElementById('copy-count');
    let copyCount = 0;

    copyButton.addEventListener('click', async () => {
        const textToCopy = textElement.innerText;

        try {
            await navigator.clipboard.writeText(textToCopy);
            copyCount++;
            copyCountElement.innerText = copyCount;
            alert('Text copied! ');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text. Please try again.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text-copy5');
    const copyButton = document.getElementById('copy-btn5'); 
    const copyCountElement = document.getElementById('copy-count');
    let copyCount = 0;

    copyButton.addEventListener('click', async () => {
        const textToCopy = textElement.innerText;

        try {
            await navigator.clipboard.writeText(textToCopy);
            copyCount++;
            copyCountElement.innerText = copyCount;
            alert('Text copied! ');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text. Please try again.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text-copy6');
    const copyButton = document.getElementById('copy-btn6'); 
    const copyCountElement = document.getElementById('copy-count');
    let copyCount = 0;

    copyButton.addEventListener('click', async () => {
        const textToCopy = textElement.innerText;

        try {
            await navigator.clipboard.writeText(textToCopy);
            copyCount++;
            copyCountElement.innerText = copyCount;
            alert('Text copied! ');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text. Please try again.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text-copy7');
    const copyButton = document.getElementById('copy-btn7'); 
    const copyCountElement = document.getElementById('copy-count');
    let copyCount = 0;

    copyButton.addEventListener('click', async () => {
        const textToCopy = textElement.innerText;

        try {
            await navigator.clipboard.writeText(textToCopy);
            copyCount++;
            copyCountElement.innerText = copyCount;
            alert('Text copied! ');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text. Please try again.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text-copy8');
    const copyButton = document.getElementById('copy-btn8'); 
    const copyCountElement = document.getElementById('copy-count');
    let copyCount = 0;

    copyButton.addEventListener('click', async () => {
        const textToCopy = textElement.innerText;

        try {
            await navigator.clipboard.writeText(textToCopy);
            copyCount++;
            copyCountElement.innerText = copyCount;
            alert('Text copied! ');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text. Please try again.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('text-copy9');
    const copyButton = document.getElementById('copy-btn9'); 
    const copyCountElement = document.getElementById('copy-count');
    let copyCount = 0;

    copyButton.addEventListener('click', async () => {
        const textToCopy = textElement.innerText;

        try {
            await navigator.clipboard.writeText(textToCopy);
            copyCount++;
            copyCountElement.innerText = copyCount;
            alert('Text copied! ');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text. Please try again.');
        }
    });
});
    
    


