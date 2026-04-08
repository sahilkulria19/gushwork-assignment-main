// Sticky header — shows on scroll down past 25vh, hides on scroll up
(function () {
  const header = document.getElementById('sticky-header');
  if (!header) return;

  let lastY = 0;

  window.addEventListener('scroll', function () {
    const y = window.scrollY;
    const threshold = window.innerHeight * 0.25;

    if (y > threshold) {
      header.classList.toggle('visible', y > lastY);
    } else {
      header.classList.remove('visible');
    }

    lastY = y;
  }, { passive: true });
})();


// Mobile menu — hamburger drawer
(function () {
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('mobile-backdrop');
  const close = document.getElementById('close-menu-btn');
  const about = document.getElementById('menu-about');
  if (!btn || !menu) return;

  function open() {
    menu.classList.add('open');
    backdrop.classList.add('active');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function shut() {
    menu.classList.remove('open');
    backdrop.classList.remove('active');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function () {
    menu.classList.contains('open') ? shut() : open();
  });

  backdrop.addEventListener('click', shut);
  if (close) close.addEventListener('click', shut);
  if (about) about.addEventListener('click', shut);
})();


// Hero image carousel + thumbnails
(function () {
  const images = [
    { src: 'public/images/product-view-1.png', alt: 'HDPE Pipes — View 1' },
    { src: 'public/images/product-view-2.jpg', alt: 'Pipeline Infrastructure — View 2' },
    { src: 'public/images/product-view-3.jpg', alt: 'Industrial Piping — View 3' },
    { src: 'public/images/product-view-4.jpg', alt: 'Pipeline System — View 4' },
    { src: 'public/images/product-view-5.jpg', alt: 'Modern Pipes — View 5' },
  ];

  const mainImg = document.getElementById('main-carousel-img');
  const counter = document.getElementById('img-counter');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  const strip = document.getElementById('thumbnail-strip');
  if (!mainImg || !strip) return;

  let current = 0;

  images.forEach(function (img, idx) {
    const btn = document.createElement('button');
    btn.className = 'thumb-btn' + (idx === 0 ? ' active' : '');
    btn.setAttribute('aria-label', 'View ' + img.alt);
    btn.setAttribute('type', 'button');
    btn.setAttribute('role', 'listitem');

    const el = document.createElement('img');
    el.src = img.src;
    el.alt = img.alt;
    el.loading = 'lazy';

    btn.appendChild(el);
    btn.addEventListener('click', function () { goTo(idx); });
    strip.appendChild(btn);
  });

  function goTo(idx) {
    current = (idx + images.length) % images.length;
    mainImg.src = images[current].src;
    mainImg.alt = images[current].alt;
    counter.textContent = (current + 1) + ' / ' + images.length;
    strip.querySelectorAll('.thumb-btn').forEach(function (b, i) {
      b.classList.toggle('active', i === current);
    });
    var preview = document.getElementById('zoom-preview');
    if (preview) preview.style.backgroundImage = 'url(' + images[current].src + ')';
  }

  prevBtn.addEventListener('click', function () { goTo(current - 1); });
  nextBtn.addEventListener('click', function () { goTo(current + 1); });

  mainImg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
  });

  window._carouselSrc = function () { return images[current].src; };
})();


// Image zoom — lens follows cursor, preview panel shows enlarged region
(function () {
  const img = document.getElementById('main-carousel-img');
  const lens = document.getElementById('zoom-lens');
  const preview = document.getElementById('zoom-preview');
  if (!img || !lens || !preview) return;

  function show(e) {
    const r = img.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    const src = (window._carouselSrc && window._carouselSrc()) || img.src;

    lens.style.cssText = 'display:flex;top:' + (e.clientY - 50) + 'px;left:' + (e.clientX - 50) + 'px;';
    preview.style.display = 'block';
    preview.style.backgroundImage = 'url(' + src + ')';
    preview.style.backgroundSize = '200%';
    preview.style.backgroundPosition = x + '% ' + y + '%';
    preview.style.backgroundRepeat = 'no-repeat';
  }

  function hide() {
    lens.style.display = 'none';
    preview.style.display = 'none';
  }

  img.addEventListener('mouseenter', show);
  img.addEventListener('mousemove', show);
  img.addEventListener('mouseleave', hide);
  img.addEventListener('touchstart', hide, { passive: true });
})();


// FAQ accordion — single open at a time
(function () {
  var triggers = document.querySelectorAll('.faq-trigger');
  if (!triggers.length) return;

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var body = trigger.closest('.faq-item').querySelector('.faq-body');
      var icon = trigger.querySelector('.faq-icon');
      var isOpen = trigger.getAttribute('aria-expanded') === 'true';

      triggers.forEach(function (t) {
        if (t !== trigger) {
          t.setAttribute('aria-expanded', 'false');
          var b = t.closest('.faq-item').querySelector('.faq-body');
          var ic = t.querySelector('.faq-icon');
          if (b) b.classList.remove('open');
          if (ic) ic.src = ic.src.replace('accordian-open', 'accordian-close');
        }
      });

      trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      body.classList.toggle('open', !isOpen);
      if (icon) {
        icon.src = isOpen
          ? icon.src.replace('accordian-open', 'accordian-close')
          : icon.src.replace('accordian-close', 'accordian-open');
      }
    });
  });
})();


