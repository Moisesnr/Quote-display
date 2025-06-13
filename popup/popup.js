const quote = document.getElementById("quote");
const origin = document.getElementById("origin");

const QUOTES = [
    {
        "text": "Only i can end it, and i, must be the one to end it",
        "origin": "Moskov"
    },
    {
        "text": "Every step brings me closer to deliverance",
        "origin": "Ledros"
    },
    {
        "text": "...Journey before destination",
        "origin": "Knights radiat 1st ideal"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const quote_to_add = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    quote.innerText = quote_to_add.text;
    origin.innerText = quote_to_add.origin;
});