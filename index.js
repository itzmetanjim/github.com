//?homepage is an indicator that a URL bar is unavailable.
if(window.location.href.includes('homepage')){
    document.getElementById('nav').style.display='block';
}
//Icons from Octicons
const SVGSTAR=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path></svg>`;
const SVGEYE=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path></svg>`;
const SVGFORK=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path></svg>`;
const SVGBRANCH=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg>`;
const SVGTAG=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg>`;
const SVGFILE=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>`;
const SVGFOLDER=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>`;
const SVGZIP=`<svg class="svgi2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M3.5 1.75v11.5c0 .09.048.173.126.217a.75.75 0 0 1-.752 1.298A1.748 1.748 0 0 1 2 13.25V1.75C2 .784 2.784 0 3.75 0h5.586c.464 0 .909.185 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 12.25 15h-.5a.75.75 0 0 1 0-1.5h.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177L9.513 1.573a.25.25 0 0 0-.177-.073H7.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5h-3a.25.25 0 0 0-.25.25Zm3.75 8.75h.5c.966 0 1.75.784 1.75 1.75v3a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-3c0-.966.784-1.75 1.75-1.75ZM6 5.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 6 5.25Zm.75 2.25h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 6.75A.75.75 0 0 1 8.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 6.75ZM8.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 9.75A.75.75 0 0 1 8.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 9.75Zm-1 2.5v2.25h1v-2.25a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25Z"></path></svg>`;
const SVGFILES=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M.75 1.75A.75.75 0 0 1 1.5 1h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM.75 5.5A.75.75 0 0 1 1.5 4.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 .75 5.5ZM1.5 8.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-12ZM.75 12.75A.75.75 0 0 1 1.5 12h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z"></path></svg>`;
const SVGCHEVRON=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"></path></svg>`;
const SVGRELEASE=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg>`;

let repoTreeCache = null;

function getFetchOptions() {
    const pat = localStorage.getItem('github_pat');
    if (pat) {
        const authPrefix = pat.startsWith('ghp_') ? 'token' : 'Bearer';
        return {
            headers: {
                'Authorization': `${authPrefix} ${pat}`
            }
        };
    }
    return {};
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function formatTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} day${days !== 1 ? 's' : ''} ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months !== 1 ? 's' : ''} ago`;
    const years = Math.floor(months / 12);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function getLanguageFromFilename(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    const langMap = {
        'js': 'javascript', 'ts': 'typescript', 'py': 'python', 'java': 'java',
        'kt': 'kotlin', 'cpp': 'cpp', 'c': 'c', 'cs': 'csharp', 'go': 'go',
        'rs': 'rust', 'json': 'json', 'xml': 'xml', 'html': 'xml',
        'css': 'css', 'md': 'markdown', 'sh': 'shell', 'bash': 'shell',
        'yml': 'yaml', 'yaml': 'yaml', 'gradle': 'groovy', 'properties': 'ini'
    };
    return langMap[ext] || 'plaintext';
}

function getLanguageColor(language) {
    const colorMap = {
        'JavaScript': '#f1e05a', 'TypeScript': '#3178c6', 'Python': '#3572A5',
        'Java': '#b07219', 'Kotlin': '#A97BFF', 'C++': '#f34b7d',
        'C': '#555555', 'C#': '#178600', 'Go': '#00ADD8',
        'Rust': '#dea584', 'Ruby': '#701516', 'PHP': '#4F5D95',
        'Swift': '#F05138', 'HTML': '#e34c26', 'CSS': '#563d7c',
        'Shell': '#89e051', 'Dart': '#00B4AB'
    };
    return colorMap[language] || '#8b949e';
}

function decodeBase64(str) {
    try {
        return atob(str.replace(/\s/g, ''));
    } catch (e) {
        console.error('Base64 decode error:', e);
        return '';
    }
}

function buildLink(owner, repo, type, branch, path) {
    const base = '/github.com';
    if (!type) {
        return `${base}/${owner}/${repo}`;
    }
    if (type === 'releases' && !branch) {
        return `${base}/${owner}/${repo}/releases`;
    }
    if (type === 'releases/tag') {
        return `${base}/${owner}/${repo}/releases/tag/${branch}`;
    }
    if (!path) {
        return `${base}/${owner}/${repo}/${type}/${branch}`;
    }
    return `${base}/${owner}/${repo}/${type}/${branch}/${path}`;
}

function buildGitHubLink(owner, repo, extraPath) {
    let url = `https://github.com/${owner}/${repo}`;
    if (extraPath) {
        url += '/' + extraPath;
    }
    return url;
}

function getPathFromHash() {
    let hash = window.location.hash;
    if (!hash || hash === '#' || hash === '#/') {
        return '';
    }
    if (hash.startsWith('#/')) {
        return hash.substring(2);
    }
    if (hash.startsWith('#')) {
        return hash.substring(1);
    }
    return hash;
}

