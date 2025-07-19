import { addTitle, animateWithJurol, createElement } from "../utils/dom.js";
import { capitalizeFirstLetter, setBtnActive } from "../utils/utils.js";
import { Container } from "./container.js";

/**
 * Class ContactTab
 */
export class ContactTab {
    #element = createElement('div', "contact-layout")
    constructor() {
        setBtnActive("contact")
        addTitle("Conctatez Nous", this.#element)
        const container = new Container("contact-container")
        const form = new Form()
        form.addInputField('email', "email")
        form.addTextarea("message")
        form.addButton()
        container.addCard(form.element)
        this.#element.append(container.element)
    }
    get element() {
        return this.#element
    }
}

/**
 * CLass Form
 */
class Form {
    #element = createElement("form", "card")
    constructor() {
        this.#element.classList.add('form')
        animateWithJurol(this.#element)
    }
    /**
     * 
     * @param {String} type 
     * @param {String} name 
     */
    addInputField(type, name) {
        const div = createElement('div', "input-container")
        const input = createElement('input', "input")
        const label = createElement('label', "label")
        label.textContent = capitalizeFirstLetter(name)
        input.setAttribute('type', type)
        input.setAttribute('placeholder', "Votre " + name)
        input.setAttribute('name', name)
        div.append(label)
        div.append(input)
        this.#element.append(div)
    }
    /**
     * 
     * @param {String} name 
     */
    addTextarea(name) {
        const div = createElement('div', "textarea-container")
        const textarea = createElement('textarea', "textarea")
        textarea.setAttribute("rows", 10)
        textarea.setAttribute('placeholder', "Votre " + name)
        const label = createElement('label', "label")
        label.textContent = capitalizeFirstLetter(name)
        textarea.setAttribute('name', name)
        textarea.setAttribute('placeholer', "Votre message")
        div.append(label)
        div.append(textarea)
        this.#element.append(div)
    }
    addButton() {
        const button = createElement('button', "btn-form")
        button.textContent = "Envoyer"
        button.addEventListener('click', e => e.preventDefault())
        this.#element.append(button)
    }
    get element() {
        return this.#element
    }
}