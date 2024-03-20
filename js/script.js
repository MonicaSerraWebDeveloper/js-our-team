// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// MILESTONE 0:
const teams = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
];

// MILESTONE 1:

// Richiamiamo l'elemento del DOM a cui andremo a legare le nostre 'li' con javascript
const listOfTeamsInDom = document.querySelector('.list-teams')

// Scriviamo il ciclo for per estrapolare dall'array gli elementi object e successivamente andiamo a richiamare i valori che ci occorrono attraverso il literal template dentro un tag 'li'
for (let i = 0; i < teams.length; i++) {
    let listObjectTeams = teams[i];

    for (let key in listObjectTeams) {
        console.log(listObjectTeams[key]);
    }

    // listOfTeamsInDom.innerHTML += `
    // <li>
    // ${listObjectTeams.name} ${listObjectTeams.role} ${listObjectTeams.photo}
    // </li>
    // `;
}

