let languageSelector = document.getElementById("language-selector");
let aboutText = document.getElementById("about-text");
let servicesList = document.getElementById("services-list");

let languages = {
    "pl": {
        "about": "Firma kominiarska oferuje profesjonalne usługi kominiarskie dla domów jednorodzinnych i budynków wielorodzinnych. Nasz zespół składa się z doświadczonych i certyfikowanych kominiarzy, którzy zapewnią Państwu bezpieczeństwo i spokój.",
        "services": ["Czyszczenie i konserwacja kominków", "Czyszczenie i przegląd przewodów kominowych", "Montaż i serwis urządzeń grzewczych", "Przeglądy okresowe i certyfikaty"]
    },
    "en": {
        "about": "Our chimney company offers professional chimney services for single-family homes and multi-family buildings. Our team consists of experienced and certified chimney sweeps who will provide you with safety and peace of mind.",
        "services": ["Chimney cleaning and maintenance", "Chimney cleaning and inspection", "Installation and servicing of heating devices", "Periodic inspections and certificates"]
    },
    "ua": {
        "about": "Наша компанія-камінник надає професійні послуги камінників для одноквартирних та будинків з багатоквартирною забудовою. Наша команда складається з досвідчених та сертифікованих камінників"
    }
}


languageSelector.addEventListener("change", updateContent);

function updateContent() {
    let selectedLanguage = languageSelector.value;
    aboutText.innerHTML = languages[selectedLanguage].about;
    let servicesHtml = "";
    for (let i = 0; i < languages[selectedLanguage].services.length; i++) {
        servicesHtml += "<li>" + languages[selectedLanguage].services[i] + "</li>";
    }
    servicesList.innerHTML = servicesHtml;
}
