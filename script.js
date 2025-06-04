let textinput = document.querySelector("#textinput");

let charactercount = document.querySelector("#characterCount");
let wordcount = document.querySelector("#wordCount");
let SentenceCount = document.querySelector("#SentenceCount");
let VowelCount = document.querySelector("#VowelCount");

textinput.addEventListener("input", () => {
  let text = textinput.value;
  let countchar = text.length;
  charactercount.innerText = countchar;

  let countword = text.trim().split(/[\s\.]+/);
  wordcount.innerText = countword.length;

  let sentword = text.trim().split(".").length;
  SentenceCount.innerText = sentword - 1;

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
let capitalize = document.querySelector("#capitalize");

lower.addEventListener("click", () => {
  textinput.value = textinput.value.toLowerCase();
});

upper.addEventListener("click", () => {
  textinput.value = textinput.value.toUpperCase();
});


  capitalize.addEventListener("click", () => {
  let text = textinput.value;
  let sentences = text.split(".");

  for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].trim();
    let words = sentences[i].split(" ");
    for (let j = 0; j < words.length; j++) {
      if (words[j]) {
        words[j] =
          words[j].charAt(0).toUpperCase() + words[j].slice(1).toLowerCase();
      }
    }
    sentences[i] = words.join(" ");
  }

  let finalText = sentences.join(".") + (text.trim().endsWith(".") ? "" : ".");
  textinput.value = finalText;
});
