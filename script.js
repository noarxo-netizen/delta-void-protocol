const PASS = "9988";

(function() {
    let ask = prompt("PROTOCOLO VOID\nIDENTIFÍQUESE:");
    if (ask === PASS) {
        window.onload = () => { document.getElementById('main-ui').style.display = 'block'; };
    } else {
        window.location.href = "https://www.google.com";
    }
})();

function openDrawer(type) {
    const drawer = document.getElementById('drawer');
    const content = document.getElementById('drawer-content');
    const title = document.getElementById('drawer-title');
    content.innerHTML = "";
    drawer.classList.add('active');

    if(type === 'ai') {
        title.innerText = "NÚCLEOS_IA";
        addApp(content, "GEMINI_NODE", "https://gemini.google.com");
        addApp(content, "CHATGPT_CORE", "https://chatgpt.com");
        addApp(content, "CLAUDE_UNIT", "https://claude.ai");
    } else if(type === 'apps') {
        title.innerText = "RECURSOS_A (MULTIMEDIA)";
        addApp(content, "YOUTUBE_V", "https://www.youtube.com");
        addApp(content, "TIKTOK_FLUX", "https://www.tiktok.com");
        addApp(content, "NETFLIX_S", "https://www.netflix.com");
        addApp(content, "INSTAGRAM_N", "https://www.instagram.com");
        addApp(content, "CINE_LATINO", "https://cuevana3.ch/");
    } else {
        title.innerText = "MÓDULOS_L (SISTEMAS DE JUEGO)";
        addApp(content, "ROBLOX_CLOUD", "https://now.gg/apps/roblox-corporation/5349/roblox.html");
        addApp(content, "MINECRAFT_CLASSIC", "https://classic.minecraft.net");
        addApp(content, "1V1_LOL_NODE", "https://1v1.lol");
        addApp(content, "SLOPE_RUN", "https://slopegame.io");
        addApp(content, "POKI_LOGIC", "https://poki.com");
    }
}

function addApp(container, name, url) {
    let div = document.createElement('div');
    div.className = "app-card";
    div.innerText = name;
    div.onclick = () => window.open(url, '_blank');
    container.appendChild(div);
}

function closeDrawer() { document.getElementById('drawer').classList.remove('active'); }

function launchCloud() {
    let query = document.getElementById('cloud-search').value;
    if(query) window.open("https://www.google.com/search?q=" + encodeURIComponent(query) + "&igu=1", '_blank');
}