function renderNotSupported(owner, repo, extraPath) {
    const githubLink = buildGitHubLink(owner, repo, extraPath);
    return `
        <div class="not-supported">
            <h1>This page is not supported</h1>
            <p>This GitHub client does not support this link. Because GitHub does not allow IFrames, I had to make an alternative client for GitHub, which may not support all features.</p>
            <p><a href="${githubLink}" target="_blank">Click here to open this page on GitHub</a></p>
        </div>
    `;
}

async function fetchRepoTree(owner, repo, branch) {
    try {
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`, getFetchOptions());
        const data = await res.json();
        return data.tree || [];
    } catch (e) {
        console.error('Error fetching tree:', e);
        return [];
    }
}

function buildTreeHTML(tree, owner, repo, branch, currentPath) {
    const root = { children: {}, type: 'tree' };

    tree.forEach(item => {
        const parts = item.path.split('/');
        let current = root;

        parts.forEach((part, idx) => {
            if (!current.children[part]) {
                current.children[part] = {
                    name: part,
                    path: parts.slice(0, idx + 1).join('/'),
                    type: idx === parts.length - 1 ? item.type : 'tree',
                    children: {}
                };
            }
            current = current.children[part];
        });
    });

    function renderNode(node, indent = 0) {
        const children = Object.values(node.children).sort((a, b) => {
            if (a.type === 'tree' && b.type !== 'tree') return -1;
            if (a.type !== 'tree' && b.type === 'tree') return 1;
            return a.name.localeCompare(b.name);
        });

        let html = '';
        children.forEach(child => {
            const isFolder = child.type === 'tree';
            const icon = isFolder ? SVGFOLDER : SVGFILE;
            const linkType = isFolder ? 'tree' : 'blob';
            const isActive = child.path === currentPath;
            const isInPath = currentPath && currentPath.startsWith(child.path + '/');

            const paddingLeft = 12 + (indent * 16);
            const link = buildLink(owner, repo, linkType, branch, child.path);

            html += `<a href="${link}" class="tree-item ${isActive ? 'active' : ''}" style="padding-left: ${paddingLeft}px;">
                <span class="tree-icon">${icon}</span>
                <span>${child.name}</span>
            </a>`;

            if (isFolder && (isInPath || isActive)) {
                html += renderNode(child, indent + 1);
            }
        });
        return html;
    }

    return renderNode(root);
}

function renderBreadcrumb(owner, repo, branch, path) {
    const parts = path ? path.split('/') : [];
    const homeLink = buildLink(owner, repo);
    let html = `<a href="${homeLink}" class="breadcrumb-link">${repo}</a>`;

    if (parts.length > 0) {
        let currentPath = '';
        parts.forEach((part, idx) => {
            currentPath += (idx > 0 ? '/' : '') + part;
            html += `<span class="separator">/</span>`;
            if (idx === parts.length - 1) {
                html += `<span class="breadcrumb-current">${part}</span>`;
            } else {
                const link = buildLink(owner, repo, 'tree', branch, currentPath);
                html += `<a href="${link}" class="breadcrumb-link">${part}</a>`;
            }
        });
    }

    return html;
}

async function renderFileView(owner, repo, branch, filePath, app) {
    try {
        app.innerHTML = `<div style="padding: 40px; text-align: center;">Loading...</div>`;

        const [fileRes, commitsRes, tree] = await Promise.all([
            fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${branch}`, getFetchOptions()),
            fetch(`https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}&sha=${branch}&per_page=1`, getFetchOptions()),
            fetchRepoTree(owner, repo, branch)
        ]);

        const fileData = await fileRes.json();
        const commits = await commitsRes.json();
        const lastCommit = commits[0];

        if (fileData.message || !fileData.content) {
            throw new Error(fileData.message || 'Failed to load file');
        }

        const content = decodeBase64(fileData.content);
        const lines = content.split('\n');
        const lineCount = lines.length;
        const lang = getLanguageFromFilename(filePath);

        let highlightedCode = content;
        try {
            if (typeof hljs !== 'undefined') {
                const result = hljs.highlightAuto(content);
                highlightedCode = result.value;
            }
        } catch (e) {
            highlightedCode = content.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }

        const lineNumbers = lines.map((_, i) => `<div class="line-number">${i + 1}</div>`).join('');
        const codeLines = highlightedCode.split('\n').map(line => `<div class="code-line">${line || ' '}</div>`).join('');

        const breadcrumb = renderBreadcrumb(owner, repo, branch, filePath);
        const treeHTML = buildTreeHTML(tree, owner, repo, branch, filePath);

        app.innerHTML = `
            <div class="file-header">
                <div class="file-nav">${breadcrumb}</div>
            </div>
            <div class="browse-layout">
                <div class="file-tree-sidebar">
                    <div class="file-tree-header">${SVGFILES} Files</div>
                    <div class="file-tree-content">${treeHTML}</div>
                </div>
                <div class="main-content">
                    <div class="commit-bar">
                        <div class="commit-info">
                            <img src="${lastCommit?.author?.avatar_url || ''}" class="commit-avatar">
                            <span class="commit-author">${lastCommit?.commit?.author?.name || 'Unknown'}</span>
                            <a href="https://github.com/${owner}/${repo}/commit/${lastCommit?.sha}" target="_blank" class="commit-message">${lastCommit?.commit?.message?.split('\n')[0] || ''}</a>
                        </div>
                        <div class="commit-meta">
                            <a href="https://github.com/${owner}/${repo}/commit/${lastCommit?.sha}" target="_blank" class="commit-sha">${lastCommit?.sha?.substring(0, 7) || ''}</a>
                            <span class="commit-date">${lastCommit ? formatTimeAgo(lastCommit.commit.author.date) : ''}</span>
                        </div>
                    </div>
                    <div class="file-info-bar">
                        <div class="file-stats">${lineCount} lines (${formatBytes(fileData.size)})</div>
                        <div class="file-actions">
                            <button onclick="window.open('${fileData.download_url}', '_blank')">Raw</button>
                            <button onclick="window.open('https://github.com/${owner}/${repo}/blame/${branch}/${filePath}', '_blank')">Blame</button>
                            <button onclick="window.open('${fileData.download_url}', '_blank')">Download</button>
                        </div>
                    </div>
                    <div class="code-container">
                        <div class="line-numbers">${lineNumbers}</div>
                        <div class="code-content"><pre><code>${codeLines}</code></pre></div>
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error("Error rendering file:", error);
        if(!error.message || !error.message.toLowerCase().includes("api rate limit exceeded")){
            app.innerHTML = renderNotSupported(owner, repo, `blob/${branch}/${filePath}`);
        }else{
            const githubLink = buildGitHubLink(owner, repo, `blob/${branch}/${filePath}`);
            app.innerHTML = `
        <h1>API Rate Limit Exceeded</h1>
        <p>GitHub's API rate limit has been exceeded. You can use a github PAT to increase the limit</p>
        <p><a href="https://github.com/settings/personal-access-tokens">Click here</a>, then click "Generate new token" &gt; add any name and click "Generate" at the bottom. No additional permissions are needed.
        </p>
        <input type="text" id="pat-input" placeholder="Enter GitHub PAT" style="width: 300px; padding: 8px; margin-top: 10px;">
        <button id="pat-submit" style="padding: 8px 16px; margin-left: 10px;">Submit</button>
        <p>You can also <a href="${githubLink}" target="_blank" class="github-link">Click here to open this page on GitHub (new tab)</a></p>
        `
            document.getElementById('pat-submit').addEventListener('click', () => {
                const pat = document.getElementById('pat-input').value.trim();
                if (pat) {
                    localStorage.setItem('github_pat', pat);
                    window.location.reload();
                }
            });
        }
    }
}

async function renderFolderView(owner, repo, branch, folderPath, app) {
    try {
        app.innerHTML = `<div style="padding: 40px; text-align: center;">Loading...</div>`;

        const [contentsRes, commitsRes, tree] = await Promise.all([
            fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${folderPath}?ref=${branch}`, getFetchOptions()),
            fetch(`https://api.github.com/repos/${owner}/${repo}/commits?path=${folderPath}&sha=${branch}&per_page=1`, getFetchOptions()),
            fetchRepoTree(owner, repo, branch)
        ]);

        const contents = await contentsRes.json();
        const commits = await commitsRes.json();
        const lastCommit = commits[0];

        if (!Array.isArray(contents)) {
            throw new Error(contents.message || 'Failed to load folder contents');
        }

        const dirs = contents.filter(item => item.type === 'dir').sort((a, b) => a.name.localeCompare(b.name));
        const files = contents.filter(item => item.type === 'file').sort((a, b) => a.name.localeCompare(b.name));
        const sortedContents = [...dirs, ...files];

        let fileListHTML = '';

        const pathParts = folderPath.split('/');
        const parentPath = pathParts.slice(0, -1).join('/');
        const parentLink = parentPath ? buildLink(owner, repo, 'tree', branch, parentPath) : buildLink(owner, repo);
        fileListHTML += `
            <a href="${parentLink}" class="file-row">
                <div class="file-icon">${SVGFOLDER}</div>
                <div class="file-name">..</div>
            </a>
        `;

        sortedContents.forEach(item => {
            const icon = item.type === 'dir' ? SVGFOLDER : SVGFILE;
            const itemType = item.type === 'dir' ? 'tree' : 'blob';
            const link = buildLink(owner, repo, itemType, branch, item.path);
            fileListHTML += `
                <a href="${link}" class="file-row">
                    <div class="file-icon">${icon}</div>
                    <div class="file-name">${item.name}</div>
                </a>
            `;
        });

        const breadcrumb = renderBreadcrumb(owner, repo, branch, folderPath);
        const treeHTML = buildTreeHTML(tree, owner, repo, branch, folderPath);

        app.innerHTML = `
            <div class="file-header">
                <div class="file-nav">${breadcrumb}</div>
            </div>
            <div class="browse-layout">
                <div class="file-tree-sidebar">
                    <div class="file-tree-header">${SVGFILES} Files</div>
                    <div class="file-tree-content">${treeHTML}</div>
                </div>
                <div class="main-content">
                    <div class="commit-bar">
                        <div class="commit-info">
                            <img src="${lastCommit?.author?.avatar_url || ''}" class="commit-avatar">
                            <span class="commit-author">${lastCommit?.commit?.author?.name || 'Unknown'}</span>
                            <a href="https://github.com/${owner}/${repo}/commit/${lastCommit?.sha}" target="_blank" class="commit-message">${lastCommit?.commit?.message?.split('\n')[0] || ''}</a>
                        </div>
                        <div class="commit-meta">
                            <a href="https://github.com/${owner}/${repo}/commit/${lastCommit?.sha}" target="_blank" class="commit-sha">${lastCommit?.sha?.substring(0, 7) || ''}</a>
                            <span class="commit-date">${lastCommit ? formatTimeAgo(lastCommit.commit.author.date) : ''}</span>
                        </div>
                    </div>
                    <div class="repo-container">
                        <div class="rheader"><strong>Files</strong></div>
                        ${fileListHTML}
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error("Error rendering folder:", error);
        if(!error.message || !error.message.toLowerCase().includes("api rate limit exceeded")){
            app.innerHTML = renderNotSupported(owner, repo, `tree/${branch}/${folderPath}`);
        }else{
            const githubLink = buildGitHubLink(owner, repo, `tree/${branch}/${folderPath}`);
            app.innerHTML = `
        <h1>API Rate Limit Exceeded</h1>
        <p>GitHub's API rate limit has been exceeded. You can use a github PAT to increase the limit</p>
        <p><a href="https://github.com/settings/personal-access-tokens">Click here</a>, then click "Generate new token" &gt; add any name and click "Generate" at the bottom. No additional permissions are needed.
        </p>
        <input type="text" id="pat-input" placeholder="Enter GitHub PAT" style="width: 300px; padding: 8px; margin-top: 10px;">
        <button id="pat-submit" style="padding: 8px 16px; margin-left: 10px;">Submit</button>
        <p>You can also <a href="${githubLink}" target="_blank" class="github-link">Click here to open this page on GitHub (new tab)</a></p>
        `
            document.getElementById('pat-submit').addEventListener('click', () => {
                const pat = document.getElementById('pat-input').value.trim();
                if (pat) {
                    localStorage.setItem('github_pat', pat);
                    window.location.reload();
                }
            });
        }
    }
}

async function renderReadme(owner, repo, branch, readmeContent, readmePath) {
    const md = window.markdownit({
        html: true,
        linkify: true,
        breaks: true,
        highlight: function (str, lang) {
            if (typeof hljs !== 'undefined' && lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, { language: lang }).value;
                } catch (__) {}
            }
            return '';
        }
    });

    const basePath = readmePath.substring(0, readmePath.lastIndexOf('/'));
    let rendered = md.render(readmeContent);

    rendered = rendered.replace(/src="(?!http|\/\/|data:)([^"]+)"/g, (match, p1) => {
        const fixedPath = basePath ? `${basePath}/${p1}` : p1;
        return `src="https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${fixedPath}"`;
    });

    rendered = rendered.replace(/href="(?!http|\/\/|#|mailto:)([^"]+)"/g, (match, p1) => {
        const fixedPath = basePath ? `${basePath}/${p1}` : p1;
        const link = buildLink(owner, repo, 'blob', branch, fixedPath);
        return `href="${link}"`;
    });

    return `
        <div class="readme-container">
            <div class="readme-header">${SVGFILE} README.md</div>
            <div class="readme-content markdown-body">${rendered}</div>
        </div>
    `;
}

async function renderReleases(owner, repo, app) {
    try {
        app.innerHTML = `<div style="padding: 40px; text-align: center;">Loading releases...</div>`;

        const [releasesRes, repoRes] = await Promise.all([
            fetch(`https://api.github.com/repos/${owner}/${repo}/releases`, getFetchOptions()),
            fetch(`https://api.github.com/repos/${owner}/${repo}`, getFetchOptions())
        ]);

        const releases = await releasesRes.json();
        const repoData = await repoRes.json();

        if (!Array.isArray(releases)) {
            throw new Error(releases.message || 'Failed to load releases');
        }

        const homeLink = buildLink(owner, repo);

        let releasesHTML = '';

        if (releases.length === 0) {
            releasesHTML = `<div class="no-releases">No releases published yet.</div>`;
        } else {
            releases.forEach((release, idx) => {
                const releaseLink = buildLink(owner, repo, 'releases/tag', release.tag_name);
                const isLatest = idx === 0;

                let bodyHTML = '';
                if (release.body && typeof markdownit !== 'undefined') {
                    const md = window.markdownit({ html: true, linkify: true, breaks: true });
                    bodyHTML = md.render(release.body);
                }

                let assetsHTML = '';
                if (release.assets && release.assets.length > 0) {
                    assetsHTML = `
                        <div class="release-assets">
                            <div class="assets-header">Assets (${release.assets.length + 2})</div>
                            ${release.assets.map(asset => `
                                <a href="${asset.browser_download_url}" class="asset-row" target="_blank">
                                    <span class="asset-name">${asset.name}</span>
                                    <span class="asset-size">${formatBytes(asset.size)}</span>
                                </a>
                            `).join('')}
                            <a href="https://github.com/${owner}/${repo}/archive/refs/tags/${release.tag_name}.zip" class="asset-row" target="_blank">
                                <span class="asset-name">Source code (zip)</span>
                            </a>
                            <a href="https://github.com/${owner}/${repo}/archive/refs/tags/${release.tag_name}.tar.gz" class="asset-row" target="_blank">
                                <span class="asset-name">Source code (tar.gz)</span>
                            </a>
                        </div>
                    `;
                } else {
                    assetsHTML = `
                        <div class="release-assets">
                            <div class="assets-header">Assets (2)</div>
                            <a href="https://github.com/${owner}/${repo}/archive/refs/tags/${release.tag_name}.zip" class="asset-row" target="_blank">
                                <span class="asset-name">Source code (zip)</span>
                            </a>
                            <a href="https://github.com/${owner}/${repo}/archive/refs/tags/${release.tag_name}.tar.gz" class="asset-row" target="_blank">
                                <span class="asset-name">Source code (tar.gz)</span>
                            </a>
                        </div>
                    `;
                }

                releasesHTML += `
                    <div class="release-card">
                        <div class="release-header">
                            <div class="release-title-row">
                                <a href="${releaseLink}" class="release-title">${release.name || release.tag_name}</a>
                                ${isLatest ? '<span class="latest-badge">Latest</span>' : ''}
                                ${release.prerelease ? '<span class="prerelease-badge">Pre-release</span>' : ''}
                            </div>
                            <div class="release-meta">
                                ${SVGTAG} <a href="${releaseLink}" class="release-tag">${release.tag_name}</a>
                                <span class="release-date">${formatDate(release.published_at)}</span>
                            </div>
                        </div>
                        ${bodyHTML ? `<div class="release-body markdown-body">${bodyHTML}</div>` : ''}
                        ${assetsHTML}
                    </div>
                `;
            });
        }

        app.innerHTML = `
            <div id="releases">
                <div class="releases-header">
                    <div class="releases-nav">
                        <a href="${homeLink}" class="breadcrumb-link">${repo}</a>
                        <span class="separator">/</span>
                        <span class="breadcrumb-current">Releases</span>
                    </div>
                </div>
                <div class="releases-content">
                    ${releasesHTML}
                </div>
            </div>
        `;
    } catch (error) {
        console.error("Error rendering releases:", error);
        if(!error.message || !error.message.toLowerCase().includes("api rate limit exceeded")){
            app.innerHTML = renderNotSupported(owner, repo, 'releases');
        }else{
            const githubLink = buildGitHubLink(owner, repo, 'releases');
            app.innerHTML = `
        <h1>API Rate Limit Exceeded</h1>
        <p>GitHub's API rate limit has been exceeded. You can use a github PAT to increase the limit</p>
        <p><a href="https://github.com/settings/personal-access-tokens">Click here</a>, then click "Generate new token" &gt; add any name and click "Generate" at the bottom. No additional permissions are needed.
        </p>
        <input type="text" id="pat-input" placeholder="Enter GitHub PAT" style="width: 300px; padding: 8px; margin-top: 10px;">
        <button id="pat-submit" style="padding: 8px 16px; margin-left: 10px;">Submit</button>
        <p>You can also <a href="${githubLink}" target="_blank" class="github-link">Click here to open this page on GitHub (new tab)</a></p>
        `
            document.getElementById('pat-submit').addEventListener('click', () => {
                const pat = document.getElementById('pat-input').value.trim();
                if (pat) {
                    localStorage.setItem('github_pat', pat);
                    window.location.reload();
                }
            });
        }
    }
}

