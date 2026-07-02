async function loadRemedy(remedyTitle) {

    try {

        const response = await fetch(
            `http://localhost:5000/api/remedies/title/${encodeURIComponent(remedyTitle)}`
        );

        if (!response.ok) {
            throw new Error("Failed to load remedy");
        }

        const remedy = await response.json();

        // Title
        document.getElementById("title").innerText = remedy.title;

        // Headings
        document.getElementById("ingredientHeading").innerText =
            `Ingredients for ${remedy.title} Relief`;

        document.getElementById("methodHeading").innerText =
            `Remedies for ${remedy.title} Relief`;

        document.getElementById("methodIntro").innerText =
            `To use these ingredients for ${remedy.title.toLowerCase()} relief, follow these steps:`;

        // Ingredients
        const ingredientContainer = document.getElementById("ingredientsContainer");
        ingredientContainer.innerHTML = "";

        remedy.ingredients.forEach(item => {

            ingredientContainer.innerHTML += `
                <div class="ingredient-box">
                    <img src="remedy-images/${item.image}" alt="${item.name}">
                    <div class="ingredient-name">${item.name}</div>
                    <p>${item.description}</p>
                </div>
            `;

        });

        // Methods
const methodsList = document.getElementById("methodsList");
methodsList.innerHTML = "";

remedy.methods.forEach(method => {

    methodsList.innerHTML += `
        <li>
            <strong>${method.title}:</strong>
            ${method.description}
        </li>
    `;

});

        // Note
        document.getElementById("note").innerText = remedy.note;
        speakRemedy(remedy);
    }

    catch (error) {

        console.error(error);

    }

}