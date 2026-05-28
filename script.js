const greetings = [
    "Hello, World!",
    "Bonjour, le Monde!",
    "Hola, Mundo!",
    "مرحبا بالعالم!",
    "Ciao, Mondo!",
    "Hallo, Welt!",
    "こんにちは世界！",
    "안녕하세요 세계!",
];

let index = 0;

document.getElementById("changeBtn").addEventListener("click", function () {
    index = (index + 1) % greetings.length;
    const heading = document.getElementById("greeting");
    heading.style.opacity = 0;
    setTimeout(function () {
        heading.textContent = greetings[index];
        heading.style.opacity = 1;
    }, 300);
});
