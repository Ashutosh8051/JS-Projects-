const body=document.body;
const btn =document.querySelector(".btn");
console.log(btn);
const currentColor=document.querySelector(".currentcolor");
btn.addEventListener("click",()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    body.style.backgroundColor=`rgb(${red},${blue},${green})`;
    currentColor.textContent=`(${red},${blue},${green})`;
})