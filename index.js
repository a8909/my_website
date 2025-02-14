const about = document.querySelector(".web-aboutcontent");
const webContact = document.querySelector(".web-contact");
const webAbout = [
  {
    id: 1,
    content:
      "Affordable, Professional, and Ready to Go. Why pay more when you can get a fully functional, beautifully designed website at a fraction of the cost? At MY WEBSITE, we offer ready-made websites that are cost-effective, yet packed with all the features you need to succeed online.",
  },
  {
    id: 2,
    content:
      "At MY WEBSITE, we specialize in creating scalable and highly functional web applications tailored to your brand's needs. With our expertise, you’ll get a solution that’s not only efficient but also designed to grow with your business.",
  },
  {
    id: 3,
    content:
      "With MY WEBSITE, we make it easy to build your MOBILE APPLICATION and get it live on the Play Store. Whether you’re looking to reach customers, expand your brand, or offer services on the go, we’ll bring your app vision to life – ready for commercial use.",
  },
];
const subscription = document.querySelectorAll(".web-subscription");
const toggle = document.querySelector(".web-toggle");
const webFeatureParentdiv = document.querySelector(".web-features");
const webFaq = document.querySelector(".web-faqs");
const backdrop = document.querySelector(".web-modalcontainer");
const aboutContainer = document.querySelector(".web-about");
const modalBody = document.querySelector(".modal-bdy");
const menuBar = document.querySelector(".menu-bar");
let displayAnswer = false;
let menu = false;
let isLoading = false;
let allTemplate = [];

let div = document.createElement("div");
let idIndex = 0;
let uploadData = true;
let timerState;
let fileBundle;
// This environment if change to prod = true, it will not display the templateImage deletebtn it action are deactivated
//if otherwise that will be on local then
let environmentProduction = true;

const baseUrl = "https://template-eight-lovat.vercel.app/apis";

function setTemplate(templateId) {
  idIndex = templateId;
}

function getTemplate() {
  return idIndex;
}

let modalContent = document.querySelector(".modal-content");

//http request functions
async function getallTemplate() {
  try {
    const url = `${baseUrl}/templates`;
    return await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (e) {
    throw new Error(e);
  }
}

//get single template request
async function singleTemplate(id) {
  try {
    const url = `${baseUrl}/templates/${id}`;
    return await fetch(url);
  } catch (e) {
    throw new Error(e);
  }
}

async function deleteTemplate(id) {
  try {
    const url = `${baseUrl}/templates/${id}`;
    return await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    throw new Error(e);
  }
}

async function getOtp() {
  try {
    const url = `${baseUrl}/requestOtp`;
    return await fetch(url, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    throw new Error(e);
  }
}

async function verifyOtp(otp_code) {
  try {
    const url = `${baseUrl}/otp`;
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify({ otp_code }),
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    throw new Error(e);
  }
}

async function uploadTemplate(name, price, imagepath, plan) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("imagepath", imagepath);
  formData.append("plan", plan);
  try {
    const url = `${baseUrl}/templates`;
    return await fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
  } catch (e) {
    throw new Error(e);
  }
}

async function requestTemplate(name, email, templateId) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("templateId", templateId);
  try {
    const url = `${baseUrl}/requestTemplate`;
    return await fetch(url, {
      method: "POST",
      body: formData,
    });
  } catch (e) {
    throw new Error(`Error encountered id ${e}`);
  }
}

function setglobalVariable(value) {
  fileBundle = value;
}

function getglobalVariable() {
  return fileBundle;
}

menuBar.addEventListener("click", function toggleMenu() {
  menu = !menu;
  const productList = document.querySelector(".product-list");
  const firstChild = document.querySelector(".first-child");
  const secondChild = document.querySelector(".second-child");
  const lastChild = document.querySelector(".last-child");
  if (menu) {
    productList.classList.add("product-view");
    firstChild.classList.add("view");
    secondChild.classList.add("view-one");
    lastChild.classList.add("view-two");
  } else {
    productList.classList.remove("product-view");
    firstChild.classList.remove("view");
    secondChild.classList.remove("view-one");
    lastChild.classList.remove("view-two");
  }
});

