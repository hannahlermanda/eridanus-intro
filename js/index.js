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

//Handle Message Form Submit

window.addEventListener('load', function() {
    // Hide the message section when the page loads
    document.getElementById("messages").style.display = "none";
  });
  
let messageForm = document.querySelector('[name="leave_message"]');

messageForm.addEventListener('submit', submitForm);

function submitForm() {
    let finalusersName = event.target.usersName.value;
    let finalusersEmail = event.target.usersEmail.value;
    let finalusersMessage = event.target.usersMessage.value;

    console.log(finalusersName, finalusersEmail, finalusersMessage);

    event.preventDefault();

    let messageSection = document.getElementById("messages");

    let messageList = messageSection.querySelector('ul');

    let newMessage = document.createElement('li');
 
    newMessage.innerHTML = `<a href="mailto:${finalusersEmail}">${finalusersName}</a> wrote: <span>${finalusersMessage} </span>`;

    let removeButton = document.createElement('button');

    removeButton.innerHTML = 'Remove';
    removeButton.type = 'button';
    
    removeButton.addEventListener('click', () => {
        let entry = removeButton.parentNode;
        entry.remove();
        if( messageList.childElementCount === 0){
            document.getElementById("messages").style.display = "none";
        } else {
            document.getElementById("messages").style.display = "block";
        }
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();

    //Shows the message section when a comment is made
    document.getElementById("messages").style.display = "block";

    newMessage.appendChild(editMessageButton);
    messageList.appendChild(newMessage);
}

//Fetch GitHub Repositories

fetch('https://api.github.com/users/hannahlermanda/repos', {
    mode: 'cors'
})

  .then(response => response.json())
  .then(repositories => {
    repositories.sort((repository1Date, repository2Date) => new Date(repository2Date.updated_at) - new Date(repository1Date.updated_at));

    //Display Repositories in List
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector('ul');

    for (i=0; i < repositories.length; i++){
        let fullRepository = repositories[i];

        let project = document.createElement('li');

        project.innerText = fullRepository.name;
        project.innerText = fullRepository.updated_at;
        project.innerText = fullRepository.description;

        let projectLink = document.createElement('a');
            projectLink.href = fullRepository.html_url;
            projectLink.target = '_blank';

        let repositoryName = document.createElement('p');
            repositoryName.textContent = fullRepository.name;
            projectLink.appendChild(repositoryName);

        project.classList.add('projectListItem');
        project.classList.add('projectListItemUl');
        repositoryName.classList.add('nameOfRepository');
        
        project.appendChild(projectLink);
        projectList.appendChild(project);
    }
    }
) .catch(error => {
    console.error('Error fetching data:', error);
    window.alert('There was an error fetching GitHub data.');
    }
);

