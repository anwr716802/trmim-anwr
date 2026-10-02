
// main.js - minimal, only handles contact form basic submission (no backend)
document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('تم إرسال البيانات. استخدم WhatsApp أو رقم الهاتف للتواصل الفعلي: +966559623005');
    form.reset();
  });
});