function uploadModal() {
  //  const modalContainer = document.createElement('div');
  const uploadContainer = document.querySelector(".upload-container");
  uploadContainer.classList.add("modal-bdi");
  uploadContainer.classList.add("drag-down");
  //bootstrap upload data
  const modalbdy = document.createElement("div");
  const form = document.createElement("form");
  const passcodeDiv = document.createElement("div");
  const getPasscodebtn = document.createElement("button");
  getPasscodebtn.textContent = "Request aceess";
  getPasscodebtn.classList.add("center-div");
  passcodeDiv.appendChild(getPasscodebtn);
  passcodeDiv.style.padding = "20px";
  getPasscodebtn.addEventListener("click", function getPasscode(e) {
    e.preventDefault();
    getOtp().then((response) => {
      if (response.status == 200) {
        timerState = setInterval(() => {
          if (e.type !== "mousemove" || e.type !== "click") {
            if (modalbdy.contains(accessForm)) {
              modalbdy.removeChild(accessForm);
            } else {
              if (modalbdy.contains(form)) {
                modalbdy.removeChild(form);
              }
            }
            if (timerState) {
              timerState = null;
              clearInterval(timerState);
              modalbdy.appendChild(passcodeDiv);
            }
          }
        }, 300000);
      }
      // this send a get request for an access to upload template
      modalbdy.removeChild(passcodeDiv);
      const accessForm = document.createElement("form");
      const passcodeInput = document.createElement("input");
      passcodeInput.classList.add("email-input");
      passcodeInput.placeholder = "Enter key Phrase";
      passcodeInput.max = "4";
      accessForm.classList.add("input-div");
      const authenticateBtn = document.createElement("button");
      passcodeInput.type = "number";
      authenticateBtn.textContent = "Authenticate";
      accessForm.appendChild(passcodeInput);
      accessForm.appendChild(authenticateBtn);
      modalbdy.appendChild(accessForm);
      authenticateBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (
          passcodeInput.value.length > 4 ||
          passcodeInput.value < 4 ||
          passcodeInput.value == ""
        ) {
          passcodeInput.style.borderColor = "red";
          isLoading = false;
          return;
        }
        isLoading = true;
        isLoading
          ? (authenticateBtn.textContent = "Authenticating")
          : (authenticateBtn.textContent = "Authenticate");
        verifyOtp(passcodeInput.value)
          .then((response) => response.json())
          .then((data) => {
            const { errorMessage, message } = data;
            if (errorMessage) {
              accessForm.reset();
              isLoading = false;
              return;
            } else {
              modalbdy.removeChild(accessForm);
              isLoading = false;
              accessForm.reset();
              appendform(form);
            }
          });
      });
    });
  });

  const closeModal = document.createElement("div");
  modalbdy.classList.add("upload-bdy");
  const span = document.createElement("span");
  closeModal.classList.add("dismiss-modal");
  span.textContent = "Close";
  span.classList.add("close");
  span.addEventListener("click", function closeUpload() {
    uploadContainer.innerHTML = "";
  });
  // const form = document.createElement('form');
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("img-div");
  const imageInput = document.createElement("input");
  const image = document.createElement("img");
  const dropdown = document.createElement("select");
  const option_1 = document.createElement("option");
  const option_2 = document.createElement("option");
  dropdown.style.marginBottom = "10px";
  dropdown.classList.add("email-input");
  option_1.textContent = "Standard";
  option_2.textContent = "Premium";
  dropdown.appendChild(option_1);
  dropdown.appendChild(option_2);
  image.classList.add("upload-img");
  const imageUploadtext = document.createElement("p");
  const uploadButton = document.createElement("button");
  imageInput.classList.add("img-input");
  imageInput.type = "file";
  imageInput.accept = "image/png";
  function onImageinput(e) {
    e.preventDefault();
    const imageFile = e.target.files[0];
    setglobalVariable(imageFile);
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageUrl = e.target.result;
        image.src = imageUrl;
        image.classList.add("visible");
        if (imageUrl) {
          appendDropdown(dropdown);
        }
      };
      reader.readAsDataURL(imageFile);
    }
  }
  imageInput.addEventListener("change", onImageinput);
  imageUploadtext.textContent = "Upload image";
  imageUploadtext.style.cursor = "pointer";
  imageUploadtext.style.color = "darkslategrey";
  imageUploadtext.style.fontWeight = "bold";
  imageUploadtext.addEventListener("click", function () {
    imageInput.click();
  });
  uploadButton.type = "submit";
  uploadButton.textContent = "Upload";
  uploadButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (imageInput.value == "" || dropdown.value == "") {
      return;
    } else {
      //this value should be that same as the backend
      const template = {
        imagepath: getglobalVariable(),
        plan: dropdown.value.toLocaleLowerCase(),
        name: `${dropdown.value} plan`.toLocaleLowerCase(),
        price: "$400",
      };
      const { name, price, imagepath, plan } = template;
      uploadTemplate(name, price, imagepath, plan)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            uploadContainer.innerHTML = "";
            const uploadSuccess = document.querySelector(".upload-text");
            uploadSuccess.textContent = "Successfully Uploaded";
            setTimeout(() => {
              uploadSuccess.textContent = null;
            }, 3000);
          }
        });
    }
  });

  form.appendChild(imageDiv);
  function appendDropdown(child) {
    form.appendChild(child);
    form.appendChild(uploadButton);
  }
  closeModal.appendChild(span);
  modalbdy.appendChild(closeModal);
  modalbdy.appendChild(passcodeDiv);
  function appendform(body) {
    modalbdy.appendChild(body);
  }
  // modalbdy.appendChild(form);
  imageDiv.innerHTML = "";
  imageDiv.appendChild(imageInput);
  imageDiv.appendChild(image);
  imageDiv.appendChild(imageUploadtext);
  uploadContainer.innerHTML = "";
  uploadContainer.appendChild(modalbdy);
}
function showUpload(value) {
  uploadData = value;
  const uploadLi = document.querySelector(".upload");
  uploadData
    ? (uploadLi.textContent = "Upload template")
    : (uploadData.textContent = null);
  uploadLi.addEventListener("click", uploadModal);
}

