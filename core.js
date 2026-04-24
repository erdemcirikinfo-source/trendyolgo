// core.js - ContentIQ Agentic Core v5.0 [UNDISPUTED EDITION]
// Bu kod tarayıcıyı, OSINT (Açık Kaynak İstihbaratı) bağlantılı bir siber operasyon merkezine çevirir.

const SYSTEM_CONFIG = {
    version: "5.0.0_UNDISPUTED",
    codename: "Ankara_Noir",
    boot_delay: 1000
};

// --- 0. OSINT HABER AĞI (RSS DATABASE) ---
const RSS_DATABASE = {
    gundem: [
        "https://www.ntv.com.tr/gundem.rss",
        "http://www.haberturk.com/rss",
        "https://www.cnnturk.com/feed/rss/turkiye/news"
    ],
    ekonomi: [
        "https://www.ntv.com.tr/ekonomi.rss",
        "https://www.sabah.com.tr/rss/ekonomi.xml",
        "https://www.cnnturk.com/feed/rss/ekonomi/news"
    ],
    teknoloji: [
        "https://www.ntv.com.tr/teknoloji.rss",
        "http://www.hurriyet.com.tr/rss/teknoloji",
        "https://www.cnnturk.com/feed/rss/bilim-teknoloji/news"
    ],
    dunya: [
        "https://www.ntv.com.tr/dunya.rss",
        "http://feeds.bbci.co.uk/turkce/rss.xml",
        "http://rss.dw.com/rdf/rss-tur-all"
    ],
    sondakika: [
        "http://www.cumhuriyet.com.tr/rss/son_dakika.xml",
        "http://www.trthaber.com/sondakika.rss",
        "http://www.mynet.com/haber/rss/sondakika"
    ]
};

// --- 1. SİBER SES MOTORU (Web Audio API) ---
const AudioEngine = {
    ctx: null,
    init() {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
    },
    playKeystroke() {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(150 + Math.random() * 50, this.ctx.currentTime);
        gainNode.gain.setValueAtTime(0.02, this.ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
    },
    playBeep() {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
    }
};

// --- 2. MATRIX YAĞMURU (Arka Plan Efekti) ---
const MatrixRain = {
    start() {
        const canvas = document.createElement('canvas');
        canvas.id = 'matrix-canvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.15';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array.from({ length: columns }).fill(1);

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#10B981';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
            requestAnimationFrame(draw);
        }
        draw();
    }
};

// --- 3. UYGULAMA DURUMU ---
const AppState = {
    payload: window.ContentIQ_Data || { title: "SYSTEM", body: "Blogger verisi yüklenemedi.", isPost: false },
    isDecrypted: false
};

