import { html, render } from 'lit-html';

const style = html`
  <style>
    :host {
      display: block;
      box-sizing: content-box;
    }
    input {
      background-color: var(--bg-back);
      border: 1px solid var(--border-back);
      padding-left: 10px;
      height: 2em;
      color: var(--text);
    }
  </style>
`;

class TextInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.update();
  }
  get value() {
    return this.shadowRoot.querySelector('input').value;
  }
  update() {
    render(html`${style}
      <input id="${this.getAttribute('id')}" type="text" size="10"
             placeholder="${this.getAttribute('placeholder')}">`
      , this.shadowRoot);
  }
}

customElements.define('text-input', TextInput);
