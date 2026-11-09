function viewProfile(organization){
    if(organization == "Zeta Phi Beta"){
        window.location.href ="zeta.html";
    }
}

function viewAll(){
    window.location.href = "organizations.html";
}



const searchInput = document.querySelector("#orgSearch");
const searchMessage = document.querySelector("#searchMessage");
const organizations = document.querySelectorAll(".card2");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentFilter = "all";

function filterOrganizations() {
    const searchText = searchInput.value.toLowerCase();
    let found = 0;

    organizations.forEach(function(organization) {
        const name = organization.textContent.toLowerCase();
        const category = organization.dataset.category || "";

        const matchesSearch = name.includes(searchText);
        const matchesCategory = currentFilter === "all" ||
                                category.includes(currentFilter);

        if (matchesSearch && matchesCategory) {
            organization.style.display = "flex";
            found++;
        } else {
            organization.style.display = "none";
        }
    });

    if (found > 0) {
        searchMessage.textContent = found + " organization(s) found.";
    } else {
        searchMessage.textContent = "No organizations found.";
    }
}

if (searchInput) {
    searchInput.addEventListener("input", filterOrganizations);

    filterButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            currentFilter = button.dataset.filter;

            filterButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");
            filterOrganizations();
        });
    });

    filterOrganizations();
}

