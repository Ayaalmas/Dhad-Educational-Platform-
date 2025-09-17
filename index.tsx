import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const headerRef = React.useRef<HTMLElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [selectedClassIndex, setSelectedClassIndex] = React.useState(0);
  const [activeCourseFilter, setActiveCourseFilter] = React.useState('الكل');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = React.useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState('');
  const [modalSubtitle, setModalSubtitle] = React.useState('');
  
  // Video player state
  const [player, setPlayer] = React.useState<any>(null);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);


  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href || href === '#') return;

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScroll(e);
    setIsMobileMenuOpen(false);
  };
  
  const openRegisterModal = (title: string, subtitle: string) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
    setModalTitle('');
    setModalSubtitle('');
  };
  
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);


  // Effect for mobile menu & modal body scroll lock
  React.useEffect(() => {
    if (isMobileMenuOpen || isRegisterModalOpen || isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isRegisterModalOpen, isContactModalOpen]);


  // Effect for header scroll style
  React.useEffect(() => {
    const handleWindowScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 10) {
          headerRef.current.classList.add('scrolled');
        } else {
          headerRef.current.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);
  
    // Handler to play the video with sound
  const handlePlayVideo = () => {
    if (player) {
      player.unMute();
      player.playVideo();
    }
  };

  // Effect for YouTube Player API
  React.useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      const newPlayer = new (window as any).YT.Player('youtube-player', {
        videoId: '9RJKoxZ1b50',
        playerVars: {
          autoplay: 0,
          mute: 1,
          loop: 1,
          playlist: '9RJKoxZ1b50', // Required for loop to work
          controls: 1, // Show controls once video starts
          rel: 0,
          playsinline: 1,
          showinfo: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event: any) => {
            setPlayer(event.target);
            event.target.mute();
          },
          onStateChange: (event: any) => {
            const YT = (window as any).YT;
            if (event.data === YT.PlayerState.PLAYING) {
              setIsVideoPlaying(true);
            } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
              setIsVideoPlaying(false);
            }
          },
        },
      });
    };

    if (!(window as any).YT || !(window as any).YT.Player) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      }
    } else {
      onYouTubeIframeAPIReady();
    }
  }, []);
  
  // Effect for hero particle animation
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const random = (min: number, max: number) => Math.random() * (max - min) + min;

    class Particle {
        x: number;
        y: number;
        radius: number;
        color: string;
        speedX: number;
        speedY: number;

        constructor(x: number, y: number, radius: number, color: string, speedX: number, speedY: number) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.speedX = speedX;
            this.speedY = speedY;
        }

        draw() {
            if (!ctx) return;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }

        update() {
            if (!canvas) return;
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.speedX = -this.speedX;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.speedY = -this.speedY;
            }
            this.x += this.speedX;
            this.y += this.speedY;
            this.draw();
        }
    }

    const init = () => {
        if (!canvas) return;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 18000);
        const colors = ['rgba(0, 121, 107, 0.4)', 'rgba(247, 148, 29, 0.4)'];
        for (let i = 0; i < particleCount; i++) {
            const radius = random(1, 2.5);
            const x = random(radius, canvas.width - radius);
            const y = random(radius, canvas.height - radius);
            const color = colors[Math.floor(Math.random() * colors.length)];
            const speedX = random(-0.2, 0.2);
            const speedY = random(-0.2, 0.2);
            if (speedX === 0 || speedY === 0) continue;
            particles.push(new Particle(x, y, radius, color, speedX, speedY));
        }
    };

    const connect = () => {
        if (!ctx) return;
        let opacityValue = 1;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const distance = Math.sqrt(
                    (particles[a].x - particles[b].x) ** 2 + (particles[a].y - particles[b].y) ** 2
                );
                if (distance < 120) {
                    opacityValue = 1 - (distance / 120);
                    ctx.strokeStyle = `rgba(0, 121, 107, ${opacityValue})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
        if (!ctx || !canvas) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => p.update());
        connect();
        animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
        cancelAnimationFrame(animationFrameId);
        init();
        animate();
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
}, []);

  // Effect for active link highlighting on scroll
  React.useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));

    if (sections.length === 0 || navLinks.length === 0) return;
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
             if (link.getAttribute('href') === '#contact-us') return;
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-50% 0px -50% 0px', 
      threshold: 0
    });

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const classData = [
    {
      icon: '١',
      title: 'الصف الأول',
      description: 'معلمون ومعلمات ذوو خبرة بأساليب تدريس تفاعلية ومبتكرة وفق للمنهاج السوري المعتمد.',
      subjects: '5 مواد',
      color: '#00796B'
    },
    {
      icon: '٢',
      title: 'الصف الثاني',
      description: 'معلمون ومعلمات ذوو خبرة بأساليب تدريس تفاعلية ومبتكرة وفق للمنهاج السوري المعتمد.',
      subjects: '5 مواد',
      color: '#ef5350'
    },
    {
      icon: '٣',
      title: 'الصف الثالث',
      description: 'معلمون ومعلمات ذوو خبرة بأساليب تدريس تفاعلية ومبتكرة وفق للمنهاج السوري المعتمد.',
      subjects: '6 مواد',
      color: '#66bb6a'
    },
    {
      icon: '٤',
      title: 'الصف الرابع',
      description: 'منهج متكامل يركز على بناء أساس قوي في المواد الأساسية وتنمية المهارات الإبداعية.',
      subjects: '7 مواد',
      color: '#9575cd'
    },
    {
      icon: '٥',
      title: 'الصف الخامس',
      description: 'مرحلة انتقالية هامة نحو الإعداد للمرحلة الإعدادية مع التركيز على مهارات البحث والتحليل.',
      subjects: '8 مواد',
      color: '#ff7043'
    },
    {
      icon: '٦',
      title: 'الصف السادس',
      description: 'نهاية المرحلة الابتدائية، مع مراجعات شاملة وتأهيل الطلاب لامتحانات القبول للمدارس الإعدادية.',
      subjects: '8 مواد',
      color: '#42a5f5'
    },
    {
      icon: '٧',
      title: 'الصف السابع',
      description: 'بداية المرحلة الإعدادية، مع التركيز على المواد العلمية والأدبية بشكل أعمق.',
      subjects: '10 مواد',
      color: '#26c6da'
    },
    {
      icon: '٨',
      title: 'الصف الثامن',
      description: 'توسيع المعارف في مختلف المواد وتنمية مهارات التفكير النقدي وحل المشكلات.',
      subjects: '11 مواد',
      color: '#7e57c2'
    },
    {
      icon: '٩',
      title: 'الصف التاسع',
      description: 'سنة حاسمة للتحضير لامتحان شهادة التعليم الأساسي، مع برامج مكثفة ومراجعات دورية.',
      subjects: '12 مواد',
      color: '#ffa726'
    }
  ];
  
 const courseData = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2zm18-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H8v-2h4V8h2v4h4v2z"/></svg>,
      gradient: 'gradient-compensatory',
      category: 'التعليم التعويضي المسرّع',
      title: 'برنامج الصف الأول التعويضي',
      details: 'يشمل (العربية، الرياضيات، العلوم)',
      rating: 4.8,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2zm18-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H8v-2h4V8h2v4h4v2z"/></svg>,
      gradient: 'gradient-compensatory',
      category: 'التعليم التعويضي المسرّع',
      title: 'برنامج الصف الثاني التعويضي',
      details: 'يشمل (العربية، الرياضيات، العلوم)',
      rating: 4.7,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.18 12H6.18c-.41 0-.68-.59-.37-.89L8.63 10H12v2.17c0 .43.51.68.82.39l3.18-2.85c.18-.17.18-.48 0-.65L12.82 6.2c-.31-.28-.82-.04-.82.39V9H8.37l-2.82-3.11c-.31-.3-.04-.89.37-.89h11.62c.41 0 .68.59.37.89L15.37 9H12v-.17c0-.43-.51-.68-.82-.39l-3.18 2.85c-.18.17-.18.48 0 .65l3.18 2.85c.31.28.82.04.82-.39V12h2.63l2.82 3.11c.31.3.04.89-.37.89z"/></svg>,
      gradient: 'gradient-arabic',
      category: 'تعليم اللغة العربية لغير الناطقين',
      title: 'العربية للمبتدئين (للأطفال)',
      details: 'تأسيس لغوي ممتع للأعمار 6-12',
      rating: 4.9,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.18 12H6.18c-.41 0-.68-.59-.37-.89L8.63 10H12v2.17c0 .43.51.68.82.39l3.18-2.85c.18-.17.18-.48 0-.65L12.82 6.2c-.31-.28-.82-.04-.82.39V9H8.37l-2.82-3.11c-.31-.3-.04-.89.37-.89h11.62c.41 0 .68.59.37.89L15.37 9H12v-.17c0-.43-.51-.68-.82-.39l-3.18 2.85c-.18.17-.18.48 0 .65l3.18 2.85c.31.28.82.04.82-.39V12h2.63l2.82 3.11c.31.3.04.89-.37.89z"/></svg>,
      gradient: 'gradient-arabic',
      category: 'تعليم اللغة العربية لغير الناطقين',
      title: 'العربية للمستوى المتوسط (للكبار)',
      details: 'قواعد ومحادثة للأعمار +18',
      rating: 4.8,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>,
      gradient: 'gradient-therapy',
      category: 'برامج علاجية استشارية',
      title: 'جلسات دعم النطق والكلام',
      details: 'جلسات فردية مع أخصائيين',
      rating: 5.0,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>,
      gradient: 'gradient-therapy',
      category: 'برامج علاجية استشارية',
      title: 'استشارات التأقلم المدرسي والنفسي',
      details: 'متابعة مستمرة ودعم نفسي',
      rating: 4.9,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8h16v9c0 .55-.45 1-1 1zM5 6h14v1H5V6z"/></svg>,
      gradient: 'gradient-skills',
      category: 'دورات تدريبية إضافية',
      title: 'مقدمة في البرمجة للأطفال',
      details: 'تنمية مهارات التفكير المنطقي',
      rating: 4.7,
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8h16v9c0 .55-.45 1-1 1zM5 6h14v1H5V6z"/></svg>,
      gradient: 'gradient-skills',
      category: 'دورات تدريبية إضافية',
      title: 'مهارات العرض والتقديم للطلاب',
      details: 'بناء الثقة بالنفس والقدرة على التعبير',
      rating: 4.8,
    },
  ];

  const courseFilters = ['الكل', ...Array.from(new Set(courseData.map(c => c.category)))];

  const selectedClass = classData[selectedClassIndex];
  
  const registrationSubtitle = "يرجى ملء النموذج التالي لإتمام عملية التسجيل. سنتواصل معك قريباً.";
  
  const isRegistration = modalTitle.startsWith('تسجيل في: ') || modalTitle === 'انضم إلينا الآن';
  const courseName = isRegistration && modalTitle.includes(': ') ? modalTitle.replace('تسجيل في: ', '') : '';


  return (
    <>
      <header className="app-header" ref={headerRef}>
        <div className="header-container">
          <img src="https://i.imgur.com/J5f571C.png" alt="شعار منصة ضاد" className="header-logo" />
          <nav className="header-nav-desktop">
            <a href="#home" onClick={handleSmoothScroll}>الرئيسية</a>
            <a href="#classes" onClick={handleSmoothScroll}>الصفوف</a>
            <a href="#programs" onClick={handleSmoothScroll}>البرامج</a>
            <a href="#features" onClick={handleSmoothScroll}>لماذا نحن؟</a>
            <a href="#contact-us" onClick={(e) => { e.preventDefault(); openContactModal(); }}>تواصل معنا</a>
          </nav>
          <div className="header-actions">
            <button onClick={() => openRegisterModal('انضم إلينا الآن', registrationSubtitle)} className="btn btn-primary">سجل الآن</button>
            <button 
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#home" onClick={handleMobileLinkClick}>الرئيسية</a>
          <a href="#classes" onClick={handleMobileLinkClick}>الصفوف</a>
          <a href="#programs" onClick={handleMobileLinkClick}>البرامج</a>
          <a href="#features" onClick={handleMobileLinkClick}>لماذا نحن؟</a>
          <a href="#contact-us" onClick={(e) => { e.preventDefault(); openContactModal(); setIsMobileMenuOpen(false); }}>تواصل معنا</a>
          <button className="btn btn-primary" onClick={() => { openRegisterModal('انضم إلينا الآن', registrationSubtitle); setIsMobileMenuOpen(false); }}>سجل الآن</button>
        </nav>
      </div>
      
      <main>
         <section className="hero-section" id="home">
            <canvas ref={canvasRef} id="hero-particles"></canvas>
            <div className="hero-shape shape-1"></div>
            <div className="hero-shape shape-2"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">جسركم للاندماج، <br/>في <span>التعليم السوري</span></h1>
                    <p className="hero-subtitle">نحن هنا لمساعدة الطلاب السوريين العائدين والمتأثرين بالظروف على الاندماج بسلاسة في المناهج الدراسية السورية، مع برامج دعم متخصصة.</p>
                    <form className="hero-search-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="ابحث عن صفك أو برنامجك..." className="hero-search-input" />
                        <button type="submit" className="btn btn-primary hero-search-btn">ابحث</button>
                    </form>
                    <div className="hero-social-proof">
                        <div className="student-avatars">
                            <img src="https://i.pravatar.cc/40?u=1" alt="Student avatar 1"/>
                            <img src="https://i.pravatar.cc/40?u=2" alt="Student avatar 2"/>
                            <img src="https://i.pravatar.cc/40?u=3" alt="Student avatar 3"/>
                        </div>
                        <span>انضم لأكثر من <strong>5000</strong> طالب يتعلمون معنا!</span>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div id="youtube-player"></div>
                    {!isVideoPlaying && (
                        <button 
                            className="video-play-button" 
                            onClick={handlePlayVideo} 
                            aria-label="تشغيل الفيديو"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </section>

        <section id="classes" className="section">
          <div className="container">
            <h2 className="section-title">الصفوف الدراسية</h2>
            <p className="section-subtitle">نقدم تغطية شاملة لجميع المراحل الدراسية الأساسية بأساليب مبتكرة ومتابعة مستمرة.</p>
            <div className="class-tabs-container">
              {classData.map((cls, index) => (
                <div
                  key={index}
                  className={`class-tab ${index === selectedClassIndex ? 'active' : ''}`}
                  onClick={() => setSelectedClassIndex(index)}
                  style={{ '--class-color': cls.color } as React.CSSProperties}
                >
                  <span className="class-tab-icon">{cls.icon}</span>
                  <span>{cls.title}</span>
                </div>
              ))}
            </div>
            <div className="class-details-content" style={{ '--class-color': selectedClass.color } as React.CSSProperties}>
              <div className="class-details-visual">
                  <div className="class-card-icon" style={{ backgroundColor: selectedClass.color }}>
                      {selectedClass.icon}
                  </div>
                  <h3 className="class-card-title">{selectedClass.title}</h3>
              </div>
              <div className="class-details-info">
                  <p className="class-card-description">{selectedClass.description}</p>
                  <div className="class-details-footer">
                      <span className="class-card-subjects">{selectedClass.subjects}</span>
                      <a href="#" onClick={(e) => { e.preventDefault(); openRegisterModal(`تسجيل في: ${selectedClass.title}`, registrationSubtitle); }} className="btn btn-secondary" style={{backgroundColor: selectedClass.color}}>عرض التفاصيل</a>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="section courses-section">
            <div className="container">
                <h2 className="section-title">برامجنا الرئيسية</h2>
                <p className="section-subtitle">برامج مصممة لسد الفجوات التعليمية وتوفير الدعم اللازم للنجاح الأكاديمي.</p>
                <div className="course-filters">
                    {courseFilters.map((filter) => (
                         <button 
                            key={filter} 
                            className={`filter-btn ${activeCourseFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveCourseFilter(filter)}>
                            {filter}
                        </button>
                    ))}
                </div>
                <div className="grid courses-grid">
                    {courseData
                        .filter(course => activeCourseFilter === 'الكل' || course.category === activeCourseFilter)
                        .map((course, index) => (
                        <div key={index} className="course-card">
                            <div className={`course-card-icon-wrapper ${course.gradient}`}>
                                {course.icon}
                                <span className="course-card-category">{course.category}</span>
                            </div>
                            <div className="course-card-content">
                                <h3 className="course-card-title">{course.title}</h3>
                                <p className="course-card-details">{course.details}</p>
                                <div className="course-card-footer">
                                    <div className="course-card-rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f7941d" width="20px" height="20px"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                        <span>{course.rating}</span>
                                    </div>
                                    <a href="#" onClick={(e) => { e.preventDefault(); openRegisterModal(`تسجيل في: ${course.title}`, registrationSubtitle); }} className="btn btn-secondary course-card-cta">سجل الآن</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="view-all-courses-container">
                    <a href="#" className="btn btn-primary">عرض كل البرامج</a>
                </div>
            </div>
        </section>
        
        <section id="placement-test" className="section placement-test-section">
            <div className="container">
                <div className="placement-test-grid">
                    <div className="placement-test-image-wrapper">
                        <img src="https://i.imgur.com/AsJGA9j.png" alt="طالبة تتلقى المساعدة في اختبار تحديد المستوى" />
                    </div>
                    <div className="placement-test-content">
                        <h2 className="section-title" style={{textAlign: 'right'}}>ابدأ باختبار تحديد المستوى</h2>
                        <p className="section-subtitle" style={{textAlign: 'right', margin: '0 0 2.5rem 0'}}>اختبار قصير يساعدنا على تحديد نقطة البداية المثالية لك في رحلتك التعليمية معنا.</p>
                        <div className="placement-test-buttons">
                            <a href="#" className="btn btn-primary">اختبار المستوى الدراسي</a>
                            <a href="#" className="btn btn-secondary">اختبار مستوى اللغة العربية لغير الناطقين بها</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="how-it-works" className="section how-it-works-section">
            <div className="container">
                <h2 className="section-title">كيف تبدأ رحلتك معنا؟</h2>
                <p className="section-subtitle">ثلاث خطوات بسيطة للانضمام إلى منصتنا التعليمية وبدء التعلم.</p>
                <div className="how-it-works-grid">
                    <div className="how-it-works-card step-1">
                        <div className="step-label">الخطوة ١</div>
                        <div className="step-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40px" height="40px"><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                        </div>
                        <h3 className="step-title">سجل مجاناً</h3>
                        <p className="step-description">أنشئ حسابك المجاني في ثوان معدودة. العملية سهلة وسريعة ولا تحتاج سوى بياناتك الأساسية.</p>
                    </div>
                    <div className="how-it-works-card step-2">
                        <div className="step-label">الخطوة ٢</div>
                        <div className="step-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40px" height="40px"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                        </div>
                        <h3 className="step-title">اختبر مستواك</h3>
                        <p className="step-description">حدد مستواك الحالي في اللغة العربية عبر اختبار تفاعلي سريع ومجاني مصمم خصيصاً لك.</p>
                    </div>
                    <div className="how-it-works-card step-3">
                        <div className="step-label">الخطوة ٣</div>
                        <div className="step-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40px" height="40px"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
                        </div>
                        <h3 className="step-title">ابدأ التعلم!</h3>
                        <p className="step-description">انضم إلى دروسك المباشرة التفاعلية أو ابدأ التعلم من مكتبتنا الضخمة من المحتوى المسجل.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" className="section features-section">
            <div className="container features-container">
                <div className="features-image-wrapper">
                   <img src="https://i.imgur.com/eIIs9pA.png" alt="طلاب سعداء يتعلمون مع معلمتهم في منصة ضاد" />
                </div>
                <div className="features-content">
                    <h2 className="section-title" style={{textAlign: 'right'}}>لماذا تختار منصة ضاد؟</h2>
                    <p className="section-subtitle" style={{textAlign: 'right', margin: '0 0 2.5rem 0'}}>نقدم حلولاً تعليمية وعلاجية متكاملة مصممة خصيصاً لتحديات طلابنا.</p>
                    <ul className="features-list">
                        <li><span className="feature-check-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg></span>برامج تعليم تعويضي مسرّع للمنهاج السوري.</li>
                        <li><span className="feature-check-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg></span>دورات متخصصة في اللغة العربية لغير الناطقين بها.</li>
                        <li><span className="feature-check-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg></span>برامج دعم نفسي وعلاجي كنطق الكلام والاستشارات.</li>
                        <li><span className="feature-check-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg></span>خطط فردية للمساعدة في الاندماج الكامل بالمدارس السورية.</li>
                    </ul>
                </div>
            </div>
        </section>
        
        <section id="pre-footer-cta" className="section">
            <div className="container">
                <h2 className="section-title">هل لديك أي استفسار؟</h2>
                <p className="section-subtitle">فريقنا جاهز لمساعدتك في كل خطوة. لا تتردد في التواصل معنا الآن.</p>
                <div className="cta-button-container">
                  <button onClick={openContactModal} className="btn btn-primary">تواصل معنا الآن</button>
                </div>
            </div>
        </section>

      </main>
      
      <footer id="contact" className="app-footer">
        <div className="container">
          <div className="grid footer-grid">
            <div className="footer-column">
              <img src="https://i.imgur.com/J5f571C.png" alt="شعار منصة ضاد" className="footer-logo" />
              <p>منصة تعليمية متخصصة في مساعدة الطلاب السوريين على الاندماج الأكاديمي والاجتماعي من خلال برامج تعويضية وداعمة.</p>
            </div>
            <div className="footer-column">
              <h4>روابط سريعة</h4>
              <a href="#home" onClick={handleSmoothScroll}>الرئيسية</a>
              <a href="#classes" onClick={handleSmoothScroll}>الصفوف</a>
              <a href="#programs" onClick={handleSmoothScroll}>البرامج</a>
              <a href="#features" onClick={handleSmoothScroll}>لماذا نحن؟</a>
              <a href="#contact-us" onClick={(e) => { e.preventDefault(); openContactModal(); }}>تواصل معنا</a>
            </div>
            <div className="footer-column">
              <h4>تواصل معنا</h4>
              <p>دمشق، سوريا</p>
              <p>info@daad-platform.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} منصة ضاد التعليمية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
      
      {isRegisterModalOpen && (
        <div className="modal-overlay" onClick={closeRegisterModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeRegisterModal} aria-label="إغلاق">&times;</button>
            <h2 className="modal-title">
              {modalTitle.startsWith('تسجيل في: ') ? (
                  <>تسجيل في: <span>{courseName}</span></>
              ) : (
                  modalTitle
              )}
            </h2>
            <p className="modal-subtitle">{modalSubtitle}</p>
            <form className="registration-form" onSubmit={(e) => { e.preventDefault(); alert('تم استلام طلبك بنجاح!'); closeRegisterModal(); }}>
              <div className="form-group">
                <label htmlFor="studentName">الاسم الكامل</label>
                <input type="text" id="studentName" placeholder="مثال: أحمد محمد" required />
              </div>
              <div className="form-group">
                <label htmlFor="guardianName">اسم ولي الأمر (اختياري)</label>
                <input type="text" id="guardianName" placeholder="مثال: محمد الأحمد" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">رقم الهاتف (مع الرمز الدولي)</label>
                <input type="tel" id="phone" placeholder="مثال: 963912345678+" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني (اختياري)</label>
                <input type="email" id="email" placeholder="example@email.com" />
              </div>
              <button type="submit" className="btn btn-primary form-submit-btn">إرسال</button>
            </form>
          </div>
        </div>
      )}
      
      <button className="contact-fab" onClick={openContactModal} aria-label="تواصل معنا">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
      </button>

      {isContactModalOpen && (
        <div className="modal-overlay" onClick={closeContactModal}>
          <div className="modal-content contact-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="contact-grid">
              <div className="contact-form-wrapper">
                 <button className="modal-close-btn" onClick={closeContactModal} aria-label="إغلاق">&times;</button>
                <h3 className="contact-title">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
                  أرسل لنا رسالة
                </h3>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                   <div className="contact-form-group">
                    <input type="text" id="contactName" placeholder=" " required />
                    <label htmlFor="contactName">الاسم الكامل</label>
                    <span className="contact-form-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></span>
                  </div>
                  <div className="contact-form-group">
                    <input type="email" id="contactEmail" placeholder=" " required />
                    <label htmlFor="contactEmail">البريد الإلكتروني</label>
                    <span className="contact-form-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></span>
                  </div>
                  <div className="contact-form-group">
                    <input type="tel" id="contactWhatsapp" placeholder=" " required />
                    <label htmlFor="contactWhatsapp">رقم الواتساب</label>
                    <span className="contact-form-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 22.312c-.027.21.05.426.196.572.146.146.362.224.572.196l3.96-1.02a.987.987 0 0 0 .69-.37L19.2 6.96 14.04 1.8 1.312 14.528a.987.987 0 0 0-.37.69l-1.02 3.96-.003.002.001.001zm16.89-13.84-2.83-2.83.708-.707a2.5 2.5 0 0 1 3.535 0l.707.707a2.5 2.5 0 0 1 0 3.535l-.707.708z"/></svg></span>
                    <span className="contact-form-hint">مثال: 949123456</span>
                  </div>
                  <div className="contact-form-group">
                    <input type="text" id="contactSubject" placeholder=" " required />
                    <label htmlFor="contactSubject">موضوع الرسالة</label>
                    <span className="contact-form-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg></span>
                  </div>
                  <div className="contact-form-group">
                    <textarea id="contactMessage" placeholder=" " rows={4} required></textarea>
                    <label htmlFor="contactMessage">اكتب رسالتك هنا...</label>
                    <span className="contact-form-icon textarea-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-2 9H5V9h14v6z"/></svg></span>
                  </div>
                  <button type="submit" className="btn btn-contact-submit">
                    إرسال الرسالة
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                  </button>
                </form>
              </div>
              <div className="contact-info-wrapper">
                <button className="modal-close-btn" onClick={closeContactModal} aria-label="إغلاق">&times;</button>
                <h3 className="contact-title">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M12 1C6.48 1 2 5.48 2 11v1c0 .9.23 1.75.64 2.52l1.32 2.51L2.1 20.4c-.18.34-.11.75.17 1.03.28.28.69.35 1.03.17l3.32-1.85 2.5 1.31c.78.41 1.63.64 2.53.64 5.52 0 10-4.48 10-10S17.52 1 12 1zm0 18c-4.41 0-8-3.13-8-7s3.59-7 8-7 8 3.13 8 7-3.59 7-8 7z"/></svg>
                  تواصل معنا مباشرة
                </h3>
                <p className="contact-info-subtitle">نحن هنا للإجابة على جميع استفساراتك ومساعدتك في رحلتك التعليمية. لا تتردد في التواصل معنا عبر الطرق التالية:</p>
                <ul className="contact-details-list">
                  <li><span className="contact-detail-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></span>dhadedu4@gmail.com</li>
                  <li><span className="contact-detail-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></span>+905317386627</li>
                  <li><span className="contact-detail-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg></span>الأحد - الخميس (9:00 ص - 5:00 م)</li>
                </ul>
                <h4 className="social-links-title">تابعنا على وسائل التواصل</h4>
                <div className="social-links">
                  <a href="#" className="social-icon social-icon-whatsapp"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.02c-1.5 0-2.96-.36-4.29-1.05l-.3-.18-3.18.83.85-3.1-.2-.32c-.75-1.18-1.15-2.58-1.15-4.02 0-4.53 3.67-8.2 8.2-8.2 4.53 0 8.2 3.67 8.2 8.2s-3.67 8.2-8.2 8.2zm4.52-6.2c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.56.12c-.17.25-.64.82-.79.99-.14.17-.29.19-.54.07s-1.06-.39-2.02-1.25c-.75-.67-1.25-1.5-1.4-1.75s-.02-.38.1-.51c.12-.12.26-.32.39-.48.13-.17.17-.29.25-.49.08-.21 0-.38-.04-.51-.04-.12-.56-1.34-.76-1.84s-.4-.42-.55-.43c-.15 0-.32-.01-.48-.01s-.43.06-.66.31c-.23.25-.87.85-1.06 2.07s.24 2.82.27 3.02c.04.2 1.09 1.75 2.67 2.37.39.15.7.24.94.3.38.09.71.08.97-.05.29-.15.87-.56 1-.99.12-.43.12-.8.08-.92z"/></svg></a>
                  <a href="https://youtube.com/@dhadedu?si=WTCUJeYylCcTTEaP" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-youtube"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 15l5.2-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 5.04-.28 1.24-.9 2.1-1.9 2.62-1.19.6-3.16.89-5.66.9-3.21.03-5.22-.16-6.7-.58-1.48-.42-2.58-1.1-3.28-2.02C3.26 16.8 3 15.02 3 12c0-2.74.3-4.82.94-6.26.64-1.44 1.83-2.4 3.56-2.92 1.73-.52 4.1-.73 7.02-.73 2.82 0 5.04.25 6.48.74 1.44.49 2.47 1.35 3.08 2.58.61 1.23.94 2.95.94 5.16v.5z"/></svg></a>
                  <a href="https://www.instagram.com/dhadedu4?igsh=MWIxMDhweHpsYjh6dA==" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-instagram"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z"/></svg></a>
                  <a href="https://www.linkedin.com/company/%D8%B6%D8%A7%D8%AF-dhad/" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-linkedin"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 6H5v9h3V9zm-1.5-2.25a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3zM18 9h-2.5c-2 0-2.5 1-2.5 2.5V18h3v-5.09c0-1 .5-2 2-2s2 1 2 2V18h3v-5.5C21 10.5 19.5 9 18 9z"/></svg></a>
                  <a href="https://www.facebook.com/share/16ESACcfxJ/" target="_blank" rel="noopener noreferrer" className="social-icon social-icon-facebook"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"/></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}