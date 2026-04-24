// core.js - ContentIQ Agentic Core v10.0 [FINAL OMNI-INTELLIGENCE]
// Küresel Medya Ağı, Canlı Finans Terminali ve Derin Analiz Modülü.

const SYSTEM_CONFIG = {
    version: "10.0.0_FINAL",
    codename: "Bloomberg_Protocol_Omni",
    boot_delay: 800
};

// --- 0. KÜRESEL OSINT HABER AĞI (300+ KAYNAK) ---
const RSS_DATABASE = {
    bilim: ["https://arkeofili.com/feed/", "https://beyinsizler.net/feed/", "https://www.bilimgunlugu.com/feed/", "https://bilimvegelecek.com.tr/index.php/feed/", "https://www.bilimoloji.com/feed/", "https://www.bilimup.com/rss.xml", "https://www.dijitalx.com/feed/", "https://evrimagaci.org/rss.xml", "https://www.tarihlibilim.com/feed/", "https://tarihtenyazilar.com/feed/", "https://www.fizikist.com/feed", "https://www.gercekbilim.com/feed/", "https://gelecekbilimde.net/feed/", "https://www.herkesebilimteknoloji.com/feed", "https://www.indyturk.com/taxonomy/term/48791/%2A/feed", "https://www.kozmikanafor.com/feed/", "https://www.matematiksel.org/feed", "https://www.megabayt.com/rss/categorynews/bilim", "https://moletik.com/feed/", "https://popsci.com.tr/feed/", "https://sarkac.org/feed/", "https://sinirbilim.org/feed/"],
    teknoloji: ["https://www.beetekno.com/feed/posts", "https://www.campaigntr.com/feed/", "https://www.chip.com.tr/rss", "https://www.cozumpark.com/feed/", "https://dijitaliyidir.com/feed/", "https://digitalreport.com.tr/feed/", "https://www.donanimhaber.com/rss/tum/", "https://donanimgunlugu.com/feed", "https://foundern.com/feed/", "https://gecbunlari.com/feed/", "https://hwp.com.tr/feed", "https://tr.investing.com/rss/news_288.rss", "https://www.indir.com/haber/feed/", "https://www.log.com.tr/feed/", "https://www.megabayt.com/rss/news", "https://www.megabayt.com/rss/categorynews/bilgisayar", "https://www.megabayt.com/rss/categorynews/bilim-ve-teknoloji", "https://www.megabayt.com/rss/categorynews/donanim", "https://www.megabayt.com/rss/categorynews/nasil-yapilir", "https://www.megabayt.com/rss/categorynews/siber-guvenlik", "https://www.megabayt.com/rss/categorynews/sosyal-medya", "https://www.megabayt.com/rss/categorynews/teknoloji", "https://www.megabayt.com/rss/categorynews/yazilim", "https://pchocasi.com.tr/feed", "https://shiftdelete.net/feed", "https://www.sihirlielma.com/feed/", "https://www.sordum.net/feed/", "https://swipeline.co/feed/", "https://www.techdergi.net/feed/", "https://techolay.net/feed/", "https://www.technopat.net/feed/", "https://www.techturco.com/rss", "https://www.teknoblog.com/feed/", "https://www.teknoburada.net/feed/", "https://teknodiot.com/feed/", "https://www.teknolojioku.com/export/rss", "https://teloji.com/feed/", "https://feeds.feedburner.com/tamindir/stream", "https://upcorn.co/feed/", "https://voicetekno.com/feed/", "https://webmasto.com/feed", "https://webrazzi.com/feed", "https://www.webtekno.com/rss.xml"],
    eglence: ["https://22dakika.org/feed/", "https://www.atarita.com/feed/", "https://altyazi.net/feed/", "https://www.bagimsizsinema.com/feed", "https://www.beyazperde.com/rss/haberler.xml", "https://bigumigu.com/feed/", "https://www.bilimkurgukulubu.com/feed/", "https://fantastikcanavarlar.com/feed/", "https://frpnet.net/feed", "https://geekyapar.com/feed/", "https://tr.ign.com/feed.xml", "https://kayiprihtim.com/feed/", "https://kesifasya.com/feed/", "https://listelist.com/feed/", "https://marjinalsinema.com/feed/", "https://www.merlininkazani.com/feed/", "https://www.megabayt.com/rss/categorynews/dijital-platformlar", "https://www.megabayt.com/rss/categorynews/dizi-sinema", "https://www.megabayt.com/rss/categorynews/oyun", "https://www.megabayt.com/rss/categorynews/sinema", "https://www.megabayt.com/rss/categorynews/televizyon", "https://www.megabayt.com/rss/categorynews/youtube", "https://www.misternoob.com/feed/", "https://mobidictum.com/tr/feed/", "https://onedio.com/Publisher/publisher-daily.rss", "https://www.otekisinema.com/feed/", "https://blog.sofos.com.tr/feed/", "https://sinetopya.com/rss/", "https://www.thegeyik.com/feed/", "https://www.turkmmo.com/feed", "https://www.turunculevye.com/feed/"],
    kultur_sanat: ["https://10layn.com/feed/", "https://artdogistanbul.com/feed/", "https://www.artkolik.net/feed", "https://argonotlar.com/feed/", "https://www.arkitera.com/feed/", "https://bantmag.com/feed/", "https://www.cafrande.org/feed/", "https://cekiclefelsefe.com/feed/", "https://edebibulten.com/feed/", "https://edebiyatburada.com/feed/", "https://www.edebiyathaber.net/feed/", "https://fikirturu.com/feed/", "https://dergipark.org.tr/tr/pub/kilikya/rss/lastissue/tr", "https://www.kitaphaber.com.tr/feed", "https://www.kitaplar.org/konular/-/index.rss", "https://dergipark.org.tr/tr/pub/gorunum/rss/lastissue/tr", "https://www.gazetesanat.com/feed", "https://www.hafta.com.tr/rss.xml", "https://www.isindetayi.com/rss/kultur-sanat", "https://manifold.press/rss", "https://www.mesail.org/feed/", "https://www.megabayt.com/rss/categorynews/kultur-sanat", "https://mitoloji.org.tr/feed/", "https://www.murekkephaber.com/rss.xml", "https://www.nouvart.net/feed/", "https://onculanalitikfelsefe.com/feed/", "https://playtusu.com/feed/", "https://www.rotka.org/feed/", "https://www.sosyalbilimler.org/feed/", "https://terrabayt.com/feed", "https://vesaire.press/feed/", "https://yedikita.com.tr/feed/"],
    spor: ["https://www.aspor.com.tr/rss/anasayfa.xml", "https://ajansspor.com/rss", "https://basketdergisi.com/feed", "https://www.duhuliye.com/rss", "https://www.fotomac.com.tr/rss/anasayfa.xml", "https://www.fotomac.com.tr/rss/son24saat.xml", "https://www.fotomac.com.tr/rss/SuperLig.xml", "https://www.fotomac.com.tr/rss/Besiktas.xml", "https://www.fotomac.com.tr/rss/Fenerbahce.xml", "https://www.fotomac.com.tr/rss/Galatasaray.xml", "https://www.fotomac.com.tr/rss/Trabzonspor.xml", "https://www.fotomac.com.tr/rss/Bursaspor.xml", "https://www.fotomac.com.tr/rss/Basketbol.xml", "https://www.fotospor.com/feed/rss_sondakika.xml", "https://www.futboo.com/rss.xml", "https://www.megabayt.com/rss/categorynews/spor", "https://kontraspor.com/rss", "https://www.ntvspor.net/rss/anasayfa", "https://www.ntvspor.net/rss/kategori/basketbol", "https://www.ntvspor.net/rss/kategori/diger-sporlar", "https://www.ntvspor.net/rss/kategori/dunyadan-futbol", "https://www.ntvspor.net/rss/kategori/futbol", "https://www.ntvspor.net/rss/kategori/motor-sporlari", "https://www.ntvspor.net/rss/kategori/olimpiyat", "https://www.ntvspor.net/rss/kategori/tenis", "https://www.ntvspor.net/rss/kategori/voleybol", "https://ortacizgi.com/feed", "https://www.sabah.com.tr/rss/spor.xml", "https://www.sozcu.com.tr/feeds-rss-category-2024-paris-olimpiyatlari", "https://www.sozcu.com.tr/feeds-rss-category-basketbol", "https://www.sozcu.com.tr/feeds-rss-category-diger-sporlar", "https://www.sozcu.com.tr/feeds-rss-category-dunyadan-spor", "https://www.sozcu.com.tr/feeds-rss-category-futbol", "https://www.sozcu.com.tr/feeds-rss-category-spor", "https://www.sozcu.com.tr/feeds-rss-category-voleybol", "https://www.turkiyedevedunyadagolf.com.tr/feed/"],
    gundem: ["https://10haber.net/feed/", "https://abcgazetesi.com.tr/rss", "https://www.ahaber.com.tr/rss/gundem.xml", "https://www.acikgazete.com/feed/", "https://www.aksam.com.tr/rss/rss.asp", "https://tr.al-ain.com/feed", "https://www.aa.com.tr/tr/rss/default?cat=guncel", "https://www.agos.com.tr/rss", "https://www.ajanskamu.net/service/rss.php", "https://artigercek.com/service/rss.php", "https://www.aydinlik.com.tr/feed", "https://www.aykiri.com.tr/rss.xml", "https://www.ayandon.com.tr/rss.xml", "https://feeds.bbci.co.uk/turkce/rss.xml", "https://www.benguturk.com/rss", "https://beyazgazete.com/rss/guncel.xml", "https://bha.net.tr/rss", "https://bianet.org/biamag.rss", "https://www.birgazete.com/feed", "https://www.birgun.net/rss/home", "https://www.cnnturk.com/feed/rss/all/news", "https://www.cumhuriyet.com.tr/rss/son_dakika.xml", "https://www.cgtnturk.com/rss", "https://www.demokrathaber.org/rss", "https://www.diken.com.tr/feed/", "https://www.dirilispostasi.com/rss", "https://www.diyanethaber.com.tr/rss", "https://www.dijitalgaste.com/rss", "https://www.dikgazete.com/xml/rss.xml", "https://dogruhaber.com.tr/rss", "https://www.dokuz8haber.net/rss", "https://www.dunya.com/rss?dunya", "https://rss.dw.com/rdf/rss-tur-all", "https://www.enpolitik.com/rss.xml", "https://www.elipshaber.com/rss", "https://www.ekonomim.com/export/rss", "https://www.ekoltv.com.tr/service/rss.php", "https://www.ensonhaber.com/rss/ensonhaber.xml", "https://www.evrensel.net/rss/haber.xml", "https://www.f5haber.com/export/rss", "https://www.fayn.press/rss/", "https://www.gazeteduvar.com.tr/export/rss", "https://www.gazeteemek.net/rss", "https://gazete.net/rss", "https://www.gazetepencere.com/service/rss.php", "https://www.gazetezebra.com.tr/rss", "https://www.gercekgundem.com/rss", "https://news.google.com/rss?hl=tr&gl=TR&ceid=TR:tr", "https://www.gzt.com/rss", "https://www.haber3.com/rss", "https://i12.haber7.net/sondakika/newsstand/latest.xml", "https://www.haber.com/rss", "https://rss.haberler.com/RssNew.aspx", "https://haberglobal.com.tr/rss", "https://www.haberturk.com/rss", "https://www.haberet.com/export/rss", "https://halktv.com.tr/service/rss.php", "https://www.haberport.com/rss/latest-posts", "https://haberiniz.com.tr/feed/", "https://www.hukukihaber.net/rss", "https://www.hurriyet.com.tr/rss/anasayfa", "https://ifade.org.tr/engelliweb/feed/", "https://www.iklimhaber.org/feed/", "https://www.indyturk.com/rss.xml", "https://tr.irna.ir/rss", "https://www.internethaber.com/rss", "https://www.istiklal.com.tr/service/rss.php", "https://www.isindetayi.com/rss/gundem", "https://www.iscihaber.net/rss/news", "https://ilketv.com.tr/feed/", "https://journo.com.tr/feed", "https://news.kagi.com/world_tr.xml", "https://www.karar.com/service/rss.php", "https://www.kamudanhaber.net/rss", "https://kisadalga.net/service/rss.php", "https://www.korkusuz.com.tr/feeds/rss", "https://www.krttv.com.tr/rss", "https://www.lotusnews.com.tr/rss", "https://www.medyagazete.com/rss/genel-0", "https://www.medyatilkisi.com.tr/rss", "https://www.megabayt.com/rss/categorynews/gundem", "https://www.milligazete.com.tr/rss", "https://www.mynet.com/haber/rss/sondakika", "https://www.muhalif.com.tr/rss/genel-0", "https://www.newslabturkey.org/feed/", "https://www.ntv.com.tr/gundem.rss", "https://www.odatv.com/rss.xml", "https://www.perspektif.online/feed/", "https://www.polemikhaber.com/rss", "https://www.radikal.com.tr/feed/", "https://www.sabah.com.tr/rss/gundem.xml", "https://serbestiyet.com/feed/", "https://www.sozcu.com.tr/feeds-rss-category-sozcu", "https://www.sozcu.com.tr/feeds-rss-category-gundem", "https://www.sozcu.com.tr/feeds-rss-category-gunun-icinden", "https://www.sozcu.com.tr/feeds-son-dakika", "https://www.sonmuhur.com/rss", "https://haber.sol.org.tr/rss.xml", "https://anlatilaninotesi.com.tr/export/rss2/archive/index.xml", "https://www.star.com.tr/rss/rss.asp", "https://teyit.org/feed?lang=tr", "https://www.tele1.com.tr/rss", "https://www.tele2haber.com/rss", "https://www.timeturk.com/rss/", "https://www.turkiyegazetesi.com.tr/feed", "https://www.turkgun.com/rss/news", "https://turkinform.com.tr/rss", "https://www.trthaber.com/sondakika.rss", "https://www.tgrthaber.com/rss/manset", "https://www.ulusal.com.tr/rss", "https://www.ulusalpost.com/service/rss.php", "https://www.uyan32.com/rss", "https://www.veryansintv.com/feed", "https://www.yeniakit.com.tr/rss/haber/gundem", "https://www.yeniasir.com.tr/rss/anasayfa.xml", "https://www.yenicaggazetesi.com.tr/service/rss.php", "https://www.yenisafak.com/rss?xml=gundem", "https://yeniyasamgazetesi9.com/feed/", "https://yasadikca.com/feed/", "https://yesilgazete.org/feed/", "https://www.yurtgazetesi.com.tr/service/rss.php", "https://yurtsever.org.tr/feed"],
    savunma: ["https://www.c4defence.com/tr/feed/", "https://www.defenceturk.net/feed", "https://mavisavunma.com/feed/", "https://sanayigazetesi.com.tr/kategori/savunma-haberleri/feed/", "https://savunmasanayigazetesi.com.tr/feed/", "https://www.savunmasanayist.com/feed/", "https://www.savunmatr.com/feed/"],
    ekonomi: ["https://www.bloomberght.com/rss", "https://bigpara.hurriyet.com.tr/rss/", "https://www.cnbce.com/rss", "https://www.doviz.com/news/rss", "https://www.ekonomigazetesi.com/rss.xml", "https://www.forbes.com.tr/rss", "https://www.foreks.com/rss/", "https://tr.investing.com/rss/market_overview.rss", "https://tr.investing.com/rss/302.rss", "https://tr.investing.com/rss/forex.rss", "https://tr.investing.com/rss/stock.rss", "https://tr.investing.com/rss/commodities.rss", "https://tr.investing.com/rss/bonds.rss", "https://tr.investing.com/rss/news.rss", "https://www.megabayt.com/rss/categorynews/ekonomi", "https://www.megabayt.com/rss/categorynews/kripto-para", "https://www.sozcu.com.tr/feeds-rss-category-borsa", "https://www.sozcu.com.tr/feeds-rss-category-ekonomi", "https://www.sozcu.com.tr/feeds-rss-category-emlak", "https://www.sozcu.com.tr/feeds-rss-category-emtia", "https://www.sozcu.com.tr/feeds-rss-category-finans", "https://www.sozcu.com.tr/feeds-rss-category-kripto"],
    is_dunyasi: ["https://www.isindetayi.com/rss", "https://www.isindetayi.com/rss/borsa", "https://www.isindetayi.com/rss/ekonomi", "https://www.isindetayi.com/rss/finans", "https://www.isindetayi.com/rss/gayrimenkul", "https://www.isindetayi.com/rss/is-dunyasi", "https://www.isindetayi.com/rss/lojistik", "https://www.isindetayi.com/rss/sirket-haberleri", "https://www.megabayt.com/rss/categorynews/sirket-haberleri", "https://www.getmidas.com/feed/"],
    yasam: ["https://www.annekaz.com/feed", "https://www.elle.com.tr/rss", "https://www.elele.com.tr/export/rss", "https://www.isindetayi.com/rss/gastronomi", "https://www.gardiropmagazin.com/feed/", "https://guzellikyayinda.com/feed/", "https://www.isindetayi.com/rss/moda", "https://www.isindetayi.com/rss/saglik", "https://www.isindetayi.com/rss/turizm", "https://www.isindetayi.com/rss/yasam", "https://istanbullife.com.tr/feed/", "https://livetobloom.com/feed/", "https://www.martidergisi.com/feed/", "https://www.marieclaire.com.tr/feed/", "https://www.megabayt.com/rss/categorynews/aksesuar", "https://www.megabayt.com/rss/categorynews/egitim", "https://www.megabayt.com/rss/categorynews/inceleme", "https://www.megabayt.com/rss/categorynews/magazin", "https://www.megabayt.com/rss/categorynews/otomobil", "https://www.megabayt.com/rss/categorynews/populer-haberler", "https://www.megabayt.com/rss/categorynews/saglik", "https://www.megabayt.com/rss/categorynews/yasam", "https://medium.com/feed/t%C3%BCrkiye", "https://mediumturkiye.com/feed", "https://www.uplifers.com/feed/", "https://www.plumemag.com/feed/", "https://www.trendus.com/feed"]
};

