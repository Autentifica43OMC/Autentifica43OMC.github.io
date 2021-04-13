class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Mancilla Cordero Octavio 
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
