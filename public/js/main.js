const _getEl = (el) => {
   return document.getElementById(el);
}

let headerNav = _getEl('header');
let navList = _getEl('nav-list');


let hH = `${headerNav.offsetHeight * 0.01}px`;
let vh = `${window.innerHeight * 0.01}px`;
document.documentElement.style.setProperty("--vh", vh);
document.documentElement.style.setProperty("--hH", hH);


window.addEventListener('resize', ()=>{
    let vh = `${window.innerHeight * 0.01}px`;
    document.documentElement.style.setProperty("--vh", vh);
    document.documentElement.style.setProperty("--hH", hH);
    
});

// for (let i = 0; i < navList.children.length; i++) {
//     console.log(navList.children[i]);  
//     if (i == navList.children.length - 1) {


//         navList.children[i].addEventListener('click', () => {
//             console.log("li clicked");
//             navList.children[i].classList.add('active');   
//         });   
//     }  
// }





//add a loader before the document is ready


//  function domReady(fn) {
//     document.addEventListener("DOMContentLoaded", fn)
//     if (document.readyState === "interactive" || document.readyState === "complete" ) {
//       fn();
//     }
//   }





//pull items from the dom only if in the sign-up page
if (window.location.href.indexOf("sign-up") > -1) {
    let signInForm = _getEl('sign-in');
    let signUpForm = _getEl('sign-up');
    let signUpBtn = _getEl('sign-up-btn-redirect');
    let signInBtn = _getEl('sign-in-btn-redirect');




    //hide signUp form
    signUpBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        signInForm.style.display = "none";
        signUpForm.style.display = "flex";
    });
    //hide signIn form
    signInBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        signUpForm.style.display = "none";
        signInForm.style.display = "flex";
    });

}


