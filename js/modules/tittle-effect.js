import outsideClick from "./outsideclick.js"



export default function initEffect() {
  function textArray(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    console.log(element);
    textArray.forEach((letter, i) => {
      setTimeout(() => element.innerHTML += letter, 60 * i);
    });
  }

  const tittle = document.querySelector('.texto2Slide2');
  textArray(tittle);
}


