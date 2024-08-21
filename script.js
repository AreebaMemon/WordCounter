let textinput = document.querySelector("#textinput");

let charactercount = document.querySelector("#characterCount");
let wordcount = document.querySelector("#wordCount");
let SentenceCount = document.querySelector("#SentenceCount");

textinput.addEventListener("input", () => {
  let text = textinput.value;
  let countchar = text.length;
  charactercount.innerText = countchar;

  let countword = text.trim().split(" ").length;
  wordcount.innerText = countword;

  let sentword = text.trim().split(".").length;
  SentenceCount.innerText = sentword-1;
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

capitalize.addEventListener("click",()=>{
  let text=textinput.value.split(" ");
  for(var i=0;i<text.length;i++){
    text[i]=text[i].charAt(0).toUpperCase()+text[i].slice(1).toLowerCase()
  }
  textinput.value = text.join(" ");
})

