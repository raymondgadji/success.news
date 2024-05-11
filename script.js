function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 

      let articles = data.journal.articles;
      console.log(articles);

      articles = data.journal.articles[3];
      console.log(articles);

      let auteurs = data.journal.auteurs;
      console.log(auteurs);

      

function afficherTitreJournal() {
        let title= data.journal.nomJournal;
        console.log(title);

        let titleID = document.getElementById("title")
        console.log(titleID);

        titleID.insertAdjacentHTML("beforeend", title);
    }
    afficherTitreJournal();


    function afficherLesThemes(){
      let themes = data.journal.themes;
      
      themes.forEach(element => {
        let themesNom = element.nom;
        console.log(themesNom);
      
        let href = themesNom;
      if(themesNom == "Démarrage d'entreprise"){
        href = "#demarrageDentreprise";
      }else if(themesNom == "Technologie") {
        href = "#technologie";
      }else if(themesNom == "Lecture recommandée"){
        href = "#lectureRecommandee";
      }else if(themesNom == "Tendances"){
        href = "#tendances";
      }else if(themesNom == "Startups"){
        href = "#startups";
      };
      
      
        let liste =`<li>
        <a class="link" href="${href}">${themesNom}</a>
      </li>`;
      

    let themesId = document.getElementById("themes")
    console.log(themesId);

    themesId.insertAdjacentHTML("beforeend", liste)
     
  });
    }
    afficherLesThemes()


    function articlePrincipal(){

      let article_principal = data.journal.articlePrincipal;
      console.log(article_principal);
  
      let title = data.journal.articlePrincipal.titre;
      console.log(title);
  
      let description = data.journal.articlePrincipal.description;
      console.log(description);
  
      let date = data.journal.articlePrincipal.date;
      console.log(date);
  
      let theme = data.journal.articlePrincipal.theme
      console.log(theme);
  
      let image = data.journal.articlePrincipal.image
      console.log(image);
  
      let article_principal_Id = document.getElementById("principal");
      console.log(article_principal_Id);
  
      let articlePrincipalAll = `
      <img id="img_principal" src="${image}" alt="" />
      <div class="principal_infos">
        <h2>${title}</h2>
        <h3>${theme} - ${date}</h3>
        <p>
          "${description}"
        </p>
        <button class="button primary">
          <a href="#" target="_blank">Lire l'article</a>
        </button>
      </div>`;
    
    article_principal_Id.insertAdjacentHTML("beforeend", articlePrincipalAll)
      }
      articlePrincipal();



function afficherLesArticles() {

      let articles = data.journal.articles;
        console.log(articles);
    
        articles.forEach(element => {
    
          let articleTitre = element.titre;
          console.log(articleTitre);
      
          let articleDate = element.date;
          console.log(articleDate);
      
          let articleTheme = element.theme;
          console.log(articleTheme);
      
          let articleImage = element.image;
          console.log(articleImage);
      
          let liste =`
          <article class="card">
          <img class="img_card" src="${articleImage}" alt= " "/>
            <div class="infos">
              <h2>${articleTitre}</h2>
              <h3>${articleTheme} - ${articleDate}</h3>
              
              <button class="button primary">
                <a href="#" target="_blank">Lire l'article</a>
              </button>
              </div>
            </article>`;
      
        let articleId = document.getElementById("main");
          console.log(articleId);
      
          articleId.insertAdjacentHTML("beforeend", liste);
    
        });
    
    }
    afficherLesArticles();
    
function afficherAuteurs(){
    
      let auteurs = data.journal.auteurs;
      console.log(auteurs);

      let phrase_team = "DECOUVREZ NOTRE EQUIPE";
      console.log(phrase_team);

      let h3Team = document.getElementById('h3_team');
      h3Team.insertAdjacentHTML("beforeend", phrase_team)
    
      auteurs.forEach(element => {
    
        let prenom = element.prenom;
        console.log(prenom);
    
        let typeExperience = element.typeExperience;
        console.log(typeExperience);
    
        let presentation = element.presentation;
        console.log(presentation);
    
        let image = element.image
        console.log(image);
    
        let auteursAll = document.getElementById("team");
        console.log(auteursAll);
    
        let afficherHTMLAuteurs = `<article class="team_article">
          <img class="img_article" src="${image}" alt="" />
          <h3>${prenom}</h3>
          <p>${typeExperience}</p>
          <p>${presentation}</p>
        </article>`;
      
        auteursAll.insertAdjacentHTML("beforeend", afficherHTMLAuteurs);
    
      });
    
      }
      afficherAuteurs();

function afficherFooter(){
    
  let themes = data.journal.themes;

  let phrase = data.journal.phraseAccroche;
  console.log(phrase);
  
  let h2Footer = document.getElementById('h2_footer');
  h2Footer.insertAdjacentHTML("beforeend", phrase)
      
  themes.forEach(element => {
    let themesNom = element.nom;
    console.log(themesNom);

    let themesDescription = element.description;
    console.log(themesDescription);

    let footer_HTML =`<article class="footer_article">
    <h3 class="h3_footer">${themesNom}</h3>
    <p>
    ${themesDescription}
    </p>
  </article>`;

  let footer_section = document.getElementById("footer_section")
  console.log(footer_section);

  footer_section.insertAdjacentHTML("beforeend", footer_HTML)
   
});

  }
  afficherFooter();






       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici

  /// Première fonction qui affiche le titre du journal

 function afficherTitreJournal() {
  let title= data.journal.nomJournal;
  console.log(title);

  let titleID = document.getElementById("title")
  console.log(titleID);

  titleID.insertAdjacentHTML("beforeend", title);
}

