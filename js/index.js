//Footer

let today = new Date();

let thisYear = today.getFullYear();

const footer = document.querySelector('footer');

let copyright = document.createElement('p');

copyright.innerHTML = 'Hannah Emily Lermanda ' + '&#169; ' + thisYear;

footer.appendChild(copyright);

//Skills
let skills = ['JavaScript', 'HTML + CSS', 'Team Player', 'Good Communication', 'Flexible'];

const skillsSection = document.querySelector('#skills');

const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');  
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
