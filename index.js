//Icons from Octicons
const SVGSTAR=`
<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path></svg>
`
const SVGEYE=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path></svg>`
const SVGFORK=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path></svg>`
const SVGBRANCH=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg>`
const SVGTAG=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg>`
const SVGFILE=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>`
const SVGFOLDER=`<svg class="svgi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>`
const SVGZIP=`<svg class="svgi2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M3.5 1.75v11.5c0 .09.048.173.126.217a.75.75 0 0 1-.752 1.298A1.748 1.748 0 0 1 2 13.25V1.75C2 .784 2.784 0 3.75 0h5.586c.464 0 .909.185 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v8.586A1.75 1.75 0 0 1 12.25 15h-.5a.75.75 0 0 1 0-1.5h.5a.25.25 0 0 0 .25-.25V4.664a.25.25 0 0 0-.073-.177L9.513 1.573a.25.25 0 0 0-.177-.073H7.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5h-3a.25.25 0 0 0-.25.25Zm3.75 8.75h.5c.966 0 1.75.784 1.75 1.75v3a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-3c0-.966.784-1.75 1.75-1.75ZM6 5.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 6 5.25Zm.75 2.25h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 6.75A.75.75 0 0 1 8.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 6.75ZM8.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM8 9.75A.75.75 0 0 1 8.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 8 9.75Zm-1 2.5v2.25h1v-2.25a.25.25 0 0 0-.25-.25h-.5a.25.25 0 0 0-.25.25Z"></path></svg>`
async function main() {
    const currentHash = window.location.hash;

    const app=document.querySelector("#app");
    if (currentHash) {
        var hashWithoutSymbol = currentHash.substring(1);
        if (hashWithoutSymbol.startsWith("/")) {
            hashWithoutSymbol = hashWithoutSymbol.substring(1);
        }
        console.log(hashWithoutSymbol);
        app.innerHTML = `<h1>Loading...</h1>`;
        //check what kind
        const parts = hashWithoutSymbol.split("/");
        const owner = parts[0];
        const repo = parts[1];
        var branch = ""
        if (parts.length < 2) {
            if ((parts[2]=="tree" || parts[2]=="blob") && parts.length>=4) {
                branch = parts[3];
            }
        }
        if (parts.length >4){
            //this is browsing a specific file or folder
            // if its a file it should show the file content with syntax highlighting plus a sidebar and back
            // if its a folder it should show the file list of that folder with a sidebar and back
            app.innerHTML=`<h1>File/folder viewing implemented yet</h1>`;
            return; //not implemented yet
        }
        
        console.log(owner, repo);
        if (true) {
            res1r = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
            res1 = await res1r.json();
            if(branch==""){
                 branch=res1.default_branch;
            }
            app.innerHTML=`
            <div id="home">
                    <h2 style="display:inline;font-weight:600;"><img src="https://github.com/${owner}.png" class="r2"> ${repo}</h2>
                    <a href="https://github.com/${owner}/${repo}/" class="right a" target="_blank">
                    <button >${SVGEYE} Watch <badge> ${res1.subscribers_count} </badge></button>&nbsp;
                    <button >${SVGFORK} Fork <badge> ${res1.forks_count} </badge></button>&nbsp;
                    <button >${SVGSTAR} Star <badge> ${res1.stargazers_count} </badge></button>&nbsp;
                    </a>
                    <hr><br>
                    <button>${SVGBRANCH} ${branch}</button>&nbsp;  
                    <a class="a" href="https://github.com/${owner}/${repo}/archive/refs/heads/${branch}.zip" target="_blank" download>
                    <button class="right green">${SVGZIP} Download ZIP</button></a>
            </div>
            ` 
            home=document.querySelector("#home");
            res2r=await fetch(`https://api.github.com/repos/${owner}/${repo}/branches?per_page=100`);
            res2=await res2r.json();
            res3r=await fetch(`https://api.github.com/repos/${owner}/${repo}/tags?per_page=100`);
            res3=await res3r.json();
            home.innerHTML+=`
            ${SVGBRANCH} ${res2.length} <span class="coli">Branch${res2.length!=1?"es":""}</span>&nbsp;
            ${SVGTAG} ${res3.length} <span class="coli">Tag${res3.length!=1?"s":""}</span>&nbsp;
            `
            res4r=await fetch(`https://api.github.com/repos/${owner}/${repo}/contents?ref=${branch}`);
            res4=await res4r.json();
            fdivs=""
            res4.forEach(file => {
                if (file.type=="dir") {
                    fdivs+=`<div onclick="window.location.hash='/${owner}/${repo}/tree/${branch}/${file.path}';window.location.reload()" style="cursor:pointer;">
                        ${SVGFOLDER} ${file.name}</div>`
                }else{
                    //fdivs+=`<div>${SVGFILE} ${file.name}</div>`
                }
            })
            res4.forEach(file => {
                if (file.type=="dir") {
                    //fdivs+=`<div>${SVGFOLDER} ${file.name}</div>`
                }else{
                    fdivs+=`<div onclick="window.location.hash='/${owner}/${repo}/blob/${branch}/${file.path}';window.location.reload()" style="cursor:pointer;">
                        ${SVGFILE} ${file.name}</div>`
                }
            })
            app.innerHTML+=`<br>
            <div class="repo-container">
                <div class="rheader"><strong>Files</strong></div>
                ${fdivs}
            </div>
            `
        }
    }
    else{
      app.innerHTML=` 
      (if you are here from spaceshipvote, there has been a bug)
      <h1>Use the URL format: tanjim.org/github.com/#/username/repository<h1>
      <h1>Github AltClient<h1>
      This is an alternative client for viewing GitHub repos.
      <h2>Why?</h2>
      I made this because 
      <ul>
      <li>the normal github.com UI is not iframe-able.</li>
      <li>the normal github.com UI has JavaScript (this UI will have a static version later).</li>
      </ul>
       `
    }
}
main().catch(err => {
    console.error("Error in main:", err);
})
