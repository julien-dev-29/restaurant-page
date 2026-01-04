import { createElement, addTitle, createContainer } from "../utils/dom"
import { setBtnActive } from "../utils/utils"
import { cards } from "../data/home-card"
/**
 * 
 * @returns
 */
export function createHomePage() {
    const element = createElement('div', "home-layout")
    setBtnActive("home")
    addTitle("Jurol's Kitchen", element)
    const container = createContainer('div', 'home-container')
    cards.forEach(card => container.addCard(card))
    element.append(container.element)
    return element
}
