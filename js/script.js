/////Spinner Logo

window.addEventListener('load', function () {
    setTimeout(function () {
        // Hide the spinner
        document.getElementById('spinner-container').style.display = 'none';

        // Show the page content
        document.getElementById('content').classList.remove('hidden');
    }, 2000); // 3000 milliseconds = 3 seconds delay
});




// Theme Switcher
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const tools = document.querySelectorAll('.tool');

var light_logo = document.getElementById('light-logo')
var dark_logo = document.getElementById('dark-logo')


dark_logo.style.display='none';

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        tools.forEach(tool => {
            tool.style.color = 'black';
            tool.style.background = "white";
            ///Logo change mode

            dark_logo.style.display = 'block';
            light_logo.style.display = 'none';

        });
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        tools.forEach(tool => {
            tool.style.color = 'black';
            ///Logo change mode
            light_logo.style.display = 'block';
            dark_logo.style.display = 'none';
        });
    }

    e.preventDefault()
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Repositories
document.addEventListener('DOMContentLoaded', () => {
    const repoContainer = document.getElementById('repo-container');

    const repositories = {
        'SurveyCTO': [{
            name: 'text-placeholder',
            description: 'Use this field plug-in to use customized text in the placeholder of text type field.',
            language: 'JavaScript',
            link: 'https://github.com/ARCED-Foundation/text-placeholder'
        },
        {
            name: 'decimal-placeholder',
            description: 'Use this field plug-in to use customized text in the placeholder of decimal type field.',
            language: 'JavaScript',
            link: 'https://github.com/ARCED-Foundation/decimal-placeholder'
        },
        {
            name: 'integer-placeholder',
            description: 'Use this field plug-in to use customized text in the placeholder of integer type field.',
            language: 'JavaScript',
            link: 'https://github.com/ARCED-Foundation/integer-placeholder'
        },
        {
            name: 'translation-tables',
            description: 'Contains translations for SurveyCTO components.',
            language: 'JavaScript',
            link: 'https://github.com/ARCED-Foundation/translation-tables'
        },
        {
            name: 'extra-buttons-append',
            description: 'Adds extra buttons to text, integer, or decimal fields.',
            language: 'JavaScript',
            link: 'https://github.com/ARCED-Foundation/extra-buttons-append'
        },
        {
            name: 'table-list',
            description: 'Provides a table view of select_one and select_multiple fields with added pagination.',
            language: 'JavaScript',
            link: 'https://github.com/ARCED-Foundation/table-list'
        },
        {
            name: 'launch-whatsapp-nometa',
            description: 'Launch WhatsApp with pre-populated info from the form without storing the message as metadata.',
            language: 'JavaScript',
            link: 'https://github.com/ARCED-Foundation/launch-whatsapp-nometa'
        },
        {
            name: 'coinflip',
            description: 'A SurveyCTO Field plug-in for coin flip simulation.',
            language: 'JavaScript',
            link: 'https://github.com/ARCED-Foundation/coinflip'
        }
        ],
        'Stata': [{
            name: 'meaning',
            description: 'A Stata module that searches for word meanings and prints in a temporary text file.',
            language: 'Stata',
            link: 'https://github.com/ARCED-Foundation/meaning'
        },
        {
            name: 'odkmerge',
            description: 'A Stata module to merge selected variables from the parent file to the children files generated from odk or SurveyCTO.',
            language: 'Stata',
            link: 'https://github.com/ARCED-Foundation/odkmerge'
        },
        {
            name: 'readreplace',
            description: 'Fix for Stata 17. Stata program to make replacements specified in an external dataset',
            language: 'Stata',
            link: 'https://github.com/ARCED-Foundation/readreplace'
        },
        {
            name: 'arcedfold',
            description: 'arcedfold is a Stata command that creates specific folder structures for project',
            language: 'Stata',
            link: 'https://github.com/ARCED-Foundation/arcedfold'
        },
        {
            name: 'catigen',
            description: 'A Stata command to automatically generate SurveyCTO advanced CATI from a SurveyCTO CAPI.',
            language: 'Stata',
            link: 'https://github.com/ARCED-Foundation/catigen'
        },
        {
            name: 'odksplit',
            description: 'odksplit is a Stata module to label the variables, assign corresponding value labels, and split and label multiple response variables generated from ODK.',
            language: 'Stata',
            link: 'https://github.com/ARCED-Foundation/odksplit'
        },
        {
            name: 'arceddataflow',
            description: 'A Stata based system for data flow management.',
            language: 'Stata',
            link: 'https://github.com/ARCED-Foundation/arceddataflow'
        },
        {
            name: 'sheetcomb',
            description: 'Combine excel sheets',
            language: 'Stata',
            link: 'https://github.com/ARCED-Foundation/sheetcomb'
        }
        ],
        'R': [{
            name: 'iehfc',
            description: 'Welcome to the iehfc platform by DIME Analytics! The iehfc platform is a Shiny Dashboard that simplifies the process of setting up data quality checks.',
            language: 'R',
            link: 'https://github.com/ARCED-Foundation/iehfc'
        }],
        'Python' :[
            {
            name: 'Automated-MCQ-Sheet-to-Excel',
                description:'Automated-MCQ-Sheet-to-Excel',
            language:'python',
                link:'https://github.com/ARCED-Foundation/Automated-MCQ-Sheet-to-Excel'
          }
    ]
    };

    displayRepositories(repositories['Stata']);

    document.querySelectorAll('.tool').forEach(tool => {
        tool.addEventListener('click', () => {
            const selectedTool = tool.dataset.tool;
            displayRepositories(repositories[selectedTool]);
        });
    });

    function displayRepositories(repos) {
        repoContainer.innerHTML = '';
        repos.forEach(repo => {
            const repoDiv = document.createElement('div');
            repoDiv.classList.add('col-12', 'col-md-4', 'mb-4');
            repoDiv.innerHTML = `
            <div class="card p-4 illusion-card">
                <div class="card-body">
                    <h2 class="card-title f-2"> ${repo.name}</h2>
                    <p class="card-text">${repo.description}</p>
                    <div class="d-flex justify-content-between">
                        <span>Language: ${repo.language}</span>
                        <span><a href="${repo.link}" target="_blank" class="stretched-link">View Repository</a></span>
                    </div>
                </div>
            </div>
            `;
            repoContainer.appendChild(repoDiv);
        });
    }
});