function closeUpload() {}
//By default this should be false. Reason being that the access to the funtion should be enabled if admin want to upload new template
window.addEventListener("DOMContentLoaded", showUpload(true));

//This is used to target the scroll using getBoundingClientReact(),
//if the react.top <= window.innerHeight means the element top is below the window inner height the effect come alive
// and when the react.bottom >- 0 the effect leaves and this function needs to be called inside handleScroll
//handleScroll add and remove the style based on scroll
//window.addeventlistenerlisten to scroll and then call handleScroll for the function to come alive
//document.addevenlitener is call when the DOM load the content is called and when called it triggers the  handleScroll function
function isElementInView(elemment) {
  const react = elemment.getBoundingClientRect();
  return react.top <= window.innerHeight && react.bottom >= 0;
}
function handleScroll() {
  const aboutUs = document.querySelector("#about");
  const productweb = document.querySelector("#product");
  const webMore = aboutUs.querySelector(".web-more");
  const productsContent = document.querySelector(".products-content");
  if (isElementInView(aboutUs)) {
    webMore.classList.add("slideIn");
    webMore.classList.remove("fade-out");
  } else {
    webMore.classList.add("fade-out");
    webMore.classList.remove("slideIn");
  }
}
window.addEventListener("scroll", handleScroll);
document.addEventListener("load", handleScroll);

// This populate the about us
webAbout.forEach((w) => {
  const aboutItem = document.createElement("div");
  aboutItem.classList.add("web-aboutitem");
  const aboutContent = `<h4 class='web-aboutid'>${w.id}</h4>
    <p class='web-abouttxt'>${w.content}</p>`;
  aboutItem.innerHTML = aboutContent;
  about.append(aboutItem);
});

