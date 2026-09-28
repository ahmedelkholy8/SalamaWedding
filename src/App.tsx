import { useState, useEffect, useRef, useCallback } from 'react';
import { weddingData } from './data/weddingData';

// ===== GOLD PARTICLES =====
function GoldParticles({ count = 15 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: 10 + Math.random() * 15,
    size: 2 + Math.random() * 3,
    opacity: 0.3 + Math.random() * 0.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}

// ===== ORNAMENTAL DIVIDER =====
function OrnamentDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center my-8 ${className}`}>
      <svg width="180" height="24" viewBox="0 0 180 24" className="opacity-50">
        <defs>
          <linearGradient id="divGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="15%" stopColor="#c9a84c" />
            <stop offset="50%" stopColor="#e8d48b" />
            <stop offset="85%" stopColor="#c9a84c" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line x1="0" y1="12" x2="70" y2="12" stroke="url(#divGrad)" strokeWidth="0.8" />
        <path d="M75 12 L80 7 L85 12 L80 17 Z" fill="#c9a84c" opacity="0.6" />
        <circle cx="90" cy="12" r="3" fill="none" stroke="#c9a84c" strokeWidth="1" />
        <circle cx="90" cy="12" r="1.5" fill="#c9a84c" />
        <path d="M95 12 L100 7 L105 12 L100 17 Z" fill="#c9a84c" opacity="0.6" />
        <line x1="110" y1="12" x2="180" y2="12" stroke="url(#divGrad)" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

// ===== ISLAMIC CORNER ORNAMENT =====
function IslamicCorner({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const posClass = {
    tl: 'top-3 left-3',
    tr: 'top-3 right-3 rotate-90',
    bl: 'bottom-3 left-3 -rotate-90',
    br: 'bottom-3 right-3 rotate-180',
  };

  return (
    <div className={`absolute ${posClass[position]} w-12 h-12 opacity-40`}>
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5 C5 5 5 25 25 25 C5 25 5 45 5 45" stroke="#c9a84c" strokeWidth="1.2" />
        <path d="M10 5 C10 5 10 20 25 20 C10 20 10 35 10 35" stroke="#c9a84c" strokeWidth="0.8" />
        <path d="M15 8 C15 8 15 18 22 18" stroke="#c9a84c" strokeWidth="0.5" />
        <circle cx="5" cy="5" r="2" fill="#c9a84c" opacity="0.6" />
        <circle cx="25" cy="25" r="1.5" fill="#c9a84c" opacity="0.4" />
      </svg>
    </div>
  );
}

// ===== OPENING ENVELOPE SCREEN =====
function OpeningEnvelope({ onOpen }: { onOpen: () => void }) {
  const [isOpening, setIsOpening] = useState(false);
  const [flapOpen, setFlapOpen] = useState(false);
  const [cardSliding, setCardSliding] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpening(true);
    // Step 1: Seal reacts (vibration + glow)
    setTimeout(() => setFlapOpen(true), 800);
    // Step 2: Flap opens
    setTimeout(() => setCardSliding(true), 1800);
    // Step 3: Card slides up
    setTimeout(() => setTransitioning(true), 2800);
    // Step 4: Full transition
    setTimeout(() => onOpen(), 3600);
  }, [onOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center luxury-bg transition-all duration-1000 ${
        transitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      <GoldParticles count={12} />
      
      {/* Subtle Islamic pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-20" />
      
      {/* Light rays */}
      <div className="light-rays" />

      {/* Top decorative element */}
      <div className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 opacity-40">
        <svg width="140" height="50" viewBox="0 0 140 50">
          <path d="M20 25 Q45 8 70 25 Q95 8 120 25" fill="none" stroke="#c9a84c" strokeWidth="1.2" />
          <path d="M30 30 Q50 15 70 30 Q90 15 110 30" fill="none" stroke="#c9a84c" strokeWidth="0.8" />
          <circle cx="70" cy="25" r="4" fill="none" stroke="#c9a84c" strokeWidth="1" />
          <circle cx="70" cy="25" r="2" fill="#c9a84c" opacity="0.5" />
        </svg>
      </div>

      {/* Envelope Container */}
      <div className={`perspective-container ${isOpening ? '' : 'animate-float-slow'} relative`}>
        {/* Envelope Body */}
        <div
          className="envelope-premium relative w-[280px] h-[195px] sm:w-[340px] sm:h-[235px] rounded-lg overflow-hidden"
          style={{
            boxShadow: '0 30px 80px rgba(0,0,0,0.12), 0 15px 35px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
          }}
        >
          {/* Inner emerald layer */}
          <div
            className="absolute inset-4 rounded"
            style={{
              background: 'linear-gradient(145deg, #1a3a2a, #2d5a3f)',
              opacity: 0.25,
            }}
          />
          
          {/* Embossed pattern overlay */}
          <div className="absolute inset-0 islamic-pattern opacity-15" />
          
          {/* Gold inner border */}
          <div className="absolute inset-5 rounded border border-[rgba(201,168,76,0.2)]" />

          {/* Card inside envelope */}
          <div
            className={`absolute left-5 right-5 rounded-lg transition-all duration-1000 ease-out ${
              cardSliding ? '-translate-y-[130%] opacity-100' : 'translate-y-0 opacity-70'
            }`}
            style={{
              top: '25%',
              bottom: '15%',
              background: 'linear-gradient(145deg, #fdf9f3, #faf6f0)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid rgba(201, 168, 76, 0.2)',
              zIndex: 5,
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <span className="gold-text font-english-luxury text-xl sm:text-2xl tracking-widest">M & F</span>
              </div>
            </div>
          </div>

          {/* Envelope Flap */}
          <div
            className={`envelope-flap-premium absolute top-0 left-0 right-0 h-[48%] ${
              flapOpen ? 'open' : ''
            }`}
          >
            <div className="absolute inset-0 islamic-pattern opacity-10" />
            {/* Gold edge on flap */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[1px]"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
            />
          </div>

          {/* Wax Seal */}
          <div
            className={`absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-700 ${
              isOpening ? 'scale-0 opacity-0 rotate-180' : ''
            }`}
          >
            <div className={`wax-seal-premium ${!isOpening ? 'animate-seal-pulse' : ''}`}>
              <span className="font-english-luxury text-[#1a3a2a] font-bold text-sm tracking-wider relative z-10">
                M&F
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-14 z-10 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
        <button
          onClick={handleOpen}
          disabled={isOpening}
          className="cta-button disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <span className="relative z-10 block">افتح الدعوة</span>
          <span className="relative z-10 block text-xs mt-1.5 opacity-60 font-english-elegant tracking-[0.2em] group-hover:opacity-90 transition-opacity">
            Open Invitation
          </span>
        </button>
      </div>

      {/* Bottom ornament */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 opacity-30">
        <svg width="100" height="24" viewBox="0 0 100 24">
          <path d="M10 12 Q30 4 50 12 Q70 4 90 12" fill="none" stroke="#c9a84c" strokeWidth="0.8" />
          <circle cx="50" cy="12" r="2" fill="#c9a84c" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

// ===== COUNTDOWN TIMER =====
function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const weddingDate = new Date('2026-10-10T18:30:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = weddingDate - now;

      if (diff <= 0) {
        setIsPast(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  if (isPast) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl gold-text font-arabic-display">تم بحمد الله</h3>
      </div>
    );
  }

  const items = [
    { value: timeLeft.days, label: 'يوم' },
    { value: timeLeft.hours, label: 'ساعة' },
    { value: timeLeft.minutes, label: 'دقيقة' },
    { value: timeLeft.seconds, label: 'ثانية' },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-sm mx-auto px-2">
      {items.map((item, i) => (
        <div key={i} className="text-center">
          <div className="glass-card p-3 sm:p-5 gold-shimmer-overlay">
            <div className="countdown-number">{String(item.value).padStart(2, '0')}</div>
            <div className="countdown-label mt-1">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ===== SCROLL REVEAL HOOK =====
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.section-transition');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

// ===== MAIN INVITATION CONTENT =====
function InvitationContent() {
  const containerRef = useScrollReveal();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen luxury-bg-dark desktop-invitation">
      <GoldParticles count={10} />

      {/* ===== HERO / BISMILLAH SECTION ===== */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
        <div className="absolute inset-0 islamic-pattern opacity-15" />
        <div className="light-rays opacity-30" />

        <div className={`relative z-10 text-center max-w-md mx-auto w-full transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Top star ornament */}
          <div className="mb-6 flex justify-center">
            <svg width="80" height="50" viewBox="0 0 80 50" className="opacity-50">
              <path d="M40 5 L43 15 L53 15 L45 21 L48 31 L40 25 L32 31 L35 21 L27 15 L37 15 Z" fill="none" stroke="#c9a84c" strokeWidth="0.8" />
              <path d="M15 40 Q40 28 65 40" fill="none" stroke="#c9a84c" strokeWidth="0.8" />
              <path d="M25 43 Q40 34 55 43" fill="none" stroke="#c9a84c" strokeWidth="0.6" />
            </svg>
          </div>

          {/* Bismillah */}
          <h1 className="font-arabic-display text-2xl sm:text-3xl gold-text mb-8 leading-relaxed">
            {weddingData.bismillah}
          </h1>

          <OrnamentDivider />

          {/* Quran Verse in ornamental frame */}
          <div className="relative py-8 px-6 my-6">
            <div className="absolute inset-0 border border-[rgba(201,168,76,0.2)] rounded-2xl" />
            <div className="absolute inset-2 border border-[rgba(201,168,76,0.08)] rounded-xl" />
            <IslamicCorner position="tl" />
            <IslamicCorner position="tr" />
            <IslamicCorner position="bl" />
            <IslamicCorner position="br" />
            
            <p className="font-arabic-display text-lg sm:text-xl text-[#1a3a2a] leading-loose px-2">
              {weddingData.verseTranslation}
            </p>
            <p className="font-arabic-display text-sm text-[#c9a84c] mt-4 opacity-60">
              سورة الروم - آية ٢١
            </p>
          </div>

          <OrnamentDivider />
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-1000 delay-1000 ${showContent ? 'opacity-40' : 'opacity-0'}`}>
          <div className="animate-bounce">
            <svg width="20" height="30" viewBox="0 0 20 30" fill="none" stroke="#c9a84c" strokeWidth="1.5">
              <rect x="6" y="1" width="8" height="14" rx="4" />
              <line x1="10" y1="5" x2="10" y2="8" />
              <path d="M5 20 L10 25 L15 20" />
            </svg>
          </div>
        </div>
      </section>

      {/* ===== COUPLE NAMES SECTION ===== */}
      <section className="section-transition py-16 sm:py-24 px-6 relative flex flex-col items-center justify-center">
        <div className="max-w-md mx-auto text-center w-full">
          {/* Invitation text */}
          <p className="font-arabic-body text-base sm:text-lg text-[#1a3a2a] mb-12 leading-relaxed opacity-80 text-center">
            {weddingData.invitationText}
          </p>

          {/* Names in premium frame */}
          <div className="relative py-12 px-6 invitation-frame">
            <IslamicCorner position="tl" />
            <IslamicCorner position="tr" />
            <IslamicCorner position="bl" />
            <IslamicCorner position="br" />
            
            <h2 className="font-english-luxury text-3xl sm:text-4xl md:text-5xl gold-text font-medium tracking-wide leading-tight">
              {weddingData.groom}
            </h2>
            
            <div className="flex items-center justify-center my-5">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c9a84c] opacity-40" />
              <span className="mx-5 text-2xl sm:text-3xl gold-text font-english-elegant italic">&</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c9a84c] opacity-40" />
            </div>
            
            <h2 className="font-english-luxury text-3xl sm:text-4xl md:text-5xl gold-text font-medium tracking-wide leading-tight">
              {weddingData.bride}
            </h2>
          </div>

          <OrnamentDivider />
        </div>
      </section>

      {/* ===== WEDDING DETAILS SECTION ===== */}
      <section className="section-transition py-16 px-6 relative flex flex-col items-center justify-center">
        <div className="max-w-md mx-auto w-full">
          <h3 className="text-center font-arabic-display text-2xl sm:text-3xl gold-text mb-10">
            تفاصيل الزفاف
          </h3>

          <div className="space-y-3">
            {/* Date */}
            <div className="glass-card p-4 sm:p-5 flex items-center gap-4 luxury-shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[rgba(201,168,76,0.08)] flex items-center justify-center flex-shrink-0 border border-[rgba(201,168,76,0.15)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="text-center flex-1">
                <p className="text-xs text-[#1a3a2a] opacity-50 font-arabic-body mb-0.5">التاريخ</p>
                <p className="text-lg font-english-luxury text-[#1a3a2a] font-medium">{weddingData.dateFormatted}</p>
              </div>
            </div>

            {/* Day */}
            <div className="glass-card p-4 sm:p-5 flex items-center gap-4 luxury-shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[rgba(201,168,76,0.08)] flex items-center justify-center flex-shrink-0 border border-[rgba(201,168,76,0.15)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="text-center flex-1">
                <p className="text-xs text-[#1a3a2a] opacity-50 font-arabic-body mb-0.5">اليوم</p>
                <p className="text-lg font-arabic-body text-[#1a3a2a] font-semibold">{weddingData.arabicDay}</p>
              </div>
            </div>

            {/* Time */}
            <div className="glass-card p-4 sm:p-5 flex items-center gap-4 luxury-shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[rgba(201,168,76,0.08)] flex items-center justify-center flex-shrink-0 border border-[rgba(201,168,76,0.15)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <div className="text-center flex-1">
                <p className="text-xs text-[#1a3a2a] opacity-50 font-arabic-body mb-0.5">الوقت</p>
                <p className="text-lg font-english-elegant text-[#1a3a2a]">{weddingData.time}</p>
              </div>
            </div>

            {/* Venue */}
            <div className="glass-card p-4 sm:p-5 flex items-center gap-4 luxury-shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[rgba(201,168,76,0.08)] flex items-center justify-center flex-shrink-0 border border-[rgba(201,168,76,0.15)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="text-center flex-1">
                <p className="text-xs text-[#1a3a2a] opacity-50 font-arabic-body mb-0.5">القاعة</p>
                <p className="text-lg font-arabic-body text-[#1a3a2a] font-semibold">{weddingData.venue}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COUNTDOWN SECTION ===== */}
      <section className="section-transition py-16 px-4 relative flex flex-col items-center justify-center">
        <div className="max-w-md mx-auto text-center w-full">
          <h3 className="font-arabic-display text-xl sm:text-2xl gold-text mb-8 leading-relaxed text-center">
            لم يتبقَ على فرحتنا سوى
          </h3>
          <Countdown />
        </div>
      </section>

      {/* ===== VENUE SECTION ===== */}
      <section className="section-transition py-16 px-6 relative flex flex-col items-center justify-center">
        <div className="max-w-md mx-auto text-center w-full">
          <div className="glass-card p-8 sm:p-10 relative overflow-hidden luxury-shadow">
            <div className="absolute inset-0 islamic-pattern opacity-8" />
            
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[rgba(201,168,76,0.08)] flex items-center justify-center border border-[rgba(201,168,76,0.15)]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              
              <p className="text-sm text-[#1a3a2a] opacity-50 font-arabic-body mb-2 text-center">القاعة</p>
              <h3 className="text-3xl sm:text-4xl font-arabic-display text-[#1a3a2a] mb-8 text-center">{weddingData.venue}</h3>
              
              <a
                href={weddingData.venueMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-block text-sm"
              >
                <span className="flex items-center gap-2 justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  الموقع على الخريطة
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLOSING SECTION ===== */}
      <section className="section-transition py-20 px-6 relative flex flex-col items-center justify-center">
        <div className="max-w-md mx-auto text-center w-full">
          {/* Decorative top */}
          <div className="mb-8 flex justify-center opacity-40">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="25" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="18" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
              <path d="M30 5 L33 22 L45 12 L36 25 L55 30 L36 35 L45 48 L33 38 L30 55 L27 38 L15 48 L24 35 L5 30 L24 25 L15 12 L27 22 Z" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
            </svg>
          </div>
          
          <p className="font-arabic-display text-xl sm:text-2xl text-[#1a3a2a] mb-8 leading-relaxed text-center">
            {weddingData.closingDua}
          </p>
          
          <p className="font-arabic-body text-base text-[#1a3a2a] opacity-60 mb-10 text-center">
            {weddingData.closingInvite}
          </p>
          
          <div className="py-8 relative flex justify-center">
            <div className="absolute inset-0 border border-[rgba(201,168,76,0.1)] rounded-2xl" />
            <h3 className="font-english-luxury text-2xl sm:text-3xl gold-text relative z-10 py-4 px-6 text-center">
              {weddingData.groom} & {weddingData.bride}
            </h3>
          </div>

          <OrnamentDivider />

          {/* Bottom Islamic star */}
          <div className="mt-6 flex justify-center opacity-30">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path d="M20 2 L23 14 L35 10 L27 19 L38 25 L26 26 L30 38 L20 30 L10 38 L14 26 L2 25 L13 19 L5 10 L17 14 Z" fill="none" stroke="#c9a84c" strokeWidth="0.8" />
            </svg>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center opacity-30 flex flex-col items-center justify-center">
        <p className="text-xs text-[#1a3a2a] font-english-elegant tracking-wider text-center">
          With Love • Mohamed & F
        </p>
        <div className="mt-3 flex justify-center">
          <svg width="30" height="8" viewBox="0 0 30 8">
            <path d="M0 4 Q7 0 15 4 Q23 0 30 4" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
          </svg>
        </div>
      </footer>
    </div>
  );
}

// ===== MAIN APP =====
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => setShowInvitation(true), 600);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden" dir="rtl">
      {/* Grain texture overlay for premium feel */}
      <div className="grain-overlay" />
      
      {/* Opening Envelope Screen */}
      {!isOpen && <OpeningEnvelope onOpen={handleOpen} />}
      
      {/* Main Invitation Content */}
      {showInvitation && (
        <div className="animate-fade-in" style={{ animationDuration: '1.2s' }}>
          <InvitationContent />
        </div>
      )}
    </div>
  );
}
