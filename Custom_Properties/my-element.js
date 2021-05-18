class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
                <h2>
                    <slot name="title"></slot>
                </h2>
            <div>
                <p>
                    <slot name="parrafo"></slot>
                </p>
            </div>
        </section>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles() {
        return `
        <style>
            :host {
            --primary-color: tomato;
            --secundary-color: salmon;
            display: inline-block;
            width: 100%;
            min-width: 300px;
            max-width: 450px;
            font-size: 20px;
            
        }
        h2 {
            color: var(--primary-color);
        }
        p {
            color: var(--secundary-color);
        }

        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("my-element", myElement);