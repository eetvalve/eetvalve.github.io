var finnishTranslations = {
  quote: "Etsitkö Full-Stack kehittäjää projektiin?",
  text2: "(älä epäröi olla yhteydessä)",
  manyMore: "...ja monta muuta",
  email: "Sähköposti:",
  businessId: "Y-tunnus",
  billingAddress: "Laskutusosoite",
  underConstruction: "Huom: kehitystyö sivustolla on vielä vaiheessa"
}

var englishTranslations = {
  quote: "Looking for a Full-Stack developer for your project?",
  text2: "(do not hesitate to contact)",
  manyMore: "...and many more",
  email: "Email:",
  businessId: "Business ID:",
  billingAddress: "Billing address:",
  underConstruction: "N.B.: this website is still under construction"
}

window.onload = function () {

  var activeLang = 'en';
  setLang(englishTranslations)
  setActiveColor()

  document.getElementById('en').addEventListener('click', function () {
    activeLang = 'en'
    setActiveColor('fi')
    setLang(englishTranslations)
  });

  document.getElementById('fi').addEventListener('click', function () {
    activeLang = 'fi'
    setActiveColor('en')
    setLang(finnishTranslations)
  });

  function setLang(selectedLang) {
    Object.keys(selectedLang).map(function (value, key) {
      document.getElementById(value).textContent = selectedLang[value]
    })
  }

  function setActiveColor(removeActive) {
    if (removeActive) {
      document.getElementById(removeActive).style.color = "black"
    }
    document.getElementById(activeLang).style.color = "#fc5367"
  }


}

