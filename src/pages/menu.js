import { createElement, addTitle, createContainer } from "../utils/dom.js"
import { setBtnActive } from "../utils/utils.js"
import { menu } from "../data/menu.js"
/**
 * 
 * @returns
 */
export function createMenuPage() {
    const element = createElement('div', "menu-layout")
    setBtnActive("menu")
    addTitle("Menu", element)
    const container = createContainer('div', "menu-container")
    const card = createElement('div', 'card')
    const cardTitle = createElement('h2','title' , "Entrées")
    card.append(cardTitle)
    menu.entrees.forEach((e) => {
        const title = createElement('h3', 'title', e.title)
        const description = createElement('p', 'description', e.description )
        card.append(title)
        card.append(description)
    })
    container.element.append(card)
    element.append(container.element)
    return element
}