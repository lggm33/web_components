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

    connectedCallback() {
        this.render()
        this.button = this.shadowRoot.querySelector("button");
        this.button.addEventListener("click", this);
    }

    disconnectedCallback() {
        console.log('adios')
        this.button.removeEventListener("click", this.sendMessage.bind(this));
    }

    getTemplate() {
        const template = document.createElement('template')
        template.innerHTML=`
        <section>
            <h2>${this.titulo}</h2>
            <p>${this.texto}</p>
            <img src='${this.img}'/>
            <button>👀 Press me!</button>"
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

    handleEvent(event) {
        if (event.type === "click")
        this.sendMessage();
    }

    sendMessage() {
        alert("Hello!");
    }
}

customElements.define('my-element', myElement)



