class ElementoSoma extends HTMLElement {

	static get observedAttributes() {
		return [
			"primeiro-valor",
			"segundo-valor"
		];
	}

	constructor() {
		super();
		const shadowRoot = this.attachShadow({mode: "open"});
		this.render();
	}

	template() {
		return `
			<style>
				:host {
					display: block;
					background-color: rgb(200, 200, 200);
				}
			</style>
			<b id="result">Resulta</b>: ${ this.somaValores() }
		`;
	}

	render() {
		const nodeTemplate = document.createElement("section");
		nodeTemplate.innerHTML = this.template();
		if (this.shadowRoot.childNodes[0])
			this.shadowRoot.removeChild(this.shadowRoot.childNodes[0]);
		this.shadowRoot.appendChild(nodeTemplate);
	}

	somaValores() {
		return Number.parseInt(this.getAttribute("primeiro-valor"));
	}

	connectedCallback() {
		this.setAttribute("primeiro-valor", 0);
		this.setAttribute("segundo-valor", 0);
	}

	disconnectedCallback() {
		/* Called every time the element is removed from the DOM. */
	}

	attributeChangedCallback(attrName, oldVal, newVal){
		/* An attribute was added, removed, updated, or replaced. */
		/* Only attributes listed in the observedAttributes property will receive this callback. */
		console.log(attrName);
		console.log(oldVal);
		console.log(newVal);
		this.render();
	}
}

customElements.define("elemento-soma", ElementoSoma);
