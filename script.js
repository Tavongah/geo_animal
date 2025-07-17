let currentSlide = 0;
const slides = document.querySelectorAll(".slideshow-image");
const counter = document.getElementById("counter");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
    updateCounter(index);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function updateCounter(index) {
    counter.textContent = `${index + 1}/${slides.length}`;
}

updateCounter(currentSlide);

const today = new Date();

const formattedDate = today.toLocaleDateString();
document.getElementById('date').textContent = formattedDate;



const events = [
    { title: "Tuatara survey for 2023", date: "04-15-2023", url: "https://issuu.com/jimeagles8725/docs/dc133online/s/24252516" },
    { title: "New tuatara facility set to open next month", date: "05-21-2025", url: "https://www.project1225.co.nz/latestnews/new-tuatara-facility-set-to-open-next-month"},
    { title: "Fifth baby tuatara found at museum site", date: "06-10-2025", url: "https://www.icc.govt.nz/fifth-baby-tuatara-found-at-museum-site/" },
    { title: "Jurassic Quest", date: "06-01-2024", url: "https://www.jurassicquest.com/" },
   
];


function renderEvents() {
    const today = new Date();
    const futureContainer = document.getElementById('future-events');
    const pastContainer = document.getElementById('past-events');

    
    futureContainer.innerHTML = '<h3>Upcoming Events</h3>';
    pastContainer.innerHTML = '<h3>Past Events</h3>';

    events.forEach(event => {
        const eventDate = new Date(event.date);
        const eventElement = document.createElement('div');
        eventElement.className = 'event';
        eventElement.innerHTML = `
           <div class="events"><a class="title_date" href="${event.url}" target="_blank">${event.title} - ${event.date}</a>
          </div>
        `;

        if (eventDate >= today) {
            futureContainer.appendChild(eventElement);
        } else {
            pastContainer.appendChild(eventElement); 
        }
    });
}

renderEvents();