async function renderReleaseTag(owner, repo, tagName, app) {
    try {
        app.innerHTML = `<div style="padding: 40px; text-align: center;">Loading release...</div>`;

        const releaseRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/tags/${tagName}`, getFetchOptions());
        const release = await releaseRes.json();

        if (release.message) {
            throw new Error(release.message);
        }

        const homeLink = buildLink(owner, repo);
        const releasesLink = buildLink(owner, repo, 'releases');

        let bodyHTML = '';
        if (release.body && typeof markdownit !== 'undefined') {
            const md = window.markdownit({ html: true, linkify: true, breaks: true });
            bodyHTML = md.render(release.body);
        }

        let assetsHTML = '';
        if (release.assets && release.assets.length > 0) {
            assetsHTML = release.assets.map(asset => `
                <a href="${asset.browser_download_url}" class="asset-row" target="_blank">
                    <span class="asset-name">${asset.name}</span>
                    <span class="asset-size">${formatBytes(asset.size)}</span>
                </a>
            `).join('');
        }

        assetsHTML += `
            <a href="https://github.com/${owner}/${repo}/archive/refs/tags/${release.tag_name}.zip" class="asset-row" target="_blank">
                <span class="asset-name">Source code (zip)</span>
            </a>
            <a href="https://github.com/${owner}/${repo}/archive/refs/tags/${release.tag_name}.tar.gz" class="asset-row" target="_blank">
                <span class="asset-name">Source code (tar.gz)</span>
            </a>
        `;

        app.innerHTML = `
            <div id="release-single">
                <div class="releases-header">
                    <div class="releases-nav">
                        <a href="${homeLink}" class="breadcrumb-link">${repo}</a>
                        <span class="separator">/</span>
                        <a href="${releasesLink}" class="breadcrumb-link">Releases</a>
                        <span class="separator">/</span>
                        <span class="breadcrumb-current">${tagName}</span>
                    </div>
                </div>
                <div class="release-single-content">
                    <div class="release-single-header">
                        <h1 class="release-single-title">${release.name || release.tag_name}</h1>
                        <div class="release-single-meta">
                            ${release.prerelease ? '<span class="prerelease-badge">Pre-release</span>' : '<span class="latest-badge">Release</span>'}
                            <span>${SVGTAG} ${release.tag_name}</span>
                            <span>Published ${formatDate(release.published_at)}</span>
                        </div>
                    </div>
                    ${bodyHTML ? `<div class="release-body markdown-body">${bodyHTML}</div>` : ''}
                    <div class="release-assets">
                        <div class="assets-header">Assets</div>
                        ${assetsHTML}
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        console.error("Error rendering release tag:", error);
        if(!error.message || !error.message.toLowerCase().includes("api rate limit exceeded")){
            app.innerHTML = renderNotSupported(owner, repo, `releases/tag/${tagName}`);
        }else{
            const githubLink = buildGitHubLink(owner, repo, `releases/tag/${tagName}`);
            app.innerHTML = `
        <h1>API Rate Limit Exceeded</h1>
        <p>GitHub's API rate limit has been exceeded. You can use a github PAT to increase the limit</p>
        <p><a href="https://github.com/settings/personal-access-tokens">Click here</a>, then click "Generate new token" &gt; add any name and click "Generate" at the bottom. No additional permissions are needed.
        </p>
        <input type="text" id="pat-input" placeholder="Enter GitHub PAT" style="width: 300px; padding: 8px; margin-top: 10px;">
        <button id="pat-submit" style="padding: 8px 16px; margin-left: 10px;">Submit</button>
        <p>You can also <a href="${githubLink}" target="_blank" class="github-link">Click here to open this page on GitHub (new tab)</a></p>
        `
            document.getElementById('pat-submit').addEventListener('click', () => {
                const pat = document.getElementById('pat-input').value.trim();
                if (pat) {
                    localStorage.setItem('github_pat', pat);
                    window.location.reload();
                }
            });
        }
    }
}

