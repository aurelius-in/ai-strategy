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

    window.saveAsText = function() {
        const content = generateContent();
        const blob = new Blob([content], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'ai_strategy.txt';
        link.click();
    };

    window.saveAsPDF = function() {
        const content = generateContent();
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text(content, 10, 10);
        doc.save('ai_strategy.pdf');
    };

    window.saveAsJPEG = function() {
        html2canvas(document.querySelector('.container')).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/jpeg');
            link.download = 'ai_strategy.jpg';
            link.click();
        });
    };

    function generateContent() {
        let content = 'AI Strategy Planner\n\nGoals:\n';
        content += getListContent(goalList);
        content += '\nRoadmap:\n';
        content += getListContent(roadmapList);
        content += '\nProgress:\n';
        content += getListContent(progressList);
        return content;
    }

    function getListContent(list) {
        return Array.from(list.children).map(item => item.innerText.replace(' Remove', '')).join('\n');
    }
});
