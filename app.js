const container = document.querySelector('.main');
const text = document.querySelector('.text');

const generateContent = (k = 25) => {
  for (let i = 0; i < k; i++) {
    const clone = text?.cloneNode(true);
    container?.appendChild(clone);
  }
};

const debouncer = (callback, ms) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, ms);
  };
};

const handleScroll = debouncer(() => {
  console.log('scroll');
}, 100);

window.addEventListener('scroll', handleScroll);

// window.removeEventListener('scroll', handleScroll);

generateContent();
