let textinput = document.querySelector("#textinput");

let charactercount = document.querySelector("#characterCount");
let wordcount = document.querySelector("#wordCount");
let VowelCount = document.querySelector("#VowelCount");

textinput.addEventListener("input", () => {
  let text = textinput.value;
  let countchar = text.length;
  charactercount.innerText = countchar;

  let countword = text.trim().split(/[\s\.]+/);
  wordcount.innerText = countword.length;

  let count = 0;
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U" ||
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  VowelCount.innerHTML = count;
});

let lower = document.querySelector("#lower");
let upper = document.querySelector("#upper");

lower.addEventListener("click", () => {
  textinput.value = textinput.value.toLowerCase();
});

upper.addEventListener("click", () => {
  textinput.value = textinput.value.toUpperCase();
});
