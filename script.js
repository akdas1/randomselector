function selectRandomItem() {
    const itemListInput = document.getElementById("itemList");
    const itemList = itemListInput.value.trim();

    // Check if the input is empty or doesn't contain a comma and space
    if (!itemList || itemList.indexOf(", ") === -1) {
        alert("Please enter a list of items separated by a comma and space.");
        return;
    }

    const items = itemList.split(", ");

    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];

    const resultElement = document.getElementById("result");
    resultElement.innerText = `Randomly selected item: ${randomItem.toUpperCase()}`;

    // Keep the current items in the text box
    itemListInput.value = itemList;
}

function clearTextBox() {
    const itemListInput = document.getElementById("itemList");
    itemListInput.value = "";

    const resultElement = document.getElementById("result");
    resultElement.innerText = "";
}

function selectRandomFood() {
    const foodTypes = [
        "Sushi", "Thai", "Ramen", "Indian", "Mexican",
        "Italian", "Burgers", "Pizza", "Korean", /* Add more food types as needed */
    ];

    const randomIndex = Math.floor(Math.random() * foodTypes.length);
    const randomFood = foodTypes[randomIndex];

    const foodResultElement = document.getElementById("foodResult");
    foodResultElement.innerText = `Random Restuarant Type: ${randomFood.toUpperCase()}`;
}

function selectRandomOption() {
    const option1 = document.getElementById("option1").value.trim();
    const option2 = document.getElementById("option2").value.trim();

    if (!option1 || !option2) {
        alert("Please enter values for both options.");
        return;
    }

    const options = [option1, option2];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomOption = options[randomIndex];

    const resultElement = document.getElementById("result");
    resultElement.innerText = `Randomly selected: ${randomOption.toUpperCase()}`;
}

function clearOptions() {
    document.getElementById("option1").value = "";
    document.getElementById("option2").value = "";
    document.getElementById("result").innerText = "";
}

