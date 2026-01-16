let count1=0
let count2=0
let homeCount=document.getElementById("homecount")
let guestCount=document.getElementById("guestcount")
function increment1H(){
  count1+=1
  homeCount.textContent=count1;
}
function increment2H(){
  count1+=2
  homeCount.textContent=count1;
}
function increment3H(){
  count1+=3
  homeCount.textContent=count1;
}
function increment1G(){
  count2+=1
  guestCount.textContent=count2;
}
function increment2G(){
  count2+=2
  guestCount.textContent=count2;
}
function increment3G(){
  count2+=3
  guestCount.textContent=count2;
}