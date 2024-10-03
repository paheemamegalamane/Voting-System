let votes = {
    'Option 1': 0,
    'Option 2': 0,
    'Option 3': 0
};

function vote(option) {
    votes[option]++;
    updateResults();
}

function updateResults() {
    document.getElementById('votes-option1').textContent = votes['Option 1'];
    document.getElementById('votes-option2').textContent = votes['Option 2'];
    document.getElementById('votes-option3').textContent = votes['Option 3'];
}
