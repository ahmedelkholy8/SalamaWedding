# Mohamed Salama & F - Wedding Invitation

دعوة زفاف رقمية فاخرة بتصميم إسلامي راقٍ.

## 🚀 النشر على GitHub Pages

### ✅ الحل النهائي - اتبع هذه الخطوات بالضبط:

### الخطوة 1: ادفع الكود إلى GitHub
```bash
git add .
git commit -m "Deploy wedding invitation"
git push origin main
```

### الخطوة 2: فعّل GitHub Pages
1. اذهب إلى مستودعك على GitHub
2. اضغط على **Settings** (الإعدادات)
3. من القائمة الجانبية، اضغط على **Pages**
4. تحت **Source**، اختر **GitHub Actions**

### الخطوة 3: انتظر النشر
- انتظر 1-2 دقيقة حتى يكتمل النشر التلقائي
- يمكنك متابعة حالة النشر من تبويب **Actions**

### الخطوة 4: افتح الموقع
```
https://ahmedelkholy8.github.io/SalamaWedding/
```

### الخطوة 5: امسح الكاش إذا لزم الأمر
- **Ctrl + Shift + R** (Windows) أو **Cmd + Shift + R** (Mac)
- أو افتح الموقع في نافذة خاصة (Incognito/Private)

---

## 📁 هيكل المشروع

```
SalamaWedding/
├── gh-pages/
│   └── index.html          # نسخة HTML مستقلة (تُرفع مباشرة)
├── src/
│   ├── App.tsx             # تطبيق React الرئيسي
│   ├── data/
│   │   └── weddingData.ts  # بيانات الزفاف
│   ├── index.css           # الأنماط
│   └── main.tsx            # نقطة الدخول
├── .github/
│   └── workflows/
│       └── deploy.yml      # سير عمل GitHub Actions
├── index.html              # قالب React
├── package.json
└── vite.config.js
```

---

## 🎨 المميزات

- ✨ تصميم فاخر لدعوة زفاف إسلامية
- 🎬 حركة سينمائية متقدمة لفتح الظرف (فتح الغطاء، انزلاق البطاقة، اختفاء الختم)
- 🎵 موسيقى خلفية (سورة الروم بصوت مشاري العفاسي) تعمل تلقائياً عند فتح الدعوة
- 🎚️ زر تحكم في الموسيقى (تشغيل/إيقاف) في أسفل الشاشة
- 📱 تصميم mobile-first (360px - 430px)
- 🌙 دعم كامل للغة العربية (RTL)
- ⏰ عد تنازلي حي حتى موعد الزفاف
- 📍 موقع القاعة مع رابط Google Maps
- 🎭 حركات تمرير (Scroll Animations) لجميع الأقسام
- 💫 تأثيرات ذهبية متحركة (Gold Shimmer)
- 🌟 حركات ظهور تدريجي للعناصر (Fade In, Scale, Slide)

---

## ⚙️ تعديل بيانات الزفاف

افتح ملف `gh-pages/index.html` وغيّر البيانات مباشرة:

```html
<!-- التاريخ -->
<p class="detail-value font-english-luxury">10 / 10 / 2026</p>

<!-- اليوم -->
<p class="detail-value font-arabic-body">السبت</p>

<!-- الوقت -->
<p class="detail-value font-english-luxury">6:30 PM – 11:00 PM</p>

<!-- القاعة -->
<p class="detail-value font-arabic-body">رويال</p>

<!-- الأسماء -->
<h2 class="name gold-text font-english-luxury">Mohamed Salama</h2>
<h2 class="name gold-text font-english-luxury">F</h2>
```

---

## 🎵 الموسيقى

### ⚠️ مهم جداً - إضافة ملف الصوت:

المتصفحات الحديثة تمنع التشغيل التلقائي للصوت. لذلك:

1. **ضع ملف الصوت** في مجلد `gh-pages/` بأحد الأسماء التالية:
   - `song.mpeg`
   - `song.mp3`
   - `song.wav`

2. **المستخدم سيضغط** على زر الموسيقى (🎵) في أسفل الشاشة لتشغيل الأغنية

3. **ستظهر رسالة** "🎵 اضغط على زر الموسيقى لتشغيل الأغنية" إذا لم يعمل الصوت تلقائياً

### إضافة/تغيير الأغنية:

```bash
# ضع الملف في مجلد gh-pages/
cp /path/to/your/song.mp3 gh-pages/song.mp3

# ثم ارفع إلى GitHub
git add gh-pages/song.mp3
git commit -m "Add wedding song"
git push origin main
```

### تعديل الرابط (اختياري):

افتح `gh-pages/index.html` وعدّل:

```html
<audio id="weddingMusic" loop preload="auto">
    <source src="./song.mp3" type="audio/mpeg">
</audio>
```

---

## 🔧 التطوير المحلي

```bash
# تثبيت المكتبات
npm install

# تشغيل السيرفر المحلي
npm run dev

# بناء المشروع
npm run build
```

---

## 📱 الألوان والخطوط

**الألوان:**
- Ivory/Cream (أساسي): `#faf6f0`
- Emerald Green (ثانوي): `#1a3a2a`
- Gold (تمييز): `#c9a84c`
- Charcoal (نص): `#2a2a2a`

**الخطوط:**
- عربي: Amiri, Noto Naskh Arabic
- إنجليزي: Playfair Display, Cormorant Garamond

---

## 🎉 تفاصيل الزفاف

- **العريس:** Mohamed Salama
- **العروس:** F
- **التاريخ:** السبت، 10 أكتوبر 2026
- **الوقت:** 6:30 PM – 11:00 PM
- **القاعة:** رويال

---

صُنع بـ ❤️ ليوم مميز
