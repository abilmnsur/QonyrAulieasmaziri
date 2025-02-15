const menus = {
    breakfast: {
        kk: `
            <h2>Таңғы ас</h2>
            <p>Сұлы ботқасы, жұмыртқа мен шұжық, май жағылған нан, шай немесе кофе</p>
            <p><strong>Бағасы:</strong> 1700 тг</p>
        `,
        ru: `
            <h2>Завтрак</h2>
            <p>Овсяная каша, яичница с сосиской, хлеб с маслом, чай или кофе</p>
            <p><strong>Цена:</strong> 1700 тг</p>
        `,
        en: `
            <h2>Breakfast</h2>
            <p>Oatmeal, fried eggs with sausage, bread with butter, tea or coffee</p>
            <p><strong>Price:</strong> 1700 KZT</p>
        `
    },
    lunch: {
        kk: `
            <h2>Түскі ас</h2>
            <p>Сорпа: кеспе көже (1090 тг) немесе окрошка (1290 тг)</p>
            <p>Ыстық тағам: макарон мен ет (1490 тг) немесе палау (1490 тг)</p>
            <p>Салат: Қияр мен қызанақ (500 тг)</p>
            <p>Сусын: Компот (200 тг)</p>
            <p><strong>Орташа баға:</strong> 3300 тг</p>
        `,
        ru: `
            <h2>Обед</h2>
            <p>Суп: лапша (1090 тг) или окрошка (1290 тг)</p>
            <p>Горячее: макароны с мясом (1490 тг) или плов (1490 тг)</p>
            <p>Салат: свежие огурцы и помидоры (500 тг)</p>
            <p>Напиток: компот (200 тг)</p>
            <p><strong>Средняя цена:</strong> 3300 тг</p>
        `,
        en: `
            <h2>Lunch</h2>
            <p>Soup: noodle soup (1090 KZT) or okroshka (1290 KZT)</p>
            <p>Main course: pasta with meat (1490 KZT) or pilaf (1490 KZT)</p>
            <p>Salad: fresh cucumber and tomato (500 KZT)</p>
            <p>Drink: compote (200 KZT)</p>
            <p><strong>Average price:</strong> 3300 KZT</p>
        `
    },
    dinner: {
        kk: `
            <h2>Кешкі ас</h2>
            <p>Котлет күрішпен немесе қарақұмықпен (1180 тг)</p>
            <p>Салат: Қияр мен қызанақ (500 тг)</p>
            <p>Шай (300 тг) және тәтті бәліш (500 тг)</p>
            <p><strong>Орташа баға:</strong> 2500 тг</p>
        `,
        ru: `
            <h2>Ужин</h2>
            <p>Котлета с рисом или гречкой (1180 тг)</p>
            <p>Салат: огурцы и помидоры (500 тг)</p>
            <p>Чай (300 тг) и сладкий пирожок (500 тг)</p>
            <p><strong>Средняя цена:</strong> 2500 тг</p>
        `,
        en: `
            <h2>Dinner</h2>
            <p>Cutlet with rice or buckwheat (1180 KZT)</p>
            <p>Salad: cucumber and tomato (500 KZT)</p>
            <p>Tea (300 KZT) and sweet pastry (500 KZT)</p>
            <p><strong>Average price:</strong> 2500 KZT</p>
        `
    }
};

let currentLanguage = 'kk';

function showMenu(meal) {
    document.getElementById('menu-content').innerHTML = menus[meal][currentLanguage];
    document.getElementById('menu-details').classList.remove('hidden');
}

function closeMenu() {
    document.getElementById('menu-details').classList.add('hidden');
}

function changeLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('breakfast-title').textContent = lang === 'kk' ? 'Таңғы ас' : lang === 'ru' ? 'Завтрак' : 'Breakfast';
    document.getElementById('lunch-title').textContent = lang === 'kk' ? 'Түскі ас' : lang === 'ru' ? 'Обед' : 'Lunch';
    document.getElementById('dinner-title').textContent = lang === 'kk' ? 'Кешкі ас' : lang === 'ru' ? 'Ужин' : 'Dinner';
}
