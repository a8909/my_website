const about = document.querySelector('.web-aboutcontent');
const webContact = document.querySelector('.web-contact');
const webAbout = [
    {id: 1, content : 'Affordable, Professional, and Ready to Go. Why pay more when you can get a fully functional, beautifully designed website at a fraction of the cost? At MY WEBSITE, we offer ready-made websites that are cost-effective, yet packed with all the features you need to succeed online.'},
    {id: 2, content : "At MY WEBSITE, we specialize in creating scalable and highly functional web applications tailored to your brand's needs. With our expertise, you’ll get a solution that’s not only efficient but also designed to grow with your business."},
    {id: 3, content : 'With MY WEBSITE, we make it easy to build your MOBILE APPLICATION and get it live on the Play Store. Whether you’re looking to reach customers, expand your brand, or offer services on the go, we’ll bring your app vision to life – ready for commercial use.'}];
const subscription = document.querySelectorAll('.web-subscription');
const toggle = document.querySelector('.web-toggle');
const webFeatureParentdiv = document.querySelector('.web-features');
const webFaq = document.querySelector('.web-faqs');
const backdrop = document.querySelector('.web-modalcontainer');
const aboutContainer = document.querySelector('.web-about');
const modalBody = document.querySelector('.modal-bdy');
const menuBar = document.querySelector('.menu-bar');
let displayAnswer = false;
let menu = false;

let div = document.createElement('div');
let idIndex = {};
let uploadData = true;



menuBar.addEventListener('click', function toggleMenu(){
    menu =! menu;
    const productList = document.querySelector('.product-list');
    const firstChild = document.querySelector('.first-child');
    const secondChild = document.querySelector('.second-child');
    const lastChild = document.querySelector('.last-child');
    if(menu){
        productList.classList.add('product-view');
        firstChild.classList.add('view');
        secondChild.classList.add('view-one');
        lastChild.classList.add('view-two');
    }else{
       productList.classList.remove('product-view');
        firstChild.classList.remove('view');
        secondChild.classList.remove('view-one');
        lastChild.classList.remove('view-two');
    }
})

function uploadModal() {
    //  const modalContainer = document.createElement('div');
     const uploadContainer = document.querySelector('.upload-container');
     uploadContainer.classList.add('modal-bdi');
     uploadContainer.classList.add('drag-down');
    //bootstrap upload data
    const modalbdy = document.createElement('div');
    const closeModal = document.createElement('div');
    modalbdy.classList.add('upload-bdy');
    const span = document.createElement('span');
    closeModal.classList.add('dismiss-modal');
    span.textContent = 'Close';
    span.classList.add('close');
    span.addEventListener('click', function closeUpload(){
        uploadContainer.classList.remove('modal-bdy');
        uploadContainer.classList.remove('drag-down');
        uploadContainer.innerHTML = '';
    })
    const form = document.createElement('form');
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('img-div');
    const imageInput = document.createElement('input');
    const image = document.createElement('img');
    image.classList.add('upload-img');
    const imageUploadtext = document.createElement('p');
    const uploadButton = document.createElement('button');
    imageInput.classList.add('img-input');
    imageInput.type = 'file'
    imageInput.accept = 'image/png';
    function onImageinput(e){
        e.preventDefault;
        const imageFile = e.target.files[0];
        if(imageFile){
            const imageUrl = URL.createObjectURL(imageFile);
            //set the url
            image.src = imageUrl;
            image.style.display = 'block';
            
        }
    }
    imageInput.addEventListener('change', onImageinput );
    imageUploadtext.textContent = 'Upload image';
    imageUploadtext.style.cursor = 'pointer';
    imageUploadtext.style.color = 'darkslategrey';
    imageUploadtext.style.fontWeight = 'bold';
    imageUploadtext.addEventListener('click', function (){
        imageInput.click()
    })
    function submit(){
        
    }
    uploadButton.type = 'submit';
    uploadButton.textContent = 'Upload';
    uploadButton.addEventListener('click', function(e){
        e.preventDefault();
        if(imageInput.value == ''){
            console.log(`imageInput.value is ${imageInput.value}`)
            return;
       }else{
        //this value should be that same as the backend
        const value = imageInput.value;
        //call the api to post the data
        //clean up
        uploadContainer.classList.remove('modal-bdy');
        uploadContainer.innerHTML = '';
       }
    })
    
    form.appendChild(imageDiv);
    form.appendChild(uploadButton);
    closeModal.appendChild(span);
    modalbdy.appendChild(closeModal);
    modalbdy.appendChild(form);
    imageDiv.innerHTML = '';
    imageDiv.appendChild(imageInput);
    imageDiv.appendChild(image);
    imageDiv.appendChild(imageUploadtext);
    uploadContainer.innerHTML = '';
    uploadContainer.appendChild(modalbdy);
   
}
function showUpload(value){
    uploadData = value;
    const uploadLi =  document.querySelector('.upload');
    uploadData ? uploadLi.textContent = 'Upload template' : uploadData.textContent = null;
    uploadLi.addEventListener('click', uploadModal);
}

function closeUpload(){}
//By default this should be false. Reason being that the access to the funtion should be enabled if admin want to upload new template
window.addEventListener('DOMContentLoaded', showUpload(true));


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
    const productweb = document.querySelector('#product');
    const webMore = aboutUs.querySelector('.web-more');
    const productsContent = document.querySelector('.products-content');
    if(isElementInView(aboutUs)){
        webMore.classList.add('slideIn');
        webMore.classList.remove('fade-out');
    }else{
        webMore.classList.add('fade-out');
        webMore.classList.remove('slideIn');
    }
}
window.addEventListener('scroll', handleScroll);
document.addEventListener('load', handleScroll);

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

