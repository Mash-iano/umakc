// Leadership Data (Unchanged)
const leaders = {
    exec: [
        { name: "Hon.Boniface Mbugua", role: "Chairperson", img: "boni.jpg" },
        { name: "Hon.Fredrick Njugua", role: "Vice-Chairperson", img: "fredrick.jpg" },
        { name: "Hon.Mung'ara Muragu", role: "Treasurer", img: "mung'ara.jpg" },
        { name: "Hon.Mbugua Wanyoike", role: "Secretary General", img: "MBUGUASG.jpg" },
        { name: "Hon.Virginia Mwaura", role: "Deputy Secretary General", img: "viginia.jpg" },
        { name: "Hon.Gatheca Kimani", role: "Organizing Secretary", img: "gatheca.jpg" },
        { name: "Hon.Michael Ndung'u", role: "Deputy Organizing Secretary", img: "michael.jpg" },
        { name: "Hon.Patrick Mwangi", role: "Coordinator", img: "patrick.jpg" },
        { name: "Hon.Michael Gitere", role: "Deputy Coordinator", img: "gitere.jpg" },
        { name: "Hon.Tony Njueni", role: "Chief Whip", img: "tony.jpg" },
        { name: "Hon.Ezekiel Ng'ang'a", role: "Chaplain", img: "ezekiel.jpg" },
        { name: "Hon.Joshua Gichana", role: "Head of Programs", img: "gichana.jpg" },
        { name: "Veronicah Wambui", role: "Business Community Representative", img: "veronicah.jpg" }
    ],
    sec: [
        { name: "Peter Wanjiru", role: "Youth League President", img: "peter.jpg" },
        { name: "Calpha Wanjiru", role: "Youth League Vice President(operations)", img: "calpha.jpg" },
        { name: "Stephen Kibue", role: "Youth League Vice President(Strategy and Planning)", img: "kibue.jpg" },
        { name: "Shadrack Mwangi", role: "Youth League Secretary", img: "shadrack.jpg" },
        { name: "Ian Macharia", role: "Director of ICT", img: "ian.png" },
        { name: "Stephen Njambi", role: "Director of Digital Media And Public Relations", img: "stephen.jpg" }
    ],
    all: [] 
};

for(let i=1; i<=50; i++) {
    leaders.all.push({ name: `Member ${i}`, role: "Full Member", img: "placeholder.jpg" });
}

let activeTab = null;

function showGroup(group, e) {
    const container = document.getElementById('leadership-display');
    if (activeTab === group) {
        container.innerHTML = '';
        activeTab = null;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        return;
    }

    activeTab = group;
    container.innerHTML = '';

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if (e && e.target) {
        e.target.classList.add('active');
    }

    leaders[group].forEach(person => {
        const imgSrc = person.img && person.img.includes('/') ? person.img : `images/${person.img}`;
        container.innerHTML += `
            <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform hover:scale-105 duration-300">
                <div class="h-64 overflow-hidden bg-gray-100">
                    <img src="${imgSrc}" alt="${person.name}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/400x300?text=No+Photo'">
                </div>
                <div class="p-4 text-center">
                    <h5 class="font-bold text-lg text-slate-900">${person.name}</h5>
                    <p class="text-xs text-blue-700 font-bold uppercase tracking-wider">${person.role}</p>
                </div>
            </div>`;
    });
}

// --- IMAGE GALLERY DATA ---
const programImages = {
    amc: [{ url: 'images/wellness1.jpg', desc: 'Afya Mashinani Caravan Outreach' }],
    mhpss: [{ url: 'images/wellness2.jpg', desc: 'Mental Health Awareness' }],
    tcae: [{ url: 'images/arts1.jpg', desc: 'Creative Arts Expo' }],
    "masca-cleanups": [{ url: 'images/clean-up.jpg', desc: 'Community Clean-up' }],
    "masca-trees": [{ url: 'images/trees.jpg', desc: 'Ecosystem Restoration' }],
    "ai-training": [{ url: 'images/ai-training1.jpg', desc: 'AI Literacy Workshop' }],
    "cose-football": [{ url: 'images/sports1.jpg', desc: 'Community Football League' }],
    "agri-mentorship": [{ url: 'images/agri1.jpg', desc: 'Agribusiness Mentorship' }],
    "cbe-sensitization": [{ url: 'images/edu1.jpg', desc: 'CBE Parental Workshop' }],
    "charity-outreach": [{ url: 'images/charity1.jpg', desc: 'Relief Distribution' }]
};

function openGallery(program) {
    if (!program) return;
    
    const modal = document.getElementById('gallery-modal');
    const modalTitle = document.getElementById('modal-title');
    const container = document.getElementById('modal-images');
    
    const cleanTitle = program.replace(/-/g, ' ').toUpperCase();
    modalTitle.innerText = `${cleanTitle} GALLERY`;

    container.innerHTML = '';

    if (programImages[program]) {
        programImages[program].forEach(img => {
            container.innerHTML += `
                <div class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                    <img src="${img.url}" class="w-full h-48 object-cover" onerror="this.src='https://via.placeholder.com/400x300?text=Activity+Photo'">
                    <p class="text-gray-400 text-xs p-2 text-center font-semibold">${img.desc}</p>
                </div>`;
        });
    } else {
        container.innerHTML = '<p class="text-white text-center col-span-full py-10">No photos available for this activity yet.</p>';
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 

    // FIX: Reset all dropdowns so they don't stay on the selected option
    document.querySelectorAll('select').forEach(dropdown => {
        dropdown.value = ""; 
    });
}

function closeGallery() {
    document.getElementById('gallery-modal').classList.add('hidden');
    document.body.style.overflow = 'auto'; 
    
    // Safety Reset: Ensure dropdowns are cleared when closing
    document.querySelectorAll('select').forEach(dropdown => {
        dropdown.value = ""; 
    });
}

// Modal closing logic
window.onclick = function(event) {
    const modal = document.getElementById('gallery-modal');
    if (event.target == modal) {
        closeGallery();
    }
};

// Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });
}

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
});

window.onload = () => { console.log("UMAKC Website Loaded"); };