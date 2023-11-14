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
      // Aquí podrías enviar estos datos a tu servidor o realizar alguna acción con ellos
      console.log('Nombre:', name);
      console.log('Email:', email);
      // Simplemente cerrando el modal para este ejemplo
      closeModal();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  function moveCarousel() {
    carouselContent.style.transform = `translateX(-${slide * 100}%)`;
  }

  function nextSlide() {
    slide = (slide + 1) % totalItems;
    moveCarousel();
  }

  function previousSlide() {
    slide = (slide - 1 + totalItems) % totalItems;
    moveCarousel();
  }

  setInterval(nextSlide, 3000);

        