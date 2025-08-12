// Windows Activation
https://www.windowsfeed.com/2021/09/windows-10-activator-txt.html

// ================================================ Set Cookie ================================================ //
var cookieName = "#2003_RevolutionParts_Checkout_Page_Big_Redesign_Spiralyze";
var cookieValue = "1";
var myDate = new Date();
myDate.setDate(myDate.getDate() + 30);
document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;


// ================================================ Detect event in specific div ================================================ //
$('.Filter_button_spz #content .fixed.flex.flex-col').on('DOMSubtreeModified', function() {
    if (!$(".Filter_button_spz #content .fixed.flex.flex-col button.text-sm").length < 1) {
        $('body').addClass('cart_full');
    } else {
        $('body').removeClass('cart_full');
    }
});


// ================================================ Device window load ================================================ //
var window_load_width = jQuery(window).width();
var is_mobile = false;
var is_desk = false;
if (window_load_width > 767) {
    is_desk = true;
} else {
    is_mobile = true;
}
$(window).resize(function() {
    if (is_mobile) {
        if (jQuery(window).width() > 767) {
            window.location.reload();
        }
    }
    if (is_desk) {
        if (jQuery(window).width() < 1024) {
            window.location.reload();
        }
    }
});
if ($(window).width() > 1024 || $(window).width() < 768) {}


function refreshPage() {
    location.reload();
}
function isMobileScreen() {
    return window.innerWidth <= 767;
}

var isMobile = isMobileScreen();
window.addEventListener('resize', function () {
    if (isMobile !== isMobileScreen()) {
        refreshPage();
    }
});


// ================================================ Detect mac or windows ================================================ //
if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    $("body").addClass("mac");
} else {
    $("body").addClass("pc");
}



// ================================================ Add browser class in body ================================================ //
var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
var is_chrome = !!window.chrome && !is_opera && !is_Edge;
var is_explorer = typeof document !== 'undefined' && !!document.documentMode && !is_Edge;
var is_firefox = typeof window.InstallTrigger !== 'undefined';
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
if (is_chrome) {
    $('body').addClass('chrome');
} else if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    $('body').addClass('safari');
} else if (is_firefox) {
    $('body').addClass('firefox');
}



// ================================================ Add Class based on URL  ================================================ //
var loc = window.location.href;
var loc_split = loc.split('/');
if (loc_split[4] == 'plans') {
    $('body').addClass('spz_plan_page');
}



// ================================================ Make equal height of the child div (Add this css in parent class) ================================================ //
display: grid;
grid - auto - flow: column;
gap: 5 % ;



// ================================================ Add Class Section by Count Using JavaScript ================================================ //
const mainElement = document.getElementsByClassName('freelance');
var listofdiv = mainElement[0].childNodes;
var section_list = listofdiv[0].childNodes.length
var section = listofdiv[0].childNodes
while (section_list--) {
    section[section_list].classList.add("spz_section-" + (parseInt(section_list) + 1));
}


// ================================================ Remove specific text ================================================ //
$(".text_div").text(function() {
    return $(this).text().replace("contains", "hello everyone");
});


// ================================================ Slick only for mobile ================================================ //
setTimeout(function() {
    $(function() {
        $('.skilljar_longform_spz .review_sec .review_slider').not('.slick-initialized').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            mobileFirst: true,
            arrows: false,
            dots: true,
            variableWidth: true,
            initialSlide: 2,
            responsive: [{
                breakpoint: 1199,
                settings: 'unslick'
            }]
        });
        $(window).on('resize', function() {
            $('.skilljar_longform_spz .review_sec .review_slider').slick('resize');
        });
    });
}, 3000);


// ================================================ Insert code after element load ================================================ //
waitForElm(".page-shipping .next-step-button").then((elm) => {
    // Enter your Code here...
});

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document, { attributes: true, childList: true, subtree: true, characterData: true });
    });
}

