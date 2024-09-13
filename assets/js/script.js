// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

$(document).ready(function () {
    $('.navbar-btn').on('click', function () {
        $('.navbar-collapse').toggleClass('show');
    })

    $('.database input').each(function () {
        let db_checkbox = $(this);
        db_checkbox.on('click', function () {
            if (db_checkbox.is(':checked')) {
                db_checkbox.closest('.database').addClass('active');
            } else {
                db_checkbox.closest('.database').removeClass('active');
            }
        })
    })

    if ($('.tab').length > 0) {

        let gs_height = $('.get-started-sec').height();
        $('.get-started-sec').css({
            'min-height': gs_height + 'px'
        })
        console.log(gs_height);
    }

    if ($('select').length > 0) {
        $('select').select2({
            minimumResultsForSearch: Infinity
        });
    }
})
function changeTab(tab) {
    $('.tab').hide();
    $('#' + tab).fadeIn();
}