document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "I’ve been a stupid, and I know that. I’m so sorry, LeeL.",
        "Hoping your push won’t turn to shove.", 
        "Forgive me, please.",
        "I want you to know that I am sorry.",
        "It was all me to be blame. Please forgive me.",
        "My heart has been bleeding since the day I hurt you.",
        "I am sorry, forgive me.",
        "I am sorry for being jealous.", 
        "It’s just that I’m afraid of losing.",
        "losing the best thing to have ever happened to me.",
        "I have shown you what an idiot I am by making that mistake.",
        "Now it's your turn to show me what a darling you can be",
        "by giving your anger a break. I am sorry.",
        "I am really sorry for everything, I was stupid but LeeL",
        "I swear I never ever wanted to hurt you, forgie me plis",
        "I just miss you so much..."

    ];

    const delay = 33; 
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                lyricsElement.textContent += char;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            lyricsElement.innerHTML += "<br>";

            await new Promise((resolve) => setTimeout(resolve, delay * 60));

            lyricsElement.innerHTML = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 30));
        }
    }

    displayLyrics();
});


