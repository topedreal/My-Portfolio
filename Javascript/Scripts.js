document.addEventListener("DOMContentLoaded", function () {
    // Observer for Hero Section (horizontal animation)
    const hero = document.getElementById('hero');
    
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateX(0)'; // Move hero element horizontally into view
        } else {
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(-50px)'; // Move hero element off to the left when not in view
        }
      });
    }, { threshold: 0.3 });  // Trigger when 30% of the element is visible
    
    heroObserver.observe(hero);  // Start observing the hero section

    // Observer for Web Container Section (vertical animation)
    const webcontainer = document.getElementById('webcontainer');
    
    const webcontainerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateX(0)'; // Move webcontainer element vertically into view
        } else {
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(-50px)'; // Move webcontainer element downwards when not in view
        }
      });
    }, { threshold: 0.3 });  // Trigger when 30% of the element is visible
    
    webcontainerObserver.observe(webcontainer);  // Start observing the web container section
  });


  document.addEventListener("DOMContentLoaded", function () {
    // Observer for Web Cert Section (horizontal animation)
    const webCert = document.getElementById('webCert');
    
    const webCertObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the element is in the viewport
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateX(0)'; // Move webCert element into view
        } else {
          // When the element is out of the viewport
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(-50px)'; // Move webCert element out of view
        }
      });
    }, { threshold: 0.3 });  // Trigger when 30% of the element is visible
    
    webCertObserver.observe(webCert);  // Start observing the web cert section
});


document.addEventListener("DOMContentLoaded", function () {
    // Observer for Web Connect Section (vertical animation)
    const webConnect = document.getElementById('webConnect');
    
    const webConnectObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the element is in the viewport
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)'; // Bring webConnect into view
        } else {
          // When the element is out of the viewport
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateY(50px)'; // Move webConnect out of view
        }
      });
    }, { threshold: 0.3 });  // Trigger when 30% of the element is visible
    
    webConnectObserver.observe(webConnect);  // Start observing the web connect section
});



  document.addEventListener("DOMContentLoaded", function () {
    // Observer for Mobile Hero Section (horizontal animation)
    const mobileHero = document.getElementById('mobileHero');
    
    const mobileHeroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the element is in the viewport
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateX(0)'; // Move mobileHero element horizontally into view
        } else {
          // When the element is out of the viewport
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(-50px)'; // Move mobileHero element off to the left when not in view
        }
      });
    }, { threshold: 0.3 });  // Trigger when 30% of the element is visible
    
    mobileHeroObserver.observe(mobileHero);  // Start observing the mobile hero section
});


document.addEventListener("DOMContentLoaded", function () {
    // Observer for Mobile About Section (horizontal animation)
    const mobileAbout = document.getElementById('mobileAbout');
    
    const mobileAboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the element is in the viewport
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateX(0)'; // Move mobileAbout element horizontally into view
        } else {
          // When the element is out of the viewport
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(-50px)'; // Move mobileAbout element off to the left when not in view
        }
      });
    }, { threshold: 0.3 });  // Trigger when 30% of the element is visible
    
    mobileAboutObserver.observe(mobileAbout);  // Start observing the mobile about section
});


document.addEventListener("DOMContentLoaded", function () {
    // Observer for Mobile Skills Section (horizontal animation)
    const mobileSkills = document.getElementById('mobileSkills');
    
    const mobileSkillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the element is in the viewport
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)'; // Move mobileSkills element horizontally into view
        } else {
          // When the element is out of the viewport
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateY(50px)'; // Move mobileSkills element off to the left when not in view
        }
      });
    }, { threshold: 0.3 });  // Trigger when 30% of the element is visible
    
    mobileSkillsObserver.observe(mobileSkills);  // Start observing the mobile skills section
});


document.addEventListener("DOMContentLoaded", function () {
    // Observer for Mobile Cert Section (vertical animation)
    const mobileCert = document.getElementById('mobileCert');
    
    const mobileCertObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the element is in the viewport
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateX(0)'; // Move mobileCert element into view
        } else {
          // When the element is out of the viewport
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(-50px)'; // Move mobileCert element downward and make it invisible
        }
      });
    }, { threshold: 0.3 });  // Trigger when 30% of the element is visible
    
    mobileCertObserver.observe(mobileCert);  // Start observing the mobile cert section
});


document.addEventListener("DOMContentLoaded", function () {
    // Observer for Mobile Connect Section (horizontal animation)
    const mobileConnect = document.getElementById('mobileConnect');
    
    const mobileConnectObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the element is in the viewport
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)'; // Bring mobileConnect into view
        } else {
          // When the element is out of the viewport
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateY(50px)'; // Move mobileConnect out of view
        }
      });
    }, { threshold: 0.3 });  // Trigger when 30% of the element is visible
    
    mobileConnectObserver.observe(mobileConnect);  // Start observing the mobile connect section
});

document.addEventListener("DOMContentLoaded", function () {
    // Observer for Project 1 Section (vertical animation)
    const project1 = document.getElementById('project1');
    
    const project1Observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the element is in the viewport
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateX(0)'; // Bring project1 into view
        } else {
          // When the element is out of the viewport
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateX(-50px)'; // Move project1 out of view
        }
      });
    }, { threshold: 0.3 });  // Trigger when 30% of the element is visible
    
    project1Observer.observe(project1);  // Start observing the project1 section
});

document.addEventListener("DOMContentLoaded", function () {
    // Observer for Project 2 Section (horizontal animation)
    const project2 = document.getElementById('project2');
    
    const project2Observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the element is in the viewport
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)'; // Bring project2 into view
        } else {
          // When the element is out of the viewport
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateY(50px)'; // Move project2 out of view
        }
      });
    }, { threshold: 0.3 });  // Trigger when 30% of the element is visible
    
    project2Observer.observe(project2);  // Start observing the project2 section
});









  