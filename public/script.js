// =========================
// FÄRGKNAPPAR
// =========================

const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const greenButton = document.getElementById("greenButton");


// Röd
redButton.addEventListener("click", function () {
    document.body.style.background =
        "linear-gradient(135deg, #fff1f2, #ffe4e6)";
});


// Blå
blueButton.addEventListener("click", function () {
    document.body.style.background =
        "linear-gradient(135deg, #eff6ff, #dbeafe)";
});


// Grön
greenButton.addEventListener("click", function () {
    document.body.style.background =
        "linear-gradient(135deg, #f0fdf4, #dcfce7)";
});


// =========================
// TÄRNING
// =========================



// =========================
// MAT
// =========================

const foods = [
    {
        name: "🍕 Pizza Margherita",
        category: "italienskt",
        description:
            "En klassisk pizza med tomat, mozzarella och basilika."
    },

    {
        name: "🍝 Pasta Carbonara",
        category: "italienskt",
        description:
            "Krämig pasta med ägg, parmesan och bacon."
    },

    {
        name: "🍜 Pad Thai",
        category: "asiatiskt",
        description:
            "Thailändska nudlar med grönsaker, jordnötter och lime."
    },

    {
        name: "🍣 Sushi",
        category: "asiatiskt",
        description:
            "Japanska risbitar med fisk, grönsaker och soja."
    },

    {
        name: "🌮 Tacos",
        category: "mexikanskt",
        description:
            "Tacos med färs, grönsaker, ost och salsa."
    },

    {
        name: "🥔 Köttbullar med potatis",
        category: "svenskt",
        description:
            "Klassiska svenska köttbullar med potatis och lingonsylt."
    },

    {
        name: "🥗 Halloumisallad",
        category: "vegetariskt",
        description:
            "En fräsch sallad med halloumi, tomat och gurka."
    },

    {
        name: "🍛 Vegetarisk curry",
        category: "vegetariskt",
        description:
            "En smakrik curry med grönsaker och kokosmjölk."
    }
];


// =========================
// SLUMPA MAT
// =========================

function generateFood() {

    const selectedCategory =
        document.getElementById("category").value;


    let availableFoods = foods;


    // Filtrera efter kategori

    if (selectedCategory !== "alla") {

        availableFoods = foods.filter(function (food) {

            return food.category === selectedCategory;

        });

    }


    // Hämta resultat

    const result =
        document.getElementById("result");

    const foodName =
        document.getElementById("foodName");

    const foodDescription =
        document.getElementById("foodDescription");


  // Visa resultatkortet

result.style.display = "block";

// Börja rulla tärningen

const dice = document.getElementById("dice");

if (dice) {
    dice.classList.add("dice-roll");
}


// Börja slumpa

    let counter = 0;

    const totalSteps = 14;


    function spin() {

        const randomFood =
            availableFoods[
                Math.floor(
                    Math.random() *
                    availableFoods.length
                )
            ];


        foodName.textContent =
            randomFood.name;


        foodDescription.textContent =
            randomFood.description;


        counter++;


        if (counter < totalSteps) {

            const delay =
                60 + (counter * 12);

            setTimeout(spin, delay);

        } else {

            const finalFood =
                availableFoods[
                    Math.floor(
                        Math.random() *
                        availableFoods.length
                    )
                ];


            foodName.textContent =
                finalFood.name;


            foodDescription.textContent =
                finalFood.description;

              // Stoppa tärningen

if (dice) {
    dice.classList.remove("dice-roll");
}




        }

    }


    spin();

}