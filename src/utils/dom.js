
/**
 * 
 * @param {String} htmlTag
 * @param {String} className 
 * @param {String} content 
 * @returns 
 */
export function createElement(htmlTag, className, content) {
    const htmlElement = document.createElement(htmlTag)
    if (className) {
        htmlElement.classList.add(className)
    }
    if (content) {
        htmlElement.textContent = content
    }
    return htmlElement
}

/**
 * Add a title to an HTMLElement
 * 
 * @param {String} title 
 * @param {HTMLElement} element 
 */
export function addTitle(title, element) {
    const titleElmt = createElement('h2', 'title', title)
    animateTitle(titleElmt)
    element.append(titleElmt)
}

export function createContainer(div, className) {
    const element = createElement(div, className)
    const addCard = (card) => {
        element.append(createCard(card))
    }
    return { element, addCard }
}

function createCard(card) {
    const element = createElement('div', 'card')
    const title = createElement('h2', 'title', card.icon + " " + card.title)
    const description = createElement('p', 'description', card.description)
    element.append(title)
    element.append(description)
    animateWithJurol(element)
    return element
}

/**
 * 
 * @param {HTMLElement} element 
 */
export function animateWithJurol(element) {
    element.animate(
        [
            // étapes/keyframes
            { opacity: "0" },
            { opacity: "1" },
        ],
        {
            // temporisation
            duration: 200,
        },
    )
}

/**
 * 
 * @param {HTMLElement} title 
 */
export function animateTitle(title) {
    title.animate(
        [
            // étapes/keyframes
            { transform: "translateX(-50px)" },
            { transform: "translateX(0px)" },
        ],
        {
            // temporisation
            duration: 50,
        },
    )
}