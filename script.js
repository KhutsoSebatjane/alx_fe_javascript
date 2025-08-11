let quotes = [
  { text: "The only way out is through.", category: "motivation" },
  { text: "Believe you can and you're halfway there.", category: "motivation" },
  { text: "It always seems impossible until it's done.", category: "wisdom" },
  { text: "If you can dream it, you can do it.", category: "Insperation" },
  {
    text: "Do what you can, with what you have, where you are.",
    category: wisdom,
  },
];

const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");

function showRandomQuote() {
  if (quotes.length === 0) {
    quoteDisplay.textContent = "No quotes available.";
    return;
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDisplay.innerHTML = `<p>"${randomQuote.text}"</p><small>— ${randomQuote.category}</small>`;
}

function createAddQuoteForm() {
  const form = document.createElement("form");

  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.placeholder = "Enter quote text";
  textInput.required = true;

  const categoryInput = document.createElement("input");
  categoryInput.type = "text";
  categoryInput.placeholder = "Enter category";
  categoryInput.required = true;

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Add Quote";

  form.appendChild(textInput);
  form.appendChild(categoryInput);
  form.appendChild(submitBtn);
  document.body.appendChild(form);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newQuote = {
      text: textInput.value.trim(),
      category: categoryInput.value.trim(),
    };
    if (newQuote.text && newQuote.category) {
      quotes.push(newQuote);
      alert("Quote added successfully!");
      textInput.value = "";
      categoryInput.value = "";
    }
  });
}

newQuoteBtn.addEventListener("click", showRandomQuote);

showRandomQuote();
createAddQuoteForm();
