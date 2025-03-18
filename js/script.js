// Spinner Logo
window.addEventListener('load', function () {
    const spinnerContainer = document.getElementById('spinner-container');
    const content = document.getElementById('content');

    function showContent() {
        spinnerContainer.style.display = 'none';
        content.classList.remove('hidden');
    }

    if (document.readyState === 'complete') {
        showContent();
    } else {
        setTimeout(showContent, 500);
    }
});

// Theme Switcher
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const lightLogo = document.getElementById('light-logo');
const darkLogo = document.getElementById('dark-logo');

darkLogo.style.display = 'none';

function switchTheme(e) {
    const tools = document.querySelectorAll('.tool');
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        tools.forEach(tool => {
            tool.style.color = 'black';
            tool.style.background = 'white';
            darkLogo.style.display = 'block';
            lightLogo.style.display = 'none';
        });
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        tools.forEach(tool => {
            tool.style.color = 'black';
            tool.style.background = '';
            lightLogo.style.display = 'block';
            darkLogo.style.display = 'none';
        });
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Repositories
document.addEventListener('DOMContentLoaded', () => {
    const repoContainer = document.getElementById('repo-container');

    const repositories = {
        'SurveyCTO': [
            { name: 'text-placeholder', description: 'Use this field plug-in to use customized text in the placeholder of text type field.', language: 'JavaScript', link: 'https://github.com/ARCED-Foundation/text-placeholder' },
            { name: 'decimal-placeholder', description: 'Use this field plug-in to use customized text in the placeholder of decimal type field.', language: 'JavaScript', link: 'https://github.com/ARCED-Foundation/decimal-placeholder' },
            { name: 'integer-placeholder', description: 'Use this field plug-in to use customized text in the placeholder of integer type field.', language: 'JavaScript', link: 'https://github.com/ARCED-Foundation/integer-placeholder' },
            { name: 'translation-tables', description: 'Contains translations for SurveyCTO components.', language: 'JavaScript', link: 'https://github.com/ARCED-Foundation/translation-tables' },
            { name: 'extra-buttons-append', description: 'Adds extra buttons to text, integer, or decimal fields.', language: 'JavaScript', link: 'https://github.com/ARCED-Foundation/extra-buttons-append' },
            { name: 'table-list', description: 'Provides a table view of select_one and select_multiple fields with added pagination.', language: 'JavaScript', link: 'https://github.com/ARCED-Foundation/table-list' },
            { name: 'launch-whatsapp-nometa', description: 'Launch WhatsApp with pre-populated info from the form without storing the message as metadata.', language: 'JavaScript', link: 'https://github.com/ARCED-Foundation/launch-whatsapp-nometa' },
            { name: 'coinflip', description: 'A SurveyCTO Field plug-in for coin flip simulation.', language: 'JavaScript', link: 'https://github.com/ARCED-Foundation/coinflip' },
            { name: 'conjoint-table', description: 'Conjoint-table plugin is an enhanced version of the original conjoint plugin developed by SurveyCTO.', language: 'JavaScript', link: 'https://github.com/ARCED-Foundation/conjoint-table' }
        ],
        'Stata': [
            { name: 'meaning', description: 'A Stata module that searches for word meanings and prints in a temporary text file.', language: 'Stata', link: 'https://github.com/ARCED-Foundation/meaning' },
            { name: 'odkmerge', description: 'A Stata module to merge selected variables from the parent file to the children files generated from odk or SurveyCTO.', language: 'Stata', link: 'https://github.com/ARCED-Foundation/odkmerge' },
            { name: 'readreplace', description: 'Fix for Stata 17. Stata program to make replacements specified in an external dataset', language: 'Stata', link: 'https://github.com/ARCED-Foundation/readreplace' },
            { name: 'arcedfold', description: 'arcedfold is a Stata command that creates specific folder structures for project', language: 'Stata', link: 'https://github.com/ARCED-Foundation/arcedfold' },
            { name: 'catigen', description: 'A Stata command to automatically generate SurveyCTO advanced CATI from a SurveyCTO CAPI.', language: 'Stata', link: 'https://github.com/ARCED-Foundation/catigen' },
            { name: 'odksplit', description: 'odksplit is a Stata module to label the variables, assign corresponding value labels, and split and label multiple response variables generated from ODK.', language: 'Stata', link: 'https://github.com/ARCED-Foundation/odksplit' },
            { name: 'arceddataflow', description: 'A Stata based system for data flow management.', language: 'Stata', link: 'https://github.com/ARCED-Foundation/arceddataflow' },
            { name: 'sheetcomb', description: 'Combine excel sheets', language: 'Stata', link: 'https://github.com/ARCED-Foundation/sheetcomb' }
        ],
        'R': [
            { name: 'iehfc', description: 'Welcome to the iehfc platform by DIME Analytics! The iehfc platform is a Shiny Dashboard that simplifies the process of setting up data quality checks.', language: 'R', link: 'https://github.com/ARCED-Foundation/iehfc' }
        ],
        'Python': [
            { name: 'Automated-MCQ-Sheet-to-Excel', description: 'Automated-MCQ-Sheet-to-Excel', language: 'Python', link: 'https://github.com/ARCED-Foundation/Automated-MCQ-Sheet-to-Excel' }
        ]
    };

    // Initial display with Stata repositories
    displayRepositories(repositories['Stata']);

    // Add click listeners to repository tools
    document.querySelectorAll('#tools-part .tool').forEach(tool => {
        tool.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default behavior
            document.querySelectorAll('#tools-part .tool').forEach(t => t.classList.remove('active'));
            tool.classList.add('active');
            const selectedTool = tool.dataset.tool;
            displayRepositories(repositories[selectedTool]);
        });
    });

    function displayRepositories(repos) {
        const fragment = document.createDocumentFragment();

        repos.forEach(repo => {
            const repoDiv = document.createElement('div');
            repoDiv.classList.add('col-12', 'col-md-4', 'mb-4');
            repoDiv.innerHTML = `
                <div class="card p-4 illusion-card">
                    <div class="card-body">
                        <h2 class="card-title f-2">${repo.name}</h2>
                        <p class="card-text">${repo.description}</p>
                        <div class="d-flex justify-content-between">
                            <span>Language: ${repo.language}</span>
                            <span><a href="${repo.link}" target="_blank" class="stretched-link">View Repository</a></span>
                        </div>
                    </div>
                </div>
            `;
            fragment.appendChild(repoDiv);
        });

        repoContainer.innerHTML = '';
        repoContainer.appendChild(fragment);
    }

    // GitHub Stats
    const statsContainer = document.getElementById('stats-container');

    const statsData = {
        'languages': [
            {
                name: 'Most Used Languages',
                description: 'Breakdown of programming languages used across ARCED Foundation repositories.',
                details: [
                    { language: 'Stata', percentage: '47.92%', color: '#ff6f61' },
                    { language: 'R', percentage: '27.23%', color: '#4db6ac' },
                    { language: 'JavaScript', percentage: '12.55%', color: '#ffd54f' },
                    { language: 'CSS', percentage: '5.46%', color: '#ab47bc' },
                    { language: 'HTML', percentage: '4.83%', color: '#66bb6a' },
                    { language: 'Python', percentage: '1.80%', color: '#ef5350' }
                ]
            }
        ],
        'github': [
            {
                name: "ARCED Foundation's GitHub Stats",
                description: 'Key statistics from ARCED Foundation’s GitHub activity in 2025.',
                details: [
                    { icon: 'fa-star', text: 'Total Stars Earned: 12', color: '#ffca28' },
                    { icon: 'fa-code-commit', text: 'Total Commits (2025): 237', color: '#42a5f5' },
                    { icon: 'fa-exclamation-circle', text: 'Total Issues: 5', color: '#ef5350' }
                ]
            }
        ]
    };

    // Initial display with "Most Used Languages"
    displayStats(statsData['languages']);

    // Add click listeners to stats tools
    document.querySelectorAll('#stats-tools .tool').forEach(tool => {
        tool.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default behavior
            document.querySelectorAll('#stats-tools .tool').forEach(t => t.classList.remove('active'));
            tool.classList.add('active');
            const selectedStats = tool.dataset.stats;
            displayStats(statsData[selectedStats]);
        });
    });

    function displayStats(stats) {
        try {
            const fragment = document.createDocumentFragment();

            stats.forEach(stat => {
                const statDiv = document.createElement('div');
                statDiv.classList.add('col-12', 'col-md-4', 'mb-4');
                let detailsHTML = '';

                if (stat.details[0].language) { // For languages
                    detailsHTML = `
                        <div class="language-bar">
                            ${stat.details.map(d => `<div style="background-color: ${d.color}; width: ${d.percentage};"></div>`).join('')}
                        </div>
                        <div class="language-legend">
                            ${stat.details.map(d => `<span><span class="dot" style="background-color: ${d.color};"></span> ${d.language} ${d.percentage}</span>`).join('')}
                        </div>`;
                } else { // For GitHub stats
                    detailsHTML = `
                        <div class="stats">
                            ${stat.details.map(d => `<div class="row"><i class="fas ${d.icon}" style="color: ${d.color};"></i> ${d.text}</div>`).join('')}
                        </div>`;
                }

                statDiv.innerHTML = `
                    <div class="card p-4 illusion-card">
                        <div class="card-body">
                            <h2 class="card-title f-2">${stat.name}</h2>
                            <p class="card-text">${stat.description}</p>
                            ${detailsHTML}
                        </div>
                    </div>
                `;
                fragment.appendChild(statDiv);
            });

            statsContainer.innerHTML = '';
            statsContainer.appendChild(fragment);
        } catch (error) {
            console.error('Error in displayStats:', error);
        }
    }
});