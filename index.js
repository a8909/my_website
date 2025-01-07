const about = document.querySelector('.web-aboutcontent');
const webContact = document.querySelector('.web-contact');
const webAbout = [{id: 1, content : 'Get your ready made WEBSITE with a little cost.'}, {id: 2, content : 'Get us build a scalable, functional and efficient WEB APPLICATION for your brand at a go.'}, {id: 3, content : 'With MY WEBSITE you can get your MOBILE APPLICATION built and live on playstore for commercial use.'}];
const subscription = document.querySelectorAll('.web-subscription');
const toggle = document.querySelector('.web-toggle');
const webFeatureParentdiv = document.querySelector('.web-features');
const webFaq = document.querySelector('.web-faqs');
const backdrop = document.querySelector('.web-modalcontainer');
const aboutContainer = document.querySelector('.web-about');
const modalBody = document.querySelector('.modal-bdy');
let displayAnswer = false;

let display = false;
let div = document.createElement('div');
let idIndex = {};

//This is used to target the scroll using getBoundingClientReact(),
//if the react.top <= window.innerHeight means the element top is below the window inner height the effect come alive
// and when the react.bottom >- 0 the effect leaves and this function needs to be called inside handleScroll
//handleScroll add and remove the style based on scroll
//window.addeventlistenerlisten to scroll and then call handleScroll for the function to come alive
//document.addevenlitener is call when the DOM load the content is called and when called it triggers the  handleScroll function
function isElementInView(elemment){
    const react = elemment.getBoundingClientRect();
    return react.top <=  window.innerHeight && react.bottom >= 0;
}
function handleScroll(){
    const aboutUs = document.querySelector('#about');
    const webMore = aboutUs.querySelector('.web-more');
    if(isElementInView(aboutUs)){
        webMore.classList.add('slideIn');
        webMore.classList.remove('fade-out')
    }else{
        webMore.classList.add('fade-out');
        webMore.classList.remove('slideIn');
    }
}
window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);

// This populate the about us
webAbout.forEach((w) => {
    const aboutItem = document.createElement('div');
    aboutItem.classList.add('web-aboutitem')
    const aboutContent = 
    `<h4 class='web-aboutid'>${w.id}</h4>
    <p class='web-abouttxt'>${w.content}</p>`;
    aboutItem.innerHTML = aboutContent;
    about.append(aboutItem)
});

//This makes a slide in effect if placed on an object
window.addEventListener('load', onAnimate());
function onAnimate() {
    const webContent = document.querySelector('.web-innercontent');
    webContent.classList.add('slideIn');
}
//This make the whatsapp link active if clicked.
webContact.addEventListener('click',function directToWhatsapp(){
    const whatsappUrl = 'https://wa.me/qr/TZVWNZ7JYEP6M1';
    window.open(whatsappUrl);
});
//scroll function is used for adjusting the whatsapp image on scroll event 
window.addEventListener('scroll', function move(){
     setInterval(() => {
        webContact.classList.add('shift');
    }, 1000);
    const webMore = document.querySelector('.web-more');
    if(webMore.scr)
    this.clearInterval(2000);
    webContact.classList.remove('shift');
})
subscription.forEach((plan) => {
    plan.addEventListener('click', function checkSubscription(){
        // This line checks if the click event is premium
        //if premium it checks again if the premium has the class .standard, which by defualt it has
        //if the click is standard then it remove the standard class from premium and add it to his, and vice-versa.
    if(plan.textContent === 'Standard'){
        let standard = document.querySelector('.web-subscription');
        let premium = document.querySelector('.web-subscription.standard');
        if (premium){
            premium.classList.remove('standard');
            standard.classList.add('standard');
            backdrop.classList.remove('modal-display')
            aboutContainer.classList.remove('more-margin')
            updateSubscription('standard');
        }
    }else{
        if(plan.textContent === 'Premium'){
            plan.classList.add('standard');
            let standard = document.querySelector('.web-subscription.standard');
            if (standard){
                standard.classList.remove('standard');
                plan.classList.add('standard');
                backdrop.classList.remove('modal-display');
                aboutContainer.classList.remove('more-margin');
            }
            updateSubscription('premium');
        }
    }   
})  
})


//function here checkes as click event is active for standard/premium and it update the content
//with respect to the value (if standard/premium).

function standardModal(){
    backdrop.classList.add('modal-display');
    aboutContainer.classList.add('more-margin');  
}
function premiumModal(){
    backdrop.classList.add('modal-display');
    aboutContainer.classList.add('more-margin');  
}
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
        webFeatureParentdiv.appendChild(div);

function updateSubscription(subcriptionPacakge){
    let price = document.querySelector('.web-amount');
    if(subcriptionPacakge == 'standard'){
        price.textContent = '#30,000';
        div.classList.add('features');
        const featuresIncluded = document.createElement('div');
        featuresIncluded.classList.add('feature-include');
        const h6 = document.createElement('h6');
        h6.textContent = "Features included:";
        featuresIncluded.appendChild(h6);
        const webFeatureslist = 
        `<ol>
        <li>Ability to change bought website template for free first time</li>
        <li>Good user experience and feels for all user across all screen</li>
        <li>Once bought you are the sole owner of the website.</li></ol>
        <button class='${subscriptionbtn}'>Show Templates</button>
        `
        div.innerHTML = webFeatureslist;
        webFeatureParentdiv.innerHTML = '';
        webFeatureParentdiv.appendChild(featuresIncluded);
        webFeatureParentdiv.appendChild(div);

        const premimShowtemplate = document.querySelector('.sub-btn');
        premimShowtemplate.addEventListener("click", premiumModal );

    }else{
        price.textContent = '#50,000';
        div.classList.add('features');
        const standardbtn = 'std-btn';
        const featuresIncluded = document.createElement('div');
        featuresIncluded.classList.add('feature-include');
        const h6 = document.createElement('h6');
        h6.textContent = "Features included:";
        featuresIncluded.appendChild(h6);
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
        webFeatureParentdiv.innerHTML = '';
        webFeatureParentdiv.appendChild(featuresIncluded);
        webFeatureParentdiv.appendChild(div);
        const premiumShowtemplate = document.querySelector('.std-btn');
        premiumShowtemplate.addEventListener("click", premiumModal );
        
        }  
}

