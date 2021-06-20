const _getEl = (el) => {
   return document.getElementById(el);
}

let headerNav = _getEl('header');
let navAnchorTags = document.querySelector("#nav-list").querySelectorAll("a");
let currentLoc = location.href;

navAnchorTags.forEach((element) => {
    console.log(element.href);
    if(element.href == currentLoc){   
        element.classList.add('active');
    }else{
        element.classList.remove('active');
    }
});


//change active class
let hH = `${headerNav.offsetHeight * 0.01}px`;
let vh = `${window.innerHeight * 0.01}px`;
document.documentElement.style.setProperty("--vh", vh);
document.documentElement.style.setProperty("--hH", hH);


window.addEventListener('resize', ()=>{
    let vh = `${window.innerHeight * 0.01}px`;
    document.documentElement.style.setProperty("--vh", vh);
    document.documentElement.style.setProperty("--hH", hH);
    
});






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



if (window.location.href.indexOf("donate") > -1) {
    
    paypal.Buttons(
        {
            style: {
                color: 'blue',
            },
    
            createOrder: function(data, actions) {
                // This function sets up the details of the transaction, including the amount and line item details.
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: `50`
                    }
                  }]
                });
            },
    
            onApprove: function(data, actions) {
                // This function captures the funds from the transaction.
                return actions.order.capture().then(function(details) {
                    console.log(details);
                    // This function shows a transaction success message to your buyer.
                    alert('Transaction completed by ' + details.payer.name.given_name);
                });
            }
    
        }
    ).render('#paypal-button');
}



