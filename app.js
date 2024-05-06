import './src/App/components/card/cardComponent.js';

const divCards = document.querySelector('#container-cards');
const heroes = [
    {
        nombre : 'Iron-Man',
        imagen : '<img src="https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg" class="card-img-top" alt="Iron-Man">',
        fecha : '2008',
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
        nombre : 'Iron Man',
        imagen : '<img src="https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg" class="card-img-top" alt="...">',
        fecha : '2008',
        casa : 'MARVEL',
        descripcion : 'When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.'
    },
    {
        nombre : 'Iron Man',
        imagen : '<img src="https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg" class="card-img-top" alt="...">',
        fecha : '2008',
        casa : 'MARVEL',
        descripcion : 'When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.'
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