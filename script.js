document.addEventListener('DOMContentLoaded', () => {
    const goalForm = document.getElementById('goal-form');
    const goalInput = document.getElementById('goal-input');
    const goalList = document.getElementById('goal-list');
    
    const roadmapForm = document.getElementById('roadmap-form');
    const milestoneInput = document.getElementById('milestone-input');
    const milestoneDate = document.getElementById('milestone-date');
    const roadmapList = document.getElementById('roadmap-list');
    
    const progressForm = document.getElementById('progress-form');
    const progressInput = document.getElementById('progress-input');
    const progressList = document.getElementById('progress-list');

    goalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addGoal(goalInput.value);
        goalInput.value = '';
    });

    roadmapForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addMilestone(milestoneInput.value, milestoneDate.value);
        milestoneInput.value = '';
        milestoneDate.value = '';
    });

    progressForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addProgress(progressInput.value);
        progressInput.value = '';
    });

    function addGoal(goal) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${goal}</span><button onclick="removeItem(this)"><i class="fas fa-trash-alt"></i> Remove</button>`;
        goalList.appendChild(li);
    }

    function addMilestone(milestone, date) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${milestone} - ${date}</span><button onclick="removeItem(this)"><i class="fas fa-trash-alt"></i> Remove</button>`;
        roadmapList.appendChild(li);
    }

    function addProgress(progress) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${progress}</span><button onclick="removeItem(this)"><i class="fas fa-trash-alt"></i> Remove</button>`;
        progressList.appendChild(li);
    }

    function removeItem(button) {
        button.parentElement.remove();
    }

    window.removeItem = removeItem;
});
