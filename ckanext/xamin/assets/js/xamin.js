var menuItem = document.querySelectorAll('.masthead .main-navbar ul li a');
menuItem.forEach(item => {
    item.addEventListener('mouseover', () =>{
        item.classList.add("menu-item-toggled");
});
    item.addEventListener('mouseout', () => {
        item.classList.remove("menu-item-toggled");
    });
});

/* ----------- Menu-Search ----------
Desc: Enables the search icon to be used as submit button, when toggled. */

document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector(".search-box").querySelector('form');
    const searchInput = document.querySelector(".input-search");
    const searchButton = document.querySelector(".btn-search");

    let expanded = false; // tracks if we've already expanded

    searchButton.addEventListener("click", function(e) {
        // If not expanded yet, just expand and focus the input; don't submit
        if (!expanded) {
            searchInput.focus();
            expanded = true;
            return;
        }

        // If expanded but empty, do nothing
        if (!searchInput.value.trim()) {
            e.preventDefault();
            return;
        }

        // If expanded and we have text, programmatically submit
        searchForm.submit(); 
    });
});

/* ----- Hamburger Menu No Scroll on toggle ----- */
document.addEventListener('DOMContentLoaded', () =>{
    var hamburgerButton = document.querySelector('.navbar-toggler');
    var mainNavbar = document.querySelector('.main-navbar');

    hamburgerButton.addEventListener('click', () =>{
        setTimeout(() =>{
            if (mainNavbar.classList.contains('show')){
                document.body.classList.add('no-scroll');
            }
            else{
                document.body.classList.remove('no-scroll');
            };
        }, 600);
        
    });

});
