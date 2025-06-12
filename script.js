function initCarousel(images, imgElement, nextButton) {
    let index = 0;
    if (!imgElement || !nextButton || !Array.isArray(images) || images.length === 0) return;
    imgElement.src = images[index];
    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        index = (index + 1) % images.length;
        imgElement.src = images[index];
    });
}

function idToName(id){
    switch (id){
        case "veccon_moradas_01_sb_btn":
            return "Veccon Moradas 01"

        case "arvo_residencial_sb_btn":
            return "Arvo Residencial"
        
        case "neo_residencial_sb_btn":
            return "Neo Residencial"

        case "encantos_de_toscana_sb_btn":
            return "Encantos de Toscana"

        case "life_residencial_sb_btn":
            return "Life Residencial"

        case "epic_residencial_sb_btn":
            return "Epic Residencial"

        case "maxy_santana_sb_btn":
            return "Maxy Santana"

        case "reserva_do_parque_sb_btn":
            return "Reserva do Parque"

        case "reserva_dos_ipes_sb_btn":
            return "Reserva dos Ipês"

        case "veccon_paulinia_sb_btn":
            return "Veccon Paulínia"
    }
}

const btns = document.querySelectorAll('.btn.btn-primary.btn-sm');
btns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    const btnId = btn.getAttribute('id');
    if (btnId && btnId.endsWith('_sb_btn')) {
      const nomeEmpreendimento = idToName(btnId);
      window.open(`https://wa.me/5511987713651?text=Olá, gostaria de saber mais sobre o empreendimento *${encodeURIComponent(nomeEmpreendimento)}*`);
    }
  });
});

const filtercidade = document.getElementById('filtro-cidade');
const filterstatus = document.getElementById('filtro-status');

function applyFilters() {
    const selectedCidade = filtercidade ? filtercidade.value : '';
    const selectedStatus = filterstatus ? filterstatus.value : '';
    const catalog_items = document.querySelectorAll('.col-md-4.empreendimento');
    catalog_items.forEach(ctg_item => {
        let show = true;
        if (selectedCidade && selectedCidade !== 'todas' && ctg_item.getAttribute('data-cidade') !== selectedCidade) {
            show = false;
        }
        if (selectedStatus && selectedStatus !== 'todos' && ctg_item.getAttribute('data-status') !== selectedStatus) {
            show = false;
        }
        ctg_item.style.display = show ? '' : 'none';
    });
}

if (filtercidade) {
    filtercidade.addEventListener('change', applyFilters);
}
if (filterstatus) {
    filterstatus.addEventListener('change', applyFilters);
}

const carrosselImagens_veccon_moradas01 = [
    '/imagens/produtos/veccon_moradas_01/image_01_veccon.webp',
    '/imagens/produtos/veccon_moradas_01/image_02_veccon.webp',
    '/imagens/produtos/veccon_moradas_01/image_03_veccon.webp',
    '/imagens/produtos/veccon_moradas_01/image_04_veccon.webp',
    '/imagens/produtos/veccon_moradas_01/image_05_veccon.webp'
];
const carrosselImagens_neo_residencial = [
    '/imagens/produtos/neo_residencial/image_03_neoresidencial.webp',
    '/imagens/produtos/neo_residencial/image_01_neoresidencial.webp',
    '/imagens/produtos/neo_residencial/image_02_neoresidencial.webp',
    '/imagens/produtos/neo_residencial/image_04_neoresidencial.webp'
];
const carrosselImagens_arvo_residencial = [
    '/imagens/produtos/arvo_residencial/image_03_arvoresidencial.webp',
    '/imagens/produtos/arvo_residencial/image_01_arvoresidencial.webp',
    '/imagens/produtos/arvo_residencial/image_02_arvoresidencial.webp',
    '/imagens/produtos/arvo_residencial/image_04_arvoresidencial.webp'
];
const carrosselImagens_encantos_de_toscana = [
    '/imagens/produtos/encantos_de_toscana/image_03_encantosdetoscana.webp',
    '/imagens/produtos/encantos_de_toscana/image_01_encantosdetoscana.webp',
    '/imagens/produtos/encantos_de_toscana/image_02_encantosdetoscana.webp',
    '/imagens/produtos/encantos_de_toscana/image_04_encantosdetoscana.webp'
];
const carrosselImagens_life_residencial = [
    '/imagens/produtos/life_residencial/image_03_liferesidencial.webp',
    '/imagens/produtos/life_residencial/image_01_liferesidencial.webp',
    '/imagens/produtos/life_residencial/image_02_liferesidencial.webp',
    '/imagens/produtos/life_residencial/image_04_liferesidencial.webp'
];
const carrosselImagens_epic_residencial = [
    '/imagens/produtos/epic_residencial/image_03_epicresidencial.webp',
    '/imagens/produtos/epic_residencial/image_01_epicresidencial.webp',
    '/imagens/produtos/epic_residencial/image_02_epicresidencial.webp',
    '/imagens/produtos/epic_residencial/image_04_epicresidencial.webp'
];
const carrosselImagens_maxy_santana = [
    '/imagens/produtos/maxy_santana/image_03_maxysantana.webp',
    '/imagens/produtos/maxy_santana/image_01_maxysantana.webp',
    '/imagens/produtos/maxy_santana/image_02_maxysantana.webp',
    '/imagens/produtos/maxy_santana/image_04_maxysantana.webp'
];
const carrosselImagens_sou_pleno_paisage = [
    '/imagens/produtos/sou_pleno_paisage/image_03_souplenopaisage.webp',
    '/imagens/produtos/sou_pleno_paisage/image_01_souplenopaisage.webp',
    '/imagens/produtos/sou_pleno_paisage/image_02_souplenopaisage.webp',
    '/imagens/produtos/sou_pleno_paisage/image_04_souplenopaisage.webp'
];
const carrosselImagens_reserva_do_parque = [
    '/imagens/produtos/reserva_do_parque/image_03_reservadoparque.webp',
    '/imagens/produtos/reserva_do_parque/image_01_reservadoparque.webp',
    '/imagens/produtos/reserva_do_parque/image_02_reservadoparque.webp',
    '/imagens/produtos/reserva_do_parque/image_04_reservadoparque.webp'
];
const carrosselImagens_reserva_dos_ipes = [
    '/imagens/produtos/reserva_dos_ipes/image_03_reservadodosipes.webp',
    '/imagens/produtos/reserva_dos_ipes/image_01_reservadodosipes.webp',
    '/imagens/produtos/reserva_dos_ipes/image_02_reservadodosipes.webp',
    '/imagens/produtos/reserva_dos_ipes/image_04_reservadodosipes.webp'
];
const carrosselImagens_veccon_paulinia = [
    '/imagens/produtos/veccon_paulinia/image_01_vecconpaulinia.webp',
    '/imagens/produtos/veccon_paulinia/image_02_vecconpaulinia.webp',
    '/imagens/produtos/veccon_paulinia/image_03_vecconpaulinia.webp',
    '/imagens/produtos/veccon_paulinia/image_04_vecconpaulinia.webp',
    '/imagens/produtos/veccon_paulinia/image_05_vecconpaulinia.webp',
    '/imagens/produtos/veccon_paulinia/image_06_vecconpaulinia.webp'
];

