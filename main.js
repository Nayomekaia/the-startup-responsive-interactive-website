
//hier link ik naar de clasnames in de html met javascript//
document.addEventListener('DOMContentLoaded', () => {
  const feedbackButton = document.querySelector('#feedback-button');
  const feedbackForm = document.querySelector('#feedback-form');
  const closeForm = document.querySelector('#close-form');

  
  //open formulier bij het drukken op feedback button//
    feedbackButton.addEventListener('click', () => {
      feedbackForm.classList.remove('hidden');
    });
  
  //sluit formulie bij het drukken op kruisje//
    closeForm.addEventListener('click', () => {
      feedbackForm.classList.add('hidden');
    });
  });



  
  

  