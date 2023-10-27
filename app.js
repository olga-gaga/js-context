const colorButtons = Array.from(
  document.body.getElementsByClassName('color_button')
);

const colorsList = colorButtons.map((element) =>
  element.textContent.toLocaleLowerCase()
);

const mainContainer = document.body.querySelector('main');
const exercise1Output = document.querySelector('.exercise1 .output');
const textLevels = document.querySelector('.exercise1 .text_container');

colorButtons.forEach((button) =>
  button.addEventListener('click', changeBackgroundColor)
);

textLevels.addEventListener('click', onClickPopulateText);

function clearColorClasses(color) {
  if (this.classList?.contains(color)) {
    this.classList.remove(color);
  }
}

function changeBackgroundColor(e) {
  colorsList.map(clearColorClasses, exercise1Output);
  const { textContent } = this;
  console.log(textContent);
  if (textContent) {
    exercise1Output.classList.add(textContent.toLowerCase());
  }
}

function populateText() {
  console.dir(this);
  exercise1Output.textContent = this.outerText.split('\n')[0];
}

function onClickPopulateText(e) {
  e.stopPropagation();
  populateText.call(e.target);
}