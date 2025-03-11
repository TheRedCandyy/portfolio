// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Three.js
    initThreeJS();
    
    // Calculate age and experience dynamically
    updateDynamicValues();
    
    // Mobile menu
    setupMobileMenu();
});

// Function to initialize Three.js
function initThreeJS() {
    const container = document.getElementById('canvas-container');
    
    // Scene, camera and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    
    // Populate arrays with random positions and colors
    for (let i = 0; i < particlesCount * 3; i += 3) {
        // Position - create a disc shape
        const radius = Math.random() * 10;
        const angle = Math.random() * Math.PI * 2;
        
        posArray[i] = Math.cos(angle) * radius; // x
        posArray[i + 1] = (Math.random() - 0.5) * 5; // y
        posArray[i + 2] = Math.sin(angle) * radius; // z
        
        // Color (shades of blue/indigo)
        const colorChoice = Math.random();
        if (colorChoice < 0.3) {
            // Indigo
            colorsArray[i] = 0.4;     // R
            colorsArray[i + 1] = 0.2;  // G
            colorsArray[i + 2] = 0.8;  // B
        } else if (colorChoice < 0.6) {
            // Lighter blue
            colorsArray[i] = 0.3;     // R
            colorsArray[i + 1] = 0.4;  // G
            colorsArray[i + 2] = 0.9;  // B
        } else {
            // Purplish
            colorsArray[i] = 0.5;     // R
            colorsArray[i + 1] = 0.2;  // G
            colorsArray[i + 2] = 0.7;  // B
        }
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    
    // Material for particles
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        transparent: true,
        opacity: 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });
    
    // Particles
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Position the camera
    camera.position.z = 5;
    
    // Function to handle window resizing
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Animation function
    const clock = new THREE.Clock();
    
    function animate() {
        const elapsedTime = clock.getElapsedTime();
        requestAnimationFrame(animate);
        
        // Rotation based on time
        particles.rotation.y = elapsedTime * 0.05;
        
        // Subtle movement
        particles.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;
        particles.rotation.z = Math.sin(elapsedTime * 0.1) * 0.05;
        
        // Mouse influence
        particles.rotation.y += mouseX * 0.001;
        particles.rotation.x += mouseY * 0.001;
        
        // Render
        renderer.render(scene, camera);
    }
    
    animate();
}

// Function to update dynamic values based on current date
function updateDynamicValues() {
    // Birth date and career start
    const birthDate = new Date('2001-10-27');
    const startCodingDate = new Date('2015-01-01'); // Assuming start of 2015 at 14 years old
    const careerStartDate = new Date('2022-04-04'); // Current date
    
    const currentDate = new Date();
    
    // Calculate age
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();
    
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    
    // Calculate years of professional experience
    const yearsExperience = currentDate.getFullYear() - careerStartDate.getFullYear();
    
    // Calculate start of coding and career
    const startCodingYear = startCodingDate.getFullYear();
    const startYearDynamic = careerStartDate.getFullYear();
    
    // Update elements on the page
    document.getElementById('age').textContent = age;
    document.getElementById('yearsExperience').textContent = yearsExperience;
    document.getElementById('startCodingYear').textContent = startCodingYear;
    document.getElementById('startYearDynamic').textContent = startYearDynamic;
    document.getElementById('currentYear').textContent = currentDate.getFullYear();
}

// Mobile menu setup
function setupMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });
    
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
    
    // Close menu when clicking a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
} 