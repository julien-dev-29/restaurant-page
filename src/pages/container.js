import { HomeCard } from "./home"
import { createElement } from "../utils/dom.js"
/**
 * Container
 */
export class Container {
    #element
    constructor(className) {
        this.#element = createElement("div", className)
    }

    /**
     * Return the HTMLElement of the container
     */
    get element() {
        return this.#element
    }

    /**
     * Add a card to the container
     * 
     * @param {HTMLElement} card 
     */
    addCard(card) {
        this.#element.append(card)
    }
}