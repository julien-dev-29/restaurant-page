// src/index.js
import "./styles/styles.css"
import { loadPage } from "./page-loader.js"
import { createHomePage } from "./pages/home.js"
import { createMenuPage } from "./pages/menu.js"
import { ContactTab } from "./pages/contact.js"

const buttons = document.querySelectorAll('button')
loadPage(createMenuPage())
buttons.forEach(button => button.addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.dataset['tab'] === "home") {
        loadPage(createHomePage())
    } else if (e.target.dataset['tab'] === "menu") {
        loadPage(createMenuPage())
    } else {
        loadPage(new ContactTab().element)
    }
}))