RSS_DATABASE['sondakika'] = RSS_DATABASE['gundem'];

// --- 1. YAYIN SES MOTORU ---
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
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, this.ctx.currentTime);
        gainNode.gain.setValueAtTime(0.01, this.ctx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
        osc.connect(gainNode); gainNode.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.03);
    },
    playAlert() {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.2);
        osc.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.2);
    }
};

// --- 2. ARAYÜZ VE NEWSROOM MOTORU ---
const NewsroomUI = {
    root: document.getElementById('app-root'),

    init() {
        this.injectStyles();
        this.renderShell();
        this.startBootSequence();
    },

    injectStyles() {
        const style = document.createElement('style');
        style.innerHTML = `
            .custom-scrollbar::-webkit-scrollbar { width: 6px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: #0f172a; } 
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; } 
            .ticker-wrap { width: 100%; overflow: hidden; background-color: #020617; border-top: 1px solid #1e293b; padding: 4px 0; white-space: nowrap; }
            .ticker-content { display: inline-block; animation: ticker 40s linear infinite; padding-left: 100%; }
            .ticker-item { display: inline-block; margin-right: 3rem; font-size: 0.85rem; font-family: monospace; color: #cbd5e1; }
            .ticker-item span { color: #f59e0b; font-weight: bold; margin-right: 0.5rem; }
            @keyframes ticker { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-100%, 0, 0); } }
            .news-card:hover { border-left-color: #38bdf8; background-color: rgba(15, 23, 42, 0.8); }
        `;
        document.head.appendChild(style);
    },

    renderShell() {
        this.root.className = "bg-slate-950 h-screen w-screen text-slate-300 font-sans p-2 flex flex-col relative overflow-hidden";
        this.root.innerHTML = `
            <header class="border-b border-slate-800 pb-2 px-2 mb-3 flex justify-between items-end shrink-0 z-10">
                <div class="flex items-center gap-4">
                    <h1 class="text-2xl font-black tracking-tighter text-white">ContentIQ<span class="text-sky-500">.Terminal</span></h1>
                    <span class="text-xs px-2 py-1 bg-slate-800 rounded text-slate-400 font-mono" id="live-clock">--:--:--</span>
                </div>
                <div class="flex gap-4 text-xs font-mono uppercase tracking-widest text-slate-500">
                    <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> OMNI-LINK</span>
                    <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> SİSTEM: STABİL</span>
                </div>
            </header>
            <main class="flex-1 flex flex-col md:flex-row gap-3 overflow-hidden px-2 mb-2 z-10">
                <div class="flex-[3] bg-slate-900/50 border border-slate-800 rounded flex flex-col overflow-hidden relative" id="main-monitor">
                    <div id="content-overlay" class="absolute inset-0 bg-slate-950/95 z-20 flex flex-col items-center justify-center text-center p-6">
                        <div class="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mb-6"></div>
                        <p class="font-mono text-sm tracking-[0.3em] text-sky-500 animate-pulse">DERİN ANALİZ VE SİNYAL TARAMASI BAŞLATILDI</p>
                    </div>
                    <div class="bg-slate-800/80 px-4 py-2 border-b border-slate-700 flex justify-between items-center shrink-0">
                        <span class="font-bold text-sky-400 font-mono tracking-widest text-sm" id="monitor-title">SİNYAL BEKLENİYOR...</span>
                    </div>
                    <div class="flex-1 p-4 overflow-y-auto custom-scrollbar" id="news-monitor"></div>
                </div>
                <div class="flex-[1] bg-slate-900 border border-slate-800 rounded flex flex-col min-w-[320px]">
                    <div class="bg-slate-800 px-3 py-2 border-b border-slate-700 text-xs font-bold text-amber-500 font-mono uppercase tracking-wider shrink-0 flex justify-between">
                        <span>Kontrol Paneli</span>
                        <span class="text-slate-500 font-normal hover:text-white cursor-help" onclick="NewsroomUI.processCommand('/help')">[ HELP ]</span>
                    </div>
                    <div class="flex-1 p-3 overflow-y-auto text-xs space-y-2 custom-scrollbar font-mono bg-slate-950" id="terminal-logs"></div>
                    <div class="p-3 border-t border-slate-800 flex gap-2 items-center bg-slate-900 shrink-0">
                        <span class="text-sky-500 font-bold">&gt;</span>
                        <input type="text" id="cmd-input" class="flex-1 bg-transparent outline-none text-slate-300 placeholder-slate-700 font-mono" placeholder="Komut (Örn: /akis teknoloji)" autocomplete="off" spellcheck="false">
                    </div>
                </div>
            </main>
            <footer class="shrink-0 rounded overflow-hidden border border-slate-800 z-10">
                <div class="ticker-wrap"><div class="ticker-content" id="live-ticker"><div class="ticker-item"><span>SİSTEM:</span> Küresel haber damarları taranıyor...</div></div></div>
            </footer>
        `;
        this.bindEvents();
        setInterval(() => this.updateClock(), 1000);
    },

    startBootSequence() {
        const logs = ["Sistem v10.0 başlatılıyor...", "OSINT Matrisi aktif edildi.", "Kripto piyasa kanalları dinleniyor.", "Blogger DOM bypass tamamlandı."];
        let delay = 200;
        logs.forEach(log => {
            setTimeout(() => { this.addLog(log); AudioEngine.playKeystroke(); }, delay);
            delay += 350;
        });
    },

    updateClock() {
        const clockEl = document.getElementById('live-clock');
        if (clockEl) clockEl.textContent = new Date().toLocaleTimeString('tr-TR') + ' | ' + new Date().toLocaleDateString('tr-TR');
    },

    addLog(msg, isError = false, isUser = false) {
        const logBox = document.getElementById('terminal-logs');
        const color = isUser ? 'text-white font-bold' : (isError ? 'text-rose-500' : 'text-sky-400');
        logBox.innerHTML += `<div><span class="opacity-30 text-slate-500">${isUser ? 'OP>' : 'SYS>'}</span> <span class="${color}">${msg}</span></div>`;
        logBox.scrollTop = logBox.scrollHeight;
    },

    bindEvents() {
        const input = document.getElementById('cmd-input');
        const triggerAudio = () => { if(!AudioEngine.ctx) AudioEngine.init(); };
        document.body.addEventListener('click', triggerAudio, {once:true});
        input.addEventListener('keydown', (e) => {
            if(e.key !== 'Enter') AudioEngine.playKeystroke();
            else {
                const cmd = input.value.trim().toLowerCase();
                if (cmd) { this.addLog(cmd, false, true); this.processCommand(cmd); input.value = ''; }
            }
        });
    },

    glitchDecrypt(elementId) {
        const el = document.getElementById(elementId); if(!el) return;
        const originalHTML = el.innerHTML;
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
        let node, nodes = []; while (node = walker.nextNode()) nodes.push(node);
        let iter = 0, interval = setInterval(() => {
            nodes.forEach(n => n.nodeValue = n.nodeValue.split('').map(() => String.fromCharCode(33 + Math.random() * 94)).join(''));
            AudioEngine.playKeystroke();
            if (++iter > 12) { clearInterval(interval); el.innerHTML = originalHTML; AudioEngine.playAlert(); }
        }, 50);
    },

    startTicker() {
        const feed = RSS_DATABASE['gundem'][Math.floor(Math.random() * RSS_DATABASE['gundem'].length)];
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`)
            .then(res => res.json()).then(data => {
                if (!data.items) return;
                document.getElementById('live-ticker').innerHTML = data.items.slice(0, 15).map(item => `<div class="ticker-item"><span>[${data.feed.title.toUpperCase()}]</span> ${item.title.toUpperCase()}</div>`).join('');
            });
        setTimeout(() => this.startTicker(), 300000);
    },

    loadMainFeed(category) {
        const target = RSS_DATABASE[category] ? category : 'gundem';
        const feed = RSS_DATABASE[target][Math.floor(Math.random() * RSS_DATABASE[target].length)];
        this.addLog(`Bağlanıyor: ${target.toUpperCase()}`);
        document.getElementById('monitor-title').innerHTML = `SİNYAL ALINIYOR: ${target.toUpperCase()}...`;
        
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`)
            .then(res => res.json()).then(data => {
                document.getElementById('content-overlay').style.display = 'none';
                document.getElementById('monitor-title').innerHTML = `<span class="text-slate-500 mr-2">YAYIN:</span> ${data.feed.title.toUpperCase()}`;
                let html = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">` + data.items.slice(0, 12).map((item, i) => `
                    <a href="${item.link}" target="_blank" class="news-card block border-l-4 border-slate-700 bg-slate-800/30 p-4 rounded-r transition-all">
                        <div class="text-[10px] text-amber-500 font-mono mb-1 flex justify-between"><span>#0${i+1}</span><span>${item.pubDate ? new Date(item.pubDate).toLocaleTimeString() : 'LIVE'}</span></div>
                        <h3 class="text-sm font-bold text-slate-100 mb-1 leading-snug">${item.title}</h3>
                        <p class="text-[11px] text-slate-500 leading-relaxed line-clamp-3">${item.description.replace(/<[^>]*>?/gm, '')}</p>
                    </a>`).join('') + `</div>`;
                document.getElementById('news-monitor').innerHTML = html;
                this.glitchDecrypt('monitor-title');
            }).catch(() => this.addLog("HATA: Sinyal kaybı.", true));
    },

    loadTargetedCrypto(coinId) {
        this.addLog(`Hedef kilitlendi: ${coinId.toUpperCase()}`);
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
            .then(res => res.json()).then(data => {
                document.getElementById('content-overlay').style.display = 'none';
                const price = data.market_data.current_price.usd;
                const change = data.market_data.price_change_percentage_24h.toFixed(2);
                const color = change >= 0 ? 'text-emerald-400' : 'text-rose-400';
                document.getElementById('monitor-title').innerHTML = `DERİN ANALİZ: ${data.name.toUpperCase()}`;
                document.getElementById('news-monitor').innerHTML = `
                    <div class="mb-6 p-6 border border-sky-500/30 bg-sky-900/10 rounded-lg flex items-center justify-between">
                        <div class="flex items-center gap-4"><img src="${data.image.large}" class="w-16 h-16 drop-shadow-xl"><div>
                        <h2 class="text-2xl font-black text-white">${data.name.toUpperCase()}</h2>
                        <div class="text-xl font-mono ${color}">$${price.toLocaleString()} <span>${change}%</span></div></div></div>
                        <div class="text-right text-[10px] text-slate-500 font-mono uppercase"><div>Cap: $${data.market_data.market_cap.usd.toLocaleString()}</div><div>Vol: $${data.market_data.total_volume.usd.toLocaleString()}</div></div>
                    </div>
                    <div class="text-xs font-bold text-sky-500 uppercase tracking-widest mb-4">İstihbarat Akışı</div>
                    <div id="target-news-stream" class="space-y-3"></div>`;
                this.fetchTargetedNews(coinId);
            }).catch(() => this.addLog("Varlık doğrulanamadı.", true));
    },

    fetchTargetedNews(keyword) {
        const rss = "https://www.megabayt.com/rss/categorynews/kripto-para";
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rss)}`)
            .then(res => res.json()).then(data => {
                const filtered = data.items.filter(i => i.title.toLowerCase().includes(keyword) || i.description.toLowerCase().includes(keyword));
                document.getElementById('target-news-stream').innerHTML = filtered.length > 0 ? filtered.map(i => `
                    <a href="${i.link}" target="_blank" class="block border-l-2 border-slate-700 bg-slate-800/20 p-3 hover:border-sky-500 transition-all">
                        <h4 class="text-xs font-bold text-slate-300">${i.title}</h4><p class="text-[9px] text-slate-600 mt-1">${new Date(i.pubDate).toLocaleDateString()}</p>
                    </a>`).join('') : '<div class="text-xs text-slate-600">Spesifik haber bulunamadı.</div>';
            });
    },

    processCommand(cmd) {
        if (cmd.startsWith('/akis')) this.loadMainFeed(cmd.split(' ')[1]);
        else if (cmd === '/kripto') this.loadTargetedCrypto('bitcoin');
        else if (cmd === '/kategoriler') { this.addLog("KANALLAR: " + Object.keys(RSS_DATABASE).join(', ')); }
        else if (cmd === '/clear') document.getElementById('terminal-logs').innerHTML = '';
        else if (cmd === '/help') this.addLog("KOMUTLAR: /akis [kat], /kripto, /kategoriler, /clear");
        else this.addLog("Bilinmeyen komut. /help yazın.", true);
    }
};

// --- 5. ATEŞLEME ---
document.addEventListener('DOMContentLoaded', () => {
    NewsroomUI.init();
    const params = new URLSearchParams(window.location.search);
    const coin = params.get('coin');
    const akis = params.get('akis');
    if (coin) setTimeout(() => NewsroomUI.loadTargetedCrypto(coin.toLowerCase()), 2000);
    else if (akis) setTimeout(() => NewsroomUI.loadMainFeed(akis.toLowerCase()), 2000);
    else setTimeout(() => { NewsroomUI.startTicker(); NewsroomUI.loadMainFeed('gundem'); }, 1500);
});
