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



  