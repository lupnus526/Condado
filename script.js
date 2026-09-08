document.addEventListener('DOMContentLoaded', () => {
    
    // Trocar aba ativa no menu superior
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Lógica de transição suave entre a Home e o Painel de Classes
    const homeView = document.getElementById('homeView');
    const classesView = document.getElementById('classesView');
    const openClassesBtn = document.getElementById('openClassesView');
    const backToHomeBtn = document.getElementById('backToHome');

    if(openClassesBtn && classesView && homeView) {
        openClassesBtn.addEventListener('click', () => {
            homeView.classList.add('hidden');
            setTimeout(() => {
                homeView.style.display = 'none';
                classesView.style.display = 'flex';
                setTimeout(() => {
                    classesView.classList.add('active');
                }, 50);
            }, 300);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if(backToHomeBtn && classesView && homeView) {
        backToHomeBtn.addEventListener('click', () => {
            classesView.classList.remove('active');
            setTimeout(() => {
                classesView.style.display = 'none';
                homeView.style.display = 'block';
                setTimeout(() => {
                    homeView.classList.remove('hidden');
                }, 50);
            }, 300);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Botões de compra / ação simulados
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Redirecionando para a área de doação / loja segura...');
        });
    });

});