async function renderHome(owner, repo, branch, app) {
    try {
        app.innerHTML = `<div style="padding: 40px; text-align: center;">Loading...</div>`;

        const [repoRes, contentsRes, commitsRes] = await Promise.all([
            fetch(`https://api.github.com/repos/${owner}/${repo}`, getFetchOptions()),
            fetch(`https://api.github.com/repos/${owner}/${repo}/contents?ref=${branch}`, getFetchOptions()),
            fetch(`https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}&per_page=1`, getFetchOptions())
        ]);

        const repoData = await repoRes.json();
        const contents = await contentsRes.json();
        const commits = await commitsRes.json();
        const lastCommit = commits[0];

        if (repoData.message) {
            throw new Error(repoData.message);
        }

        if (!branch) branch = repoData.default_branch;

        if (!Array.isArray(contents)) {
            throw new Error(contents.message || 'Failed to load repository contents');
        }

        const dirs = contents.filter(item => item.type === 'dir').sort((a, b) => a.name.localeCompare(b.name));
        const files = contents.filter(item => item.type === 'file').sort((a, b) => a.name.localeCompare(b.name));
        const sortedContents = [...dirs, ...files];

        let fileListHTML = '';
        sortedContents.forEach(item => {
            const icon = item.type === 'dir' ? SVGFOLDER : SVGFILE;
            const itemType = item.type === 'dir' ? 'tree' : 'blob';
            const link = buildLink(owner, repo, itemType, branch, item.path);
            fileListHTML += `
                <a href="${link}" class="file-row">
                    <div class="file-icon">${icon}</div>
                    <div class="file-name">${item.name}</div>
                </a>
            `;
        });

        const description = repoData.description ? `<p class="repo-description">${repoData.description}</p>` : '';
        const topics = repoData.topics && repoData.topics.length > 0 
            ? `<div class="repo-topics">${repoData.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}</div>` 
            : '';
        const language = repoData.language ? `<div class="repo-language"><span class="language-color" style="background-color: ${getLanguageColor(repoData.language)};"></span>${repoData.language}</div>` : '';
        const license = repoData.license ? `<div class="repo-license">${SVGFILE} ${repoData.license.name}</div>` : '';

        const releasesLink = buildLink(owner, repo, 'releases');

        app.innerHTML = `
            <div id="home">
                <div class="home-header">
                    <div class="home-title">
                        <img src="https://github.com/${owner}.png" class="r2"> 
                        <h2 style="display:inline;font-weight:600;margin:0;">${repo}</h2>
                        <badge>${repoData.private ? 'Private' : 'Public'}</badge>
                    </div>
                    <div class="home-actions">
                        <button>${SVGEYE} Watch <badge>${repoData.subscribers_count || 0}</badge></button>
                        <button>${SVGFORK} Fork <badge>${repoData.forks_count || 0}</badge></button>
                        <button>${SVGSTAR} Star <badge>${repoData.stargazers_count || 0}</badge></button>
                    </div>
                </div>

                <div class="home-content">
                    <div class="main-content">
                        <div class="repo-header-info">
                            <div class="branch-selector">
                                <button class="branch-button">${SVGBRANCH} ${branch} <span class="dropdown-caret">▼</span></button>
                            </div>
                            <div class="header-buttons">
                                <a href="${releasesLink}" class="a"><button>${SVGRELEASE} Releases</button></a>
                                <a class="a" href="https://github.com/${owner}/${repo}/archive/refs/heads/${branch}.zip" target="_blank" download>
                                    <button class="green">${SVGZIP} Code</button>
                                </a>
                            </div>
                        </div>

                        <div class="commit-bar commit-bar-standalone">
                            <div class="commit-info">
                                <img src="${lastCommit?.author?.avatar_url || ''}" class="commit-avatar">
                                <span class="commit-author">${lastCommit?.commit?.author?.name || 'Unknown'}</span>
                                <a href="https://github.com/${owner}/${repo}/commit/${lastCommit?.sha}" target="_blank" class="commit-message">${lastCommit?.commit?.message?.split('\n')[0] || ''}</a>
                            </div>
                            <div class="commit-meta">
                                <a href="https://github.com/${owner}/${repo}/commit/${lastCommit?.sha}" target="_blank" class="commit-sha">${lastCommit?.sha?.substring(0, 7) || ''}</a>
                                <span class="commit-date">${lastCommit ? formatTimeAgo(lastCommit.commit.author.date) : ''}</span>
                            </div>
                        </div>

                        <div class="repo-container">
                            <div class="rheader"><strong>Files</strong></div>
                            ${fileListHTML}
                        </div>

                        <div id="readme-section"></div>
                    </div>

                    <div class="sidebar">
                        <div class="about-section">
                            <h3>About</h3>
                            ${description}
                            ${topics}
                            <div class="repo-stats">
                                ${language}
                                ${license}
                                <div class="repo-star-count">${SVGSTAR} <strong>${repoData.stargazers_count || 0}</strong> stars</div>
                                <div class="repo-fork-count">${SVGFORK} <strong>${repoData.forks_count || 0}</strong> forks</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        try {
            const readmeRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme?ref=${branch}`, getFetchOptions());
            if (readmeRes.ok) {
                const readmeData = await readmeRes.json();
                const readmeContent = decodeBase64(readmeData.content);
                const readmeHtml = await renderReadme(owner, repo, branch, readmeContent, readmeData.path);
                document.getElementById('readme-section').innerHTML = readmeHtml;
            }
        } catch (e) {
            console.log("No README found:", e);
        }
    } catch (err) {
        console.error("Error rendering home:", err);
        if(!err.message || !err.message.toLowerCase().includes("api rate limit exceeded")){
            app.innerHTML = renderNotSupported(owner, repo, '');
        }else{
            const githubLink = buildGitHubLink(owner, repo, '');
            app.innerHTML = `
        <h1>API Rate Limit Exceeded</h1>
        <p>GitHub's API rate limit has been exceeded. You can use a github PAT to increase the limit</p>
        <p><a href="https://github.com/settings/personal-access-tokens">Click here</a>, then click "Generate new token" &gt; add any name and click "Generate" at the bottom. No additional permissions are needed.
        </p>
        <input type="text" id="pat-input" placeholder="Enter GitHub PAT" style="width: 300px; padding: 8px; margin-top: 10px;">
        <button id="pat-submit" style="padding: 8px 16px; margin-left: 10px;">Submit</button>
        <p>You can also <a href="${githubLink}" target="_blank" class="github-link">Click here to open this page on GitHub (new tab)</a></p>
        `
            document.getElementById('pat-submit').addEventListener('click', () => {
                const pat = document.getElementById('pat-input').value.trim();
                if (pat) {
                    localStorage.setItem('github_pat', pat);
                    window.location.reload();
                }
            });
        }

    }
}

