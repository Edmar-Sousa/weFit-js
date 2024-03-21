
// --------------- menu -----------------
$('.btn-group-vertical')
    .first()
    .removeClass('btn-group-vertical')
    .addClass('btn-group-horizontal')
    .attr('aria-label', 'Horizontal button group')
    .children('.btn')
    .each(function () {
        $(this).addClass('font-weight-bold')
    })


// -------------- banner ----------------
$('.jumbotron')
    .first()
    .addClass('bg-secondary text-white text-right')
    .children('.btn')
    .first()
    .removeClass('btn-primary')
    .addClass('btn-success')


// -------------- cards -----------------
const cardsContainer = $('.row')
    .eq(2)


const natureCard = cardsContainer
    .children('.col-lg-3')
    .eq(3)

natureCard.detach()

const techCard = cardsContainer
    .children('.col-lg-3')
    .eq(1)

techCard.detach()

cardsContainer
    .children('.col-lg-3')
    .eq(0)
    .before(natureCard)

cardsContainer
    .children('.col-lg-3')
    .eq(2)
    .after(techCard)

cardsContainer
    .find('.col-lg-3:eq(1) > .card > .card-body > .btn')
    .addClass('btn-success')


// --------------- list ---------------
const fourthItem = $('<li class="list-group-item">Quarto item</li>')
    .addClass('active')

const fifthItem = $('<li class="list-group-item">Quinto item</li>')

$('.list-group')
    .first()
    .append(fourthItem)
    .append(fifthItem)
    .children('.list-group-item')
    .first()
    .removeClass('active')