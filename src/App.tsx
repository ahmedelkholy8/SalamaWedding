import { useState, useEffect, useRef, useCallback } from 'react';
import { weddingData } from './data/weddingData';

// ===== ICONS =====
const Icons = {
  Calendar: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Clock: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  ),
  Location: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Music: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  MusicOff: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ),
  Share: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  Download: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7,10 12,15 17,10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  ExternalLink: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
};

// ===== PARTICLES COMPONENT =====
function Particles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

// ===== MONOGRAM =====
function Monogram() {
  return (
    <div className="monogram-frame mx-auto my-8">
      <span className="monogram-text">M & F</span>
    </div>
  );
}

// ===== ORNAMENTAL DIVIDER =====
function OrnamentalDivider() {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="gold-line w-32" />
      <div className="mx-4">
        <svg width="20" height="20" viewBox="0 0 20 20" className="text-[var(--gold)]">
          <path
            d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
      </div>
      <div className="gold-line w-32" />
    </div>
  );
}

// ===== COUNTDOWN =====
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
        <p className="font-arabic-display text-2xl gold-metallic">
          اليوم هو يوم فرحتنا
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto">
      {[
        { value: timeLeft.days, label: 'يوم' },
        { value: timeLeft.hours, label: 'ساعة' },
        { value: timeLeft.minutes, label: 'دقيقة' },
        { value: timeLeft.seconds, label: 'ثانية' },
      ].map((item, i) => (
        <div key={i} className="glass-card p-4 text-center">
          <div className="countdown-digit">{String(item.value).padStart(2, '0')}</div>
          <div className="countdown-label">{item.label}</div>
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
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = ref.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

// ===== ADD TO CALENDAR =====
function addToCalendar() {
  const event = {
    title: `زفاف ${weddingData.groom} & ${weddingData.bride}`,
    start: new Date('2026-10-10T18:30:00').toISOString().replace(/-|:|\.\d+/g, ''),
    end: new Date('2026-10-10T23:00:00').toISOString().replace(/-|:|\.\d+/g, ''),
    location: weddingData.venue,
    description: weddingData.invitationMessage,
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `DTSTART:${event.start}`,
    `DTEND:${event.end}`,
    `SUMMARY:${event.title}`,
    `LOCATION:${event.location}`,
    `DESCRIPTION:${event.description}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'wedding-invitation.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ===== SHARE =====
async function shareInvitation() {
  const shareData = {
    title: `${weddingData.groom} & ${weddingData.bride} | دعوة زفاف`,
    text: weddingData.shareMessage,
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareData.text + '\n' + shareData.url)}`;
      window.open(whatsappUrl, '_blank');
    }
  } catch (err) {
    console.log('Share cancelled');
  }
}

// ===== OPENING SCREEN =====
function OpeningScreen({ onOpen }: { onOpen: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleOpen = () => {
    setIsVisible(false);
    setTimeout(() => onOpen(), 800);
  };

  return (
    <div className={`opening-screen ${!isVisible ? 'hidden' : ''}`}>
      <Particles />
      
      <div className="relative z-10 text-center px-6">
        {/* Islamic Arch */}
        <div className="islamic-arch mb-8">
          <div className="w-24 h-24 mx-auto mb-6 border border-[var(--gold)] rounded-full flex items-center justify-center">
            <span className="font-arabic-display text-3xl gold-metallic">﷽</span>
          </div>
        </div>

        {/* Initials */}
        <div className="mb-8">
          <h1 className="font-english-display text-6xl font-light tracking-wider gold-metallic mb-2">
            M
          </h1>
          <p className="text-[var(--gold)] text-2xl font-light my-2">&</p>
          <h1 className="font-english-display text-6xl font-light tracking-wider gold-metallic">
            F
          </h1>
        </div>

        {/* Title */}
        <p className="font-arabic-display text-xl text-[var(--ivory)] mb-2">
          دعوة زفاف
        </p>
        <p className="font-arabic-display text-lg text-[var(--gold-light)] mb-8">
          {weddingData.groomArabic} & {weddingData.brideArabic}
        </p>

        {/* Button */}
        <button onClick={handleOpen} className="btn-gold">
          <span className="block">افتح الدعوة</span>
          <span className="block text-xs mt-1 opacity-70 font-english-display tracking-widest">
            OPEN INVITATION
          </span>
        </button>
      </div>
    </div>
  );
}

// ===== MAIN INVITATION =====
function Invitation() {
  const containerRef = useScrollReveal();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);
  }, []);

  return (
    <div ref={containerRef} className="bg-layered min-h-screen relative">
      <Particles />

      {/* ===== BISMILLAH SECTION ===== */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
        <div className={`content-wrapper text-center transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Bismillah */}
          <h1 className="font-arabic-display text-3xl sm:text-4xl gold-metallic mb-8 reveal">
            {weddingData.bismillah}
          </h1>

          <OrnamentalDivider />

          {/* Quran Verse */}
          <div className="glass-card p-8 my-8 reveal reveal-delay-1">
            <p className="font-arabic-display text-xl sm:text-2xl text-[var(--ivory)] leading-loose mb-4">
              {weddingData.verseTranslation}
            </p>
            <p className="font-arabic-display text-sm text-[var(--gold-muted)]">
              {weddingData.verseReference}
            </p>
          </div>

          <OrnamentalDivider />

          {/* Invitation Message */}
          <p className="font-arabic-body text-lg text-[var(--ivory)] opacity-90 mb-8 reveal reveal-delay-2">
            {weddingData.invitationMessage}
          </p>
        </div>
      </section>

      {/* ===== COUPLE NAMES ===== */}
      <section className="py-20 px-6 reveal">
        <div className="content-wrapper text-center">
          <Monogram />

          <div className="my-12">
            <h2 className="font-english-display text-4xl sm:text-5xl font-light tracking-wider gold-metallic mb-4">
              {weddingData.groom}
            </h2>
            <p className="text-[var(--gold)] text-3xl my-4">&</p>
            <h2 className="font-english-display text-4xl sm:text-5xl font-light tracking-wider gold-metallic">
              {weddingData.bride}
            </h2>
          </div>

          <OrnamentalDivider />
        </div>
      </section>

      {/* ===== WEDDING DETAILS ===== */}
      <section className="py-20 px-6 reveal">
        <div className="content-wrapper">
          <h3 className="text-center font-arabic-display text-2xl gold-metallic mb-12">
            تفاصيل الزفاف
          </h3>

          <div className="space-y-4">
            {/* Date */}
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="text-[var(--gold)]">
                <Icons.Calendar />
              </div>
              <div>
                <p className="text-sm text-[var(--gold-muted)] mb-1">التاريخ</p>
                <p className="font-english-display text-xl text-[var(--ivory)]">
                  {weddingData.dateFormatted}
                </p>
              </div>
            </div>

            {/* Day */}
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="text-[var(--gold)]">
                <Icons.Clock />
              </div>
              <div>
                <p className="text-sm text-[var(--gold-muted)] mb-1">اليوم</p>
                <p className="font-arabic-body text-xl text-[var(--ivory)]">
                  {weddingData.arabicDay}
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="text-[var(--gold)]">
                <Icons.Clock />
              </div>
              <div>
                <p className="text-sm text-[var(--gold-muted)] mb-1">الوقت</p>
                <p className="font-english-display text-xl text-[var(--ivory)]">
                  {weddingData.timeFormatted}
                </p>
              </div>
            </div>

            {/* Venue */}
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="text-[var(--gold)]">
                <Icons.Location />
              </div>
              <div>
                <p className="text-sm text-[var(--gold-muted)] mb-1">القاعة</p>
                <p className="font-arabic-body text-xl text-[var(--ivory)]">
                  {weddingData.venue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COUNTDOWN ===== */}
      <section className="py-20 px-6 reveal">
        <div className="content-wrapper text-center">
          <h3 className="font-arabic-display text-2xl gold-metallic mb-8">
            لم يتبقَ على فرحتنا سوى
          </h3>
          <Countdown />
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="py-20 px-6 reveal">
        <div className="content-wrapper">
          <h3 className="text-center font-arabic-display text-2xl gold-metallic mb-12">
            موعدنا
          </h3>

          <div className="max-w-sm mx-auto">
            {weddingData.timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <p className="font-english-display text-lg text-[var(--gold-light)] mb-1">
                  {item.time}
                </p>
                <p className="font-arabic-body text-[var(--ivory)]">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VENUE ===== */}
      <section className="py-20 px-6 reveal">
        <div className="content-wrapper text-center">
          <h3 className="font-arabic-display text-2xl gold-metallic mb-8">
            مكان الاحتفال
          </h3>

          <div className="glass-card p-8 mb-6">
            <div className="text-[var(--gold)] mb-4 flex justify-center">
              <Icons.Location />
            </div>
            <h4 className="font-arabic-display text-2xl text-[var(--ivory)] mb-2">
              {weddingData.venueShort}
            </h4>
            <p className="font-arabic-body text-[var(--gold-light)]">
              {weddingData.venueHall}
            </p>
          </div>

          <a
            href={weddingData.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <span>الموقع على الخريطة</span>
            <Icons.ExternalLink />
          </a>
        </div>
      </section>

      {/* ===== ADD TO CALENDAR ===== */}
      <section className="py-12 px-6 reveal">
        <div className="content-wrapper text-center">
          <button onClick={addToCalendar} className="btn-gold inline-flex items-center gap-2">
            <Icons.Download />
            <span>أضف الموعد إلى التقويم</span>
          </button>
        </div>
      </section>

      {/* ===== RSVP ===== */}
      <section className="py-20 px-6 reveal">
        <div className="content-wrapper text-center">
          <h3 className="font-arabic-display text-2xl gold-metallic mb-4">
            يسعدنا حضوركم
          </h3>
          <p className="font-arabic-body text-[var(--ivory)] opacity-80 mb-8">
            نتشرف بمشاركتكم فرحتنا
          </p>

          <a
            href={`https://wa.me/${weddingData.whatsappNumber}?text=${encodeURIComponent(weddingData.rsvpMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            تأكيد الحضور
          </a>
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="py-20 px-6 reveal">
        <div className="content-wrapper text-center">
          <OrnamentalDivider />

          <p className="font-arabic-display text-xl text-[var(--ivory)] mb-6 leading-loose">
            {weddingData.closingDua}
          </p>

          <p className="font-arabic-body text-[var(--ivory)] opacity-80 mb-8">
            {weddingData.closingMessage}
          </p>

          <Monogram />

          <OrnamentalDivider />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center opacity-40">
        <p className="text-xs text-[var(--gold-muted)] font-english-display tracking-wider">
          With Love • {weddingData.groom} & {weddingData.bride}
        </p>
      </footer>
    </div>
  );
}

// ===== MAIN APP =====
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const toggleMusic = useCallback(() => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setMusicPlaying(!musicPlaying);
    }
  }, [musicPlaying]);

  return (
    <div className="relative">
      {/* Audio */}
      <audio ref={audioRef} loop preload="none">
        <source src={weddingData.musicUrl} type="audio/mpeg" />
      </audio>

      {/* Opening Screen */}
      {!isOpen && <OpeningScreen onOpen={handleOpen} />}

      {/* Main Invitation */}
      {isOpen && <Invitation />}

      {/* Music Button */}
      {isOpen && (
        <button
          onClick={toggleMusic}
          className={`music-btn ${musicPlaying ? 'playing' : ''}`}
          aria-label={musicPlaying ? 'إيقاف الموسيقى' : 'تشغيل الموسيقى'}
        >
          <span className="text-[var(--gold)]">
            {musicPlaying ? <Icons.Music /> : <Icons.MusicOff />}
          </span>
        </button>
      )}

      {/* Share Button */}
      {isOpen && (
        <button
          onClick={shareInvitation}
          className="share-btn"
          aria-label="مشاركة الدعوة"
        >
          <span className="text-[var(--gold)]">
            <Icons.Share />
          </span>
        </button>
      )}
    </div>
  );
}
