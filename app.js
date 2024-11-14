let images = [];
let descriptions = [];
let currentImageIndex = -1;
let imageSet = 1;

function openModal(element, set) {
    images = Array.from(document.querySelectorAll(`#lightbox img`));
    descriptions = images.map(img => img.getAttribute("data-description"));
    imageSet = set;
    currentImageIndex = images.indexOf(element);

    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");

    modal.style.display = "flex";
    modalImage.src = element.src;
    modalDescription.textContent = descriptions[currentImageIndex];

    updateNavigationButtons();
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function nextImage() {
    currentImageIndex++;
    updateModalContent();
}

function prevImage() {
    currentImageIndex--;
    updateModalContent();
}

function updateModalContent() {
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");

    modalImage.src = images[currentImageIndex].src;
    modalDescription.textContent = descriptions[currentImageIndex];

    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevButton = document.querySelector(".modal-content button:first-child");
    const nextButton = document.querySelector(".modal-content button:last-child");

    // Logic for set 1 (Images 1-4)
    if (imageSet === 1) {
        if (currentImageIndex === 0) {
            prevButton.style.display = "none";
        } else {
            prevButton.style.display = "block";
        }

        if (currentImageIndex === 3) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "block";
        }
    } else {
        // Logic for set 2 (Images 5-8)
        if (currentImageIndex === 4) {
            prevButton.style.display = "none";
        } else {
            prevButton.style.display = "block";
        }

        if (currentImageIndex === 7) {
            nextButton.style.display = "none";
        } else {
            nextButton.style.display = "block";
        }
    }
}