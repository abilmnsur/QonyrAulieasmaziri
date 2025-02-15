const menus = {
    "breakfast": {
        "kk": {
            "title": "Таңғы ас",
            "description": "Сұлы ботқасы, шұжықпен бірге қуырылған жұмыртқа, нан мен май, шай немесе кофе. Бағасы: 1700 тг."
        },
        "ru": {
            "title": "Завтрак",
            "description": "Овсяная каша, яичница с сосиской, хлеб с маслом, чай или кофе. Цена: 1700 тг."
        },
        "en": {
            "title": "Breakfast",
            "description": "Oatmeal, fried eggs with sausage, bread with butter, tea or coffee. Price: 1700 KZT."
        }
    },
    "lunch": {
        "kk": {
            "title": "Түскі ас",
            "description": "Кеспе көже немесе окрошка, ет қосылған макарон немесе палау, қияр мен қызанақтан жасалған салат, компот. Бағасы: 3300 тг."
        },
        "ru": {
            "title": "Обед",
            "description": "Кеспе көже или окрошка, макароны с мясом или плов, салат из огурцов и помидоров, компот. Цена: 3300 тг."
        },
        "en": {
            "title": "Lunch",
            "description": "Noodle soup or okroshka, pasta with meat or pilaf, cucumber and tomato salad, compote. Price: 3300 KZT."
        }
    },
    "dinner": {
        "kk": {
            "title": "Кешкі ас",
            "description": "Котлет қосылған қарақұмық немесе котлет қосылған күріш, қияр мен қызанақ салаты, тәтті бәліш, шай. Бағасы: 2500 тг."
        },
        "ru": {
            "title": "Ужин",
            "description": "Котлета с гречкой или котлета с рисом, салат из огурцов и помидоров, сладкий пирожок, чай. Цена: 2500 тг."
        },
        "en": {
            "title": "Dinner",
            "description": "Cutlet with buckwheat or cutlet with rice, cucumber and tomato salad, sweet pastry, tea. Price: 2500 KZT."
        }
    }
};

let currentLang = "kk";

function openMenu(type) {
    document.getElementById("menu-title").innerText = menus[type][currentLang].title;
    document.getElementById("menu-description").innerText = menus[type][currentLang].description;
    document.getElementById("menu-popup").style.display = "block";
}

function closeMenu() {
    document.getElementById("menu-popup").style.display = "none";
}

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-lang]").forEach(el => {
        el.innerText = menus[el.dataset.lang][lang].title;
    });
}
