function hideProjectBar() {
    const projectBar = document.getElementById("project-bar");
    projectBar.classList.add('d-none');
}

function showProjectBar() {
    const projectBar = document.getElementById("project-bar");
    projectBar.classList.remove('d-none');
}

function showContent(contentId) {
    console.log(document.body.clientWidth);

    if (document.body.clientWidth < 768) {
        hideProjectBar();
    }

    const container = document.getElementById("project-content-container");
    const content = document.getElementById(contentId).cloneNode(true);
    content.classList.remove('d-none');

    // remove all node children
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    container.appendChild(content);
}

function showButtItOutContent() {
    showContent('butt-it-out-content');
}

function showBimapContent() {
    showContent('bimap-content');
}

function showTrainingReorganizationContent() {
    showContent('training-reorganization-content');
}

function showEuRecycleContent() {
    showContent('eu-recycle-content');
}

function showEuProgrammingContent() { 
    showContent('eu-programming-content');
}