const products = [
    {aboutProduct: "MY WEBSITE combine affordability with reliability and efficiency, ensuring your business excels online.", productImage: "https://img.freepik.com/premium-photo/office-web-designers_53876-55846.jpg?w=740"},
    {aboutProduct: "Build your online presence with web development solutions that are efficient, dependable, and easy on your budget.", productImage: "https://img.freepik.com/free-photo/high-angle-woman-working-laptop_23-2149908209.jpg?t=st=1736291656~exp=1736295256~hmac=bda07a0514ee3c905946cdd424a5ec9274e8f607024db48f69bc34e178604d4b&w=826"},
    {aboutProduct: "Turn your mobile vision into reality with our dependable, affordable solutions.", productImage: "https://img.freepik.com/premium-psd/man-pointing-mobile_23-2148600574.jpg?w=826"},
]


products.forEach((product)=>{
    const productContent = document.querySelector('.products-content');
    const productDiv = document.createElement('div');
    productDiv.classList.add('products');
    const h3 = document.createElement('h3');
    const image = document.createElement('img');
    image.classList.add('resized-img');
    h3.textContent = `${product.aboutProduct}`;
    image.src = `${product.productImage}`;
    image.alt = 'productImage';
    productDiv.appendChild(h3);
    productDiv.appendChild(image);
    productContent.appendChild(productDiv);
})
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
        <li>Good user experience and feels for all user across all screen</li>
        <li>Hoisting is not free</li>
        <li>Domain is not free</li>
        <li>Future changes after deployement are not free</li>
        <li>Gallery feature(3 image display for showoff)</li>
        <li>No FAQS features on the website</li>
        <li>No TESTIOMONY features on the website</li>
        <li>Only whatsapp communication line will be on the website(optional).</li>
        <li>Once bought you are the sole owner of the website.</li></ol>
        <button class='${subscriptionbtn}'>Show Templates</button>
        `
        div.innerHTML = webFeatureslist;
        webFeatureParentdiv.appendChild(div);

function updateSubscription(subcriptionPacakge){
    let price = document.querySelector('.web-amount');
    if(subcriptionPacakge == 'standard'){
        price.textContent = 'N80,000.00';
        div.classList.add('features');
        const featuresIncluded = document.createElement('div');
        featuresIncluded.classList.add('feature-include');
        const h6 = document.createElement('h6');
        h6.textContent = "Features included:";
        featuresIncluded.appendChild(h6);
        const webFeatureslist = 
        `<ol>
        <li>Good user experience and feels for all user across all screen</li>
        <li>Hoisting is not free</li>
        <li>Domain is not free</li>
        <li>Future changes after deployement are not free</li>
        <li>Gallery feature(3 image display for showoff)</li>
        <li>Access to FAQS features on the website(optional).</li>
        <li>No TESTIOMONY features on the website</li>
        <li>Only whatsapp communication line will be on the website(optional).</li>
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
        price.textContent = 'N100,000.00';
        div.classList.add('features');
        const standardbtn = 'std-btn';
        const featuresIncluded = document.createElement('div');
        featuresIncluded.classList.add('feature-include');
        const h6 = document.createElement('h6');
        h6.textContent = "Features included:";
        featuresIncluded.appendChild(h6);
        const webFeatureslist = 
        `<ol>
        <li>Free domain on first buy.(.com.ng, .ng)</li>
        <li>Free hoisting on the domain</li>
        <li>Future changes after deployement are paid</li>
        <li>Gallery feature(unlimited)</li>
        <li>Access to FAQS features on the wesite</li>
        <li>Good user experience and feels for all user across all screen</li>
        <li>Access to TESITOMY features on the wesite</li>
        <li>Easy access to connect your communication line e.g (WhatsApp, Email and any other platform services)</li></ol>
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

let modalContent = document.querySelector('.modal-content');

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
                const buyNow = document.createElement('button');
                buyNow.textContent = 'Buy Now';
                buyNow.addEventListener('click', function buy(e){
                    e.preventDefault();
                    const buyModal = document.createElement('div');
                    buyModal.classList.add('buy-now')
                    const buyModalbody = document.createElement('div');
                    const modalCancel = document.createElement('div');
                    const contentDiv = document.createElement('div');
                    const accNo = document.createElement('h3');
                    const accName = document.createElement('h3');
                    const bank = document.createElement('h3');
                    accNo.textContent = '2263997831';
                    accName.textContent = 'shobola boluwatife joshua'.toUpperCase();
                    bank.textContent = 'zenith bank'.toUpperCase();
                    contentDiv.appendChild(accNo);
                    contentDiv.appendChild(accName);
                    contentDiv.appendChild(bank);

                    // Create the <i> icon element (for the close icon)
                    const closeIcon = document.createElement('i');
                    closeIcon.classList.add('bi', 'bi-x');
                    modalCancel.appendChild(closeIcon);
                    buyModalbody.appendChild(modalCancel);
                    buyModalbody.appendChild(contentDiv)
                    buyModal.innerHTML = '';
                    buyModal.appendChild(buyModalbody);
                    imagePreviewDiv.appendChild(buyModal)
                })
                goBacktext.classList.add('go-back');
                goBacktext.textContent = 'Go back';
                imagePreviewDiv.appendChild(goBacktext);
                image.classList.add('expand');
                imagePreviewDiv.appendChild(image.cloneNode(true));
                imagePreviewDiv.appendChild(buyNow);
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