function waitForElmLoad(selector) {
  var bodyElm = document.querySelectorAll('body').length > 0 ? document.querySelector('body') : document.querySelector('html');
  return new Promise(resolve => {
  if (document.querySelector(selector)){ return resolve(document.querySelector(selector)); }
  const observer = new MutationObserver(mutations => {
    if(document.querySelector(selector)){ resolve(document.querySelector(selector)); observer.disconnect(); }
  });
  observer.observe(bodyElm, { childList: true, subtree: true });
  });
}



// ================================================ Topbar Sticky ================================================ //
function onWindowResize() {
    if (window.scrollY > 5 && !document.body.classList.contains('scroll_fixed')) {
        document.querySelector("body").classList.add("scroll_fixed");
    }
    if (window.scrollY < 5 && document.body.classList.contains('scroll_fixed')) {
        document.querySelector("body").classList.remove("scroll_fixed");
    }
}
window.addEventListener('scroll', onWindowResize);
window.addEventListener('load', onWindowResize);
window.addEventListener('resize', onWindowResize);



// ================================================ InsertAfter using Javascript ================================================ //
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
var el = document.createElement("span");
el.innerHTML = "test";
var div = document.getElementById("foo");
insertAfter(div, el);

"URl: https: //developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore"



// ================================================ Disable Right Click ================================================ //
$(document).bind("contextmenu", function(e) {
    return false;
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


// ================================================ Disable Inspect Element ================================================ //
document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}


// ================================================ Get Parameter from URL ================================================ //
function getParameter(p) {
    var url = window.location.search.substring(1);
    var varUrl = url.split('&');
    for (var i = 0; i < varUrl.length; i++) {
        var parameter = varUrl[i].split('=');
        if (parameter[0] == p) {
            return parameter[1];
        }
    }
}
var checkout_param = getParameter('checkout_url');
console.log(checkout_param);


// ================================================ Change URL without refersh (Only Change the URL not change the page) ================================================ //
const nextURL = 'https://ftx.us/';
const nextTitle = 'Home Page';
const nextState = { additionalInformation: 'Updated the URL with JS' };
window.history.pushState(nextState, nextTitle, nextURL);



// ================================================ Detect click outside or inside of popup ================================================ //
const target = document.querySelector('.puco-modal__content');
  target.addEventListener('click', (event) => {
    const withinBoundaries = event.composedPath().includes(target)
    if (withinBoundaries) {
        alert('Click happened inside element');
      //target.innerText = 'Click happened inside element'
    } else {
      alert('Click happened **OUTSIDE** element');
      clearInterval(open_popup_compare);
      //target.innerText = 'Click happened **OUTSIDE** element'
    } 
});



// ================================================ Get other page data ================================================ //
function load_home () {
    fetch("https://www.pipedrive.com/en/pricing" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        let parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        document.querySelector(".pricing-card-wrapper").innerHTML = doc.querySelector('.pricing-block_pricingBlock__GXDPG').innerHTML;
    })
    .catch((error) => {
        console.warn(error);
    });
} 
load_home();



// ================================================ Browser Back Page Code ================================================ //
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    document.body.classList.add('show_sticky_cta');
    document.body.classList.remove('hide_sticky_cta');
    if(!document.body.classList.contains('deel_5004')){
      loadTest();
    }
  }
});


// ================================================ Add Hubspot Form ================================================ //
const hubSpotJS = document.createElement("script");
hubSpotJS.src = "//js.hsforms.net/forms/embed/v2.js", hubSpotJS.type = "text/javascript", hubSpotJS.setAttribute("charset", "utf-8"), document.head.appendChild(hubSpotJS);
function appendHubspotScript() {
  const e = document.createElement("script");
  e.innerHTML = 'hbspt.forms.create({region: "na1",portalId: "6581542",formId: "0d42ac7d-7996-41d0-aae0-7ab9f9b98f97",sfdcCampaignId: "7010H0000023s3rQAA"});', document.querySelector(".form-wrapper-spz").appendChild(e)
}
hubSpotJS.onload = function () {
  appendHubspotScript()
};



