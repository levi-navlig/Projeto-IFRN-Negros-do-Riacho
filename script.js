// Navegação entre seções
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    // Função para mostrar seção ativa
    function showSection(targetId) {
        // Esconder todas as seções
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Mostrar seção alvo
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Atualizar link ativo na navegação
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${targetId}`) {
                link.classList.add('active');
            }
        });

        // Fechar menu mobile se estiver aberto
        navMenu.classList.remove('active');
    }

    // Event listeners para links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Menu hambúrguer para mobile
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
        
        // Prevenir scroll do body quando menu estiver aberto
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Fechar menu ao clicar fora dele (mobile)
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Efeito de scroll na navbar
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // Lightbox para galeria de fotos
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close');

    console.log('Imagens encontradas:', galleryImages.length);

    galleryImages.forEach((img, index) => {
        console.log(`Configurando clique para imagem ${index + 1}:`, img.src);
        
        img.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Imagem clicada:', this.src);
            
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightboxCaption.textContent = this.alt;
            
            // Garantir que a imagem seja mostrada completa no lightbox
            lightboxImg.style.objectFit = 'contain';
            lightboxImg.style.objectPosition = 'center';
            lightboxImg.style.maxWidth = '95vw';
            lightboxImg.style.maxHeight = '95vh';
            
            // Prevenir scroll do body
            document.body.style.overflow = 'hidden';
        });
    });

    // Backup: adicionar clique também no container da foto
    const photoItems = document.querySelectorAll('.photo-item');
    photoItems.forEach((item, index) => {
        const img = item.querySelector('.gallery-image');
        if (img) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Container clicado:', img.src);
                
                lightbox.style.display = 'block';
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightboxCaption.textContent = img.alt;
                
                // Garantir que a imagem seja mostrada completa no lightbox
                lightboxImg.style.objectFit = 'contain';
                lightboxImg.style.objectPosition = 'center';
                lightboxImg.style.maxWidth = '95vw';
                lightboxImg.style.maxHeight = '95vh';
                
                // Prevenir scroll do body
                document.body.style.overflow = 'hidden';
            });
        }
    });

    // Fechar lightbox
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Fechar lightbox clicando fora da imagem
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Fechar lightbox com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Navegação por teclado no lightbox
    let currentImageIndex = 0;
    const allImages = Array.from(galleryImages);

    function showImage(index) {
        if (index >= 0 && index < allImages.length) {
            currentImageIndex = index;
            lightboxImg.src = allImages[index].src;
            lightboxImg.alt = allImages[index].alt;
            lightboxCaption.textContent = allImages[index].alt;
        }
    }

    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowLeft') {
                showImage(currentImageIndex - 1);
            } else if (e.key === 'ArrowRight') {
                showImage(currentImageIndex + 1);
            }
        }
    });

    // Efeitos de hover para cards de produtos
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animação de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animateElements = document.querySelectorAll('.timeline-item, .product-card, .photo-item, .feature-item');
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });

    // Adicionar classe animate-in quando elemento entra na viewport
    const animateObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    animateElements.forEach(element => {
        animateObserver.observe(element);
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efeito parallax sutil para imagens hero
    let ticking = false;
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        
        if (heroImage && scrolled < window.innerHeight) {
            const rate = scrolled * -0.3;
            heroImage.style.transform = `translateY(${rate}px)`;
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Lazy loading para imagens (simulação)
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                
                // Simular carregamento
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
                
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // Indicador de seção ativa na navbar
    function updateActiveNavLink() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Atualizar navbar ao fazer scroll
    window.addEventListener('scroll', updateActiveNavLink);

    // Inicializar primeira seção como ativa
    showSection('introducao');

    // Adicionar classe de carregamento completo
    document.body.classList.add('loaded');

    // Micro-interações simplificadas
    const interactiveElements = document.querySelectorAll('.product-card, .photo-item, .feature-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Efeito simples de fade-in para o título
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';
        heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }

    // Efeitos de clique simplificados
    const clickableElements = document.querySelectorAll('.product-card, .photo-item');
    clickableElements.forEach(element => {
        element.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Função para criar placeholders de imagem mais visuais
function createImagePlaceholders() {
    const placeholderImages = document.querySelectorAll('img[src*="placeholder"], img[src*="produto"], img[src*="foto"], img[src*="logo"], img[src*="etiqueta"]');
    
    placeholderImages.forEach(img => {
        // Adicionar texto de placeholder
        const placeholderText = document.createElement('div');
        placeholderText.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            font-size: 0.8rem;
            text-align: center;
            z-index: 10;
            pointer-events: none;
        `;
        
        // Determinar texto baseado no src
        if (img.src.includes('placeholder')) {
            placeholderText.textContent = 'SUBSTITUA: Foto da Comunidade';
        } else if (img.src.includes('produto')) {
            placeholderText.textContent = 'SUBSTITUA: Foto do Produto';
        } else if (img.src.includes('foto')) {
            placeholderText.textContent = 'SUBSTITUA: Foto da Galeria';
        } else if (img.src.includes('logo')) {
            placeholderText.textContent = 'SUBSTITUA: Logo da Comunidade';
        } else if (img.src.includes('etiqueta')) {
            placeholderText.textContent = 'SUBSTITUA: Etiqueta do Produto';
        }
        
        img.parentElement.style.position = 'relative';
        img.parentElement.appendChild(placeholderText);
    });
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', createImagePlaceholders);

// Função para demonstrar interatividade (opcional)
function addInteractiveEffects() {
    // Efeito de digitação para títulos principais
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid var(--primary-brown)';
        
        let i = 0;
        const typeWriter = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
                heroTitle.style.borderRight = 'none';
            }
        }, 100);
    }
}

// Adicionar efeitos interativos após carregamento
setTimeout(addInteractiveEffects, 1000);
