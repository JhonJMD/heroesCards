import './src/App/components/card/cardComponent.js';

const divCards = document.querySelector('#container-cards');
const heroes = [
    {
        nombre : 'Iron-Man',
        imagen : '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Iron_Man_%28circa_2018%29.png/220px-Iron_Man_%28circa_2018%29.png" class="card-img-top" alt="Iron-Man">',
        fecha : '1963',
        casa : 'MARVEL',
        descripcion : 'When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.'
    },
    {
        nombre : 'Spider-Man',
        imagen : '<img src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png" class="card-img-top" alt="Spider-Man">',
        fecha : '1962',
        casa : 'MARVEL',
        descripcion : 'Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books. '
    },
    {
        nombre : 'Thor',
        imagen : '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Thor_by_Olivier_Coipel.png/220px-Thor_by_Olivier_Coipel.png" class="card-img-top" alt="Thor">',
        fecha : '1962',
        casa : 'MARVEL',
        descripcion : 'Thor Odinson is a superhero appearing in American comic books published by Marvel Comics. Created by artist Jack Kirby, writer Stan Lee, and scripter Larry Lieber, the character first appeared in Journey into Mystery #83 and first received his own title with Thor #126.'
    },
    {
        nombre : 'Captain-America',
        imagen : '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/CaptainAmericaHughes.jpg/220px-CaptainAmericaHughes.jpg" class="card-img-top" alt="Captain-America">',
        fecha : '1940',
        casa : 'MARVEL',
        descripcion : 'Captain America is a superhero created by Joe Simon and Jack Kirby who appears in American comic books published by Marvel Comics. The character first appeared in Captain America Comics #1, published on December 20, 1940, by Timely Comics, a corporate predecessor to Marvel.'
    },
];

document.addEventListener('DOMContentLoaded', (e) => {
    heroes.forEach((item) => {
        divCards.insertAdjacentHTML('beforeend', /* html */`
        <card-component class="g-3 col-3">
            <span slot = "imagen">${item.imagen}</span>
            <span slot = "nombre">${item.nombre}</span>
            <span slot = "descripcion">${item.descripcion}</span>
            <span slot = "fecha">${item.fecha}</span>
            <span slot = "casa">${item.casa}</span>
        </card-component>
        `);
    });
});