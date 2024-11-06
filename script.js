const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;

  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }
    if (text.includes("what's your name") || text.includes("what is your name")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is harry";
      texts.appendChild(p);
    }
    if (text.includes("open YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Opening YouTube channel";
      texts.appendChild(p);
      window.open("https://www.youtube.com/");
    }
    if (text.includes("open Instagram")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Opening Instagram";
      texts.appendChild(p);
      window.open("https://www.instagram.com/");
    }
    if (text.includes("open Google")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Opening Google";
      texts.appendChild(p);
      window.open("https://www.google.co.in/");
    }
    if (text.includes("open Spotify")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Opening Spotify";
      texts.appendChild(p);
      window.open("https://open.spotify.com/");
    }
    if (text.includes("open WhatsApp")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Opening WhatsApp";
      texts.appendChild(p);
      window.open("https://web.whatsapp.com/");
    }
    
    // YouTube Song Search
    if (text.includes("open YouTube and play")) {
      const songName = text.split("open YouTube and play")[1].trim(); // Extract song name
      if (songName) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = `Opening YouTube and playing ${songName}`;
        texts.appendChild(p);
        
        // Open YouTube and search for the song
        const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(songName)}`;
        window.open(youtubeSearchUrl);
      }
    }

    // Reset the paragraph for new speech input
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
