import './src/App/components/card/cardComponent.js';

const divCards = document.querySelector('#container-cards');
const heroes = [
    {
        nombre : 'Iron-Man',
        imagen : 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Iron_Man_%28circa_2018%29.png/220px-Iron_Man_%28circa_2018%29.png',
        fecha : '1963',
        casa : 'MARVEL',
        descripcion : 'When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.'
    },
    {
        nombre : 'Spider-Man',
        imagen : 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
        fecha : '1962',
        casa : 'MARVEL',
        descripcion : 'Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books. '
    },
    {
        nombre : 'Thor',
        imagen : 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Thor_by_Olivier_Coipel.png/220px-Thor_by_Olivier_Coipel.png',
        fecha : '1962',
        casa : 'MARVEL',
        descripcion : 'Thor Odinson is a superhero appearing in American comic books published by Marvel Comics. Created by artist Jack Kirby, writer Stan Lee, and scripter Larry Lieber, the character first appeared in Journey into Mystery #83 and first received his own title with Thor #126.'
    },
    {
        nombre : 'Captain-America',
        imagen : 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/CaptainAmericaHughes.jpg/220px-CaptainAmericaHughes.jpg',
        fecha : '1940',
        casa : 'MARVEL',
        descripcion : 'Captain America is a superhero created by Joe Simon and Jack Kirby who appears in American comic books published by Marvel Comics. The character first appeared in Captain America Comics #1, published on December 20, 1940, by Timely Comics, a corporate predecessor to Marvel.'
    },
    {
        nombre : 'Batman', 
        imagen : 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Batman_Infobox.jpg/220px-Batman_Infobox.jpg',
        fecha : '1939',
        casa : 'DC',
        descripcion : 'Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939. '  
    },
    {
        nombre : 'Aquaman', 
        imagen : 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Aquaman_Rebirth_1.png/220px-Aquaman_Rebirth_1.png',
        fecha : '1941',
        casa : 'DC',
        descripcion : 'Aquaman is a superhero appearing in American comic books published by DC Comics. Created by Paul Norris and Mort Weisinger, the character debuted in More Fun Comics #73 (November 1941).'  
    },
    {
        nombre : 'Superman', 
        imagen : 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Supermanflying.png/220px-Supermanflying.png',
        fecha : '1938',
        casa : 'DC',
        descripcion : 'Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938).'  
    },
    {
        nombre : 'Wonder-Woman', 
        imagen : 'https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Wonder_Woman_%28circa_2020%29.png/220px-Wonder_Woman_%28circa_2020%29.png',
        fecha : '1941',
        casa : 'DC',
        descripcion : 'Wonder Woman is a superheroine created by the American psychologist and writer William Moulton Marston (pen name: Charles Moulton),and artist Harry G. Peter in 1941 for DC Comics.'  
    },

];

document.addEventListener('DOMContentLoaded', (e) => {
    heroes.forEach((item) => {
        divCards.insertAdjacentHTML('beforeend', /* html */`
        <card-component class="g-3 col-3">
            <span slot="imagen"><img src="${item.imagen}" class="card-img-top" alt="${item.nombre}"></span>
            <span slot="nombre">${item.nombre}</span>
            <span slot="descripcion">${item.descripcion}</span>
            <span slot="fecha">${item.fecha}</span>
            <span slot="casa">${item.casa}</span>
        </card-component>
        `);
    });
});
