document.addEventListener('DOMContentLoaded', function () {
  lucide.createIcons(); 
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.getElementById('menu-icon');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 

    if (navLinks.classList.contains('active')) {
      menuIcon.setAttribute('data-lucide', 'menu'); 
    } 

    lucide.createIcons(); 
  });
  
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href'); 
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
      navLinks.classList.remove('active');
      menuIcon.setAttribute('data-lucide', 'menu'); 
      menuIcon.style.animation = ''; 
      lucide.createIcons();
    });
  });


    const skillsGrid = document.querySelector('.skills-grid');
    const skillsData = [
      { icon: 'cpu', title: 'Embedded Systems & IoT', percentage: 80, description: 'Specialized in Raspberry Pi and sensor integration' },
      { icon: 'code', title: 'Programming', percentage: 85, description: 'Java, Python, C++, HTML/CSS' },
      { icon: 'database', title: 'Tools & Technologies', percentage: 85, description: 'Power BI, GitHub, VS Code, Figma' },
      { icon: 'message-square', title: 'Content Speaking', percentage: 95, description: 'Technical presentations and public speaking' },
      { icon: 'brain', title: 'Problem Solving', percentage: 90, description: 'Logical reasoning and analytical thinking' },
      { icon: 'award', title: 'Achievements', percentage: 100, description: 'Young Scientist Award & Academic Excellence' }
    ];
  
    skillsData.forEach(skill => {
      const skillCard = document.createElement('div');
      skillCard.classList.add('skill-card');
      skillCard.innerHTML = `
        <i data-lucide="${skill.icon}"></i>
        <h3>${skill.title}</h3>
        <div class="progress-bar">
          <div class="progress" style="width: ${skill.percentage}%"></div>
        </div>
        <p>${skill.description}</p>
      `;
      skillsGrid.appendChild(skillCard);
    });
    });

const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  const link = document.createElement('a');
  link.href = 'your url'; 
  link.download = 'Rasiha_Krishnan_Resume.pdf';  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


window.addEventListener('scroll', function () {
  const backToTopBtn = document.querySelector('.back-to-top');
    if (window.scrollY > window.innerHeight) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});
