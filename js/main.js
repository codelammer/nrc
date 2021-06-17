const _getEl = (el) => {
   return document.getElementById(el);
}
let headerNav = _getEl('header');



let hH = `${headerNav.offsetHeight * 0.01}px`;
let vh = `${window.innerHeight * 0.01}px`;
document.documentElement.style.setProperty("--vh", vh);
document.documentElement.style.setProperty("--hH", hH);


window.addEventListener('resize', ()=>{
    let hH = `${mainDiv.offsetHeight * 0.01}px`;
    let vh = `${window.innerHeight * 0.01}px`;
    document.documentElement.style.setProperty("--vh", vh);
    document.documentElement.style.setProperty("--hH", hH);
    
});