//This makes a slide in effect if placed on an object
window.addEventListener("load", onAnimate);
function onAnimate() {
  const webContent = document.querySelector(".web-innercontent");
  webContent.classList.add("slideIn");
  const backgroundImages = [
    { id: 1, background: "assets/3d-networkConnection.jpg" },
    { id: 2, background: "assets/bg-2.jpg" },
    { id: 3, background: "assets/bg-1.jpg" },
  ];

  let backgroundindex = 0;

  timerState = setInterval(() => {
    webContent.style.backgroundImage = `url(${backgroundImages[backgroundindex].background})`;
    backgroundindex++;

    if (backgroundindex == backgroundImages.length) {
      backgroundindex = 0;
    }
  }, 3000);
}

const products = [
  {
    aboutProduct:
      "MY WEBSITE combine affordability with reliability and efficiency, ensuring your business excels online.",
    productImage:
      "https://img.freepik.com/premium-photo/office-web-designers_53876-55846.jpg?w=740",
  },
  {
    aboutProduct:
      "Build your online presence with web development solutions that are efficient, dependable, and easy on your budget.",
    productImage:
      "https://img.freepik.com/free-photo/high-angle-woman-working-laptop_23-2149908209.jpg?t=st=1736291656~exp=1736295256~hmac=bda07a0514ee3c905946cdd424a5ec9274e8f607024db48f69bc34e178604d4b&w=826",
  },
  {
    aboutProduct:
      "Turn your mobile vision into reality with our dependable, affordable solutions.",
    productImage:
      "https://img.freepik.com/premium-psd/man-pointing-mobile_23-2148600574.jpg?w=826",
  },
];

products.forEach((product) => {
  const productContent = document.querySelector(".products-content");
  const productDiv = document.createElement("div");
  productDiv.classList.add("products");
  const h3 = document.createElement("h3");
  const image = document.createElement("img");
  image.classList.add("resized-img");
  h3.textContent = `${product.aboutProduct}`;
  image.src = `${product.productImage}`;
  image.alt = "productImage";
  productDiv.appendChild(h3);
  productDiv.appendChild(image);
  productContent.appendChild(productDiv);
});
//This make the whatsapp link active if clicked.
webContact.addEventListener("click", function directToWhatsapp() {
  const whatsappUrl = "https://wa.me/qr/TZVWNZ7JYEP6M1";
  window.open(whatsappUrl);
});
//scroll function is used for adjusting the whatsapp image on scroll event
window.addEventListener("scroll", function move() {
  setInterval(() => {
    webContact.classList.add("shift");
  }, 1000);
  const webMore = document.querySelector(".web-more");
  if (webMore.scr) this.clearInterval(2000);
  webContact.classList.remove("shift");
});
subscription.forEach((plan) => {
  plan.addEventListener("click", function checkSubscription() {
    // This line checks if the click event is premium
    //if premium it checks again if the premium has the class .standard, which by defualt it has
    //if the click is standard then it remove the standard class from premium and add it to his, and vice-versa.
    if (plan.textContent === "Standard") {
      let standard = document.querySelector(".web-subscription");
      let premium = document.querySelector(".web-subscription.standard");
      if (premium) {
        premium.classList.remove("standard");
        standard.classList.add("standard");
        backdrop.classList.remove("modal-display");
        aboutContainer.classList.remove("more-margin");
        const queryTemplate = document.querySelectorAll(".template-div");
        queryTemplate.forEach((qt) => {
          if (qt) {
            removeImagetemplate(qt);
          }
        });
        updateSubscription("standard");
      }
    } else {
      if (plan.textContent === "Premium") {
        plan.classList.add("standard");
        let standard = document.querySelector(".web-subscription.standard");
        if (standard) {
          standard.classList.remove("standard");
          plan.classList.add("standard");
          backdrop.classList.remove("modal-display");
          aboutContainer.classList.remove("more-margin");
          const queryTemplate = document.querySelectorAll(".template-div");
          queryTemplate.forEach((qt) => {
            if (qt) {
              removeImagetemplate(qt);
            }
          });
        }
        updateSubscription("premium");
      }
    }
  });
});

