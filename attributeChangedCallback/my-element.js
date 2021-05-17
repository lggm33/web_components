class myElement extends HTMLElement {
    constructor() {
        super() 
        
        this.attachShadow({mode: 'open'})
    }
    
    static get observedAttributes() {
        return ['titulo', 'texto', 'img']
    }
    
    attributeChangedCallback(name, oldVal, newVal) {

        if (oldVal === null) {
            this[name] = newVal
            return
        }
        if (name === "titulo") {
            this.shadowRoot.querySelector('h2').textContent = newVal;
        }
        if (name === "texto") {
            this.shadowRoot.querySelector('p').textContent = newVal;
        }
        if (name === "img") {
            this.shadowRoot.querySelector('img').textContent = newVal;
        }
        
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



