const btn1=document.querySelector(".btn");
const btn2=document.querySelector("#btn2");
const score=document.querySelector("#score");
const dialog=document.querySelector(".dialoge");

btn1.addEventListener('click',()=>{
    const score=Math.floor(Math.random()*11);
    dialog.showModal();
    securedPoints(score);

})

const securedPoints=(ptn)=>{
    score.textContent=`You secured ${ptn}/10`

}