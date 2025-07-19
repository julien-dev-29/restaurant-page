/**
 * 
 * @param {HTMLElement} page 
 */
export function loadPage(page) {
    const content = document.getElementById('content')
    content.replaceChildren()
    content.append(page)
}