const bodyHTML = document.querySelector('body');
const  headerFixed = document.querySelector('header');
console.log(bodyHTML)
// bodyHTML.onscroll = () => {
//     headerFixed.classList.add('position-fixed', 'opacity-50');
// }
const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();