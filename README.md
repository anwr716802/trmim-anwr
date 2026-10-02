ملفات الموقع جاهزة للنشر — خطوات سريعة لرفع على Vercel:

1. تنزيل الحزمة (الموجودة هنا في ملف ZIP الذي قمت بتحميله).
2. افتح حساب على Vercel (https://vercel.com) واربطه بحساب GitHub أو اختر رفع مشروع من الجهاز.
3. أنشئ مشروع جديد وارفع مجلد 'trmim-anwr-site' أو اربطه بمستودع Git يحتوي الملفات.
4. تأكد من أن الاعدادات تستخدم build command فارغة و Output Directory = root (ملفات HTML ثابتة).
5. بعد النشر سيعطيك Vercel عنوان مؤقت. لربط النطاق:
   - في لوحة Vercel > Domains > Add Domain: أدخل trmim-anwr.vercel.app أو نطاقك الخاص.
   - لربط نطاقك الخاص، أضف سجلات DNS (A أو CNAME) حسب إرشادات Vercel.
6. HTTPS يتم تمكينه تلقائياً عبر Vercel.

تحقق Google Search Console:
1. ادخل إلى https://search.google.com/search-console
2. اختر "إضافة ملكية" وأدخل https://trmim-anwr.vercel.app/
3. اختر طريقة التحقق: HTML file upload أو DNS TXT.
   - HTML: ارفع ملف التحقق في جذر الموقع (مثلاً google12345.html) ثم اضغط Verify.
   - DNS: أضف TXT record في إعدادات النطاق وانتظر التحقق.
4. بعد التحقق اذهب إلى Index > Sitemaps وأضف: https://trmim-anwr.vercel.app/sitemap.xml

نصائح:
- فعّل GZIP/Brotli في إعدادات الاستضافة (Vercel يدعم ذلك تلقائياً).
- استبدل iframe الخريطة بخرائط Google المضمنة الرسمية ورمز المكان الخاص بك.
- استبدل صور المعرض بالصور الحقيقية لمشاريعك واحتفظ بنفس أسماء الملفات أو حدّث الـ src و الـ ALT accordingly.