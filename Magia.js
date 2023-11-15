function openModal() {
    document.getElementById('modal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    if (name && email) {
      console.log('Nombre:', name);
      console.log('Email:', email);
      closeModal();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
 

let slide = 0;
const totalItems = 3; 

function nextSlide() {
    slide = (slide + 1) % totalItems;
    moveCarousel();
}

function previousSlide() {
    slide = (slide - 1 + totalItems) % totalItems;
    moveCarousel();
}

function moveCarousel() {
    const carouselContent = document.getElementById('carouselContent');
    carouselContent.style.transform = `translateX(-${slide * 100}%)`;
}

setInterval(nextSlide, 6000); 


  function previousSlide() {
    slide = (slide - 1 + totalItems) % totalItems;
    moveCarousel();
  }

  setInterval(nextSlide, 5000);

        