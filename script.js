// Leadership Data
const leaders = {
    exec: [
        { name: "Hon.Boniface Mbugua", role: "Chairperson", img: "boni.jpg" },
        { name: "Hon.Fredrick Njugua", role: "Vice-Chairperson", img: "fredrick.jpg" },
        { name: "Hon.Mung'ara Muragu", role: "Treasurer", img: "mung'ara.jpg" },
        { name: "Hon.Mbugua Wanyoike", role: "Secretary General", img: "MBUGUASG.jpg" },
        { name: "Deputy Secretary General", role: "Executive Council", img: "placeholder.jpg" },
        { name: "Hon.Gatheca Kimani", role: "Organizing Secretary", img: "gatheca.jpg" },
        { name: "Hon.Michael Ndung'u", role: "Deputy Organizing Secretary", img: "michael.jpg" },
        { name: "Hon.Patrick Mwangi", role: "Coordinator", img: "patrick.jpg" },
        { name: "Deputy Coordinator", role: "Executive Council", img: "placeholder.jpg" },
        { name: "Chief Whip", role: "Executive Council", img: "placeholder.jpg" },
        { name: "Hon.Ezekiel Ng'ang'a", role: "Chaplain", img: "ezekiel.jpg" }
    ],
    sec: [
        { name: "Peter Wanjiru", role: "Youth League President", img: "peter.jpg" },
        { name: "Calpha Wanjiru", role: "Youth League Vice President", img: "calpha.jpg" },
        { name: "Shadrack Mwangi", role: "Youth League Secretary", img: "shadrack.jpg" },
        { name: "Ian Macharia", role: "Director of ICT", img: "ian.png" },
        { name: "Stephen Njambi", role: "Director of Digital Media And Public Relations", img: "stephen.jpg" }
    ],
    all: [] 
};

// Create 50 placeholders for full members
for(let i=1; i<=50; i++) {
    leaders.all.push({ name: `Member ${i}`, role: "Full Member", img: "placeholder.jpg" });
}

// State tracker for toggling
let activeTab = null;

function showGroup(group, e) {
    const container = document.getElementById('leadership-display');
    
    // Toggle Logic: If the clicked group is already active, hide it and clear active button
    if (activeTab === group) {
        container.innerHTML = '';
        activeTab = null;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        return;
    }

    // Set new active tab
    activeTab = group;
    container.innerHTML = '';

    // Update active button styling
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if (e && e.target) {
        e.target.classList.add('active');
    } else {
        const fallback = document.querySelector(`.tab-btn[data-group="${group}"]`) || document.querySelector('.tab-btn');
        if (fallback) fallback.classList.add('active');
    }

    // Render Members
    leaders[group].forEach(person => {
        const imgSrc = person.img && person.img.includes('/') ? person.img : `images/${person.img}`;
        container.innerHTML += `
            <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform hover:scale-105 duration-300">
                <div class="h-64 overflow-hidden bg-gray-100">
                    <img src="${imgSrc}" 
                         alt="${person.name}" 
                         class="w-full h-full object-cover"
                         onerror="this.src='https://via.placeholder.com/400x300?text=No+Photo'" />
                </div>
                <div class="p-4 text-center">
                    <h5 class="font-bold text-lg text-slate-900">${person.name}</h5>
                    <p class="text-xs text-blue-700 font-bold uppercase tracking-wider">${person.role}</p>
                </div>
            </div>
        `;
    });
}

// Image Gallery Data
const programImages = {
    wellness: [
        { url: 'images/wellness1.jpg', desc: 'Afya Mashinani Caravan Thika' },
        { url: 'images/wellness2.jpg', desc: 'Mental Health Seminar' }
    ],
    mazingira: [
        { url: 'images/tree-planting.jpg', desc: 'Tree Planting Kiambu' },
        { url: 'images/clean-up.jpg', desc: 'Waste Management Drive' }
    ],
    ai: [
        { url: 'images/ai-training1.jpg', desc: 'Youth AI Literacy Workshop' }
    ]
};

function openGallery(program) {
    const modal = document.getElementById('gallery-modal');
    const modalTitle = document.getElementById('modal-title');
    const container = document.getElementById('modal-images');
    
    const titles = { wellness: 'Wellness Initiative Gallery', mazingira: 'Mazingira Safi Gallery', ai: 'AI Training Gallery' };
    modalTitle.innerText = titles[program];

    container.innerHTML = '';
    programImages[program].forEach(img => {
        container.innerHTML += `
            <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <img src="${img.url}" class="w-full h-48 object-cover" onerror="this.src='https://via.placeholder.com/400x300?text=Activity+Photo'">
                <p class="text-gray-400 text-xs p-2 text-center font-semibold">${img.desc}</p>
            </div>
        `;
    });

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

function closeGallery() {
    document.getElementById('gallery-modal').classList.add('hidden');
    document.body.style.overflow = 'auto'; 
}

window.onclick = function(event) {
    const modal = document.getElementById('gallery-modal');
    if (event.target == modal) {
        closeGallery();
    }
};
// Initialize view
window.onload = () => showGroup('exec');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

// Close menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});