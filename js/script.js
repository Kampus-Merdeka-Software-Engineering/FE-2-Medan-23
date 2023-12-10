const ENVIRONMENT = window.location.protocol === 'https:' ? 'production' : 'development'
const API_URL = ENVIRONMENT === 'production' ? 'https://be-2-medan-23-production.up.railway.app/orders' : 'http://localhost:3000'



function openTabs(evt, tabName) {
    const tabContent = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
    }
  
    const tabLinks = document.querySelectorAll('.tablinks');
    for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = 'flex';
    evt.currentTarget.className += ' active';
  }

/*slide show*/
  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Using Callback Chaining
// fetch(`${API_URL}/user-foo`, { method: 'GET' })
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(user => {
//             const userHTMLElement = document.createElement('div')
//             userHTMLElement.className = 'box'

//             userHTMLElement.innerHTML = `
//                 <h1>${user.nama}</h1>
//                 <p>${user.nama} suka makan ${user.Food.rasa}</p>
//             `

//             containerElement.appendChild(userHTMLElement)
//         })
//     })
//     .catch(error => {
//         console.error({
//             error
//         })
//         alert('Error happens')
//     })