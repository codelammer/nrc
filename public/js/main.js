const _getEl = (el) => {
   return document.getElementById(el);
}

let headerNav = _getEl('header');
let navAnchorTags = document.querySelector("#nav-list").querySelectorAll("a");
let currentLoc = location.href;
let slidesWrapper = _getEl('slides-wrapper');


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
let vw = `${window.innerWidth * 0.01}px`;
console.log(window.innerWidth);


document.documentElement.style.setProperty("--vh", vh);
document.documentElement.style.setProperty("--hH", hH);
document.documentElement.style.setProperty("--vw", vw);


window.addEventListener('resize', ()=>{
    let vh = `${window.innerHeight * 0.01}px`;
    document.documentElement.style.setProperty("--vh", vh);
    document.documentElement.style.setProperty("--hH", hH);
    document.documentElement.style.setProperty("--vw", vw);
});

//carouselle
let position = 0;
let counter = 1;


const nextSlider = () => {
    if (counter !== slidesWrapper.children.length) {
        console.log(`counter is: ${counter}`);
        console.log(`slides wrapper length is: ${slidesWrapper.children.length}`);
        slidesWrapper.style.transform = `translateX(-${window.innerWidth * counter}px)`;
        counter++;        
    }else{
        console.log(`reset the counter and the inner width is ${window.innerWidth * (counter - 1)}`);
        slidesWrapper.style.transform = `none`;
        counter = 1;         
    }
}
const prevSlider = () => {
    console.log(`from prev..the counter is at: ${counter}`);
    if (counter !== 1) {
        counter--;        
        console.log(`prev..the counter is at: ${counter}`);
        console.log(`prev slides wrapper length is: ${slidesWrapper.children.length} and the inner width is: ${window.innerWidth}`);
        slidesWrapper.style.transform = `translateX(-${window.innerWidth * counter}px)`;
    }else{
        
        counter = slidesWrapper.children.length -1;         
        slidesWrapper.style.transform = `translateX(-${window.innerWidth * counter}px)`;
    }
}


















if (window.location.href.indexOf("index") > -1) {

    //timer code start
    const finaleDate = new Date("December 21, 2021 00:00:00").getTime();
    
    const timer = () =>{
        const now = new Date().getTime();
        let diff = finaleDate - now;
        if(diff < 0){
            document.querySelector('.alert').style.display = 'block';
            document.querySelector('.container').style.display = 'none';
        }
        let months = Math.floor(diff / (1000*60*60*24*30));
        let days = Math.floor(diff / (1000*60*60*24));
        let hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
        let minutes = Math.floor(diff % (1000*60*60)/ (1000*60));
        let seconds = Math.floor(diff % (1000*60) / 1000);
    
        days <= 99 ? days = `0${days}` : days;
        days <= 9 ? days = `00${days}` : days;
        hours <= 9 ? hours = `0${hours}` : hours;
        minutes <= 9 ? minutes = `0${minutes}` : minutes;
        seconds <= 9 ? seconds = `0${seconds}` : seconds;   
    
        document.querySelector('#months').textContent = months;
        document.querySelector('#days').textContent = days;
        document.querySelector('#hours').textContent = hours;
        document.querySelector('#minutes').textContent = minutes;
        document.querySelector('#seconds').textContent = seconds;
    
    }
    timer();
    setInterval(timer,1000);
    
    //timer end code
}


























document.addEventListener("DOMContentLoaded", () => {
    setInterval(nextSlider, 5000);
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


//pull items from the dom only if in the donate page
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

    let oneTimeWrapper = _getEl('oneTimeWrap');
    let monthlyWrapper = _getEl('monthlyWrap');
    let oneTimeB = _getEl('oneTimeB');
    let monthlyB = _getEl('monthlyB');

    console.log("im in the donate page");

    //by default check the one time button


    oneTimeB.addEventListener('click', ()=>{
        if (oneTimeB.checked) {
            oneTimeWrapper.style.display = "flex";
            monthlyWrapper.style.display = "none";
            console.log('checked onetime');
        }
        else {
            monthlyWrapper.style.display = "flex";
            oneTimeWrapper.style.display = "none";
            console.log('checked monthly');
        }
    });
    monthlyB.addEventListener('click', ()=>{
        if (oneTimeB.checked) {
            oneTimeWrapper.style.display = "flex";
            monthlyWrapper.style.display = "none";
            console.log('checked onetime');
        }
        else {
            monthlyWrapper.style.display = "flex";
            oneTimeWrapper.style.display = "none";
            console.log('checked monthly');
        }
    });






}










//pull items from the dom only if in the select_stand page
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

    //remove the unchecked item
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




    //add event listener to all those stands so that on select handle event
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
    //      when submitting the form check this array => checkedStands
    //      use that array as it contains all the selected stands 
        
    //     console.log();
    // }



}



