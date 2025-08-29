// // heart count
 let heartCount = 0;
const heartCountEl1 = document.getElementById('heart-count')
 document.getElementById('heart1').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl1.textContent = heartCount 
     console.log(heartCount)

 })
const heartCountEl2 = document.getElementById('heart-count')
 document.getElementById('heart2').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl2.textContent = heartCount 
     console.log(heartCount)

 })
const heartCountEl3 = document.getElementById('heart-count')
 document.getElementById('heart3').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl3.textContent = heartCount 
     console.log(heartCount)

 })
const heartCountEl4 = document.getElementById('heart-count')
 document.getElementById('heart4').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl4.textContent = heartCount 
     console.log(heartCount)

 })
const heartCountEl5 = document.getElementById('heart-count')
 document.getElementById('heart5').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl5.textContent = heartCount
     console.log(heartCount)

 })
const heartCountEl6 = document.getElementById('heart-count')
 document.getElementById('heart6').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl6.textContent = heartCount
     console.log(heartCount)

 })
const heartCountEl7 = document.getElementById('heart-count')
 document.getElementById('heart7').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl7.textContent = heartCount
     console.log(heartCount)

 })
const heartCountEl8 = document.getElementById('heart-count')
 document.getElementById('heart8').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl8.textContent = heartCount 
     console.log(heartCount)

 })
const heartCountEl9 = document.getElementById('heart-count')
 document.getElementById('heart9').addEventListener('click',function(){
    
    heartCount++;
    heartCountEl9.textContent = heartCount 
     console.log(heartCount)

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

    const data ={
        name:'National Emergency number',
        Number:999,
        date:new Date ().toLocaleDateString()

    }
    callHistoryData.push(data);
       
   
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

    
    
// call history
