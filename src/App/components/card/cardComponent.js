export class cardComponent extends HTMLElement{
    connectedCallback(){
        this.attachShadow({mode : 'open'});
        this.shadowRoot.innerHTML = /* html */ `
        <style rel="stylesheet"> 
            @import "css/bootstrap/bootstrap.min.css";
            @import "./src/App/components/card/cardStyle.css";
        </style>
        <div class="card" style="width: 16rem;">
        <slot name="imagen"></slot>
        <div class="card-body">
            <h5 class="card-title"><slot name="nombre"></slot></h5>
            <p class="card-text"><slot name="descripcion"></slot></p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><slot name="fecha"></slot></li>
            <li class="list-group-item"><slot name="casa"></slot></li>
        </ul>
    </div>
        `;
    }
}

customElements.define('card-component', cardComponent);