//function here checkes as click event is active for standard/premium and it update the content
//with respect to the value (if standard/premium).

function subscriptionModal() {
  const premiumShowtemplate = document.querySelector(".std-btn");
  const standardShowtemplate = document.querySelector(".sub-btn");
  backdrop.classList.add("modal-display");
  aboutContainer.classList.add("more-margin");
  let currentPlan;
  if (standardShowtemplate) {
    currentPlan = standardShowtemplate.getAttribute("plan");
  } else {
    currentPlan = premiumShowtemplate.getAttribute("plan");
  }
  isLoading = true;
  const spinner = document.querySelector(".spinner");
  const progress = document.querySelector(".progress-bar");
  if (isLoading == true) {
    progress.style.visibility = "visible";
    progress.style.width = "100%";
    spinner.classList.add("visible");
  }
  getallTemplate()
    .then((response) => response.json())
    .then((body) => {
      isLoading = false;
      if (isLoading == false) {
        progress.style.width = "0";
        spinner.classList.remove("visible");
        allTemplate = body.data;
        if (currentPlan == "premium") {
          allTemplate.forEach((image) => {
            if (image.plan == "premium") {
              let templatDiv = document.createElement("div");
              templatDiv.classList.add("template-div");
              templatDiv.setAttribute("unique", image.id);
              if (environmentProduction == false) {
                const deleteImage = document.createElement("i");
                deleteImage.classList.add("bi", "bi-trash3");
                deleteImage.addEventListener("click", deleteItem);
                function deleteItem() {
                  allTemplate.splice(
                    deleteTemplate(templatDiv.getAttribute("unique")),
                    1
                  );
                  const t = document.querySelectorAll(".template-div");
                  t.forEach((item) => {
                    if (
                      item.getAttribute("unique") ===
                      templatDiv.getAttribute("unique")
                    ) {
                      item.remove();
                    }
                  });
                }
                setglobalVariable(deleteImage);
              }

              const cls = "template-img";
              const imgTag = `<img class="${cls}" src="${image.imagepath}" alt="template image">`;
              templatDiv.innerHTML = imgTag;
              environmentProduction == false
                ? templatDiv.appendChild(getglobalVariable())
                : null;
              modalContent.append(templatDiv);
              planControl(templatDiv);
            }
          });
        } else {
          allTemplate.forEach((image) => {
            if (image.plan == "standard") {
              let templatDiv = document.createElement("div");
              templatDiv.classList.add("template-div");
              templatDiv.setAttribute("unique", image.id);
              if (environmentProduction == false) {
                const deleteImage = document.createElement("i");
                deleteImage.classList.add("bi", "bi-trash3");
                deleteImage.addEventListener("click", deleteItem, {
                  signal: deleteImage.setAttribute("delete", "standard-plan"),
                });
                function deleteItem() {
                  allTemplate.splice(
                    deleteTemplate(templatDiv.getAttribute("unique")),
                    1
                  );

                  const t = document.querySelectorAll(".template-div");
                  t.forEach((item) => {
                    if (
                      item.getAttribute("unique") ===
                      templatDiv.getAttribute("unique")
                    ) {
                      item.remove();
                    }
                  });
                }
                setglobalVariable(deleteImage);
              }

              const cls = "template-img";
              const imgTag = `<img class="${cls}" src="${image.imagepath}" alt="template image">`;
              templatDiv.innerHTML = imgTag;
              environmentProduction == false
                ? templatDiv.appendChild(getglobalVariable())
                : null;
              modalContent.append(templatDiv);
              planControl(templatDiv);
            }
          });
        }

        function planControl(templatetoRemove) {
          const close = document.querySelectorAll(".close");
          close.forEach((c) => {
            c.addEventListener("click", function closeModal() {
              backdrop.classList.remove("modal-display");
              aboutContainer.classList.remove("more-margin");
              if (templatetoRemove) {
                templatetoRemove.innerHTML = "";
                templatetoRemove.remove();
                modalBody.appendChild(modalContent);
              }
            });
          });
          const eachTempImg = document.querySelectorAll(".template-div");
          eachTempImg.forEach((i, index) => {
            i.addEventListener("click", function review() {
              const identifier = i.getAttribute("unique");
              singleTemplate(identifier)
                .then((response) => response.json())
                .then((data) => {
                  if (data) {
                    setTemplate(identifier);
                    if (getTemplate() == identifier) {
                      const template =
                        document.querySelectorAll(".template-div");

                      template.forEach((t) => {
                        t.classList.add("invisible");
                        const imageTemplate =
                          document.querySelector(".image-template");
                        if (imageTemplate) {
                          removeImagetemplate(imageTemplate);
                        }
                      });

                      const image = i.querySelector(".template-img");
                      //on preview take me to another page for preview main aim
                      //preview the template image and go back to previous page
                      let imagePreviewDiv = document.createElement("div");
                      imagePreviewDiv.classList.add("image-template");
                      const goBacktext = document.createElement("p");
                      const buyDiv = document.createElement("div");
                      const buyNow = document.createElement("button");
                      buyDiv.classList.add("center-div");
                      buyDiv.style.paddingBottom = "20px";
                      buyDiv.style.marginTop = "20px";
                      buyNow.textContent = "Buy Now";
                      buyNow.addEventListener("click", function buy(e) {
                        e.preventDefault();
                        const buyModal = document.createElement("div");
                        buyModal.classList.add("buy-now");
                        buyModal.classList.add("drag-up");
                        const buyModalbody = document.createElement("div");
                        const modalCancel = document.createElement("div");
                        const contentDiv = document.createElement("div");
                        contentDiv.classList.add("content-div");
                        const accNo = document.createElement("h6");
                        accNo.classList.add("acc-details");
                        const accName = document.createElement("h6");
                        accName.classList.add("acc-details");
                        const bank = document.createElement("h6");
                        bank.classList.add("acc-details");
                        const payDiv = document.createElement("div");
                        payDiv.classList.add("center-div");
                        const paymentMade = document.createElement("button");
                        paymentMade.classList.add("acc-details");
                        paymentMade.textContent = "Payment made";
                        accNo.textContent = "2263997831";
                        accName.textContent =
                          "shobola boluwatife joshua".toUpperCase();
                        bank.textContent = "zenith bank".toUpperCase();
                        paymentMade.addEventListener(
                          "click",
                          function onPaymentmade() {
                            contentDiv.innerHTML = "";
                            const emailForm = document.createElement("form");
                            const inputDiv = document.createElement("div");
                            inputDiv.classList.add("input-div");
                            const formInput = document.createElement("input");
                            formInput.classList.add("email-input");
                            const checkOut = document.createElement("button");
                            checkOut.textContent = "check out";
                            formInput.type = "email";
                            checkOut.type = "submit";
                            formInput.placeholder =
                              "Please provide us a valid email to reach you.";
                            checkOut.addEventListener("click", function (e) {
                              e.preventDefault();
                              if (formInput.value.toLowerCase() == "") {
                                formInput.style.borderColor = "red";
                                return;
                              } else {
                                const templateId = `${allTemplate[index].id}`;
                                const templateName = allTemplate[index].name;
                                //call an endpoint that send this post request to backend;
                                requestTemplate(
                                  templateName,
                                  formInput.value,
                                  templateId
                                )
                                  .then((response) => response.json())
                                  .then((data) => {
                                    const { template } = data;
                                    if (
                                      template ===
                                      "Template request processed successfully"
                                    ) {
                                      imagePreviewDiv.removeChild(buyModal);
                                    }
                                  });
                              }
                            });
                            inputDiv.appendChild(formInput);
                            inputDiv.appendChild(checkOut);
                            emailForm.appendChild(inputDiv);
                            buyModalbody.appendChild(emailForm);
                          }
                        );
                        contentDiv.appendChild(accNo);
                        contentDiv.appendChild(accName);
                        contentDiv.appendChild(bank);
                        payDiv.appendChild(paymentMade);
                        contentDiv.appendChild(payDiv);

                        // Create the <i> icon element (for the close icon)
                        modalCancel.classList.add("dismiss-modal");
                        const closeIcon = document.createElement("i");
                        closeIcon.style.fontSize = "30px";
                        closeIcon.classList.add("bi", "bi-x");
                        closeIcon.addEventListener("click", function close() {
                          imagePreviewDiv.removeChild(buyModal);
                        });
                        modalCancel.appendChild(closeIcon);
                        buyModalbody.appendChild(modalCancel);
                        buyModalbody.appendChild(contentDiv);
                        buyModal.innerHTML = "";
                        buyModal.appendChild(buyModalbody);
                        imagePreviewDiv.appendChild(buyModal);
                      });
                      goBacktext.classList.add("go-back");
                      goBacktext.textContent = "Go back";
                      imagePreviewDiv.appendChild(goBacktext);
                      image.classList.add("expand");
                      imagePreviewDiv.appendChild(image.cloneNode(true));
                      buyDiv.appendChild(buyNow);
                      imagePreviewDiv.appendChild(buyDiv);
                      modalContent.appendChild(imagePreviewDiv);
                      const goBack = document.querySelector(".go-back");
                      goBack.addEventListener("click", previousPage);
                    } else {
                      if (data === null || data === "") {
                        const noContent = document.createElement("span");
                        noContent.textContent = "No content to display";
                        // templatDiv.appendChild(noContent);
                      }
                    }
                  }
                });
            });
          });
          
        }
      }
    });
}
div.classList.add("features");
const subscriptionbtn = "sub-btn";
const webFeatureslist = `<ol>
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
        `;
