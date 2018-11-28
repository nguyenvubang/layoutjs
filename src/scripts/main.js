// Main
$(document).ready(function () {
    $('.button .viewcart').each(function(){
        $(this).click(function(){
            var getcnt= $(this).parents('.cnt')
            $('#exampleModalCenter .modal-header h2').html(getcnt.find('h2').html())
            $('#exampleModalCenter .modal-body .col-7').html(getcnt.find('p').html())
            $('#exampleModalCenter .modal-body .col-5').html(getcnt.find('.hehe').html())
            $('#exampleModalCenter .modal-body .col-5 .owl-carousel').removeClass('d-none')
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                
            })


     })  
});
})

// Main