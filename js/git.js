
    const organization = "YourOrganizationName"; // Replace with your GitHub organization name
    const token = "------------"; // Optional: GitHub personal access token for private repos
    const statsContainer = document.getElementById("stats");

    async function fetchGitHubStats() {
        try {
            // Add Authorization header with the personal access token
            const headers = {
        "Authorization": `token ${token}`
            };

    // Fetch the organization's repositories
    const reposResponse = await fetch(`https://api.github.com/orgs/${organization}/repos`, {headers});
    if (!reposResponse.ok) throw new Error("Failed to fetch repositories");

    const repos = await reposResponse.json();
    let totalStars = 0, totalCommits = 0, totalPRs = 0, totalIssues = 0;

    for (const repo of repos) {
        totalStars += repo.stargazers_count;

    // Fetch commits (this is an example, some repos might have a lot of commits, so this might need tweaking)
    const commitsResponse = await fetch(repo.commits_url.replace("{/sha}", ""), {headers});
    if (commitsResponse.ok) {
                    const commits = await commitsResponse.json();
    totalCommits += commits.length;
                }

    // Fetch pull requests
    const prsResponse = await fetch(repo.pulls_url.replace("{/number}", ""), {headers});
    if (prsResponse.ok) {
                    const prs = await prsResponse.json();
    totalPRs += prs.length;
                }

    // Fetch issues
    const issuesResponse = await fetch(repo.issues_url.replace("{/number}", ""), {headers});
    if (issuesResponse.ok) {
                    const issues = await issuesResponse.json();
    totalIssues += issues.length;
                }
            }

    displayStats({totalStars, totalCommits, totalPRs, totalIssues});
        } catch (error) {
        console.error("Error fetching GitHub data:", error);
        }
    }

    function displayStats({totalStars, totalCommits, totalPRs, totalIssues}) {
        statsContainer.innerHTML = ` 
            <div class="stat-item">
                <img src="https://img.icons8.com/fluency/48/star.png"/> 
                <span>Total Stars Earned: ${totalStars}</span>
            </div>
            <div class="stat-item">
                <img src="https://img.icons8.com/fluency/48/source-code.png"/> 
                <span>Total Commits: ${totalCommits}</span>
            </div>
            <div class="stat-item">
                <img src="https://img.icons8.com/fluency/48/pull-request.png"/> 
                <span>Total PRs: ${totalPRs}</span>
            </div>
            <div class="stat-item">
                <img src="https://img.icons8.com/fluency/48/error.png"/> 
                <span>Total Issues: ${totalIssues}</span>
            </div>
        `;
    }

    fetchGitHubStats();

//////////////////////////////////////////////


const progressBar = document.getElementById("progress-bar");
const legend = document.getElementById("legend");

async function fetchLanguages() {
    try {
        const headers = token ? { Authorization: `token ${token}` } : {};
        const reposResponse = await fetch(`https://api.github.com/orgs/${organization}/repos?per_page=100`, { headers });
        if (!reposResponse.ok) throw new Error(`Failed to fetch repositories: ${reposResponse.statusText}`);

        const repos = await reposResponse.json();
        if (!repos.length) throw new Error("No repositories found or access denied");

        let languageData = {};

        const languageRequests = repos.map(repo =>
            fetch(repo.languages_url, { headers }).then(async res => {
                if (!res.ok) throw new Error(`Failed to fetch languages for repo ${repo.name}`);
                return res.json();
            })
        );

        const languages = await Promise.all(languageRequests);

        languages.forEach(repoLanguages => {
            for (const [lang, bytes] of Object.entries(repoLanguages)) {
                languageData[lang] = (languageData[lang] || 0) + bytes;
            }
        });

        const totalBytes = Object.values(languageData).reduce((acc, val) => acc + val, 0);
        const sortedLanguages = Object.entries(languageData)
            .map(([lang, bytes]) => ({ name: lang, percentage: ((bytes / totalBytes) * 100).toFixed(2) }))
            .sort((a, b) => b.percentage - a.percentage)
            .slice(0, 6);

        displayLanguages(sortedLanguages);
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
    }
}

function displayLanguages(languages) {
    const colors = ["#8e44ad", "#e67e22", "#e74c3c", "#f1c40f", "#2980b9", "#34495e"];
    progressBar.innerHTML = "";
    legend.innerHTML = "";

    languages.forEach((lang, index) => {
        const div = document.createElement("div");
        div.classList.add("progress-bar");
        div.style.width = lang.percentage + "%";
        div.style.backgroundColor = colors[index % colors.length];
        progressBar.appendChild(div);

        const legendItem = document.createElement("div");
        legendItem.innerHTML = `<span style="background-color:${colors[index % colors.length]}"></span> ${lang.name} ${lang.percentage}%`;
        legend.appendChild(legendItem);
    });
}

fetchLanguages();