// --- 4. ARAYÜZ VE TERMİNAL MOTORU ---
const TerminalUI = {
    root: document.getElementById('app-root'),

    init() {
        this.injectCRTStyle();
        MatrixRain.start();
        this.renderShell();
        this.startBootSequence();
    },

    injectCRTStyle() {
        const style = document.createElement('style');
        style.innerHTML = `
            .crt::before { content: " "; display: block; position: absolute; top: 0; left: 0; bottom: 0; right: 0; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); z-index: 999; background-size: 100% 2px, 3px 100%; pointer-events: none; }
            .glitch-text { animation: glitch 1s linear infinite; }
            @keyframes glitch { 2%, 64% { transform: translate(2px,0) skew(0deg); } 4%, 60% { transform: translate(-2px,0) skew(0deg); } 62% { transform: translate(0,0) skew(5deg); } }
            .custom-scrollbar::-webkit-scrollbar { width: 4px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #10B981; }
        `;
        document.head.appendChild(style);
    },

    renderShell() {
        this.root.className = "crt bg-transparent h-screen w-screen text-emerald-500 font-mono p-4 flex flex-col relative overflow-hidden";
        this.root.innerHTML = `
            <header class="border-b border-emerald-900/50 pb-2 mb-4 flex justify-between z-10">
                <div>
                    <h1 class="text-xl font-bold">ContentIQ<span class="text-white">.Studio</span> // <span class="text-xs text-emerald-700">${SYSTEM_CONFIG.codename}</span></h1>
                </div>
                <div class="text-xs animate-pulse text-red-500" id="sys-warning" style="display:none;">YETKİSİZ ERİŞİM TESPİT EDİLDİ</div>
            </header>

            <main class="flex-1 flex flex-col md:flex-row gap-4 overflow-hidden z-10">
                <div class="flex-1 bg-black/60 border border-emerald-900/50 p-6 overflow-y-auto custom-scrollbar backdrop-blur-sm relative">
                    <div id="content-overlay" class="absolute inset-0 bg-black/80 z-20 flex flex-col items-center justify-center text-center">
                        <svg class="w-12 h-12 mb-4 text-emerald-700 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                        <p class="text-xs tracking-[0.2em] text-emerald-600">İÇERİK KRİPTOLANDI. TERMİNALDEN ÇÖZÜN.</p>
                    </div>
                    <h2 class="text-2xl font-bold text-white mb-4" id="post-title">${AppState.payload.title}</h2>
                    <div class="text-sm leading-relaxed text-emerald-100/70" id="post-body">
                        ${AppState.payload.body}
                    </div>
                </div>

                <div class="w-full md:w-1/3 bg-black/80 border border-emerald-900/50 flex flex-col backdrop-blur-md">
                    <div class="bg-emerald-900/30 text-[10px] px-2 py-1 border-b border-emerald-900/50 flex justify-between">
                        <span>UPLINK_TERMINAL.EXE</span>
                        <span class="text-emerald-500/50">/help yazın</span>
                    </div>
                    <div class="flex-1 p-3 overflow-y-auto text-xs space-y-1 custom-scrollbar" id="terminal-logs"></div>
                    <div class="p-3 border-t border-emerald-900/50 flex gap-2 items-center bg-black">
                        <span class="text-emerald-500 font-bold">&gt;</span>
                        <input type="text" id="cmd-input" class="flex-1 bg-transparent outline-none text-emerald-400 placeholder-emerald-900/50" placeholder="_komut..." autocomplete="off" spellcheck="false">
                    </div>
                </div>
            </main>
        `;

        this.bindEvents();
    },

    startBootSequence() {
        const logs = [
            "Blogger Mainframe bypass ediliyor...",
            "Güvenlik duvarı aşıldı. [OK]",
            "ContentIQ Agentic Core başlatılıyor...",
            `Hedef paket tespit edildi: ${AppState.payload.title.substring(0, 15)}...`,
            "Ağlara bağlanmak için '/aglar' yazın."
        ];

        let delay = 300;
        logs.forEach(log => {
            setTimeout(() => {
                this.addLog(log);
                AudioEngine.playBeep();
            }, delay);
            delay += 600;
        });
    },

    addLog(msg, isError = false, isUser = false) {
        const logBox = document.getElementById('terminal-logs');
        const color = isUser ? 'text-white' : (isError ? 'text-red-500' : 'text-emerald-500');
        const prefix = isUser ? 'USR>' : 'SYS>';
        logBox.innerHTML += `<div class="${color}"><span class="opacity-50">${prefix}</span> ${msg}</div>`;
        logBox.scrollTop = logBox.scrollHeight;
    },

    bindEvents() {
        const input = document.getElementById('cmd-input');
        
        document.body.addEventListener('click', () => { if(!AudioEngine.ctx) AudioEngine.init(); }, {once:true});
        document.body.addEventListener('keydown', () => { if(!AudioEngine.ctx) AudioEngine.init(); }, {once:true});

        input.addEventListener('keydown', (e) => {
            if(e.key !== 'Enter') AudioEngine.playKeystroke();
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const cmd = input.value.trim().toLowerCase();
                if (!cmd) return;
                
                this.addLog(cmd, false, true);
                this.processCommand(cmd);
                input.value = '';
            }
        });
    },

    glitchDecrypt(elementId) {
        const el = document.getElementById(elementId);
        if(!el) return;
        const originalHTML = el.innerHTML;
        const textNodes = [];
        
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while (node = walker.nextNode()) {
            if(node.nodeValue.trim().length > 0) textNodes.push(node);
        }

        let iterations = 0;
        const interval = setInterval(() => {
            textNodes.forEach(n => {
                n.nodeValue = n.nodeValue.split('').map(() => 
                    String.fromCharCode(33 + Math.random() * 94)
                ).join('');
            });

            AudioEngine.playKeystroke();

            iterations++;
            if (iterations > 15) {
                clearInterval(interval);
                el.innerHTML = originalHTML;
                AudioEngine.playBeep();
            }
        }, 50);
    },

    // --- TELETEKS OSINT MOTORU ---
    loadTeletext(category) {
        const targetCategory = RSS_DATABASE[category] ? category : 'sondakika';
        const feedList = RSS_DATABASE[targetCategory];
        const randomFeed = feedList[Math.floor(Math.random() * feedList.length)];
        const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(randomFeed)}`;

        this.addLog(`[BAĞLANTI] ${targetCategory.toUpperCase()} ağına sızılıyor...`, false);

        fetch(proxyUrl)
            .then(res => res.json())
            .then(data => {
                if (!data || !data.feed) throw new Error("Veri okunamadı.");
                
                this.addLog(`<span class="text-black font-bold bg-emerald-500 px-2 py-1 mt-2 mb-1 block w-fit">TELE-TEKS V2.0 // KAYNAK: ${data.feed.title.toUpperCase()}</span>`, false);
                
                let delay = 600;
                data.items.slice(0, 6).forEach((item, index) => { 
                    setTimeout(() => {
                        this.addLog(
                            `<div class="mt-1 flex gap-2">
                                <span class="text-emerald-900 font-bold">[0${index + 1}]</span> 
                                <span class="text-emerald-300 hover:text-white cursor-pointer transition-colors" onclick="window.open('${item.link}', '_blank')">${item.title.toUpperCase()}</span>
                            </div>`, 
                            false
                        );
                        AudioEngine.playKeystroke();
                    }, delay);
                    delay += 800;
                });
            })
            .catch(() => this.addLog("HATA: Hedef sinyal reddedildi. Güvenlik duvarı aktif.", true));
    },

    processCommand(cmd) {
        if (cmd === '/decrypt') {
            if (AppState.isDecrypted) return this.addLog("Paket zaten çözüldü.");
            this.addLog("Şifre kırma algoritması çalıştırılıyor...", false);
            
            setTimeout(() => {
                const overlay = document.getElementById('content-overlay');
                if(overlay) overlay.style.display = 'none';
                this.glitchDecrypt('post-body');
                this.glitchDecrypt('post-title');
                AppState.isDecrypted = true;
                this.addLog("Erişim onaylandı. İçerik okunabilir durumda.", false);
            }, 1000);
            return;
        }

        if (cmd.startsWith('/teleteks')) {
            const args = cmd.split(' ');
            const category = args[1] || 'sondakika'; 
            this.loadTeletext(category);
            return;
        }

        if (cmd === '/aglar') {
            this.addLog("AKTİF İSTİHBARAT AĞLARI: gundem, ekonomi, teknoloji, dunya, sondakika", false);
            this.addLog("Kullanım: /teleteks [ağ_adı] (Örn: /teleteks ekonomi)", false);
            return;
        }

        if (cmd === '/clear') {
            document.getElementById('terminal-logs').innerHTML = '';
            this.addLog("Terminal temizlendi.", false);
            return;
        }

        if (cmd === '/nuke') {
            this.addLog("CRITICAL: SİSTEM İMHA EDİLİYOR...", true);
            document.getElementById('sys-warning').style.display = 'block';
            setTimeout(() => {
                document.body.innerHTML = '<div style="background:red; width:100vw; height:100vh;"></div>';
                setTimeout(() => document.body.innerHTML = '', 100);
            }, 1500);
            return;
        }

        if (cmd === '/help') {
            this.addLog("KOMUTLAR: /decrypt, /aglar, /teleteks [ağ_adı], /clear, /nuke", false);
            return;
        }

        this.addLog(`Geçersiz komut. Kullanılabilir komutları görmek için '/help' yazın.`, true);
    }
};

// --- 5. ATEŞLEME ---
document.addEventListener('DOMContentLoaded', () => {
    TerminalUI.init();
});
