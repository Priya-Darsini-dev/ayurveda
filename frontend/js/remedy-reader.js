function speakRemedy(remedy) {

    speechSynthesis.cancel();

    let text = "";

    text += `${remedy.title}. `;

    text += `Ingredients for ${remedy.title}. `;

    remedy.ingredients.forEach((ingredient, index) => {

        text += `Ingredient ${index + 1}. `;
        text += `${ingredient.name}. `;
        text += `${ingredient.description}. `;

    });

    text += `Now the remedies. `;

    remedy.methods.forEach((method, index) => {

        text += `Method ${index + 1}. `;
        text += `${method.title}. `;
        text += `${method.description}. `;

    });

    if (remedy.note) {

        text += `Important note. ${remedy.note}.`;

    }

    text += "Get well soon.";

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);

}