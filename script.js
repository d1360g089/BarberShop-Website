document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("index.html")) {
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                if (this.hash) {
                    e.preventDefault();
                    const sectionId = this.hash.substring(1); // Get section ID from href="#section-id"

                    // Scroll smoothly if the section exists
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }
});
