export function setBtnActive(tab) {
    const btn = document.querySelector(`[data-tab="${tab}"]`)
    const activeBtn = btn.parentElement.querySelector('.btn-active')
    if (activeBtn) {
        activeBtn.classList.remove('btn-active')
    }
    btn.classList.add('btn-active')
}

export function capitalizeFirstLetter(name) {
    name = name.split('').map(function (l, index) {
        if (index === 0) {
            return l.toUpperCase()
        } else {
            return l
        }
    }).join('')
    return name
}