const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['voilet','indigo','blue','green','yellow','orange','red'];
body.style.backgroundColor='pink';
document.addEventListener('click',function(){
const colorindex=parseInt(Math.random()*color.length);
// console.log(color);
body.style.backgroundColor=color[colorindex];
    
});