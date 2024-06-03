const projets = document.querySelectorAll('.add')

const showModal = () =>{
    const container = document.querySelector('.modal__container')
    const nav = document.querySelector('nav')
    const sideMenu = document.querySelector('.side-menu')
    container.classList.add('active')
    nav.classList.add('d-none')
    sideMenu.classList.add('d-none')
}

// projets.forEach(projet => {
//     projet.addEventListener('click', showModal)
// });

