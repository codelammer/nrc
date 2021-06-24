const _getEl = (el) => {
   return document.getElementById(el);
}

let headerNav = _getEl('header');
let navAnchorTags = document.querySelector("#nav-list").querySelectorAll("a");
let currentLoc = location.href;

//loop through the navigation tag so as to change the active navigation class
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


if (window.location.href.indexOf("select_stand") > -1) {
    let checkedStands = [];
    let checkedStandsDisplayWrapper = document.querySelector('#your-selections');


    let checkboxesElement = document.getElementsByTagName('input');
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')



    const appendCardSelection = (standValue) =>{
        checkedStandsDisplayWrapper.innerHTML += `

            <div class="selected-card">
                <p>${standValue}</p>
                <i class="fi-rr-cursor-finger"></i>
                <i class="fi-rr-add"></i>
            </div>
        
        `;

    }

    const deleteCardSelection = (value) =>{
        let checkedCountChildren = checkedStandsDisplayWrapper.children.length;
        
        for (let i = 0; i < checkedCountChildren; i++) {
            if(checkedStandsDisplayWrapper.children[i] != undefined){

                let checkedCountChildrenChildren = checkedStandsDisplayWrapper.children[i].children.length;

                for (let j = 0; j < checkedCountChildrenChildren; j++) {
                    if (checkedStandsDisplayWrapper.children[i] != undefined) {    
                        if(checkedStandsDisplayWrapper.children[i].children[0].textContent == value){
                            checkedStandsDisplayWrapper.children[i].remove(); 
                            checkedCountChildrenChildren--;
                        } 
                    }
                }
            }
        }




        
    }





    for (let i = 0; i < checkboxesElement.length; i++) {
        checkboxesElement[i].addEventListener('click', () => {
            if (checkboxesElement[i].checked) {
                checkedStands.push(checkboxesElement[i].value);
                appendCardSelection(checkboxesElement[i].value);
            }
            else if (!checkboxesElement[i].checked){
                for (let j = 0; j < checkedStands.length; j++) {
                    //remove array if unchecked
                    if (checkboxesElement[i].value == checkedStands[j]) {
                        checkedStands = checkedStands.filter(item => {
                            deleteCardSelection(checkboxesElement[i].value);
                            return item != checkboxesElement[i].value;
                        });
                    }
                }
            }
        });
    }
    

    // const handleForm = () => {
    //     let array = [];
        
    //     console.log();
    // }



}



