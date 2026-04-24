// core.js - ContentIQ Agentic Core (No-DB Version)
// Blogger'ın statik verisini alıp interaktif bir terminale dönüştürür.

const SYSTEM_CONFIG = {
    version: "4.0.2",
    codename: "BlockZero_Initiative",
    ai_status: "ACTIVE",
    boot_delay: 1500
};

// 1. UYGULAMA DURUMU (Local State)
const AppState = {
    logs: [],
    isDecrypted: false,
    payload: window.ContentIQ_Data || { title: "UNKNOWN", body: "Veri bulunamadı.", isPost: false }
};

// 2. UI MOTORU
const TerminalUI = {
    root: document.getElementById('app-root'),

    init() {
        this.renderShell();
        this.startBootSequence();
    },

    renderShell() {
        this.root.innerHTML = `
            <div class="min-h-screen bg-black text-emerald-500 font-mono p-4 sm:p-8 selection:bg-emerald-900 selection:text-emerald-100 flex flex-col">
                
                <header class="border-b border-emerald-900/50 pb-4 mb-6 flex justify-between items-end">
                    <div>
                        <h1 class="text-2xl font-bold tracking-tighter">ContentIQ<span class="text-white">.Studio</span></h1>
                        <p class="text-xs text-emerald-700 mt-1">AGENTIC AI CORE v${SYSTEM_CONFIG.version} // [${SYSTEM_CONFIG.codename}]</p>
                    </div>
                    <div class="text-right hidden sm:block">
                        <div class="text-xs flex items-center gap-2 justify-end">
                            STATUS: <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> ONLINE
                        </div>
                        <div id="clock" class="text-emerald-700 text-xs mt-1"></div>
                    </div>
                </header>

                <main class="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
                    
                    <div class="lg:col-span-2 bg-emerald-950/20 border border-emerald-900/30 rounded-lg p-6 relative overflow-y-auto custom-scrollbar" id="content-display">
                        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
                        <div id="article-container" class="relative z-10 opacity-0 transition-opacity duration-1000 text-emerald-100/80 prose prose-invert prose-emerald max-w-none">
                            ${this.renderPayload()}
                        </div>
                    </div>

                    <div class="flex flex-col bg-black border border-emerald-900/50 rounded-lg overflow-hidden">
                        <div class="bg-emerald-900/20 text-xs px-4 py-2 border-b border-emerald-900/50 text-emerald-600 font-bold tracking-widest uppercase">
                            Sistem_Logları.exe
                        </div>
                        <div class="flex-1 p-4 overflow-y-auto text-xs space-y-2 custom-scrollbar" id="terminal-logs">
                            </div>
                        <div class="p-4 border-t border-emerald-900/50 bg-emerald-950/30">
                            <form id="cmd-form" class="flex gap-2">
                                <span class="text-emerald-600 font-bold">&gt;</span>
                                <input type="text" id="cmd-input" autocomplete="off" spellcheck="false" class="flex-1 bg-transparent outline-none text-emerald-400 placeholder-emerald-900 focus:ring-0" placeholder="Bir komut girin (örn: /decrypt)...">
                            </form>
                        </div>
                    </div>
                </main>

            </div>

            <style>
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(16, 185, 129, 0.3); border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(16, 185, 129, 0.6); }
            </style>
        `;

        this.bindEvents();
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
    },

    renderPayload() {
        if (!AppState.payload.isPost) {
            return `
                <div class="flex flex-col items-center justify-center h-full text-emerald-800 space-y-4">
                    <svg class="w-16 h-16 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p class="tracking-widest">HEDEF VERİ BULUNAMADI (LÜTFEN BİR İÇERİK SEÇİN)</p>
                </div>
            `;
        }

        // Blogger'dan gelen HTML içeriğini Hacker formatına sokuyoruz
        return `
            <h2 class="text-3xl font-bold text-white mb-2 pb-4 border-b border-emerald-900/50">${AppState.payload.title}</h2>
            <div class="mt-6 text-sm leading-relaxed" id="blur-content">
                ${AppState.payload.body}
            </div>
        `;
    },

    startBootSequence() {
        const logs = [
            "Bağlantı kuruluyor...",
            "ContentIQ şifreleme protokolleri başlatıldı.",
            "Ağ dinleniyor...",
            `Blogger Payload Tespiti: ${AppState.payload.isPost ? 'POZİTİF' : 'NEGATİF'}`,
            "Veri akışı bekleniyor... Terminal hazır."
        ];

        let delay = 500;
        logs.forEach((log, index) => {
            setTimeout(() => this.addLog(log, index === logs.length - 1 ? 'success' : 'info'), delay);
            delay += Math.random() * 800 + 200;
        });

        // Eğer içerik varsa baştan blurlu gelsin (şifreli gibi)
        if (AppState.payload.isPost) {
            setTimeout(() => {
                const blurContent = document.getElementById('blur-content');
                if (blurContent) {
                    blurContent.style.filter = 'blur(8px)';
                    blurContent.style.userSelect = 'none';
                    this.addLog("İÇERİK ŞİFRELİ. Görüntülemek için '/decrypt' komutunu çalıştırın.", 'warning');
                    document.getElementById('article-container').classList.remove('opacity-0');
                }
            }, delay + 500);
        } else {
             setTimeout(() => {
                document.getElementById('article-container').classList.remove('opacity-0');
            }, delay);
        }
    },

    addLog(message, type = 'info') {
        const logContainer = document.getElementById('terminal-logs');
        const time = new Date().toLocaleTimeString('tr-TR', { hour12: false });
        
        let colorClass = 'text-emerald-500';
        if (type === 'warning') colorClass = 'text-amber-500';
        if (type === 'error') colorClass = 'text-red-500';
        if (type === 'success') colorClass = 'text-white font-bold';

        const logEntry = document.createElement('div');
        logEntry.className = 'flex gap-3 font-mono';
        logEntry.innerHTML = `
            <span class="text-emerald-800 opacity-70">[${time}]</span>
            <span class="${colorClass} typing-effect">${message}</span>
        `;
        
        logContainer.appendChild(logEntry);
        logContainer.scrollTop = logContainer.scrollHeight;
    },

    updateClock() {
        const clockEl = document.getElementById('clock');
        if (clockEl) {
            clockEl.textContent = new Date().toLocaleTimeString('tr-TR');
        }
    },

    bindEvents() {
        const form = document.getElementById('cmd-form');
        const input = document.getElementById('cmd-input');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const cmd = input.value.trim().toLowerCase();
            if (!cmd) return;

            this.addLog(`> ${cmd}`, 'success');
            this.processCommand(cmd);
            input.value = '';
        });
    },

    processCommand(cmd) {
        switch (cmd) {
            case '/decrypt':
                if (!AppState.payload.isPost) {
                    this.addLog("Hata: Çözülecek bir içerik hedefi bulunamadı.", 'error');
                    break;
                }
                if (AppState.isDecrypted) {
                    this.addLog("İçerik zaten çözüldü.", 'warning');
                    break;
                }
                this.addLog("Şifre çözme algoritması başlatılıyor...", 'info');
                setTimeout(() => {
                    document.getElementById('blur-content').style.filter = 'blur(0px)';
                    document.getElementById('blur-content').style.userSelect = 'auto';
                    AppState.isDecrypted = true;
                    this.addLog("ŞİFRE ÇÖZÜLDÜ. Tam erişim sağlandı.", 'success');
                }, 1500);
                break;
            
            case '/clear':
                document.getElementById('terminal-logs').innerHTML = '';
                this.addLog("Terminal temizlendi.", 'info');
                break;
            
            case '/analyze':
                this.addLog("Veri analizi yapılıyor...", 'info');
                setTimeout(() => {
                    const charCount = AppState.payload.body ? AppState.payload.body.length : 0;
                    this.addLog(`Analiz Raporu: Boyut: ${charCount} bayt. Şüpheli aktivite: Yok.`, 'success');
                }, 1000);
                break;

            case '/help':
                this.addLog("Mevcut Komutlar: /decrypt, /clear, /analyze, /help", 'info');
                break;

            default:
                this.addLog(`Bilinmeyen komut: '${cmd}'. Yardım için '/help' yazın.`, 'error');
        }
    }
};

// 3. ATEŞLEME
document.addEventListener('DOMContentLoaded', () => {
    TerminalUI.init();
});