/// Deuxième fonction qui affiche les thèmes du journal

function afficherLesThemes(){
  let themes = data.journal.themes;
  
themes.forEach(element => {
  let themesNom = element.nom;
  console.log(themesNom);

  let href = themesNom;
if(themesNom == "Démarrage d'entreprise"){
  href = "#demarrageDentreprise";
}else if(themesNom == "Technologie") {
  href = "#technologie";
}else if(themesNom == "Lecture recommandée"){
  href = "#lectureRecommandee";
}else if(themesNom == "Tendances"){
  href = "#tendances";
}else if(themesNom == "Startups"){
  href = "#startups";
};


  let liste =`<li>
  <a class="link" href="${href}">${themesNom}</a>
</li>`;


let themesId = document.getElementById("themes")
console.log(themesId);

themesId.insertAdjacentHTML("beforeend", liste)
 
});
}


/// Troisième fonction qui affiche l'article principal du journal


function articlePrincipal(){

  let article_principal = data.journal.articlePrincipal;
  console.log(article_principal);

  let title = data.journal.articlePrincipal.titre;
  console.log(title);

  let description = data.journal.articlePrincipal.description;
  console.log(description);

  let date = data.journal.articlePrincipal.date;
  console.log(date);

  let theme = data.journal.articlePrincipal.theme
  console.log(theme);

  let image = data.journal.articlePrincipal.image
  console.log(image);

  let article_principal_Id = document.getElementById("principal");
  console.log(article_principal_Id);

  let articlePrincipalAll = `<div id="principal">
  <img id="img_principal" src="${image}" alt="" />
  <div class="principal_infos">
    <h2>${title}</h2>
    <h3>${theme} - ${date}</h3>
    <p>
      "${description}"
    </p>
    <button class="button primary">
      <a href="#" target="_blank">Lire l'article</a>
    </button>
  </div>
</div>`

article_principal_Id.insertAdjacentHTML("beforeend", articlePrincipalAll)
  }


  /// Quatrième fonction qui affiche les articles du journal

  function afficherLesArticles() {

    let articleTableau = data.journal.articles;
      console.log(articleTableau);
  
      articleTableau.forEach(element => {
  
        let articleTitre = element.titre;
        console.log(articleTitre);
    
        let articleDate = element.date;
        console.log(articleDate);
    
        let articleTheme = element.theme;
        console.log(articleTheme);
    
        let articleImage = element.image;
        console.log(articleImage);
    
        let liste =`<section id="main">
        <article class="card">
        <img class="img_card" src="${articleImage}" alt= " "/>
          <div class="infos">
            <h2>${articleTitre}</h2>
            <h3>${articleTheme} - ${articleDate}</h3>
            
            <button class="button primary">
              <a href="#" target="_blank">Lire l'article</a>
            </button>
            </div>
          </article>
      </section>`;
    
      let articleId = document.getElementById("main");
        console.log(articleId);
    
        articleId.insertAdjacentHTML("beforeend", liste);
  
      });
  
  }


  /// Cinquième fonction qui affiche les auteurs du journal


  function afficherAuteurs(){
    
    let auteurs = data.journal.auteurs;
    console.log(auteurs);

    let phrase_team = "DECOUVREZ NOTRE EQUIPE";
    console.log(phrase_team);

    let h3Team = document.getElementById('h3_team');
    h3Team.insertAdjacentHTML("beforeend", phrase_team)
  
    auteurs.forEach(element => {
  
      let prenom = element.prenom;
      console.log(prenom);
  
      let typeExperience = element.typeExperience;
      console.log(typeExperience);
  
      let presentation = element.presentation;
      console.log(presentation);
  
      let image = element.image
      console.log(image);
  
      let auteursAll = document.getElementById("team");
      console.log(auteursAll);
  
      let afficherHTMLAuteurs = `<article class="team_article">
        <img class="img_article" src="${image}" alt="" />
        <h3>${prenom}</h3>
        <p>${typeExperience}</p>
        <p>${presentation}</p>
      </article>`;
    
      auteursAll.insertAdjacentHTML("beforeend", afficherHTMLAuteurs);
  
    });
  
    }


    /// Sixième fonction qui affiche les thèmes dans le footer du journal


    function afficherFooter(){
    
      let themes = data.journal.themes;
    
      let phrase = data.journal.phraseAccroche;
      console.log(phrase);
      
      let h2Footer = document.getElementById('h2_footer');
      h2Footer.insertAdjacentHTML("beforeend", phrase)
          
      themes.forEach(element => {
        let themesNom = element.nom;
        console.log(themesNom);
    
        let themesDescription = element.description;
        console.log(themesDescription);
    
        let footer_HTML =`<article class="footer_article">
        <h3 class="h3_footer">${themesNom}</h3>
        <p>
        ${themesDescription}
        </p>
      </article>`;
    
      let footer_section = document.getElementById("footer_section")
      console.log(footer_section);
    
      footer_section.insertAdjacentHTML("beforeend", footer_HTML)
       
    });
    
      }

