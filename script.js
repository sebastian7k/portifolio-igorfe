// Dados da galeria - PERSONALIZE COM OS TRABALHOS DO SEU AMIGO
const galleryData = [
    {
        title: "Trabalho 1",
        description: "Descrição do trabalho",
        image: "images/trabalho1.jpg"
    },
    {
        title: "Trabalho 2",
        description: "Descrição do trabalho",
        image: "images/trabalho2.jpg"
    },
    {
        title: "Trabalho 3",
        description: "Descrição do trabalho",
        image: "images/trabalho3.jpg"
    },
    {
        title: "Trabalho 4",
        description: "Descrição do trabalho",
        image: "images/trabalho4.jpg"
    },
    {
        title: "Trabalho 5",
        description: "Descrição do trabalho",
        image: "images/trabalho5.jpg"
    },
    {
        title: "Trabalho 6",
        description: "Descrição do trabalho",
        image: "images/trabalho6.jpg"
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
            <img src="${item.image}" alt="${item.title}" class="gallery-image">
            <div class="gallery-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        // Adicionar evento de clique na imagem
        const img = card.querySelector('.gallery-image');
        img.addEventListener('click', function() {
            openModal(this.src);
        });
        
        galleryGrid.appendChild(card);
    });
}

// Abrir modal com a imagem ampliada
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modal.classList.add('active');
}

// Fechar modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
}

// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const modalClose = document.querySelector('.modal-close');
    const modal = document.getElementById('imageModal');

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

    // Fechar modal ao clicar no X
    modalClose.addEventListener('click', closeModal);

    // Fechar modal ao clicar fora da imagem
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fechar modal com a tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
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