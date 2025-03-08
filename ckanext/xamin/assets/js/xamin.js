function isMobileTablet(){
    const isMobileOrTablet = /Mobi|Android|iPad|iPhone/i.test(navigator.userAgent);
    return isMobileOrTablet;
};



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
/*
document.addEventListener('DOMContentLoaded', () =>{
    var hamburgerButton = document.querySelector('.navbar-toggler');
    var mainNavbar = document.querySelector('.main-navbar');

    hamburgerButton.addEventListener('click', () =>{
        setTimeout(() =>{
            if (mainNavbar.classList.contains('show')){
                document.body.classList.add('no-scroll');
                var rootStyles = document.querySelector(':root');
                mobileClientHeight = mainNavbar.clientHeight;
                rootStyles.style.setProperty('--mobile-menu-height', mobileClientHeight);
            }
            else{
                document.body.classList.remove('no-scroll');
            };
        }, 600);
        
    });

}); */

document.addEventListener('DOMContentLoaded', () => {
    var hamburgerButton = document.querySelector('.navbar-toggler');
    var mainNavbar = document.querySelector('.main-navbar');

    hamburgerButton.addEventListener('click', () => {
        setTimeout(() => {
            if (mainNavbar.classList.contains('show')) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        }, 600);
    });
});

/* ----- Hamburger menu arrows and dropdown -------- */

document.addEventListener("DOMContentLoaded", function () {
    const dropdownMenuLi = document.querySelector(".x-collapsable");
    const dropdownMenu = dropdownMenuLi.querySelector(".x-dropdown-menu");

    let timeout; // Variable to store the timeout
    let lastX, lastY; // Store last mouse position

    dropdownMenuLi.addEventListener("mouseenter", (event) => {
        dropdownMenuLi.classList.add("x-dropdown"); // Show dropdown
        lastX = event.clientX;
        lastY = event.clientY;
    });

    dropdownMenuLi.addEventListener("mousemove", (event) => {
        // Calculate distance moved
        let distance = Math.sqrt(
            Math.pow(event.clientX - lastX, 2) + Math.pow(event.clientY - lastY, 2)
        );

        // If distance > 30px, assume the user moved away
        if (distance > 50) {
            dropdownMenuLi.classList.remove("x-dropdown");
        }
        lastX = event.clientX;
        lastY = event.clientY;
    });

    dropdownMenuLi.addEventListener("mouseleave", () => {
        // Add a delay before hiding, allowing the user time to move to submenu
        timeout = setTimeout(() => {
            dropdownMenuLi.classList.remove("x-dropdown");
        }, 300);
    });

    dropdownMenu.addEventListener("mouseenter", () => {
        clearTimeout(timeout); // Cancel hiding if user enters submenu
    });

    
});

    document.addEventListener("DOMContentLoaded", function () {
        if(isMobileTablet()){
            document.querySelectorAll(".x-collapsable > a").forEach(anchor => {
                anchor.addEventListener("click", function (event) {
                    // Prevent default link behavior
                    event.preventDefault();

                    // If clicking the arrow, stop propagation (to avoid double toggling)
                    if (event.target.closest(".dropdown-arrow")) {
                        event.stopPropagation();
                    }

                    const parentLi = this.closest(".x-collapsable");
                    const submenu = parentLi.querySelector(".x-dropdown-menu");

                    if (!submenu) return; // Prevent errors if submenu is missing

                    // Toggle 'open' class
                    parentLi.classList.toggle("open");

                    // Animate submenu (only for mobile)
                    if (window.innerWidth <= 990) {
                        if (parentLi.classList.contains("open")) {
                            submenu.style.maxHeight = submenu.scrollHeight + "px";
                        } else {
                            submenu.style.maxHeight = "0px";
                        }
                    }
                });
            });
        }
    });

/* Remove Dimoi filtering if organization single page */

document.addEventListener('DOMContentLoaded', () => {
    if (this.location.href.indexOf('organization') > -1){
        let parentDiv = document.querySelector('.filters > div');
        if (parentDiv){
            let dimoiSections = parentDiv.querySelectorAll('.module');
            dimoiSections[0].remove();
        };
    };
});



