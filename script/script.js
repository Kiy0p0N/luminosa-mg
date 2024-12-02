$(document).ready(function () {

    $(window).on("scroll", function () {
        var scrollPos = $(window).scrollTop();
        
        $(".nav-link").each(function () {
            var sectionId = $(this).attr("href");
            var section = $(sectionId);
            
            if (
                section.position().top <= scrollPos + 100 && // Posição do início da seção
                section.position().top + section.height() > scrollPos
            ) {
                $(".nav-link").removeClass("active"); // Remove 'active' de todas
                $(this).addClass("active"); // Adiciona à atual
            }
        });
    });

    // Verifica se o tema está armazenado no localStorage
    if (localStorage.getItem('theme') === 'dark') {
        $('body').addClass('dark-mode');
        $('#theme-toggle').text('☀️'); // Atualiza o ícone
    }

    // Alterna o tema ao clicar no botão
    $('#theme-toggle').on('click', function () {
        $('body').toggleClass('dark-mode');

        // Altera o ícone do botão
        if ($('body').hasClass('dark-mode')) {
            $(this).text('☀️');
            localStorage.setItem('theme', 'dark'); // Salva a preferência
        } else {
            $(this).text('🌙');
            localStorage.setItem('theme', 'light'); // Salva a preferência
        }
    });
});