async function main() {
    const path = getPathFromHash();
    const app = document.querySelector("#app");

    if (path) {
        const parts = path.split("/").filter(p => p);
        const owner = parts[0];
        const repo = parts[1];

        if (!owner || !repo) {
            app.innerHTML = `<h1>Invalid URL</h1><p>Use format: #/owner/repo</p>`;
            return;
        }

        let branch = '';
        let viewType = 'home';
        let filePath = '';

        if (parts.length >= 3) {
            const possibleViewType = parts[2];

            if (possibleViewType === 'releases' && parts[3] === 'tag' && parts[4]) {
                const tagName = parts.slice(4).join('/');
                await renderReleaseTag(owner, repo, tagName, app);
                return;
            }

            if (possibleViewType === 'releases') {
                await renderReleases(owner, repo, app);
                return;
            }

            if (possibleViewType === 'tree' || possibleViewType === 'blob') {
                viewType = possibleViewType;
                branch = parts[3] || '';
                filePath = parts.slice(4).join('/');
            } else {
                app.innerHTML = renderNotSupported(owner, repo, parts.slice(2).join('/'));
                return;
            }
        }

        if (viewType === 'tree' && filePath === '') {
            try {
                const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`, getFetchOptions());
                const repoData = await repoRes.json();
                await renderHome(owner, repo, branch || repoData.default_branch, app);
                return;
            } catch (e) {
                console.error(e);
            }
        }

        if (viewType === 'blob' && filePath) {
            await renderFileView(owner, repo, branch, filePath, app);
        } else if (viewType === 'tree' && filePath) {
            await renderFolderView(owner, repo, branch, filePath, app);
        } else {
            if (!branch) {
                try {
                    const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`, getFetchOptions());
                    const repoData = await repoRes.json();
                    branch = repoData.default_branch;
                } catch (e) {
                    branch = 'main';
                }
            }
            await renderHome(owner, repo, branch, app);
        }
    } else {
        if(window.location.href.includes("homepage")){
            app.innerHTML=`
            <div style="padding: 40px; text-align: center;">
                <input type="text" id="homepage-input" placeholder="Enter owner/repo" style="width: 400px; padding: 8px;">    
                <button id="homepage-go" style="padding: 8px 16px; margin-left: 10px;">Go</button>
            </div>
            `
            document.getElementById('homepage-go').addEventListener('click', () => {
                const input = document.getElementById('homepage-input').value.trim();
                if(input){
                    window.location.hash = `#/${input}`;
                    window.location.reload();
                }
            });
            return;
        }
        app.innerHTML = `
            <div style="padding: 40px;">
            <p>(if you are here from spaceshipvote, there has been a bug)
                <h1>GitHub Alt Client</h1>
                <p>Use the URL format: <code>#/owner/repo</code></p>
                <p>Example: <a href="#/itzmetanjim/mcgit">#/itzmetanjim/mcgit</a></p>
                <p style="color: #8b949e; margin-top: 20px;">This client mirrors GitHub URLs. You can also type "tanjim.org/" before any "github.com" URL to view it here.</p>
            </div>
        `;
    }
}

main().catch(err => {
    console.error("Error in main:", err);
    if(!err.message || !err.message.toLowerCase().includes("api rate limit exceeded")){
        document.querySelector("#app").innerHTML = renderNotSupported('', '');
    }else{
        document.querySelector("#app").innerHTML = `
        <h1>API Rate Limit Exceeded</h1>
        <p>GitHub's API rate limit has been exceeded. You can use a github PAT token to increase the limit to 5000/hour</p>
        <p><a href="https://github.com/settings/personal-access-tokens">Click here</a>, then click "Generate new token" &gt; add any name and click "Generate" at the bottom. No additional permissions are needed.
        </p>
        <input type="text" id="pat-input" placeholder="Enter GitHub PAT" style="width: 300px; padding: 8px; margin-top: 10px;">
        <button id="pat-submit" style="padding: 8px 16px; margin-left: 10px;">Submit</button>
        `
        document.getElementById('pat-submit').addEventListener('click', () => {
            const pat = document.getElementById('pat-input').value.trim();
            if (pat) {
                localStorage.setItem('github_pat', pat);
                window.location.reload();
            }
        });
    }
});
