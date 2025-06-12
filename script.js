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
    '/imagens/produtos/veccon_moradas_01/image_01_veccon.jpg',
    '/imagens/produtos/veccon_moradas_01/image_02_veccon.jpg',
    '/imagens/produtos/veccon_moradas_01/image_03_veccon.jpg',
    '/imagens/produtos/veccon_moradas_01/image_04_veccon.jpg',
    '/imagens/produtos/veccon_moradas_01/image_05_veccon.jpg'
];
const carrosselImagens_neo_residencial = [
    '/imagens/produtos/neo_residencial/image_03_neoresidencial.jpg',
    '/imagens/produtos/neo_residencial/image_01_neoresidencial.jpg',
    '/imagens/produtos/neo_residencial/image_02_neoresidencial.jpg',
    '/imagens/produtos/neo_residencial/image_04_neoresidencial.jpg'
];
const carrosselImagens_arvo_residencial = [
    '/imagens/produtos/arvo_residencial/image_03_arvoresidencial.jpg',
    '/imagens/produtos/arvo_residencial/image_01_arvoresidencial.jpg',
    '/imagens/produtos/arvo_residencial/image_02_arvoresidencial.jpg',
    '/imagens/produtos/arvo_residencial/image_04_arvoresidencial.jpg'
];
const carrosselImagens_encantos_de_toscana = [
    '/imagens/produtos/encantos_de_toscana/image_03_encantosdetoscana.jpg',
    '/imagens/produtos/encantos_de_toscana/image_01_encantosdetoscana.jpg',
    '/imagens/produtos/encantos_de_toscana/image_02_encantosdetoscana.jpg',
    '/imagens/produtos/encantos_de_toscana/image_04_encantosdetoscana.jpg'
];
const carrosselImagens_life_residencial = [
    '/imagens/produtos/life_residencial/image_03_liferesidencial.jpg',
    '/imagens/produtos/life_residencial/image_01_liferesidencial.jpg',
    '/imagens/produtos/life_residencial/image_02_liferesidencial.jpg',
    '/imagens/produtos/life_residencial/image_04_liferesidencial.jpg'
];
const carrosselImagens_epic_residencial = [
    '/imagens/produtos/epic_residencial/image_03_epicresidencial.jpg',
    '/imagens/produtos/epic_residencial/image_01_epicresidencial.jpg',
    '/imagens/produtos/epic_residencial/image_02_epicresidencial.jpg',
    '/imagens/produtos/epic_residencial/image_04_epicresidencial.jpg'
];
const carrosselImagens_maxy_santana = [
    '/imagens/produtos/maxy_santana/image_03_maxysantana.jpg',
    '/imagens/produtos/maxy_santana/image_01_maxysantana.jpg',
    '/imagens/produtos/maxy_santana/image_02_maxysantana.jpg',
    '/imagens/produtos/maxy_santana/image_04_maxysantana.jpg'
];
const carrosselImagens_sou_pleno_paisage = [
    '/imagens/produtos/sou_pleno_paisage/image_03_souplenopaisage.jpg',
    '/imagens/produtos/sou_pleno_paisage/image_01_souplenopaisage.jpg',
    '/imagens/produtos/sou_pleno_paisage/image_02_souplenopaisage.jpg',
    '/imagens/produtos/sou_pleno_paisage/image_04_souplenopaisage.jpg'
];
const carrosselImagens_reserva_do_parque = [
    '/imagens/produtos/reserva_do_parque/image_03_reservadoparque.jpg',
    '/imagens/produtos/reserva_do_parque/image_01_reservadoparque.jpg',
    '/imagens/produtos/reserva_do_parque/image_02_reservadoparque.jpg',
    '/imagens/produtos/reserva_do_parque/image_04_reservadoparque.jpg'
];
const carrosselImagens_reserva_dos_ipes = [
    '/imagens/produtos/reserva_dos_ipes/image_03_reservadodosipes.jpg',
    '/imagens/produtos/reserva_dos_ipes/image_01_reservadodosipes.jpg',
    '/imagens/produtos/reserva_dos_ipes/image_02_reservadodosipes.jpg',
    '/imagens/produtos/reserva_dos_ipes/image_04_reservadodosipes.jpg'
];
const carrosselImagens_veccon_paulinia = [
    '/imagens/produtos/veccon_paulinia/image_01_vecconpaulinia.jpg',
    '/imagens/produtos/veccon_paulinia/image_02_vecconpaulinia.jpg',
    '/imagens/produtos/veccon_paulinia/image_03_vecconpaulinia.jpg',
    '/imagens/produtos/veccon_paulinia/image_04_vecconpaulinia.jpg',
    '/imagens/produtos/veccon_paulinia/image_05_vecconpaulinia.jpg',
    '/imagens/produtos/veccon_paulinia/image_06_vecconpaulinia.jpg'
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

carousels.forEach(c => {
    const img = document.querySelector(c.imgSelector);
    const btn = document.querySelector(c.btnSelector);
    initCarousel(c.images, img, btn);
});
