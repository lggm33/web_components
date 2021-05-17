class myElement extends HTMLElement {
    constructor() {
        super() 
        this.attachShadow({mode: 'open'})

        this.titulo = this.getAttribute('titulo')
        this.texto = this.getAttribute('texto')
        this.img = this.getAttribute('img')
    }
    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML=`
        <section>
            <h2>${this.titulo}</h2>
            <p>${this.texto}</p>
            <img src='${this.img}'/>
        </section>
        ${this.getStyle()}
        `
        return template
    }
    getStyle() {
        return `
        <style>
        h2{
            color:red;
        }
        </style>
        `
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render()
    }
}
customElements.define('my-element', myElement)