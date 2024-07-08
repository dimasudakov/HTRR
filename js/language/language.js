let langButton = document.getElementById('langButton')

let currentLang = localStorage.getItem("language") || "Ru";
let translations

langButton.addEventListener('click', handleChangeLanguage)

function handleChangeLanguage() {
    if(currentLang === "Ru") {
        currentLang = "En"
        localStorage.setItem("language", "Ru");
        changePageLang()
    } else {
        currentLang = "Ru"
        localStorage.setItem("language", "Ru");
        changePageLang()
    }
}

function changePageLang() {
    if (!translations) {
        loadTranslations()
    }
    for (const key in translations[currentLang]) {
        const el = document.getElementById(key)
        if(el) {
            el.innerText = translations[currentLang][key];
        }
    }
    
    document.getElementById('header-logo').src = "assets/header/" + currentLang.toLowerCase() + "-logo.png"
    
    if(document.getElementById('slide-2_timeline')) {
        document.getElementById('slide-2_timeline').src = "assets/slide2/" + currentLang.toLowerCase() + "-timeline.png"
    }
    if(document.getElementById('slide-2_dates')) {
        document.getElementById('slide-2_dates').src = "assets/slide2/" + currentLang.toLowerCase() + "-dates-mobile.png"
    }
    if(document.getElementById('slide-4_content')) {
        document.getElementById('slide-4_content').src = "assets/slide4/" + currentLang.toLowerCase() + "-content.png"
    }
    if(document.getElementById('slide-4_content-mobile')) {
        document.getElementById('slide-4_content-mobile').src = "assets/slide4/" + currentLang.toLowerCase() + "-content-mobile.png"
    }
    
    if(document.getElementById('kpfu')) {
        document.getElementById('kpfu').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-kpfu.svg"
    }
    if(document.getElementById('agni')) {
        document.getElementById('agni').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-agni.png"
    }
    if(document.getElementById('spb')) {
        document.getElementById('spb').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-spb.png"
    }
    if(document.getElementById('tatneft')) {
        document.getElementById('tatneft').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-tatneft.svg"
    }
    if(document.getElementById('planet')) {
        document.getElementById('planet').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-planet.svg"
    }
    if(document.getElementById('geo')) {
        document.getElementById('geo').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-georesources.svg"
    }

    if(document.getElementById('kpfu2')) {
        document.getElementById('kpfu2').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-kpfu.svg"
    }
    if(document.getElementById('agni2')) {
        document.getElementById('agni2').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-agni.png"
    }
    if(document.getElementById('spb2')) {
        document.getElementById('spb2').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-spb.png"
    }
    if(document.getElementById('tatneft2')) {
        document.getElementById('tatneft2').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-tatneft.svg"
    }
    if(document.getElementById('planet2')) {
        document.getElementById('planet2').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-planet.svg"
    }
    if(document.getElementById('geo2')) {
        document.getElementById('geo2').src = "assets/loop-strip/" + currentLang.toLowerCase() + "-georesources.svg"
    }

    if(document.getElementById('slide-6_content')) {
        document.getElementById('slide-6_content').src = "assets/slide6/" + currentLang.toLowerCase() + "-slide-6.png"
    }
}

function loadTranslations() {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'translations.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            translations = JSON.parse(xhr.responseText);
        }
    };
    xhr.send(null);
}

changePageLang()
    

// для мобильной версии и компьютерной используются разные кнопки с одинаковым id
addEventListener('resize', () => {
    removeEventListener('click', handleChangeLanguage)
    langButton = document.getElementById('langButton')
    langButton.addEventListener('click', handleChangeLanguage)
})
