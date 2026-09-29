# 🌍 دعم اللغتين - Bilingual Support

## ✨ الميزة الجديدة

تم إضافة دعم كامل للغتين العربية والإنجليزية مع زر للتبديل بينهما.

---

## 🎯 كيف يعمل

### زر تبديل اللغة:
- يظهر في الزاوية العلوية اليمنى (أو اليسرى في الإنجليزية)
- في الوضع العربي: يظهر **"EN"** للتبديل للإنجليزية
- في الوضع الإنجليزي: يظهر **"ع"** للتبديل للعربية
- يحفظ تفضيل اللغة في المتصفح (localStorage)

### التبديل بين اللغات:
1. اضغط على زر اللغة
2. سيتم تغيير جميع النصوص فوراً
3. سيتغير اتجاه الصفحة (RTL/LTR)
4. سيتم حفظ تفضيلك للزيارات القادمة

---

## 📝 النصوص المترجمة

### الشاشة الافتتاحية:
| العربية | English |
|---------|---------|
| دعوة زفاف | Wedding Invitation |
| محمد & F | Mohamed & F |
| افتح الدعوة | Open Invitation |

### البسملة والآية:
| العربية | English |
|---------|---------|
| بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ | In the name of Allah, the Most Gracious, the Most Merciful |
| ومن آياته أن خلق لكم من أنفسكم أزواجاً... | And among His Signs is that He created for you mates... |
| سورة الروم - آية ٢١ | Surah Ar-Rum - Verse 21 |

### تفاصيل الزفاف:
| العربية | English |
|---------|---------|
| تفاصيل الزفاف | Wedding Details |
| التاريخ | Date |
| اليوم | Day |
| السبت | Saturday |
| الوقت | Time |
| القاعة | Venue |
| فيلا سعودي - قاعة رويال | Saudi Villa - Royal Hall |

### العد التنازلي:
| العربية | English |
|---------|---------|
| لم يتبقَ على فرحتنا سوى | Counting down to our special day |
| يوم | Days |
| ساعة | Hours |
| دقيقة | Minutes |
| ثانية | Seconds |
| اليوم هو يوم فرحتنا | Today is our special day |

### الجدول الزمني:
| العربية | English |
|---------|---------|
| موعدنا | Our Schedule |
| استقبال الضيوف | Guest Reception |
| حفل الزفاف | Wedding Ceremony |
| ختام الحفل | Event Conclusion |

### مكان الاحتفال:
| العربية | English |
|---------|---------|
| مكان الاحتفال | Venue Location |
| فيلا سعودي | Saudi Villa |
| قاعة رويال | Royal Hall |
| الموقع على الخريطة | View on Map |

### الختام:
| العربية | English |
|---------|---------|
| بارك الله لهما وبارك عليهما وجمع بينهما في خير | May Allah bless them and bring them together in goodness |
| نسعد بمشاركتكم فرحتنا | We are honored by your presence |
| مع الحب • محمد & F | With Love • Mohamed & F |

---

## 🔧 التغييرات التقنية

### 1. كائن الترجمات:
```javascript
const translations = {
    ar: {
        bismillah: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
        invitationTitle: 'دعوة زفاف',
        // ... جميع النصوص العربية
    },
    en: {
        bismillah: 'In the name of Allah...',
        invitationTitle: 'Wedding Invitation',
        // ... جميع النصوص الإنجليزية
    }
};
```

### 2. دالة تحديث اللغة:
```javascript
function updateLanguage() {
    const t = translations[currentLang];
    
    // تغيير الاتجاه
    if (currentLang === 'ar') {
        html.setAttribute('dir', 'rtl');
        document.body.classList.remove('en');
    } else {
        html.setAttribute('dir', 'ltr');
        document.body.classList.add('en');
    }
    
    // تحديث جميع النصوص
    document.getElementById('bismillah').textContent = t.bismillah;
    // ... تحديث باقي العناصر
}
```

### 3. حفظ التفضيل:
```javascript
// حفظ في localStorage
localStorage.setItem('lang', currentLang);

// استرجاع عند التحميل
let currentLang = localStorage.getItem('lang') || 'ar';
```

---

## 🎨 التصميم المتجاوب

### في الوضع العربي (RTL):
- اتجاه النص من اليمين لليسار
- الخطوط العربية: Amiri, Noto Naskh Arabic
- زر اللغة في الزاوية العلوية اليمنى

### في الوضع الإنجليزي (LTR):
- اتجاه النص من اليسار لليمين
- الخطوط الإنجليزية: Georgia, Times New Roman
- زر اللغة في الزاوية العلوية اليسرى

---

## 📱 التجربة على الموبايل

### الميزات:
- ✅ زر اللغة واضح وسهل الوصول
- ✅ التبديل فوري بدون إعادة تحميل
- ✅ حفظ التفضيل للزيارات القادمة
- ✅ اتجاه الصفحة يتغير تلقائياً
- ✅ جميع النصوص مترجمة

---

## 🚀 النشر

```bash
git add .
git commit -m "Add bilingual support (Arabic/English)"
git push origin main
```

---

## 🎯 كيفية الاستخدام

### للزوار:
1. افتح الموقع
2. اضغط على زر اللغة (EN أو ع) في الزاوية العلوية
3. سيتم تغيير اللغة فوراً
4. تفضيلك سيتم حفظه تلقائياً

### للمطورين:
لتعديل الترجمات، افتح `gh-pages/index.html` وعدّل كائن `translations`:

```javascript
const translations = {
    ar: {
        // أضف أو عدّل النصوص العربية هنا
        newKey: 'نص جديد',
    },
    en: {
        // أضف أو عدّل النصوص الإنجليزية هنا
        newKey: 'New text',
    }
};
```

ثم أضف العنصر في HTML:
```html
<p id="newElement"></p>
```

وحدّث دالة `updateLanguage`:
```javascript
document.getElementById('newElement').textContent = t.newKey;
```

---

## ⚙️ التخصيص

### تغيير اللغة الافتراضية:
```javascript
// في بداية الكود
let currentLang = localStorage.getItem('lang') || 'en'; // تغيير 'ar' إلى 'en'
```

### إضافة لغة جديدة:
```javascript
const translations = {
    ar: { /* ... */ },
    en: { /* ... */ },
    fr: { // إضافة الفرنسية
        bismillah: 'Au nom d\'Allah...',
        invitationTitle: 'Invitation de mariage',
        // ... باقي الترجمات
    }
};
```

---

## 🎉 النتيجة

الموقع الآن يدعم:
- ✅ اللغة العربية (RTL)
- ✅ اللغة الإنجليزية (LTR)
- ✅ تبديل فوري بين اللغتين
- ✅ حفظ تفضيل اللغة
- ✅ تصميم متجاوب لكل لغة
- ✅ خطوط مناسبة لكل لغة

---

صُنع بـ ❤️ لدعم جميع الضيوف
