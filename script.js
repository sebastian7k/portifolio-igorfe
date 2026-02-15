// Dados da galeria 
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

// Dados dos designs disponíveis
const designsData = [
    {
        title: "Coroa Clássica",
        description: "Design clássico de coroa com detalhes",
        price: 150,
        size: "Pequeno",
        image: "assets/Trabalho 9.jpg"
    },
    {
        title: "Rosa Vermelha",
        description: "Rosa realista em vermelho vibrante",
        price: 200,
        size: "Médio",
        image: "assets/Trabalho 9.jpg"
    },
    {
        title: "Dragão Oriental",
        description: "Dragão estilizado com detalhes orientais",
        price: 300,
        size: "Grande",
        image: "assets/Trabalho 9.jpg"
    },
    {
        title: "Fnix Tribal",
        description: "Fênix com traços tribais modernos",
        price: 250,
        size: "Grande",
        image: "assets/Trabalho 9.jpg"
    },
    {
        title: "Mandala",
        description: "Mandala geométrica com padrões",
        price: 180,
        size: "Médio",
        image: "assets/Trabalho 9.jpg"
    },
    {
        title: "Leão Realista",
        description: "Leão com detalhes realistas",
        price: 280,
        size: "Grande",
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
        `;
        
        // Adicionar evento de clique na imagem
        const img = card.querySelector('.gallery-image');
        img.addEventListener('click', function() {
            openModal(this.src);
        });
        
        galleryGrid.appendChild(card);
    });
}

// Renderizar designs disponíveis
function renderDesigns() {
    const designsGrid = document.getElementById('designsGrid');
    designsGrid.innerHTML = '';
    
    designsData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'design-card';
        card.innerHTML = `
            <div class="design-image">
                <span>${item.size}</span>
            </div>
            <div class="design-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="design-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                <button class="design-view-btn" data-index="${index}">👁️ Ver Design</button>
            </div>
        `;
        
        designsGrid.appendChild(card);
    });
    
    // Adicionar eventos de clique aos botões de visualização
    document.querySelectorAll('.design-view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            openDesignModal(index);
        });
    });
}

// Variável para rastrear o índice atual do design
let currentDesignIndex = 0;

// Abrir modal de design
function openDesignModal(index) {
    currentDesignIndex = index;
    const design = designsData[index];
    const designModal = document.getElementById('designModal');
    const designModalImage = document.getElementById('designModalImage');
    const designModalTitle = document.getElementById('designModalTitle');
    const designModalDesc = document.getElementById('designModalDesc');
    const designModalPrice = document.getElementById('designModalPrice');
    
    designModalImage.src = 'assets/placeholder.png'; // Imagem padrão
    designModalTitle.textContent = design.title;
    designModalDesc.textContent = design.description;
    designModalPrice.textContent = design.price.toFixed(2).replace('.', ',');
    
    designModal.classList.add('active');
}

// Fechar modal de design
function closeDesignModal() {
    const designModal = document.getElementById('designModal');
    designModal.classList.remove('active');
}

// Próxima design
function nextDesign() {
    currentDesignIndex = (currentDesignIndex + 1) % designsData.length;
    openDesignModal(currentDesignIndex);
}

// Design anterior
function prevDesign() {
    currentDesignIndex = (currentDesignIndex - 1 + designsData.length) % designsData.length;
    openDesignModal(currentDesignIndex);
}

// Variável para rastrear o índice atual da galeria
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

// Abrir página de designs
function openDesignsPage() {
    const designsPage = document.getElementById('designsPage');
    designsPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fechar página de designs
function closeDesignsPage() {
    const designsPage = document.getElementById('designsPage');
    designsPage.classList.remove('active');
    document.body.style.overflow = 'auto';
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
            
            // Abrir página de designs se clicar em "Designs"
            if (this.getAttribute('href') === '#designs') {
                openDesignsPage();
            }
        });
    });

    // Fechar página de designs
    const designsClose = document.getElementById('designsClose');
    designsClose.addEventListener('click', closeDesignsPage);

    // Fechar página de designs ao clicar fora
    const designsPage = document.getElementById('designsPage');
    designsPage.addEventListener('click', function(e) {
        if (e.target === designsPage) {
            closeDesignsPage();
        }
    });

    // Fechar páginas com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (designsPage.classList.contains('active')) {
                closeDesignsPage();
            }
            if (designModal.classList.contains('active')) {
                closeDesignModal();
            }
        }
        // Navegação com setas no modal de designs
        if (designModal.classList.contains('active')) {
            if (e.key === 'ArrowRight') {
                nextDesign();
            } else if (e.key === 'ArrowLeft') {
                prevDesign();
            }
        }
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

    // Modal de designs
    const designModalClose = document.getElementById('designModalClose');
    const designModalPrev = document.getElementById('designModalPrev');
    const designModalNext = document.getElementById('designModalNext');
    const designModal = document.getElementById('designModal');
    const designCartBtn = document.getElementById('designCartBtn');
    
    designModalClose.addEventListener('click', closeDesignModal);
    designModalPrev.addEventListener('click', prevDesign);
    designModalNext.addEventListener('click', nextDesign);
    
    // Fechar design modal ao clicar fora
    designModal.addEventListener('click', function(e) {
        if (e.target === designModal) {
            closeDesignModal();
        }
    });
    
    // Botão carrinho leva para WhatsApp
    designCartBtn.addEventListener('click', function() {
        const design = designsData[currentDesignIndex];
        const whatsappLink = `https://wa.me/557196111375?text=Oi! Tenho interesse no design: ${encodeURIComponent(design.title)} - R$ ${design.price}`;
        window.open(whatsappLink, '_blank');
    });

    // Renderizar galeria
    renderGallery();

    // Renderizar designs disponíveis
    renderDesigns();

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
        if (href !== '#' && href !== '#designs') {
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