div.innerHTML = webFeatureslist;
webFeatureParentdiv.appendChild(div);

function updateSubscription(subcriptionPacakge) {
  let price = document.querySelector(".web-amount");
  if (subcriptionPacakge == "standard") {
    price.textContent = "N150,000.00";
    div.classList.add("features");
    const featuresIncluded = document.createElement("div");
    featuresIncluded.classList.add("feature-include");
    const h6 = document.createElement("h6");
    h6.textContent = "Features included:";
    featuresIncluded.appendChild(h6);
    const webFeatureslist = `<ol>
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
        `;
    div.innerHTML = webFeatureslist;
    webFeatureParentdiv.innerHTML = "";
    webFeatureParentdiv.appendChild(featuresIncluded);
    webFeatureParentdiv.appendChild(div);

    const standardshowTemplate = document.querySelector(".sub-btn");
    standardshowTemplate.addEventListener("click", subscriptionModal, {
      signal: standardshowTemplate.setAttribute("plan", "standard"),
    });
  } else {
    price.textContent = "N180,000.00";
    div.classList.add("features");
    const standardbtn = "std-btn";
    const featuresIncluded = document.createElement("div");
    featuresIncluded.classList.add("feature-include");
    const h6 = document.createElement("h6");
    h6.textContent = "Features included:";
    featuresIncluded.appendChild(h6);
    const webFeatureslist = `<ol>
        <li>Free domain on first buy.(.com.ng, .ng)</li>
        <li>Free hoisting on the domain</li>
        <li>Future changes after deployement are paid</li>
        <li>Gallery feature(unlimited)</li>
        <li>Access to FAQS features on the wesite</li>
        <li>Good user experience and feels for all user across all screen</li>
        <li>Access to TESITOMY features on the wesite</li>
        <li>Easy access to connect your communication line e.g (WhatsApp, Email and any other platform services)</li></ol>
        <button class='${standardbtn}'>Show Templates</button>
        `;
    div.innerHTML = webFeatureslist;
    webFeatureParentdiv.innerHTML = "";
    webFeatureParentdiv.appendChild(featuresIncluded);
    webFeatureParentdiv.appendChild(div);
    const premiumShowtemplate = document.querySelector(".std-btn");
    premiumShowtemplate.addEventListener("click", subscriptionModal, {
      signal: premiumShowtemplate.setAttribute("plan", "premium"),
    });
  }
}

