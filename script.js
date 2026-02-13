// Dados da galeria - PERSONALIZE COM OS TRABALHOS DO SEU AMIGO
const galleryData = [
    {
        title: "Trabalho 1",
        description: "Trabalho 1",
        image: "assets/Trabalho 1.jpg"
    },
    {
        title: "Trabalho 2",
        description: "Trabalho 2",
        image: "assets/Trabalho 2.jpg"
    },
    {
        title: "Trabalho 3",
        description: "Trabalho 3",
        image: "assets/Trabalho 3.jpg"
    },
    {
        title: "Trabalho 4",
        description: "Trabalho 4",
        image: "assets/Trabalho 4.jpg"
    },
    {
        title: "Trabalho 5",
        description: "Trabalho 5",
        image: "assets/Trabalho 5.jpg"
    },
    {
        title: "Trabalho 6",
        description: "Trabalho 6",
        image: "assets/Trabalho 6.jpg"
    },
    {
        title: "Trabalho 7",
        description: "Trabalho 7",
        image: "assets/Trabalho 7.jpg"
    },
    {
        title: "Trabalho 8",
        description: "Trabalho 8",
        image: "assets/Trabalho 8.jpg"
    },
    {
        title: "Trabalho 9",
        description: "Trabalho 9",
        image: "assets/Trabalho 9.jpg"
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

// Variável para rastrear o índice atual
let currentImageIndex = 0;

// Abrir modal com a imagem ampliada
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modal.classList.add('active');
    
    // Encontrar o índice da imagem
    currentImageIndex = galleryData.findIndex(item => item.image === imageSrc);
}

// Fechar modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
}

// Ir para próxima imagem
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryData.length;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = galleryData[currentImageIndex].image;
}

// Ir para imagem anterior
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    const modalImage = document.getElementById('modalImage');
    modalImage.src = galleryData[currentImageIndex].image;
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
        // Navegação com setas do teclado
        if (modal.classList.contains('active')) {
            if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        }
    });

    // Botões de navegação do modal
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    modalPrev.addEventListener('click', prevImage);
    modalNext.addEventListener('click', nextImage);

    // Renderizar galeria
    renderGallery();

    // Formulário de contato com Formspree
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        // Enviar para Formspree
        fetch('https://formspree.io/f/xzdaeljp', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
                contactForm.reset();
            } else {
                alert('Erro ao enviar. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao enviar a mensagem.');
        });
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