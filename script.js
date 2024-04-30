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

      let themes = data.journal.themes;
      console.log(themes);

      let h1 = data.journal.nomJournal;
      console.log(h1);

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici