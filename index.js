const about = document.querySelector('.web-aboutcontent');
const webContact = document.querySelector('.web-contact');
const webAbout = [{id: 1, content : 'Get your ready made WEBSITE with a little cost.'}, {id: 2, content : 'Get us build a scalable, functional and efficient WEB APPLICATION for your brand at a go.'}, {id: 3, content : 'With MY WEBSITE you can get your MOBILE APPLICATION built and live on playstore for commercial use.'}];
const subscription = document.querySelectorAll('.web-subscription');
const toggle = document.querySelector('.web-toggle');
const webFeatureParentdiv = document.querySelector('.web-features');
const webFaq = document.querySelector('.web-faqs');

let display = false;
let div = document.createElement('div');
let idIndex = 0;
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
            }
            updateSubscription('standard');
        }
    }   
})  
})
toggle.addEventListener('click', function showHide(){
    display =! display;
    if(display){
        toggle.textContent = 'close';
        div.style.visibility = 'visibe';
        subscription.forEach((plan)=>{
            if(plan.textContent == 'Standard'){
                updateSubscription('standard');
            }
            updateSubscription('premium');
        } )
    }else{
        toggle.textContent = 'open';
        subscription.forEach(plan=>{
            if(plan.textContent == 'Premium' || plan.textContent == 'Standard'){
                div.textContent = null;
            }
        })
        
    }
})


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
        <button>Buy now</button>
        `
        div.innerHTML = webFeatureslist;
        webFeatureParentdiv.append(div);
    }else{
        price.textContent = '#50,000';
        div.classList.add('features');
        const webFeatureslist = 
        `<ol>
        <li>Ability to make changes to website design and also make unlimited changes offers by our developer</li>
        <li>No charges for future and advance changes on the website</li>
        <li>Once bought you are the sole owner of the website.</li>
        <li>Access to FAQS features on the wesite</li>
        <li>Easy access to connect your communication line e.g (WhatsApp, Email and any other service platform)</li></ol>
        <button>Buy now</button>
        `
        div.innerHTML = webFeatureslist;
        webFeatureParentdiv.append(div)
        }  
}

const faqs = [{id: 1, question: "What is my website", answer : ""},{id: 2, question: "What does my webite have to offer", answer: ""},{id: 1, question: "What is my website", answer : ""},{id: 1, question: "What is my website", answer: ""},{id: 1, question: "What is my website",  answer: ""},]
faqs.forEach((faq)=>{
    let question = document.createElement('div');
    question.classList.add('questions');
    const answer = 'answer';
    const option = 'question';
    const questions = 
    `<h6 class=${option}>${faq.question}</h6>
    <span class= ${answer}>${faq.answer}</span>`;
    question.innerHTML = questions;
    webFaq.append(question);
})

// h6.forEach(answer => {
//     answer.addEventListener('click', function showAnswer(){
//         console.log('me')
//         faqs.forEach((f, index)=>{
//             idIndex = f[index].id;
//             if(f[index].id == idIndex){
//                 console.log('correct');
//             }
//         })
//     })
// });