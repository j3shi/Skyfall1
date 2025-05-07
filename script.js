function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImage.src = imgElement.src; 
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; 
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error(`Section with ID ${sectionId} not found.`);
    }
}

