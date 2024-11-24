<script>
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Função para avançar para o próximo item do carrossel
    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems; // Ciclo para o início quando chega no último
        updateCarousel();
    }

    // Função para voltar para o item anterior
    function prevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Ciclo para o final quando chega no primeiro
        updateCarousel();
    }

    // Atualiza o carrossel (movendo os itens)
    function updateCarousel() {
        const offset = -currentIndex * 100; // Move o carrossel para o item desejado
        document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    }

    // Configura os intervalos para o carrossel avançar automaticamente
    setInterval(nextItem, 5000); // Muda de item a cada 5 segundos (ajuste conforme necessário)
    const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

</script>
