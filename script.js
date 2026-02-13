// Dados da galeria - PERSONALIZE COM OS TRABALHOS DO SEU AMIGO
const galleryData = [
    {
        title: "Trabalho 1",
        description: "Descrição do trabalho"
    },
    {
        title: "Trabalho 2",
        description: "Descrição do trabalho"
    },
    {
        title: "Trabalho 3",
        description: "Descrição do trabalho"
    },
    {
        title: "Trabalho 4",
        description: "Descrição do trabalho"
    },
    {
        title: "Trabalho 5",
        description: "Descrição do trabalho"
    },
    {
        title: "Trabalho 6",
        description: "Descrição do trabalho"
    }
];

// Renderizar galeria
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    
    galleryData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <div class="gallery-image">
                Imagem ${index + 1}
            </div>
            <div class="gallery-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        galleryGrid.appendChild(card);
    });
}

// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Renderizar galeria
    renderGallery();

    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = this.querySelectorAll('input, textarea');
        let formData = {};
        
        inputs.forEach(input => {
            formData[input.placeholder] = input.value;
        });
        
        // Aqui você pode adicionar lógica para enviar os dados
        console.log('Formulário enviado:', formData);
        
        // Mostrar mensagem de sucesso
        alert('Mensagem enviada com sucesso!');
        this.reset();
    });
});

// Smooth scroll aprimorado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});