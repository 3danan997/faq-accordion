const containers = document.querySelectorAll('.container');
console.log(containers);

containers.forEach(container => {
    container.addEventListener('click', (e) => {        
        if(e.target.tagName === 'H4'){         
            let icon = e.target.nextElementSibling;
            let p = container.querySelector('p');
            icon.classList.toggle('clicked')
            p.classList.toggle('clicked');
            
        }
    })
})
