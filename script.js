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


searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();
    const organizations = document.querySelectorAll(".card2");
    let found = 0;

    organizations.forEach(function (organization) {
        const name = organization.textContent.toLowerCase();

        if (name.includes(searchText)) {
            organization.style.display = "block";
            found++;
        } else {
            organization.style.display = "none";
        }
    });

    if (found > 0) {
        searchMessage.textContent = found + " organization(s) found.";
    } else {
        searchMessage.textContent = "No organizations found. Try another name.";
    }
});