//This button is check to display modal, check if standard/premium
const standardShowtemplate = document.querySelector(".sub-btn");
standardShowtemplate.addEventListener("click", subscriptionModal, {
  signal: standardShowtemplate.setAttribute("plan", "standard"),
});

//This is for the faqs
const faqs = [
  {
    id: 1,
    question: "What is MY WEBSITE ?",
    answer:
      "MY WEBITE is a wesite where you can buy your fully made & ready to use wesite, webApp and mobile App at a very minimal price.",
  },
  {
    id: 2,
    question: "What does my webite have to offer ?",
    answer:
      "Fully made and ready to use website for all businesses, webApp and mobile App for all businesses.",
  },
  {
    id: 3,
    question:
      "How do i get my brand design inserted into the template after buying ?",
    answer:
      "After a template is bought and payment is made, at the bottom right of the website click the whatsapp logo to notify MY WEBSITE, after which you get to send your brand logo, color and other neccessary features of the template feature you bought.",
  },
  {
    id: 4,
    question: "How will my bought website be deloyed ?",
    answer:
      "You will have to buy a domain for deployement from MY WEBSITE, after which notify MY WEBITE to deploy it for you.",
  },
  {
    id: 5,
    question: "After my bought website expired what next ?",
    answer:
      "After expiration of the domain subscription it is required for the owner to renue.",
  },
  {
    id: 6,
    question: "Who will be maintainig the webite after buying ?",
    answer: "MY WEBSITE is to do that with additional charges.",
  },
  {
    id: 7,
    question: "How do i renew my domain plan ?",
    answer:
      "Make use of the whatsapp logo at the bottom right of MY WEBSITE to notify MY WEBSITE, you will be required the brand name, domain of the brand before renewal",
  },
];

