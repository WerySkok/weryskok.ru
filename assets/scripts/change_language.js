function usePrefferedLanguage(newLang) {
    function changeLanguageTo(language) {
        if (document.title.includes('404')) return; // TODO: make an english version of 404
        if (document.querySelector('html').lang == language) return;
        switch (language) {
            case 'en':
                location.pathname = `/en${location.pathname}`;
                break;

            case 'ru':
                location.pathname = location.pathname.replace('/en', '');
                break;

            default:
                break;
        }
    }

    function browserPrefferedLanguage() {
        if (
            navigator.languages.includes('ru') ||
            navigator.languages.includes('ru-RU')
        ) {
            return 'ru';
        }
        return 'en';
    }

    let prefferedLanguage = localStorage.getItem('prefferedLanguage');

    if (newLang) {
        localStorage.setItem('prefferedLanguage', newLang);
        prefferedLanguage = localStorage.getItem('prefferedLanguage');
    }

    if (!prefferedLanguage) {
        localStorage.setItem('prefferedLanguage', browserPrefferedLanguage());
        prefferedLanguage = localStorage.getItem('prefferedLanguage');
    }

    changeLanguageTo(prefferedLanguage);
}

usePrefferedLanguage();
