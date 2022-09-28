
// this is for responsive navbar 
const mobile_nav = document.querySelector('.mobile-nav-btn');
const header_nav = document.querySelector('.header')
mobile_nav.addEventListener("click", ()=>{
    header_nav.classList.toggle('active')
})

// this code for creating button 
const p_btns = document.querySelector(".p-btns");
const p_btn= document.querySelectorAll('.p-btn');
const heroelm = document.querySelector('.section-hero');
// console.log(heroelm);
const img_elm = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click', (e)=>{
    p_btn_click = e.target;
    if(!p_btn_click.classList.contains("p-btn")) return;
    p_btn.forEach((currelm)=>{
        currelm.classList.remove("p-btn-active");
    });
    p_btn_click.classList.add("p-btn-active");
    const btn_num =p_btn_click.dataset.btnNum;
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    img_elm.forEach((currelm)=>{
        currelm.classList.add('p-btn-not-active');
    });
    img_active.forEach((currelm)=>{
        currelm.classList.remove('p-btn-not-active');
     
    })});
    
    
//     const hero_elm = document.getElementsByClassName('section-header');
    
//         const footer_elm = document.querySelector('.section-footer');
//         const anchertage = document.createAttribute('a');
//         scroll_elmanchertage.document.createElement("div");
//         scroll_elm.classList.add("scroll-top-div");
//         scroll_elm.innerHTML = `<ion-icon  name="arrow-up-outline"></ion-icon>`
        
//         footer_elm.after(scroll_elm);
// const scroll_top = ()=> {
//     hero_elm.scrollIntoView =({behaviour : "smooth"})
// };
// scroll_elm.addEventListener("click", scroll_top);

// animated 

const counter_num = document.querySelectorAll('.counter-number')
const speed = 200;
counter_num.forEach((currelm)=>{
    const updatenum=()=>{
        const targetnum = parseInt(currelm.dataset.number)
        // console.log(targetnum)
        const intialnum = parseInt(currelm.innerText)
        // console.log(intialnum);
        const incrementnum = Math.trunc(targetnum/speed)
        // console.log(incrementnum)
        if(intialnum<targetnum){
            currelm.innerText =`${intialnum+incrementnum}+`;
            setTimeout(updatenum, 10)
        }
    };
    updatenum();
});
