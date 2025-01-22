document.addEventListener('DOMContentLoaded', () => {
  // Feedback-functionaliteit
  const feedbackButton = document.querySelector('#feedback-button');
  const feedbackForm = document.querySelector('#feedback-form');
  const closeForm = document.querySelector('#close-form');

  if (feedbackButton && feedbackForm && closeForm) {
    // Open feedbackformulier
    feedbackButton.addEventListener('click', (event) => {
      event.stopPropagation();
      feedbackForm.classList.remove('hidden');
    });

    // Sluit feedbackformulier
    closeForm.addEventListener('click', (event) => {
      event.stopPropagation();
      feedbackForm.classList.add('hidden');
    });

    // Sluit feedbackformulier bij klikken buiten het formulier
    document.addEventListener('click', (event) => {
      if (!feedbackForm.contains(event.target) && !feedbackButton.contains(event.target)) {
        feedbackForm.classList.add('hidden');
      }
    });
  }

  // Stap 1: Selecteer de knoppen en containers voor het menu
  const buttons = {
    products: document.getElementById('products-button'),
    onderneming: document.getElementById('uw-onderneming'),
    app: document.getElementById('app-en-internet-bankieren') // Nieuwe knop
  };
  const containers = {
    productenMenu: document.getElementById('producten-menu'),
    ondernemingMenu: document.getElementById('onderneming-menu'),
    appMenu: document.getElementById('app-menu') // Nieuwe container
  };

  // Stap 2: Controleer of de benodigde elementen bestaan
  if (
    !buttons.products || 
    !containers.productenMenu || 
    !buttons.onderneming || 
    !containers.ondernemingMenu || 
    !buttons.app || 
    !containers.appMenu
  ) {
    console.error('Eén of meer menu-elementen ontbreken in de HTML.');
    return;
  }

  // Stap 3: Toggle functionaliteit voor menu's
  const toggleMenu = (button, container, otherContainers) => {
    // Toon of verberg het menu bij het klikken op de knop
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // Voorkomt dat het document-event wordt geactiveerd

      // Sluit alle andere menu's
      otherContainers.forEach(otherContainer => {
        otherContainer.classList.remove('visible');
      });

      // Toggle het huidige menu
      container.classList.toggle('visible');
    });

    // Sluit het menu als er buiten het menu wordt geklikt
    document.addEventListener('click', (event) => {
      if (!container.contains(event.target) && event.target !== button) {
        container.classList.remove('visible');
      }
    });
  };

  // Stap 4: Zorg ervoor dat maar één details-element tegelijk open is
  const setupDetailsToggle = (container) => {
    container.querySelectorAll('details').forEach(details => {
      details.addEventListener('toggle', () => {
        if (details.open) {
          container.querySelectorAll('details').forEach(otherDetails => {
            if (otherDetails !== details) otherDetails.open = false;
          });
        }
      });
    });
  };

  // Stap 5: Setup voor alle menu's
  setupDetailsToggle(containers.productenMenu);
  setupDetailsToggle(containers.ondernemingMenu);
  setupDetailsToggle(containers.appMenu);

  // Stap 6: Voeg de toggle-functionaliteit toe voor alle menu's
  toggleMenu(buttons.products, containers.productenMenu, [
    containers.ondernemingMenu, 
    containers.appMenu
  ]);
  toggleMenu(buttons.onderneming, containers.ondernemingMenu, [
    containers.productenMenu, 
    containers.appMenu
  ]);
  toggleMenu(buttons.app, containers.appMenu, [
    containers.productenMenu, 
    containers.ondernemingMenu
  ]);
});

  