// ================================================ Convert Select option to ul li (Multiple Select Dropdown) ================================================ //
document.addEventListener('DOMContentLoaded', function () {
    convertDropdownsToUL();

    function convertDropdownsToUL() {
        var dropdowns = document.querySelectorAll('.custom-dropdown');

        dropdowns.forEach(function (dropdown) {
            var ul = document.createElement('ul');

            Array.from(dropdown.options).forEach(function (option) {
                var li = document.createElement('li');
                li.textContent = option.text;
                li.setAttribute('data-value', option.value);
                ul.appendChild(li);

                if (option.selected) {
                    li.classList.add('selected');
                }

                li.addEventListener('click', function () {
                    ul.querySelectorAll('li').forEach(function (li) {
                        li.classList.remove('selected');
                    });

                    li.classList.add('selected');
                    updateSelectedOption(dropdown, li.getAttribute('data-value'));
                });
            });

            dropdown.style.display = 'none'; // Hide the original select
            dropdown.parentNode.insertBefore(ul, dropdown.nextSibling);
        });
    }

    function updateSelectedOption(select, value) {
        Array.from(select.options).forEach(function (option) {
            option.selected = (option.value === value);
        });
    }
});



// ================================================ Convert Select option to ul li (Single Select Dropdown) ================================================ //
<ul id="convertedList"></ul>
var selectElement = document.getElementById('audience_descriptor-923e76c8-f718-4993-b05d-f6022ba2ffa9');
var ulElement = document.getElementById('convertedList');

for (var i = 0; i < selectElement.options.length; i++) {
    var liElement = document.createElement('li');
    liElement.textContent = selectElement.options[i].text;
    liElement.addEventListener('click', function(event) {
    // Remove "selected" class from all li elements
    var liElements = ulElement.getElementsByTagName('li');
    for (var j = 0; j < liElements.length; j++) {
        liElements[j].classList.remove('selected');
    }

    // Add "selected" class to the clicked li element
    event.target.classList.add('selected');

    // Set the selected index of the original select element
    selectElement.selectedIndex = Array.from(ulElement.children).indexOf(event.target);
    // alert("Selected Option: " + selectElement.options[selectElement.selectedIndex].text);
    });
    ulElement.appendChild(liElement);
}



// ================================================ Add class in fieldset using count ================================================ //
var parentDiv = document.querySelector('.spz-2001_v1 .hero-content .form-wrapper form.hs-form-spz');
var childElements = parentDiv.children;
for (var i = 0; i < childElements.length; i++) {
    var dynamicClass = 'field-' + (i + 1);
    childElements[i].classList.add(dynamicClass);
}



// ================================================ Scroll to specific section on click without id/href ================================================ //
var ctaLink = document.getElementById('ctaLink');
ctaLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor (e.g., navigating to a new page)
    var formInner = document.querySelector('.form_inner'); // Get the element with class "form_inner"
    formInner.scrollIntoView({ behavior: 'smooth' }); // Scroll to the "form_inner" element
});


// ================================================ Add CSS Using Javascript ================================================ //
var css = ``;
head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
style.appendChild(document.createTextNode(css));


// ================================================ Add CSS/JS file Using Javascript ================================================ //
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'path/to/your/styles.css';
document.head.appendChild(link);

var script = document.createElement('script');
script.src = 'https://res.cloudinary.com/spiralyze/raw/upload/v1669292054/MyCase/mycase_3015/script/script4.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'stylesheet', href: 'path/to/your/styles.css' }));
document.head.appendChild(Object.assign(document.createElement('script'), { src: 'https://res.cloudinary.com/spiralyze/raw/upload/v1669292054/MyCase/mycase_3015/script/script4.js' }));


