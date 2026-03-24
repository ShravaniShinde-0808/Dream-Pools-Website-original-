const galleryContainer = document.getElementById('gallery-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalBtn = document.getElementById('close-modal-btn');
const addToCartBtn = document.querySelector('.add-to-cart-btn');

const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalMaterial = document.getElementById('modal-material');
const modalPoolType = document.getElementById('modal-pool-type');
const modalHeight = document.getElementById('modal-height');
const modalCapacity = document.getElementById('modal-capacity');
const modalLength = document.getElementById('modal-length');
const modalWidth = document.getElementById('modal-width');
const modalDescription = document.getElementById('modal-description');

function renderGallery(category) {
    const allGalleryItems = document.querySelectorAll('.gallery-item');
    allGalleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block'; // Or 'grid' if you want to control it more precisely
        } else {
            item.style.display = 'none';
        }
    });
}

function openModal(clickedItemElement) {
    modalImage.src = clickedItemElement.dataset.imageSrc;
    modalImage.alt = clickedItemElement.dataset.title;
    modalTitle.textContent = clickedItemElement.dataset.title;
    modalPrice.textContent = clickedItemElement.dataset.price;
    modalMaterial.textContent = clickedItemElement.dataset.material;
    modalPoolType.textContent = clickedItemElement.dataset.poolType;
    modalHeight.textContent = clickedItemElement.dataset.height;
    modalCapacity.textContent = clickedItemElement.dataset.capacity;
    modalLength.textContent = clickedItemElement.dataset.length;
    modalWidth.textContent = clickedItemElement.dataset.width;
    modalDescription.textContent = clickedItemElement.dataset.description;

    modalOverlay.classList.add('active');
    document.body.classList.add('modal-open'); // Prevent body scroll
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.classList.remove('modal-open'); // Re-enable body scroll
}

// Event Listeners
filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        renderGallery(event.target.dataset.category);
    });
});

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) { // Close only if clicking on the overlay itself
        closeModal();
    }
});

addToCartBtn.addEventListener('click', () => {
    alert('Item added to cart!');
    closeModal();
});

// Add event listeners to all view details buttons (they are now static in HTML)
document.querySelectorAll('.view-details-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const galleryItem = event.target.closest('.gallery-item');
        openModal(galleryItem);
    });
});

/* Services Info */

document.addEventListener("DOMContentLoaded", () => {
  const sliderContainers = document.querySelectorAll(".slider-container")

  sliderContainers.forEach((container) => {
    const images = container.querySelectorAll(".slider-image")
    let currentImageIndex = 0

    const showImage = (index) => {
      images.forEach((img, i) => {
        img.classList.remove("active")
        if (i === index) {
          img.classList.add("active")
        }
      })
    }

    const nextImage = () => {
      currentImageIndex = (currentImageIndex + 1) % images.length
      showImage(currentImageIndex)
    }

    // Initialize the first image as active
    showImage(currentImageIndex)

    // Start automatic slideshow
    setInterval(nextImage, 3000) // Change image every 3 seconds
  })
})
