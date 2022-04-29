
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = document.documentElement.clientHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
AOS.init({
    duration: 1200,
})
var is_language_fr = true
const text_fr = {
    "languageChange": "En",
    "introduction": ["Bonjour je suis", "Loïc Oberle", "et je suis", "développeur full stack"],
    "about_me":"Mon rôle est de développer des outils qui permettront de faciliter votre vie et celle des autres. Je suis attaché à fournir un travail soigné sans oublier de m'amuser en cours de route. Apprendre de nouvelles choses fait partis de mes activités préferées. Je suis actuellement à la recherche d'un emploi.",
    "scrollHint": "Faites defiler pour en savoir plus",
    "scrollPrevious": "Precedent",
    "scrollNext": "Suivant",
    "studiesTitle": "Etudes",
    "studies": [{
            "logo": "logo_nancy_charlemagne.png",
            "title": "DUT Informatique",
            "place": "IUT Nancy Charlemagne",
            "description": "Informatique généraliste, gestion de bases de données, développement Java et Web, gestion de projets"
        },
        {
            "logo": "logo_nancy_charlemagne.png",
            "title": "Licence professionelle Conception-Intégration d'Applications et Services Web pour l'Entreprise (CIASIE)",
            "place": "IUT Nancy Charlemagne",
            "description": "Développement Web Full Stack, développement mobile, Nodejs, gestion de bases de données, gestion de projets web"
        }
    ],
    "workTitle":"Mes expériences professionnelles",
    "work": [{
            "logo": "PI.png",
            "title": "Stage - Analyste développeur",
            "place": "Partenaire Informatique",
            "date": "Avril 2018 - Juin 2018",
            "description": "lorem ipsum"
        },
        {
            "logo": "epsolor.png",
            "title": "Stage - Développeur Web",
            "place": "Epsolor",
            "date": "Avril 2019 - Juin 2019",
            "description": "Lorem ipsum"
        }, {
            "logo": "qualios.png",
            "title": "Stage - Développeur Web",
            "place": "Qualios",
            "date": "Avril 2021 - Juillet 2021",
            "description": "Lorem ipsum"
        }
    ]
}
const text_en = {
    "languageChange": "Fr",
    "introduction": ["Hey I'm", "Loïc Oberle", "and I'm a", "full stack developper"],
    "about_me":"",
    "scrollHint": "Scroll down for more",
    "scrollPrevious": "Next",
    "scrollNext": "Previous",
    "studiesTitle": "Studies",
    "studies": [{
            "logo": "logo_nancy_charlemagne.png",
            "title": "DUT Informatique",
            "place": "IUT Nancy Charlemagne",
            "description": ""
        },
        {
            "logo": "logo_nancy_charlemagne.png",
            "title": "Licence professionelle Conception-Intégration d'Applications et Services Web pour l'Entreprise (CIASIE)",
            "place": "IUT Nancy Charlemagne",
            "description": ""
        }
    ],
    "workTitle":"My professionnal experiences",
    "work": [{
        "logo": "PI.png",
        "title": "Stage - Analyste développeur",
        "place": "Partenaire Informatique",
        "date": "Avril 2018 - Juin 2018",
        "description": "lorem ipsum"
    },
    {
        "logo": "epsolor.png",
        "title": "Stage - Développeur Web",
        "place": "Epsolor",
        "date": "Avril 2019 - Juin 2019",
        "description": "Lorem ipsum"
    }, {
        "logo": "qualios.png",
        "title": "Stage - Développeur Web",
        "place": "Qualios",
        "date": "Avril 2021 - Juillet 2021",
        "description": "Lorem ipsum"
    }
]

}

var vm = Vue.createApp({
    data() {
        return {

            used_language: text_en
        }
    },
    methods: {
        changeLang: function (newLang) {
            this.used_language = newLang
        },
        alternatingFadeIn: function (index) {
            if (index % 2 == 0) {
                return "fade-right"
            } else {
                return "fade-left"
            }
        }
    },
    mounted() {
        this.changeLang(text_fr)
    },
}).mount('#content')
document.getElementById("languageChangeButton").addEventListener("click", () => {
    if (is_language_fr) {
        vm.changeLang(text_en)
        document.getElementById("flag").src = "assets/fr.svg"
    } else {
        vm.changeLang(text_fr)
        document.getElementById("flag").src = "assets/gb.svg"
    }
    is_language_fr = !is_language_fr

})

let scrollNextElements = document.getElementsByClassName("scrollNext")
console.log(scrollNextElements);

for (let i = 0; i < scrollNextElements.length; i++) {
    scrollNextElements[i].addEventListener("click", () => {
        window.scrollTo(0, window.innerHeight * (i + 1))
    })

}

let scrollPreviousElements = document.getElementsByClassName("scrollPrevious")

for (let i = 0; i < scrollPreviousElements.length; i++) {
    scrollPreviousElements[i].addEventListener("click", () => {
        console.log("lick");
        window.scrollTo(0, document.documentElement.clientHeight * (i))
    })

}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
 
  });
  /* document.body.style.backgroundImage=`url("./assets/paper-wallpaper.jpg")`

  var oldScroll
  document.addEventListener("scroll",()=>{
    
    let dir=oldScroll>window.scrollY
    oldScroll = window.scrollY;
    console.log(dir);
      //console.log(window.scrollY);
      let y=window.scrollY
      let bodyHeight=document.getElementById("content").offsetHeight
      let viewPortHeight=document.documentElement.clientHeight
      let screen=(y/viewPortHeight)+1
     // console.log(screen);
      document.body.style.backgroundColor='url("../assets/parc.jpg")'
       if(screen>1.4&&screen<2.4){
           if(dir){
            document.body.style.backgroundImage=`url("./assets/paper-wallpaper.jpg")`
           }else{
   
            document.body.style.backgroundImage=`linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ), url("./assets/parc.jpg")`
           }
   
        
       }
       if(screen>2.4&&screen<3.4){
           if(dir){
            document.body.style.backgroundImage=`linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ), url("./assets/parc.jpg")`
           }else{
            document.body.style.backgroundImage=`linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ), url("./assets/wall.jpg")`
           }
      
       
        
       }
       if(screen>3.4&&screen<3.5){
        
           if(dir){
            
            document.body.style.backgroundImage=`linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ), url("./assets/wall.jpg")`
           }else{
          
            document.body.style.backgroundImage=`url("./assets/paper-wallpaper.jpg")`
           }
      
      
        
       }
     
  })
  function getScrollDirection() {
      var res=false
      if(oldScroll>window.scrollY){
        res=true
      }else{
        res=false
      }
    oldScroll = window.scrollY;
    return res
  } */