// ================================================ Multiple time check while SetInterval ================================================ //
function checkFilledClassCondition(selector) {
    let counterA = 0;
    const intervalIdA = setInterval(() => {
      var parent = selector.closest('.hs-form-field');
      if (selector.value.trim() === '') {
        parent.classList.remove('filled');
      } else {
        parent.classList.add('filled');
      }
      counterA++;
      if (counterA >= 20) {
        clearInterval(intervalIdA);
      }
    }, 500);
}


// ================================================ Hide Element After Display:none Element ================================================ //
.spz_2003 #hero-section form.mktoForm .mktoFormCol.field-3:has(+ .mktoFormCol[style*="display: none;"]) ~ .mktoFormCol.field-7 {
    display: none;
}


// ================================================ Check User stop the typing ================================================ //
var typingTimer;
var doneTypingInterval = 1000;
if (event.type == "keyup") {
    clearTimeout(typingTimer); // Clear the previous timer
    typingTimer = setTimeout(doneTyping, doneTypingInterval); // Start a new timer
}



// ================================================ Has Class Contains CSS ================================================ //
.hs-form-field[class*="hs_est__total_media_budget_submitted___forms_assistant"]



// ================================================ Element Has specific child element CSS ================================================ //
div[aria-describedby="modal-modal-description"] form.hs-form-private .hs-form-field:has(input[type="hidden"])



// ================================================ Detect Marketo form Successfully Submit ================================================ //
window.mktoForms2.push(function() {
    MktoForms2.whenReady(function(form) {
        form.onSuccess(function(values, followUpUrl) {
            // This code runs after a successful form submission
            document.body.classList.add('repeat-user');
        });
    });
});


// ================================================ Change Form Button Text ================================================ //
const form = document.querySelector('form#mktoForm_1934');
const button = form.querySelector('button[type="submit"]');

const changeButtonText = (text) => {
  if (button && button.textContent !== text) {
    button.textContent = text;
    console.log(`Button text changed to: "${text}"`);
  }
};

// Set initial button text
changeButtonText("Book an assessment");

// Handle form submission
form.addEventListener("submit", function () {
  changeButtonText("Please wait...");
});

// Restore button text when user interacts with the form
const restoreTextOnInputChange = () => {
  changeButtonText("Book an assessment");
};
form.addEventListener("input", restoreTextOnInputChange);
form.addEventListener("change", restoreTextOnInputChange);

// **New MutationObserver Fix** - Catches Marketo or other scripts overriding the button
const observer = new MutationObserver(() => {
  if (button && button.textContent === "Please wait...") {
    const hasErrors = document.querySelector(".mktoError");
    if (hasErrors) {
      console.log("Validation errors detected after Please wait...! Resetting button text.");
      changeButtonText("Book an assessment");
    }
  }
});
if (button) {
  observer.observe(button, { childList: true, subtree: true });
}

// **Marketo form validation handling**
MktoForms2.whenReady((formInstance) => {
  formInstance.onValidate((valid) => {
    console.log("Validation Status:", valid);
    if (!valid) {
      console.log("Validation failed! Resetting button text.");
      changeButtonText("Book an assessment"); // Reset text if validation fails

      // **Force reset again after a delay if Marketo is overriding it**
      setTimeout(() => {
        if (button.textContent === "Please wait...") {
          console.log("Forcing reset of button text after delay due to external override.");
          changeButtonText("Book an assessment");
        }
      }, 500);
    }
  });

  formInstance.onSubmit(() => {
    console.log("Marketo Form Submission Started");
    changeButtonText("Please wait...");

    // **Final Check for Errors After Submission**
    setTimeout(() => {
      const hasErrors = document.querySelector(".mktoError");
      if (hasErrors) {
        console.log("Errors found! Resetting button text.");
        changeButtonText("Book an assessment");
      }
    }, 500);
  });
});




