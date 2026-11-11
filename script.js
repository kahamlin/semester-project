function viewProfile(organization){
    if(organization == "Zeta Phi Beta"){
        window.location.href ="zeta.html";
    }else if(organization == "Alpha Kappa Alpha"){
        window.location.href ="aka.html";
    }else if(organization == "Delta Sigma Theta"){
        window.location.href ="delta.html";
    }else if(organization == "Sigma Gamma Rho"){
        window.location.href ="sigma.html";
    }else if(organization == "Phi Beta Sigma"){
        window.location.href ="phi.html";
    }else if(organization == "Kappa Alpha Psi"){
        window.location.href ="kappa.html";
    }else if(organization == "Iota Phi Theta"){
        window.location.href ="iota.html";
    }
}

function viewOrgs(){
    window.location.href = "organizations.html";
}

function viewEvents(){
    window.location.href = "events.html";
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