// Versatile applications carousel — scroll on button click
(function () {
  var track = document.getElementById('versatile-track');
  var prev = document.getElementById('versatile-prev');
  var next = document.getElementById('versatile-next');
  if (!track) return;

  function scroll(dir) {
    track.scrollBy({ left: dir * 340, behavior: 'smooth' });
  }

  if (prev) {
    prev.addEventListener('click', function () { scroll(-1); });
    prev.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scroll(-1); }
    });
  }
  if (next) {
    next.addEventListener('click', function () { scroll(1); });
    next.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scroll(1); }
    });
  }
})();


// HDPE manufacturing process stepper
(function () {
  var steps = [
    { title: 'Raw Material', heading: 'High-Grade Raw Material Selection', content: 'Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.', features: ['PE100 grade material', 'Optimal molecular weight distribution'], image: 'public/images/process-diagram.svg' },
    { title: 'Extrusion', heading: 'Advanced Extrusion Process', content: 'State-of-the-art extrusion technology ensures consistent quality and optimal material properties throughout the pipe.', features: ['Precision temperature control', 'Uniform material flow'], image: 'public/images/process-diagram.svg' },
    { title: 'Cooling', heading: 'Controlled Cooling System', content: 'Advanced cooling technology maintains structural integrity and dimensional accuracy of every pipe.', features: ['Water bath cooling', 'Temperature monitoring'], image: 'public/images/process-diagram.svg' },
    { title: 'Sizing', heading: 'Precision Sizing Process', content: 'Vacuum sizing ensures exact diameter specifications and wall thickness conformance in every pipe.', features: ['Automated sizing control', 'Quality verification'], image: 'public/images/process-diagram.svg' },
    { title: 'Quality Control', heading: 'Comprehensive Quality Testing', content: 'Multiple quality checkpoints ensure every pipe meets international standards before leaving the factory.', features: ['Pressure testing', 'Dimensional inspection'], image: 'public/images/process-diagram.svg' },
    { title: 'Marking', heading: 'Product Identification', content: 'Clear marking system for full traceability and compliance verification across every batch.', features: ['Standard markings', 'Batch tracking codes'], image: 'public/images/process-diagram.svg' },
    { title: 'Cutting', heading: 'Precision Cutting Process', content: 'Automated cutting ensures accurate lengths and perfectly clean edges on every pipe.', features: ['Length precision', 'Clean cut edges'], image: 'public/images/process-diagram.svg' },
    { title: 'Packaging', heading: 'Protective Packaging', content: 'Careful packaging ensures safe transportation and storage of finished pipes to any destination.', features: ['Protective wrapping', 'Secure bundling'], image: 'public/images/process-diagram.svg' },
  ];

  var tabs = document.getElementById('process-tabs');
  var label = document.getElementById('process-mobile-label');
  var title = document.getElementById('process-step-title');
  var desc = document.getElementById('process-step-desc');
  var features = document.getElementById('process-features');
  var img = document.getElementById('process-step-img');
  var prev = document.getElementById('process-prev');
  var next = document.getElementById('process-next');
  if (!tabs) return;

  var current = 0;

  steps.forEach(function (step, idx) {
    var btn = document.createElement('button');
    btn.className = 'process-tab' + (idx === 0 ? ' active' : '');
    btn.textContent = step.title;
    btn.setAttribute('type', 'button');
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
    btn.addEventListener('click', function () { goTo(idx); });
    tabs.appendChild(btn);

    if (idx < steps.length - 1) {
      var line = document.createElement('div');
      line.className = 'process-tab-line';
      tabs.appendChild(line);
    }
  });

  function goTo(idx) {
    current = (idx + steps.length) % steps.length;
    var s = steps[current];

    if (title) title.textContent = s.heading;
    if (desc) desc.textContent = s.content;
    if (img) { img.src = s.image; img.alt = s.title; }

    if (features) {
      features.innerHTML = '';
      s.features.forEach(function (f) {
        var li = document.createElement('li');
        li.innerHTML = '<img src="public/images/icon-check-circle.svg" alt="" aria-hidden="true" /> ' + f;
        features.appendChild(li);
      });
    }

    if (label) label.textContent = 'Step ' + (current + 1) + '/' + steps.length + ': ' + s.title;

    tabs.querySelectorAll('.process-tab').forEach(function (t, i) {
      t.classList.toggle('active', i === current);
      t.setAttribute('aria-selected', i === current ? 'true' : 'false');
    });
  }

  if (prev) prev.addEventListener('click', function () { goTo(current - 1); });
  if (next) next.addEventListener('click', function () { goTo(current + 1); });
})();


// Contact form — validation + success state
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    var valid = true;

    inputs.forEach(function (input) {
      if (!input.value.trim()) {
        input.style.boxShadow = '0 0 0 2px #ef4444';
        valid = false;
      } else {
        input.style.boxShadow = '';
      }
    });

    if (!valid) return;

    var btn = form.querySelector('button[type="submit"]');
    if (btn) {
      var orig = btn.textContent;
      btn.textContent = '✓ Quote Requested!';
      btn.style.background = '#16a34a';
      setTimeout(function () {
        btn.textContent = orig;
        btn.style.background = '';
        form.reset();
      }, 3000);
    }
  });
})();