//This button is check to display modal, check if standard/premium 
const standardShowtemplate = document.querySelector('.sub-btn');
standardShowtemplate.addEventListener("click", standardModal );



//This is for the faqs
const faqs = [
    {id: 1, question: "What is MY WEBSITE ?", answer : "MY WEBITE is a wesite where you can buy your fully made & ready to use wesite, webApp and mobile App at a very minimal price."},
    {id: 2, question: "What does my webite have to offer ?", answer: "Fully made and ready to use website for all businesses, webApp and mobile App for all businesses."},
    {id: 3, question: "How do i get my brand design inserted into the template after buying ?", answer : "After a template is bought and payment is made, at the bottom right of the website click the whatsapp logo to notify MY WEBSITE, after which you get to send your brand logo, color and other neccessary features of the template feature you bought."},
    {id: 4, question: "How will my bought website be deloyed ?", answer: "You will have to buy a domain for deployement from MY WEBSITE, after which notify MY WEBITE to deploy it for you."},
    {id: 5, question: "After my bought website expired what next ?",  answer: "After expiration of the domain subscription it is required for the owner to renue."},
    {id: 6, question: "Who will be maintainig the webite after buying ?",  answer: "MY WEBSITE is to do that with additional charges."},
    {id: 7, question: "How do i renew my domain plan ?",  answer: "Make use of the whatsapp logo at the bottom right of MY WEBSITE to notify MY WEBSITE, you will be required the brand name, domain of the brand before renewal"},
]

//loop through faqs array, then create a div that will wrap each questin, answer
//first it add a questions class to the question div and set attribute
//set attribute is been used to retrive the index of the array and display the answer, of the clicked question.  
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
});

//loop through all the questions to get each answer.
//listen to click, if click the displayAnswer is a boolean which act with respect to click event
//if true,it get the attribute of the question to display the answer otherwise it coses the answer
const faqQuestions = document.querySelectorAll('.questions');
faqQuestions.forEach(answer => {
    answer.addEventListener('click', function showAnswer(){
        displayAnswer =! displayAnswer
        let displayFaqAnswer = answer.querySelector('.answer');
        if(displayAnswer){
             const index = answer.getAttribute('faqIndex');
            idIndex = faqs[index];
            
            if(idIndex == faqs[index]){
                displayFaqAnswer.classList.add('show');
            }
        }else{
            displayFaqAnswer.classList.remove('show');
        }
    })
});


//This request should be coming from an end point not doing it like this 
//This list here is meant to display all website template image from backEnd.
const templateImages = [
    {id: 1, tempImg: "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif"},
    {id: 2, tempImg: "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif"},
    {id: 3, tempImg: "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif"},
    {id: 4, tempImg: "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif"},
    {id: 5, tempImg: "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif"},
    {id: 6, tempImg: "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif"},
    {id: 7, tempImg: "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif"},
    {id: 8, tempImg: "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif"},
    {id: 9, tempImg: "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif"},
    {id: 10, tempImg: "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif"},
]

const modalContent = document.querySelector('.modal-content');

templateImages.forEach((image, identifier)=>{
    let templatDiv = document.createElement('div');
    templatDiv.classList.add('template-div')
    templatDiv.setAttribute('unique', identifier);
    
    const cls = 'template-img';
    const imgTag = `<img class="${cls}" src="${image.tempImg}" alt="template image">`;
    templatDiv.innerHTML = imgTag;
    modalContent.append(templatDiv);
})

// standardShowtemplate.addEventListener('click', showTemplate('premim'));
//This closes the modal
const close = document.querySelectorAll('.close');
close.forEach((c)=>{
    c.addEventListener('click', function closeModal(){
    backdrop.classList.remove('modal-display');
    aboutContainer.classList.remove('more-margin');
});
})



//This will preview the template imaages.
 const eachTempImg = document.querySelectorAll('.template-div');
    eachTempImg.forEach((i)=>{
        i.addEventListener('click', function review(){
            const identifier = i.getAttribute('unique');
            idIndex = i[identifier];
            if(idIndex == i[identifier]){
                const template = document.querySelectorAll('.template-div');
                template.forEach((t)=>{
                    t.classList.add('invisible');
                })
                const image =  i.querySelector('.template-img');
                //on preview take me to another page for preview main aim 
                //preview the template image and go back to previous page
                let imagePreviewDiv = document.createElement('div');
                imagePreviewDiv.classList.add('image-template');
                const goBacktext = document.createElement('p');
                goBacktext.classList.add('go-back');
                goBacktext.textContent = 'Go back';
                imagePreviewDiv.appendChild(goBacktext);
                image.classList.add('expand');
                imagePreviewDiv.appendChild(image.cloneNode(true));
                modalContent.appendChild(imagePreviewDiv);
                const goBack = document.querySelector('.go-back');
                goBack.addEventListener('click', previousPage);
                
            }
        })
    })

    function previousPage(){
        const template = document.querySelectorAll('.template-div');
        const imageTemplate = document.querySelector('.image-template');
            template.forEach((t)=>{
                t.classList.remove('invisible');
            });
            imageTemplate.classList.add('invisible');
            imageTemplate.remove();
    }