const carousels = [
    {
        images: carrosselImagens_veccon_moradas01,
        imgSelector: '.carousel-image[data-carousel="veccon_moradas_01"]',
        btnSelector: '.next-image[data-carousel="veccon_moradas_01"]'
    },
    {
        images: carrosselImagens_neo_residencial,
        imgSelector: '.carousel-image[data-carousel="neo_residencial"]',
        btnSelector: '.next-image[data-carousel="neo_residencial"]'
    },
    {
        images: carrosselImagens_arvo_residencial,
        imgSelector: '.carousel-image[data-carousel="arvo_residencial"]',
        btnSelector: '.next-image[data-carousel="arvo_residencial"]'
    },
    {
        images: carrosselImagens_encantos_de_toscana,
        imgSelector: '.carousel-image[data-carousel="encantos_de_toscana"]',
        btnSelector: '.next-image[data-carousel="encantos_de_toscana"]'
    },
    {
        images: carrosselImagens_life_residencial,
        imgSelector: '.carousel-image[data-carousel="life_residencial"]',
        btnSelector: '.next-image[data-carousel="life_residencial"]'
    },
    {
        images: carrosselImagens_epic_residencial,
        imgSelector: '.carousel-image[data-carousel="epic_residencial"]',
        btnSelector: '.next-image[data-carousel="epic_residencial"]'
    },
    {
        images: carrosselImagens_maxy_santana,
        imgSelector: '.carousel-image[data-carousel="maxy_santana"]',
        btnSelector: '.next-image[data-carousel="maxy_santana"]'
    },
    {
        images: carrosselImagens_sou_pleno_paisage,
        imgSelector: '.carousel-image[data-carousel="sou_pleno_paisage"]',
        btnSelector: '.next-image[data-carousel="sou_pleno_paisage"]'
    },
    {
        images: carrosselImagens_reserva_do_parque,
        imgSelector: '.carousel-image[data-carousel="reserva_do_parque"]',
        btnSelector: '.next-image[data-carousel="reserva_do_parque"]'
    },
    {
        images: carrosselImagens_reserva_dos_ipes,
        imgSelector: '.carousel-image[data-carousel="reserva_dos_ipes"]',
        btnSelector: '.next-image[data-carousel="reserva_dos_ipes"]'
    },
    {
        images: carrosselImagens_veccon_paulinia,
        imgSelector: '.carousel-image[data-carousel="veccon_paulinia"]',
        btnSelector: '.next-image[data-carousel="veccon_paulinia"]'
    },
];  

function preloadImages(images) {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

carousels.forEach(c => {
    preloadImages(c.images); // pré-carrega as imagens do carrossel
    const img = document.querySelector(c.imgSelector);
    const btn = document.querySelector(c.btnSelector);
    initCarousel(c.images, img, btn);
});
