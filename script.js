const leaders = {
    exec: [
        { name: "Chairperson", role: "Executive Council", img: "placeholder.jpg" },
        { name: "Vice-Chairperson", role: "Executive Council", img: "placeholder.jpg" },
         { name: "Treasurer", role: "Executive Council", img: "placeholder.jpg" },
        { name: "Secretary General", role: "Executive Council", img: "placeholder.jpg" },
         { name: "Deputy Secretary General", role: "Executive Council", img: "placeholder.jpg" },
        { name: "Organizing Secretary", role: "Executive Council", img: "placeholder.jpg" },
        { name: "Deputy Organizing Secretary", role: "Executive Council", img: "placeholder.jpg" },
        { name: "County Coordinator", role: "Executive Council", img: "placeholder.jpg" },
        { name: "Deputy County Coordinator", role: "Executive Council", img: "placeholder.jpg" },
        { name: "Head of Discipline", role: "Executive Council", img: "placeholder.jpg" }
    ],
    sec: [
        { name: "Youth League President", role: "Secretariat", img: "placeholder.jpg" },
        { name: "Deputy Youth League President", role: "Secretariat", img: "placeholder.jpg" },
        { name: "Youth League Secretary", role: "Secretariat", img: "placeholder.jpg" },
        { name: "Director of ICT", role: "Secretariat", img: "placeholder.jpg" },
        { name: "Digital Media Head And Public Relations", role: "Secretariat", img: "placeholder.jpg" }
    ],
    all: [] // You can loop 1 to 50 here to create placeholders for all 50 members
};

// Create 50 placeholders for full members
for(let i=1; i<=50; i++) {
    leaders.all.push({ name: `Member ${i}`, role: "Full Member", img: "placeholder.jpg" });
}

function showGroup(group) {
    const container = document.getElementById('leadership-display');
    container.innerHTML = '';
    
    // Update active button
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    leaders[group].forEach(person => {
        container.innerHTML += `
            <div class="bg-white rounded-lg shadow overflow-hidden border">
                <div class="leader-img flex items-center justify-center text-gray-300">
                    <i class="fas fa-user text-5xl"></i>
                    </div>
                <div class="p-4 text-center">
                    <h5 class="font-bold text-lg">${person.name}</h5>
                    <p class="text-xs text-blue-700 uppercase">${person.role}</p>
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
    
    // Set Title
    const titles = { wellness: 'Wellness Initiative Gallery', mazingira: 'Mazingira Safi Gallery', ai: 'AI Training Gallery' };
    modalTitle.innerText = titles[program];

    // Clear and Fill Images
    container.innerHTML = '';
    programImages[program].forEach(img => {
        container.innerHTML += `
            <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                <img src="${img.url}" class="w-full h-48 object-cover" onerror="this.src='https://via.placeholder.com/400x300?text=Activity+Photo'">
                <p class="text-gray-400 text-xs p-2 text-center font-semibold">${img.desc}</p>
            </div>
        `;
    });

    // Show Modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Stop scrolling
}

function closeGallery() {
    document.getElementById('gallery-modal').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById('gallery-modal');
    if (event.target == modal) {
        closeGallery();
    }
}

// Default view
window.onload = () => showGroup('exec');