// ================================================ Add Custom Scrollbar ================================================ //
.scrollbar-thumb {
    position: absolute;
    top: 20px; /* Start thumb 20px from the top */
    right: 8px; /* Move scrollbar slightly left */
    width: 6px; /* Scrollbar width */
    height: 40px; /* Fixed thumb height */
    background-color: #800080;
    border-radius: 10px;
    opacity: 0.8;
    pointer-events: none; /* Makes it non-interactive */
    display: none; /* Initially hidden */
}
const textareas = document.querySelectorAll('.custom-textarea'); // Select all textarea elements in the form
textareas.forEach((textarea) => { // Loop through each textarea and add scrollbar thumbs dynamically
  const scrollbarThumb = document.createElement('div'); // Create scrollbar thumb element
  scrollbarThumb.classList.add('scrollbar-thumb');

  const container = textarea.parentElement; // Add the thumb to the parent container of the textarea
  container.appendChild(scrollbarThumb);
  
  const updateThumbVisibility = () => { // Function to check and show/hide scrollbar thumb
    const scrollHeight = textarea.scrollHeight; // Total scrollable content height
    const clientHeight = textarea.clientHeight; // Visible height of textarea

    if (scrollHeight > clientHeight) {
      scrollbarThumb.style.display = 'block'; // Show thumb if overflow exists
    } else {
      scrollbarThumb.style.display = 'none'; // Hide thumb otherwise
    }
  };

  textarea.addEventListener('scroll', () => { // Scroll behavior logic for each textarea
    const scrollTop = textarea.scrollTop; // Current scroll position
    const scrollHeight = textarea.scrollHeight; // Total scrollable content height
    const clientHeight = textarea.clientHeight; // Visible height of textarea

    const thumbHeight = scrollbarThumb.offsetHeight; // Fixed scrollbar thumb height
    const topOffset = 20; // Start offset
    const bottomOffset = 20; // End offset

    const maxThumbPosition = clientHeight - thumbHeight - topOffset - bottomOffset; // Calculate the max scrollbar thumb position
    const thumbPosition = (scrollTop / (scrollHeight - clientHeight)) * maxThumbPosition; // Calculate the current position of the thumb
    scrollbarThumb.style.top = `${topOffset + thumbPosition}px`; // Set the thumb position
  });

  textarea.addEventListener('input', updateThumbVisibility); // Update thumb visibility on input
  updateThumbVisibility(); // Initial check for visibility
});



// ================================================ Add Overlay Without Before ================================================ //
section{
    background:url(https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?cs=srgb&dl=pexels-jeswinthomas-1007426.jpg&fm=jpg);
    border-image:fill 1 linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.6));
    background-size:cover;
    background-repeat:no-repeat;
}



// ================================================ Splide Slider Grid Dynamic  ================================================ //
const splideList = document.querySelectorAll('.splide__slide');
new Splide('.splide', {
    grid: {
      // This will hold the alternating grid configuration
      dimensions: getGridDimensions(splideList.length),
      gap: {
        row: '20px', // Vertical gap between rows
        col: '20px', // Horizontal gap between columns
      }
    },
}).mount();
// Function to generate dynamic grid dimensions
function getGridDimensions(slideCount) {
    const dimensions = [];
    let i = 0;
    while (i < slideCount) {
      // Add two full-width slides (1 per row)
      if (i < slideCount) dimensions.push([1, 1]); // Full-width
      if (i + 1 < slideCount) dimensions.push([1, 1]); // Full-width
      i += 2; // Move the counter forward for the full-width slides

      // Add one 2-column slide (1 slide in 2 columns)
      if (i < slideCount) {
        dimensions.push([2, 1]); // One slide taking up 2 columns
        i += 1; // Move the counter forward for the 2-column slide
      }
    }
    return dimensions;
  }

// ================================================ Dynamic variation number for SVG instend of f_auto  ================================================ //
fl_sanitize

// ================================================ Check Element Block is in Viewport  ================================================ //
// 1. Create an observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is in view!');
      // You can stop observing if needed
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null, // default is viewport
  threshold: 0.1 // trigger when 10% is visible
});

// 2. Target element to observe
const target = document.querySelector('.my-element');
observer.observe(target);