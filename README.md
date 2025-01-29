<h1>ABN AMRO Toegankelijkheidverklaring Pagina</h1>

<img src="./readme-assets/intro.png" height="350">

<p>Dit project is een opdracht vanuit de ABN AMRO.Voor dit project heb ik een toegankelijkheidverklaring pagina gemaakt waarin Het doel was om een technisch toegankelijke pagina te bouwen die volledig aansluit bij de bestaande huisstijl en voldoet aan de WCAG-richtlijnen.</p>

<h2>Opdracht beschrijving</h2>

**Het probleem**
ABN AMRO wil laten zien dat hun website toegankelijk is voor iedereen, inclusief mensen met een beperking. Hiervoor is een duidelijke en gebruiksvriendelijke toegankelijkheidsverklaring nodig die voldoet aan de officiële toegankelijkheidsregels (WCAG-richtlijnen) en past binnen de al bestaande ABN AMRO huisstijl.

**De oplossing**

De oplossing is een webpagina die:

*Voldoet aan de WCAG-richtlijnen, zodat deze toegankelijk is voor iedereen.
*Duidelijk en overzichtelijk is, zodat de informatie makkelijk te begrijpen is.
*Past bij de bestaande huisstijl van ABN AMRO, met gebruik van hun kleuren, lettertypes en design.


<h2>Pagina Beschrijving</h2>
<p>De webpagina is een toegankelijkheidsverklaring waarbij gebruikers informatie kunnen vinden over de toegankelijkheid van de ABN AMRO website. Daarnaast biedt de pagina een feedbackknop waarmee gebruikers een formulier kunnen invullen om feedback te geven en heeft de pagina een uitgebreide dropdown-menu met een duidelijke hover-effect</p>

<h2>Responsive Design</h2>
<p>De webpagina is responsice en  past zich aan verschillende schermgroottes  met behulp van een mobile-first aanpak en de volgende breakpoints:</p>

**Mobile version**

<p>Mobiel (tot 800px): Compact ontwerp met focus op leesbaarheid en eenvoudig navigeren.</p>

 <img src="./readme-assets/mobile.png" height="350">
 
 **Tablet version**
 
 <p>Tablet (800px - 999px): De layout wordt iets breder, en elementen worden overzichtelijker gepresenteerd.</p>

  <img src="./readme-assets/tablet.png" height="350">
  
 **desktop version**
 <p> Desktop (1000px en hoger): Volledig uitgebreide layout met extra ruimte voor inhoud.</p>
 
   <img src="./readme-assets/desktop.png" height="350">
   
<h2>Specifieke Ontwerpkeuzes/ interactie </h2>

**Feedbackknop**

Interactie: feedbackknop 
Als je op de knop klikt, verschijnt er een feedbackformulier waarin gebruikers makkelijk hun mening kunnen geven.

Ontwerpkeuze:
Kleur: De knop is geel gemaakt in plaats van wit, omdat uit de user test bleek dat een witte knop niet goed opviel en gebruikers moeite hadden deze te vinden. Geel, als opvallende kleur binnen de ABN AMRO-huisstijl, zorgt ervoor dat de knop beter zichtbaar is en direct opvalt.

Ik heb bij de interacties in het feedbackformulier gebruikgemaakt van de feedback- en feedforwardprincipes:

**Feedforward:**
* De knop “Geef feedback” en de sterwaardering laten direct zien wat je kunt doen. De sterretjes lichten op wanneer je eroverheen beweegt, wat aangeeft dat je ze kunt selecteren.
* De "Verstuur" knop maakt duidelijk dat je de feedback kunt indienen.
* Het kruisje in de hoek laat zien dat je het formulier kunt sluiten.

**Feedback:**
* Wanneer je een sterwaardering geeft, lichten de sterren op en blijft je keuze zichtbaar.
* Als je op “Verstuur” klikt, verschijnt een bevestigingsbericht met “Bedankt voor je feedback”, zodat je weet dat de actie is verwerkt.
* Als je op het kruisje drukt, sluit het formulier direct, wat laat zien dat de actie succesvol is.

Door deze principes toe te passen, wordt de interactie intuïtief en gebruiksvriendelijk.

<h3>Usertest</h3>
<p>Gebruikerstesten bevindingen</p>

<h3>Tessa:</h3>
<p>Feedbackknop was niet direct zichtbaar → opvallendere kleur en betere plaatsing toegevoegd
Rating sterren waren onlogisch (rechts naar links) → aangepast naar links naar rechts.
Formulier sluiten was niet duidelijk → meer prominente sluitknop..</p>

<h3>Tristan (mentor):</h3>

<p> Geen duidelijke bevestiging na verzenden → bevestigingsmelding toegevoegd.</p>

<h3>Nazneen (mentor):</h3>
 
<p>Feedbackknop was niet logisch geplaatst → knop hoger geplaatst en beter zichtbaar gemaakt.
Scenario was niet helder → scenario verduidelijkt.</p>

<h2>Kenmerken <h2>
<h3>HTML</h3>
* Semantische structuur: Gebruik van header, nav, section, en footer voor toegankelijkheid en overzichtelijkheid. Goed structuur zorgt ervoor dat screenreaders duidelijk men met beperking kan navigeren door de website
* Ik heb gebruik gemaakt van alt elementen bij img en aria-labels als het hoognodig was zodat screenreaders aangeven waar men zich bevind op de website 
<h3>CSS</h3>
* Mobile-first design: Gebruik van flexbox en media queries voor een responsieve layout Waardoor de website zoch aanpast op verschillende schermgroottes 
* Huisstijl van ABN AMRO toegepast: kleurenpalet, lettertypes en marges zijn consistent.
  
<h3>JavaScript</h3>
* Interactie voor de feedbackknop: Het formulier verschijnt en verdwijnt dynamisch bij klikken.
* gebruik gemaakt van duidelijke classnames en gewerkt met stappenplan om javascript code zo kort en simpel mogelijk te houden dit zorg voor een toegankelijke website doordat er weinig tot geen complicaties kunnen komen door een zo kort mogekijke code te behouden 

<p> Bekijk mijn site met de link hieronder!</p>

<a>https://nayomekaia.github.io/the-startup-responsive-interactive-website/<a>
