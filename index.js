var quote1=['"Do not take life too seriously. You will not get out alive."', '"You miss 100% of the shots you do not take."','"Do not take life too seriously. You will not get out alive."','"The best revenge is massive success."','"Resentment is like drinking poison and waiting for your enemies to die."'];
var quote2=["--Elbert Hubbard","--Wayne Gretzy","--Elbert Hubbard","--Frank Sinatra","--Nelson Mandela"];

function changeQuote(){
   var palyQoute=Math.floor(Math.random()*quote1.length)
   document.getElementById("Quote1").innerHTML=quote1[palyQoute]
   document.getElementById("Quote2").innerHTML=quote2[palyQoute]
   change();
} 

function change(){
   document.getElementById("ok").classList.replace("text-black","text-primary");
}