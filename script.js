// Dados da galeria
const galleryData = [
    { title: "Trabalho 1", description: "Trabalho 1", image: "assets/Trabalho 1.jpg" },
    { title: "Trabalho 2", description: "Trabalho 2", image: "assets/Trabalho 2.jpg" },
    { title: "Trabalho 3", description: "Trabalho 3", image: "assets/Trabalho 3.jpg" },
    { title: "Trabalho 4", description: "Trabalho 4", image: "assets/Trabalho 4.jpg" },
    { title: "Trabalho 5", description: "Trabalho 5", image: "assets/Trabalho 5.jpg" },
    { title: "Trabalho 6", description: "Trabalho 6", image: "assets/Trabalho 6.jpg" },
    { title: "Trabalho 7", description: "Trabalho 7", image: "assets/Trabalho 7.jpg" },
    { title: "Trabalho 8", description: "Trabalho 8", image: "assets/Trabalho 8.jpg" },
    { title: "Trabalho 9", description: "Trabalho 9", image: "assets/Trabalho 9.jpg" }
];

// Dados dos designs disponíveis
const designsData = [
    { title: "Coroa Clássica", description: "Design clássico de coroa com detalhes", price: 150, size: "Pequeno", image: "assets/Trabalho 9.jpg" },
    { title: "Rosa Vermelha", description: "Rosa realista em vermelho vibrante", price: 200, size: "Médio", image: "assets/Trabalho 9.jpg" },
    { title: "Dragão Oriental", description: "Dragão estilizado com detalhes orientais", price: 300, size: "Grande", image: "assets/Trabalho 9.jpg" },
    { title: "Fnix Tribal", description: "Fênix com traços tribais modernos", price: 250, size: "Grande", image: "assets/Trabalho 9.jpg" },
    { title: "Mandala", description: "Mandala geométrica com padrões", price: 180, size: "Médio", image: "assets/Trabalho 9.jpg" },
    { title: "Leão Realista", description: "Leão com detalhes realistas", price: 280, size: "Grande", image: "assets/Trabalho 9.jpg" }
];

let currentImageIndex = 0;
let currentDesignIndex = 0;

function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = '';

    galleryData.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `<img src="${item.image}" alt="${item.title}" class="gallery-image">`;

        const img = card.querySelector('.gallery-image');
        img.addEventListener('click', function () {
            openModal(this.src);
        });

        galleryGrid.appendChild(card);
    });
}

function renderDesigns() {
    const designsGrid = document.getElementById('designsGrid');
    if (!designsGrid) return;

    designsGrid.innerHTML = '';

    designsData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'design-card';
        card.innerHTML = `
            <div class="design-image"><span>${item.size}</span></div>
            <div class="design-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="design-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                <button class="design-view-btn" data-index="${index}">👁️ Ver Design</button>
            </div>
        `;

        designsGrid.appendChild(card);
    });

    document.querySelectorAll('.design-view-btn').forEach((btn) => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.dataset.index, 10);
            openDesignModal(index);
        });
    });
}

function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    if (!modal || !modalImage) return;

    modalImage.src = imageSrc;
    modal.classList.add('active');
    currentImageIndex = galleryData.findIndex((item) => item.image === imageSrc);
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) modal.classList.remove('active');
}

function nextImage() {
    const modalImage = document.getElementById('modalImage');
    if (!modalImage) return;

    currentImageIndex = (currentImageIndex + 1) % galleryData.length;
    modalImage.src = galleryData[currentImageIndex].image;
}

function prevImage() {
    const modalImage = document.getElementById('modalImage');
    if (!modalImage) return;

    currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    modalImage.src = galleryData[currentImageIndex].image;
}

function openDesignModal(index) {
    const designModal = document.getElementById('designModal');
    const designModalImage = document.getElementById('designModalImage');
    const designModalTitle = document.getElementById('designModalTitle');
    const designModalDesc = document.getElementById('designModalDesc');
    const designModalPrice = document.getElementById('designModalPrice');
    if (!designModal || !designModalImage || !designModalTitle || !designModalDesc || !designModalPrice) return;

    currentDesignIndex = index;
    const design = designsData[index];

    designModalImage.src = design.image;
    designModalTitle.textContent = design.title;
    designModalDesc.textContent = design.description;
    designModalPrice.textContent = design.price.toFixed(2).replace('.', ',');
    designModal.classList.add('active');
}

function closeDesignModal() {
    const designModal = document.getElementById('designModal');
    if (designModal) designModal.classList.remove('active');
}

function nextDesign() {
    currentDesignIndex = (currentDesignIndex + 1) % designsData.length;
    openDesignModal(currentDesignIndex);
}

function prevDesign() {
    currentDesignIndex = (currentDesignIndex - 1 + designsData.length) % designsData.length;
    openDesignModal(currentDesignIndex);
}

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', function () {
            if (navMenu && hamburger) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    const modal = document.getElementById('imageModal');
    const modalClose = document.getElementById('imageModalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalPrev) modalPrev.addEventListener('click', prevImage);
    if (modalNext) modalNext.addEventListener('click', nextImage);

    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) closeModal();
        });
    }

    const designModal = document.getElementById('designModal');
    const designModalClose = document.getElementById('designModalClose');
    const designModalPrev = document.getElementById('designModalPrev');
    const designModalNext = document.getElementById('designModalNext');
    const designCartBtn = document.getElementById('designCartBtn');

    if (designModalClose) designModalClose.addEventListener('click', closeDesignModal);
    if (designModalPrev) designModalPrev.addEventListener('click', prevDesign);
    if (designModalNext) designModalNext.addEventListener('click', nextDesign);

    if (designModal) {
        designModal.addEventListener('click', function (e) {
            if (e.target === designModal) closeDesignModal();
        });
    }

    if (designCartBtn) {
        designCartBtn.addEventListener('click', function () {
            const design = designsData[currentDesignIndex];
            const whatsappLink = `https://wa.me/557196111375?text=Oi! Tenho interesse no design: ${encodeURIComponent(design.title)} - R$ ${design.price}`;
            window.open(whatsappLink, '_blank');
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeModal();
            closeDesignModal();
        }

        if (modal && modal.classList.contains('active')) {
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        }

        if (designModal && designModal.classList.contains('active')) {
            if (e.key === 'ArrowRight') nextDesign();
            if (e.key === 'ArrowLeft') prevDesign();
        }
    });

    renderGallery();
    renderDesigns();

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);

            fetch('https://formspree.io/f/xzdaeljp', {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' }
            })
                .then((response) => {
                    if (response.ok) {
                        alert('Mensagem enviada com sucesso!');
                        contactForm.reset();
                    } else {
                        alert('Erro ao enviar. Tente novamente.');
                    }
                })
                .catch((error) => {
                    console.error('Erro:', error);
                    alert('Erro ao enviar a mensagem.');
                });
        });
    }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
