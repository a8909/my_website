const about = document.querySelector('.web-aboutcontent');
const webContact = document.querySelector('.web-contact');
const webAbout = [{id: 1, content : 'Get your ready made WEBSITE with a little cost.'}, {id: 2, content : 'Get us build a scalable, functional and efficient WEB APPLICATION for your brand at a go.'}, {id: 3, content : 'With MY WEBSITE you can get your MOBILE APPLICATION built and live on playstore for commercial use.'}];
const subscription = document.querySelectorAll('.web-subscription');
const toggle = document.querySelector('.web-toggle');
const webFeatureParentdiv = document.querySelector('.web-features')
let display = false;
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
    const whatsappUrl = '';
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
    }else{
        if(plan.textContent === 'Standard'){
            plan.classList.add('standard');
            
        }
    }   
})  
})
toggle.addEventListener('click', function showHide(){
    display =! display;
    let div = document.createElement('div');
    if(display){
        toggle.textContent = 'close';
        const webFeatureslist = 
        `<ol>
        <li>Ability to change bought website template for free first time</li>
        <li>Good user experience and feels for all user across all screen</li>
        <li>Once bought you are the sole owner of the website.</li></ol>
        <button>Buy now</button>
        `
        div.innerHTML = webFeatureslist;
        webFeatureParentdiv.append(div)
      
    }else{
        toggle.textContent = 'open'
        if(div){
            div = null;
        }
    }
})
