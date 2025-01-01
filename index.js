const about = document.querySelector('.web-aboutcontent');
const webContact = document.querySelector('.web-contact');
const webAbout = [{id: 1, content : 'Get your ready made WEBSITE with a little cost.'}, {id: 2, content : 'Get us build a scalable, functional and efficient WEB APPLICATION for your brand at a go.'}, {id: 3, content : 'With MY WEBSITE you can get your MOBILE APPLICATION built and live on playstore for commercial use.'}];
const subscription = document.querySelectorAll('.web-subscription');
const toggle = document.querySelector('.web-toggle');
const webFeatureParentdiv = document.querySelector('.web-features');
const webFaq = document.querySelector('.web-faqs');

let display = false;
let div = document.createElement('div');
let idIndex = {};
webAbout.forEach((w) => {
    const aboutItem = document.createElement('div');
    aboutItem.classList.add('web-aboutitem')
    const aboutContent = 
    `<h4 class='web-aboutid'>${w.id}</h4>
    <p class='web-abouttxt'>${w.content}</p>`;
    aboutItem.innerHTML = aboutContent;
    about.append(aboutItem)
});
window.addEventListener('load', onAnimate());
function onAnimate() {
    const webContent = document.querySelector('.web-innercontent');
    webContent.classList.add('slideIn');
}
webContact.addEventListener('click',function directToWhatsapp(){
    const whatsappUrl = 'https://wa.me/qr/TZVWNZ7JYEP6M1';
    window.open(whatsappUrl);
});
window.addEventListener('scroll', function move(){
     setInterval(() => {
        webContact.classList.add('shift');
    }, 1000);
    this.clearInterval(2000);
    webContact.classList.remove('shift');
})
subscription.forEach((plan) => {
    plan.addEventListener('click', function checkSubscription(){
    if(plan.textContent === 'Premium'){
        let premium = document.querySelector('.web-subscription');
        let standard = document.querySelector('.web-subscription.standard');
        if (standard){
            standard.classList.remove('standard');
            premium.classList.add('standard');
            updateSubscription('premium');
        }
    }else{
        if(plan.textContent === 'Standard'){
            plan.classList.add('standard');
            let premium = document.querySelector('.web-subscription.standard');
            if (premium){
                premium.classList.remove('standard');
                plan.classList.add('standard');
            }
            updateSubscription('standard');
        }
    }   
})  
})
// toggle.addEventListener('click', function showHide(){
//     display =! display;
//     if(display){
//         toggle.textContent = 'close';
//         div.style.visibility = 'visibe';
//         subscription.forEach((plan)=>{
//             if(plan.textContent == 'Standard'){
//                 console.log('standard is called');
//                 updateSubscription('standard');
//             }else{
//                 console.log(true)
//                 updateSubscription('premium');
//             }
//         } )
//     }else{
//         toggle.textContent = 'open';
//         subscription.forEach(plan=>{
//             if(plan.textContent == 'Premium' ){
//                 div.textContent = null;
//             }
//         })
        
//     }
// })

div.classList.add('features');
const subscriptionbtn = 'sub-btn';
const webFeatureslist = 
        `<ol>
        <li>Ability to change bought website template for free first time</li>
        <li>Good user experience and feels for all user across all screen</li>
        <li>Once bought you are the sole owner of the website.</li></ol>
        <button class='${subscriptionbtn}'>Show Templates</button>
        `
        div.innerHTML = webFeatureslist;
        webFeatureParentdiv.append(div);

function updateSubscription(subcriptionPacakge){
    let price = document.querySelector('.web-amount');
    if(subcriptionPacakge == 'premium'){
        price.textContent = '#10,000';
        div.classList.add('features');
        const webFeatureslist = 
        `<ol>
        <li>Ability to change bought website template for free first time</li>
        <li>Good user experience and feels for all user across all screen</li>
        <li>Once bought you are the sole owner of the website.</li></ol>
        <button class='${subscriptionbtn}'>Show Templates</button>
        `
        div.innerHTML = webFeatureslist;
        webFeatureParentdiv.append(div);
    }else{
        price.textContent = '#50,000';
        div.classList.add('features');
        const standardbtn = 'std-btn'
        const webFeatureslist = 
        `<ol>
        <li>Ability to make changes to website design and also make unlimited changes offers by our developer</li>
        <li>No charges for future and advance changes on the website</li>
        <li>Once bought you are the sole owner of the website.</li>
        <li>Access to FAQS features on the wesite</li>
        <li>Easy access to connect your communication line e.g (WhatsApp, Email and any other service platform)</li></ol>
        <button class='${standardbtn}'>Show Templates</button>
        `
        div.innerHTML = webFeatureslist;
        webFeatureParentdiv.append(div);
        
        }  
}


function showTemplate(subBtn){
    if(subBtn == 'premium'){
        console.log('premium');
    }else{
        console.log('standard');
    }
    
}
const premimShowtemplate = document.querySelector('.sub-btn');
const standardShowtemplate = document.querySelector('.std-btn');
premimShowtemplate.addEventListener("click", function premium(){
});
// standardShowtemplate.addEventListener('click', showTemplate('premim'));


const faqs = [
    {id: 1, question: "What is MY WEBSITE ?", answer : "MY WEBITE is a wesite where you can buy your fully made & ready to use wesite, webApp and mobile App at a very minimal price."},
    {id: 2, question: "What does my webite have to offer ?", answer: "Fully made and ready to use website for all businesses, webApp and mobile App for all businesses."},
    {id: 3, question: "How do i get my brand design inserted into the template after buying ?", answer : "After a template is bought and payment is made, at the bottom right of the website click the whatsapp logo to notify MY WEBSITE, after which you get to send your brand logo, color and other neccessary features of the template feature you bought."},
    {id: 4, question: "How will my bought website be deloyed ?", answer: "You will have to buy a domain for deployement from MY WEBSITE, after which notify MY WEBITE to deploy it for you."},
    {id: 5, question: "After my bought website expired what next ?",  answer: "After expiration of the domain subscription it is required for the owner to renue."},
    {id: 6, question: "Who will be maintainig the webite after buying ?",  answer: "MY WEBSITE is to do that with additional charges."},
    {id: 7, question: "How do i renew my domain plan ?",  answer: "Make use of the whatsapp logo at the bottom right of MY WEBSITE to notify MY WEBSITE, you will be required the brand name, domain of the brand before renewal"},
]
faqs.forEach((faq, index)=>{
    let question = document.createElement('div');
    question.classList.add('questions');
    question.setAttribute('faqIndex',index);
    const answer = 'answer';
    const option = 'question';
    const questions = 
    `<h6 class=${option}>${faq.question}</h6>
    <span class= ${answer}>${faq.answer}</span>`;
    question.innerHTML = questions;
    webFaq.append(question);
})

const faqQuestions = document.querySelectorAll('.questions');
faqQuestions.forEach(answer => {
    answer.addEventListener('click', function showAnswer(){
        const index = answer.getAttribute('faqIndex');
        idIndex = faqs[index];
        let displayFaqAnswer = answer.querySelector('.answer');
        if(idIndex == faqs[index]){
          displayFaqAnswer.classList.add('show');
        }
    })
});