//loop through faqs array, then create a div that will wrap each questin, answer
//first it add a questions class to the question div and set attribute
//set attribute is been used to retrive the index of the array and display the answer, of the clicked question.
faqs.forEach((faq, index) => {
  let question = document.createElement("div");
  question.classList.add("questions");
  question.setAttribute("faqIndex", index);
  const answer = "answer";
  const option = "question";
  const questions = `<h6 class=${option}>${faq.question}</h6>
    <span class= ${answer}>${faq.answer}</span>`;
  question.innerHTML = questions;
  webFaq.append(question);
});

//loop through all the questions to get each answer.
//listen to click, if click the displayAnswer is a boolean which act with respect to click event
//if true,it get the attribute of the question to display the answer otherwise it coses the answer
const faqQuestions = document.querySelectorAll(".questions");
faqQuestions.forEach((answer) => {
  answer.addEventListener("click", function showAnswer() {
    displayAnswer = !displayAnswer;
    let displayFaqAnswer = answer.querySelector(".answer");
    const index = answer.getAttribute("faqIndex");
    idIndex = faqs[index];
    if (displayAnswer) {
      if (idIndex == faqs[index]) {
        displayFaqAnswer.classList.add("show");
      }
    } else {
      displayFaqAnswer.classList.remove("show");
    }
  });
});

//This request should be coming from an end point not doing it like this
//This list here is meant to display all website template image from backEnd.
const templateImages = [
  {
    id: 1,
    tempImg:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif",
  },
  {
    id: 2,
    tempImg:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif",
  },
  {
    id: 3,
    tempImg:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif",
  },
  {
    id: 4,
    tempImg:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif",
  },
  {
    id: 5,
    tempImg:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif",
  },
  {
    id: 6,
    tempImg:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif",
  },
  {
    id: 7,
    tempImg:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif",
  },
  {
    id: 8,
    tempImg:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif",
  },
  {
    id: 9,
    tempImg:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif",
  },
  {
    id: 10,
    tempImg:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/tri-o-beautiful-website-template.jpg.avif",
  },
];

function removeImagetemplate(removeTemplate) {
  removeTemplate.remove();
}

function previousPage() {
  const template = document.querySelectorAll(".template-div");
  const imageTemplate = document.querySelector(".image-template");
  template.forEach((t) => {
    t.classList.remove("invisible");
  });
  imageTemplate.classList.add("invisible");
  removeImagetemplate(imageTemplate);
}
