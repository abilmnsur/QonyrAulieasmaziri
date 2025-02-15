function changeLanguage(lang) {
    document.querySelectorAll('.kk, .ru, .en').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.' + lang).forEach(el => el.style.display = 'block');
}

window.onload = () => changeLanguage('kk');
