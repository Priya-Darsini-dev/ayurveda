function speak(text) {

    speechSynthesis.cancel();

    return new Promise((resolve) => {

        const utterance = new SpeechSynthesisUtterance(text);

        const voices = speechSynthesis.getVoices();

        const voice =
            voices.find(v => v.name.includes("Google")) ||
            voices.find(v => v.name.includes("Microsoft")) ||
            voices.find(v => v.lang === "en-US");

        if (voice) {
            utterance.voice = voice;
        }

        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onend = resolve;

        speechSynthesis.speak(utterance);

    });

}

speechSynthesis.getVoices();

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {

    alert("Speech Recognition is not supported in this browser.");

} else {

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    const voiceBtn = document.querySelector(".voice-btn");
    const stopBtn = document.getElementById("stopVoice");
    const voiceStatus = document.getElementById("voiceStatus");

    const pageMap = {

        // Health
        "Toothache": "remedy-pages/page41.html",
        "Sore Throat": "remedy-pages/page42.html",
        "Nausea": "remedy-pages/page43.html",
        "Sunstroke": "remedy-pages/page44.html",
        "Fever": "remedy-pages/page45.html",
        "Cold and Cough": "remedy-pages/page46.html",
        "Indigestion": "remedy-pages/page47.html",
        "Muscle and Joint Pain": "remedy-pages/page48.html",
        "Loss of Appetite": "remedy-pages/page49.html",
        "Menstrual Pain": "remedy-pages/page410.html",

        // Skin
        "Herbal Rinses": "remedy-pages/page51.html",
        "Body Pack": "remedy-pages/page52.html",
        "Face Mask": "remedy-pages/page53.html",
        "Acne": "remedy-pages/page54.html",
        "Dry Skin": "remedy-pages/page55.html",

        // Hair
        "Dandruff": "remedy-pages/page61.html",
        "Herbal Shampoo": "remedy-pages/page62.html",
        "Herbal Restorative Hair Oil": "remedy-pages/page63.html",
        "Nourishing Hair Oil": "remedy-pages/page64.html"

    };

    function showStatus(message) {

        if (!voiceStatus) return;

        voiceStatus.innerHTML = message;
        voiceStatus.classList.add("show");

    }

    function hideStatus() {

        if (!voiceStatus) return;

        voiceStatus.classList.remove("show");

    }

    if (voiceBtn) {

        voiceBtn.addEventListener("click", async () => {

            await speak("Hello! Welcome to Ayurvedam.");

            await speak("Please tell me your health concern.");

            recognition.start();

        });

    }

    if (stopBtn) {

    stopBtn.addEventListener("click", (e) => {

        e.preventDefault();

        speechSynthesis.cancel();

        try {
            recognition.abort();
        } catch (err) {
            console.log("Recognition already stopped.");
        }

        hideStatus();

        if (voiceBtn) {
            voiceBtn.classList.remove("listening");
        }

    });

}

    recognition.onstart = () => {

        voiceBtn.classList.add("listening");

        showStatus("🎤 Listening...");

    };

    recognition.onresult = async (event) => {

        const speech = event.results[0][0].transcript;

        console.log("You said:", speech);

        try {

            showStatus("🔍 Searching...");

            const response = await fetch(

                `http://localhost:5000/api/remedies/search?query=${encodeURIComponent(speech)}`

            );

            if (!response.ok) {

                hideStatus();

                await speak(
                    "Sorry. I couldn't find a suitable remedy. Please try describing your health concern differently."
                );

                return;

            }

            const remedy = await response.json();

            const page = pageMap[remedy.title];

            if (!page) {

                hideStatus();

                await speak("Sorry. I could not open the remedy page.");

                return;

            }

            showStatus("📖 Opening Remedy...");

            const utterance = new SpeechSynthesisUtterance(

                `I found a remedy for ${remedy.title}. Opening the remedy page.`

            );

            utterance.rate = 0.95;
            utterance.pitch = 1;
            utterance.volume = 1;

            utterance.onend = () => {

                window.location.href = page;

            };

            speechSynthesis.speak(utterance);

        }

        catch (error) {

            console.error(error);

            hideStatus();

            await speak("Something went wrong. Please try again.");

        }

    };

    recognition.onerror = (event) => {

        console.error("Speech Error:", event.error);

        hideStatus();

        voiceBtn.classList.remove("listening");

    };

    recognition.onend = () => {

        voiceBtn.classList.remove("listening");

    };

}