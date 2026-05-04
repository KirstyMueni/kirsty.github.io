// Fade-in on scroll
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* --- PROJECT GALLERY DATA --- */
// Add your image filenames here. Make sure they match your 'images' folder exactly!
const projectData = {
    "CyberSecurity": [
        "images/cisco-ethical-hacker-cert.jpg", 
        "images/ctf-win-01.png",
        "images/nmap-report.png"
    ],
    "AV Installation Setup": [
        "images/classroom-setup-1.jpg",
        "images/rack-cable-management.jpg"
    ],
    "Digital Literacy Training": [
        "images/youth-training-session.jpg"
    ],
    "Networking Support": [
        "images/server-config.jpg"
    ]
};

/* --- MODAL LOGIC --- */
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalImages = document.getElementById('modalImages');
const closeBtn = document.querySelector('.close-modal');

// Listen for clicks on your project buttons
document.querySelectorAll('.project-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Get the text inside the button (e.g., "CyberSecurity")
        const category = button.innerText.trim();
        const images = projectData[category] || [];

        // Set the title and clear previous images
        modalTitle.innerText = category;
        modalImages.innerHTML = '';

        // Add new images to the modal
        if (images.length > 0) {
            images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.classList.add('gallery-item');
                // Optional: click image to open full size in new tab
                img.onclick = () => window.open(src, '_blank');
                modalImages.appendChild(img);
            });
        } else {
            modalImages.innerHTML = '<p style="text-align:center; width:100%;">Gallery images coming soon!</p>';
        }

        // Show the modal
        modal.style.display = 'block';
    });
});

/* --- CLOSE MODAL LOGIC --- */
// Close when clicking the 'X'
closeBtn.onclick = () => {
    modal.style.display = 'none';
};

// Close when clicking anywhere outside the content box
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
