import { motion } from 'motion/react';
import { ChevronRight, ExternalLink, HelpCircle, MessageCircle, Send, Server, ShieldCheck, Star } from 'lucide-react';
import { privateBiasa, legalResmi, features } from './data';

export default function App() {
  const whatsappUrl = "https://wa.me/6282251764737";
  const telegramUrl = "https://t.me/AndriZxcll";

  const createWhatsAppLink = (panelType: string, ram: string, price: string) => {
    const message = `Halo min, saya mau beli Panel ${panelType} RAM ${ram} harga ${price}, apakah masih tersedia?`;
    return `https://wa.me/6282251764737?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center overflow-x-hidden">
      
      {/* GLOW BACKGROUND EFFECT */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[50vh] bg-sky-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* HEADER / NAV */}
      <header className="w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center font-heading font-bold text-xl text-white shadow-lg shadow-sky-500/20 overflow-hidden">
            <img src="https://files.catbox.moe/t53cmw.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <span className="font-heading font-bold text-xl tracking-wide text-slate-100">
            Andri<span className="text-sky-400">FTGG</span>
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Keuntungan</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing Panel</a>
          <a href="https://whatsapp.com/channel/0029Vb7law57IUYN1PKn8e2l" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Testimoni</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <main className="w-full max-w-6xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-sm font-medium text-sky-400 mb-10 shadow-lg shadow-sky-500/5 hover:border-sky-500/50 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          Panel Pterodactyl
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tighter text-white leading-[1.05] mb-8 max-w-5xl drop-shadow-2xl"
        >
          Server High Quality
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
        >
          Cocok buat run bot / project dengan performa kencang & stabil. Jaminan panel on 30 hari full tanpa pencurian script.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-5"
        >
          <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-slate-200 text-slate-950 font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
            Lihat Harga Panel
            <ChevronRight className="w-5 h-5" />
          </a>
          <a href="https://whatsapp.com/channel/0029Vb7law57IUYN1PKn8e2l" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 text-white font-semibold border border-slate-700 transition-all hover:scale-105 active:scale-95 hover:border-slate-500">
            <Star className="w-5 h-5 text-amber-400" />
            Testimoni
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 text-white font-semibold border border-slate-700 transition-all hover:scale-105 active:scale-95 hover:border-slate-500">
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            Contact Admin
          </a>
        </motion.div>
      </main>

      {/* FEATURES SECTION */}
      <section id="features" className="w-full max-w-6xl mx-auto px-6 py-24 border-t border-slate-800/50 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white tracking-tight">Keuntungan Buy Panel Kami</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">Fitur dan kualitas premium yang Anda dapatkan saat menggunakan layanan AndriFTGG Store.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 relative z-10">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all group flex flex-col gap-4 shadow-xl shadow-black/20 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/20 group-hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.4)] transition-all">
                <item.icon className="w-6 h-6" />
              </div>
              <p className="font-medium text-slate-200 group-hover:text-white transition-colors">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="w-full bg-slate-900/20 py-24 relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white tracking-tight">Pricing Panel Pterodactyl</h2>
            <div className="inline-block p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 max-w-2xl text-amber-200/90 text-sm md:text-base leading-relaxed">
              <span className="font-bold text-amber-400 mr-2 uppercase tracking-widest text-xs">Perhatian:</span>
              <span className="font-medium tracking-wide">KALAU MAU BUY PASTIKAN KAMU SUDAH TAU APA ITU PANEL PTERODACTYL</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* CARD: PRIVATE BIASA */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-8 shadow-[0_0_50px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Server className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Panel Private</h3>
              <p className="text-slate-400 mb-8 text-sm uppercase tracking-widest font-medium">Biasa 🌐</p>
              
              <div className="space-y-3 mb-4">
                {privateBiasa.map((tier, i) => (
                  <a 
                    key={i} 
                    href={createWhatsAppLink("Private Biasa", tier.ram, tier.price)}
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/50 hover:border-sky-500/50 hover:bg-slate-900 transition-colors group cursor-pointer"
                  >
                    <span className="font-mono text-sm tracking-wide text-slate-300 group-hover:text-white transition-colors">RAM <span className="text-white font-medium">{tier.ram}</span></span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-sky-400 opacity-90 group-hover:opacity-100">{tier.price}</span>
                      <span className="bg-sky-500/10 text-sky-400 px-2.5 py-1 rounded-md text-xs font-semibold group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">Beli</span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* CARD: LEGAL RESMI */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-b from-sky-900/30 to-slate-900/90 backdrop-blur-md border border-sky-500/40 p-8 shadow-[0_0_50px_-15px_rgba(14,165,233,0.3)] relative overflow-hidden ring-1 ring-sky-500/20 transition-transform hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 px-6 py-2 bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider rounded-bl-2xl">
                Recommended
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Panel Legal</h3>
              <p className="text-sky-400 mb-8 text-sm uppercase tracking-widest font-medium flex items-center gap-2">
                Resmi <ShieldCheck className="w-4 h-4" />
              </p>
              
              <div className="space-y-3 mb-4">
                {legalResmi.map((tier, i) => (
                  <a 
                    key={i} 
                    href={createWhatsAppLink("Legal Resmi", tier.ram, tier.price)}
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/50 hover:border-sky-500/50 hover:bg-sky-900/10 transition-colors group cursor-pointer"
                  >
                    <span className="font-mono text-sm tracking-wide text-slate-300 group-hover:text-white transition-colors">RAM <span className="text-white font-medium">{tier.ram}</span></span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-sky-400 opacity-90 group-hover:opacity-100">{tier.price}</span>
                      <span className="bg-sky-500/20 text-sky-400 px-2.5 py-1 rounded-md text-xs font-semibold group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors shadow-lg shadow-sky-500/10">Beli</span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="w-full max-w-4xl mx-auto px-6 py-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-indigo-900/20 backdrop-blur-md border border-indigo-500/30 p-8 md:p-12 relative overflow-hidden shadow-[0_0_40px_-15px_rgba(99,102,241,0.2)]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="flex items-start gap-5 relative z-10">
            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/20 shadow-inner">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 leading-snug tracking-tight">
                Bang kok beda-beda panelnya dan kok mahal?
              </h4>
              <p className="text-slate-300 leading-relaxed text-lg">
                <span className="font-semibold text-indigo-300 mr-2 uppercase tracking-wider text-sm rounded-md bg-indigo-500/20 px-2 py-1 relative -top-0.5">Jawaban</span>
                <span className="block mt-4">Ada harga ada kualitas bro. Kenapa beda? Tanyakan langsung ke admin aja untuk detail teknis lebih lanjut mengenai perbedaannya.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER CTA & LINKS */}
      <footer className="w-full border-t border-slate-800/60 bg-slate-950/80 backdrop-blur-lg mt-auto relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[20vh] bg-sky-500/5 blur-[100px] rounded-t-full pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center relative z-10">
          
          <h2 className="text-2xl font-heading font-bold text-white mb-8 text-center">Contact Admin</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all text-slate-200 hover:text-emerald-400"
            >
              <MessageCircle className="w-6 h-6" />
              <div className="text-left hidden sm:block">
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">WhatsApp</div>
                <div className="font-medium">+62 822-5176-4737</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
            </a>

            <a 
              href={telegramUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all text-slate-200 hover:text-sky-400"
            >
              <Send className="w-6 h-6" />
              <div className="text-left hidden sm:block">
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Telegram</div>
                <div className="font-medium">@AndriZxcll</div>
              </div>
              <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
            </a>
          </div>

          <div className="text-center text-slate-600 text-sm font-medium">
            &copy; {new Date().getFullYear()} ANDRI STORE. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
