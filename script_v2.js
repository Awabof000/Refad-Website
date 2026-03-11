// Data and translations
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_team: "Team",
        nav_contact: "Contact",
        nav_donate: "Donate",
        hero_badge: "Humanitarian Aid",
        hero_title: "Building a Supportive and Cooperative Society",
        hero_subtitle: "Refad Organization aims to provide humanitarian assistance to poor and vulnerable families to improve their living conditions.",
        btn_donate_now: "Donate Now",
        btn_learn_more: "Learn More",
        stat_food: "Food Baskets",
        stat_food_desc: "For poor families",
        stat_aid: "Humanitarian Aid",
        stat_aid_desc: "Continuous support",
        float_title: "Empowering Lives",
        float_desc: "Join our mission",
        about_title: "About Refad",
        mission_title: "Our Mission",
        mission_desc: "Refad seeks to create positive and sustainable change through implementing high-quality projects in the fields of relief, health, and education, focusing on supporting the most vulnerable groups among the displaced, refugees, and host communities through flexible and effective response strategies.",
        vision_title: "Our Vision",
        vision_desc: "Pioneering in providing sustainable developmental and humanitarian solutions that guarantee human dignity and develop local and regional communities.",
        values_title: "Strategic Goals",
        value_humanity: "Displacement & Refugee Response",
        value_cooperation: "Peaceful Coexistence",
        value_community: "Mobile Healthcare",
        hq_title: "Headquarters",
        projects_title: "Projects & Programs",
        tag_urgent: "Ongoing",
        tag_seasonal: "Seasonal",
        proj1_title: "Eye Treatment Camp - Bweyale / Kiryandongo",
        proj1_desc: "Refad Relief and Development Organization, in collaboration with Green Hands Organization and Pakistan Eye Hospital, implemented an eye treatment camp at Al-Shifa International Hospital in Bweyale. The camp served Sudanese refugees in Kiryandongo and the host community in Bweyale, providing examinations, treatments, and reading glasses. During Phase 1 (February 27-28 and March 1, 2026), 890 cases were treated. Phase 2 will involve surgeries for cataracts and other conditions at the Pakistan Hospital in Kampala. The camp received great acclaim for its vital service to the Sudanese refugee community.",
        proj2_title: "Circumcision Project",
        proj2_desc: "Refad Relief and Development Organization has begun a circumcision project for Sudanese displaced children in Kiryandongo District, Bweyale.",
        btn_support: "Support Project",
        team_title: "Our Team",
        team_name_1: "Mahmoud Ibrahim Ahmed",
        team_name_2: "Hamed Al-Numan",
        team_name_3: "Hamed Youssef Mahel",
        team_name_4: "Mohammed Abdul Rahman",
        login_title: "Protected Area",
        login_desc: "Please log in to view team members.",
        login_error: "Invalid credentials. Please try again.",
        btn_login: "Login",
        role_1: "Acting President of the Organization",
        role_2: "Financial Manager",
        role_3: "President",
        role_4: "Secretary General",
        donate_title: "Make a Difference Today",
        donate_desc: "Your contribution helps us provide essential food and support to those who need it most. Every donation matters.",
        donate_feat1: "Flexible donation methods",
        donate_feat2: "Direct impact on poor families",
        donate_box_title: "Support Our Causes",
        donate_box_desc: "Contact us to find out how you can send your support.",
        btn_contact_donate: "Contact to Donate",
        contact_title: "Contact Us",
        contact_location: "Uganda / Kiryandongo / Bweyale, South West Policy Center / formerly Sudanese House",
        contact_phone: "+249 12 306 8698 / +256 727 869517 / +256 761 295758",
        contact_email: "awabmahmoud0908743517@gmail.com / Organizerefad@gmail.com",
        form_title: "Send Us a Message",
        label_name: "Name",
        label_email: "Email",
        label_message: "Message",
        btn_send: "Send Message",
        footer_desc: "Humanity • Cooperation • Community Service",
        footer_rights: "All rights reserved."
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_projects: "المشاريع",
        nav_team: "الفريق",
        nav_contact: "اتصل بنا",
        nav_donate: "تبرع",
        hero_badge: "مساعدات إنسانية",
        hero_title: "لبناء مجتمع متكافل ومتعاون",
        hero_subtitle: "تهدف منظمة رفد إلى تقديم المساعدة الإنسانية للأسر الفقيرة والضعيفة لتحسين ظروفهم المعيشية.",
        btn_donate_now: "تبرع الآن",
        btn_learn_more: "اعرف المزيد",
        stat_food: "سلال غذائية",
        stat_food_desc: "للأسر الفقيرة",
        stat_aid: "مساعدات إنسانية",
        stat_aid_desc: "دعم مستمر",
        float_title: "تمكين الحياة",
        float_desc: "انضم لمهمتنا",
        about_title: "عن رفد",
        mission_title: "رسالتنا",
        mission_desc: "تسعى منظمة 'رفد' إلى إحداث تغيير إيجابي ومستدام من خلال تنفيذ مشاريع نوعية في مجالات الإغاثة، الصحة، والتعليم، مع التركيز على دعم الفئات الأكثر هشاشة من النازحين واللاجئين والمجتمعات المضيفة عبر استراتيجيات استجابة مرنة وفعالة.",
        vision_title: "رؤيتنا",
        vision_desc: "الريادة في تقديم الحلول التنموية والإنسانية المستدامة التي تضمن كرامة الإنسان وتنمي المجتمعات المحلية والإقليمية.",
        values_title: "الأهداف الإستراتيجية",
        value_humanity: "الاستجابة للنزوح واللجوء",
        value_cooperation: "تعزيز التعايش السلمي",
        value_community: "الرعاية الصحية المتنقلة",
        hq_title: "المقر الرئيسي",
        projects_title: "المشاريع والبرامج",
        tag_urgent: "مستمر",
        tag_seasonal: "موسمي",
        proj1_title: "مخيم علاج العيون - بيالي / معسكر كرياندنقو",
        proj1_desc: "قامت منظمة رفاد للإغاثة والتنمية بالتعاون مع منظمة السواعد الخضراء والمستشفى الباكستاني للعيون قامت بتنفيذ مخيم لعلاج العيون وذلك بمستشفى الشفاء الدولي بمدينة بيالي.. واشتمل المخيم على تقديم الخدمات للمراجعين من اللاجئين السودانيين بمعسكرات اللجوء بمقاطعة كرياندنقو والمجتمع المضيف بمدينة بيالي حيث قدمت خدمات الكشف على العيون وتوفير العلاج ومنح نظارات قراءة للمراجعين. وذلك حسب برنامج المرحلة الأولى. وذلك في الفترة من ٢٧ و٢٨ فبراير والأول من مارس ٢٠٢٦ حيث إستمرت الفترة لمدة ثلاثة أيام استقبلت فيها ٨٩٠ حالة تم الكشف عليها ومنحت علاجات للعيون تتمثل في قطر للعيون وشراب خاص بالالتهابات وعلاجات أخرى وأيضا تم منح نظارات قراءة للمراجعين. وفي المرحلة الثانية سيتم فيها اجراء عمليات المياه البيضاء والمياه السوداء وعمليات اللحمية والعمليات الأخرى الصغيرة وتم تحديد الأشخاص المحتاجين لذلك لاجراءها في المستشفى الباكستاني في كمبالا. وكان المخيم قد وجد صدى كبيرا وقدم خدمات جليلة لمجتمع اللاجئين السودانيين في معسكر كرياندنقو. وفي استطلاعات جانبية للمراجعين تحدثوا عن امتنانهم لمنظمة رفاد وشركائها للخدمة الجليلة التي قدمت لهم مؤكدين بأن المخيم كان ناجحا بدرجة عالية.",
        proj2_title: "مشروع الختان",
        proj2_desc: "بدأت منظمة ريفاد للإغاثة والتنمية في تنفيذ ختان أطفال النازحين السودانيين في مقاطعة كريناندقو بمدينة بيالي.",
        btn_support: "ادعم المشروع",
        team_title: "فريقنا",
        team_name_1: "محمود إبراهيم أحمد",
        team_name_2: "حامد النعمان",
        team_name_3: "حامد يوسف ماهل",
        team_name_4: "محمد عبد الرحمن",
        login_title: "منطقة محمية",
        login_desc: "الرجاء تسجيل الدخول لعرض أعضاء الفريق.",
        login_error: "بيانات الاعتماد غير صالحة. حاول مرة اخرى.",
        btn_login: "دخول",
        role_1: "رئيس المنظمة بالانابة",
        role_2: "المدير المالي",
        role_3: "الرئيس",
        role_4: "الأمين العام",
        donate_title: "أحدث فرقاً اليوم",
        donate_desc: "تساهم تبرعاتك في توفير الغذاء الأساسي والدعم لمن هم في أمس الحاجة إليه. كل تبرع يشكل فارقاً.",
        donate_feat1: "طرق تبرع مرنة",
        donate_feat2: "تأثير مباشر على الأسر الفقيرة",
        donate_box_title: "ادعم قضايانا",
        donate_box_desc: "اتصل بنا لمعرفة كيف يمكنك إرسال دعمك.",
        btn_contact_donate: "اتصل للتبرع",
        contact_title: "اتصل بنا",
        contact_location: "يوغندا / مقاطعة كرياندانقو / بيالي - جنوب غرب مركز الشرطة",
        contact_phone: "+249 12 306 8698 / +256 727 869517 / +256 761 295758",
        contact_email: "awabmahmoud0908743517@gmail.com / Organizerefad@gmail.com",
        form_title: "أرسل لنا رسالة",
        label_name: "الاسم",
        label_email: "البريد الإلكتروني",
        label_message: "الرسالة",
        btn_send: "إرسال الرسالة",
        footer_desc: "الإنسانية • التعاون • خدمة المجتمع",
        footer_rights: "جميع الحقوق محفوظة."
    }
};

// State
let currentLang = localStorage.getItem('refad_lang') || 'en';
let currentTheme = localStorage.getItem('refad_theme') || 'light';
let isTeamAuthenticated = sessionStorage.getItem('refad_auth') === 'true';
let isEditMode = false;
let customTranslations = JSON.parse(localStorage.getItem('refad_custom_translations')) || { en: {}, ar: {} };
let customMedia = JSON.parse(localStorage.getItem('refad_custom_media')) || {};
let projectCount = parseInt(localStorage.getItem('refad_project_count')) || 2;
let deletedProjects = JSON.parse(localStorage.getItem('refad_deleted_projects')) || [];
let currentlyEditingMediaKey = null;
let messages = JSON.parse(localStorage.getItem('refad_messages')) || [];
let cloudSync = JSON.parse(localStorage.getItem('refad_cloud_sync')) || { token: '', repo: '', path: 'refad-data.json', sha: '' };

// DOM Elements
const html = document.documentElement;
const langToggleBtn = document.getElementById('lang-toggle');
const themeToggleBtn = document.getElementById('theme-toggle');
const currentLangSpan = document.getElementById('current-lang');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.getElementById('navbar');
const mediaUploadInput = document.getElementById('media-upload-input');

// Initialize
function init() {
    setTheme(currentTheme);

    // Migration: Clear old overrides to ensure new content shows
    const migrationKey = 'refad_migration_v6';
    if (!localStorage.getItem(migrationKey)) {
        if (customTranslations) {
            const keysToClear = [
                'team_name_1', 'team_name_2', 'team_name_3', 'team_name_4',
                'role_1', 'role_2', 'role_3', 'role_4', 'role_tm', 'role_ed', 'role_bm',
                'mission_desc', 'vision_desc', 'value_humanity', 'value_cooperation', 'value_community',
                'proj1_desc', 'proj1_title', 'proj2_desc', 'proj2_title', 'tag_urgent', 'tag_seasonal',
                'about_title', 'mission_title', 'vision_title', 'values_title', 'hero_subtitle'
            ];
            if (customTranslations.ar) keysToClear.forEach(k => delete customTranslations.ar[k]);
            if (customTranslations.en) keysToClear.forEach(k => delete customTranslations.en[k]);
            localStorage.setItem('refad_custom_translations', JSON.stringify(customTranslations));
        }
        localStorage.setItem(migrationKey, 'done');
    }

    // Check for sync parameters in URL (GitHub specific)
    const urlParams = new URLSearchParams(window.location.search);
    const syncRepo = urlParams.get('sync_repo');
    const syncToken = urlParams.get('sync_token');

    if (syncRepo && syncToken) {
        cloudSync = { token: syncToken, repo: syncRepo, path: 'refad-data.json', sha: '' };
        localStorage.setItem('refad_cloud_sync', JSON.stringify(cloudSync));
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    applyDeletedProjects();
    renderCustomProjects();
    setLanguage(currentLang);
    loadCustomMedia();
    setupEventListeners();
}

function applyDeletedProjects() {
    deletedProjects.forEach(id => {
        const card = document.getElementById(`project-card-${id}`);
        if (card) card.remove();
    });
}

function renderCustomProjects() {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;

    // Clear any existing dynamically injected custom cards
    const existingCustom = grid.querySelectorAll('.custom-project-card');
    existingCustom.forEach(c => c.remove());

    for (let i = 3; i <= projectCount; i++) {
        if (deletedProjects.includes(i)) continue;

        const card = document.createElement('div');
        card.className = 'project-card custom-project-card';
        card.id = `project-card-${i}`;
        card.innerHTML = `
            <div class="project-img" data-media-id="project_img_${i}">
                <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="New Project">
                <div class="project-tag" data-i18n="tag_proj_${i}">New Project</div>
            </div>
            <div class="project-content" style="position: relative;">
                <button class="delete-project-btn hidden btn btn-primary" data-project-id="${i}" style="position: absolute; top: 1rem; right: 1rem; background: #e74c3c; border:none; padding: 0.3rem 0.8rem; font-size: 0.8rem; z-index: 10;"><i class="fa-solid fa-trash"></i></button>
                <h3 data-i18n="proj${i}_title">Custom Project Title</h3>
                <p data-i18n="proj${i}_desc">Description of the new project goes here. Click to edit.</p>
                <a href="#donate" class="btn btn-outline" data-i18n="btn_support_${i}">Support Project</a>
            </div>
        `;
        grid.appendChild(card);
    }
}

// Media Logic
function loadCustomMedia() {
    document.querySelectorAll('[data-media-id]').forEach(el => {
        const key = el.getAttribute('data-media-id');
        if (customMedia[key]) {
            renderMedia(el, customMedia[key]);
        }
    });
}

function renderMedia(container, url) {
    if (!url) return;

    // Store original icon HTML if not already stored so we can revert if needed
    if (!container.hasAttribute('data-original-html')) {
        container.setAttribute('data-original-html', container.innerHTML);
    }

    container.innerHTML = '';
    container.style.background = 'transparent';

    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        let videoId = "";
        if (url.includes('v=')) videoId = url.split('v=')[1].split('&')[0];
        else if (url.includes('youtu.be/')) videoId = url.split('youtu.be/')[1].split('?')[0];

        container.innerHTML = `<iframe width="100%" height="100%" style="border-radius:inherit; pointer-events:none;" src="https://www.youtube.com/embed/${videoId}?autoplay=0&controls=0&showinfo=0&autohide=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    } else if (url.match(/\.(mp4|webm|mov)$/i) || url.startsWith('data:video/')) {
        container.innerHTML = `<video src="${url}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" autoplay muted loop playsinline></video>`;
    } else {
        container.innerHTML = `<img src="${url}" alt="Media" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;
    }
}

// Language Logic
function setLanguage(lang) {
    currentLang = lang;
    html.lang = lang;
    localStorage.setItem('refad_lang', lang);
    currentLangSpan.textContent = lang === 'en' ? 'AR' : 'EN';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        // Prefer custom translation, fallback to default
        let text = "";
        if (customTranslations[lang] && customTranslations[lang][key]) {
            text = customTranslations[lang][key];
        } else if (translations[lang] && translations[lang][key]) {
            text = translations[lang][key];
        }

        if (text) {
            el.textContent = text;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        let phText = "";
        if (customTranslations[lang] && customTranslations[lang][key]) {
            phText = customTranslations[lang][key];
        } else if (translations[lang] && translations[lang][key]) {
            phText = translations[lang][key];
        }

        if (phText) {
            el.placeholder = phText;
        }
    });
}

// Theme Logic
function setTheme(theme) {
    currentTheme = theme;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('refad_theme', theme);
    const icon = themeToggleBtn.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
}

// Auth Logic (Team Section)
function checkAuthStatus() {
    const loginWrapper = document.getElementById('team-login');
    const teamContent = document.getElementById('team-content');

    if (isTeamAuthenticated) {
        loginWrapper.classList.add('hidden');
        teamContent.classList.remove('hidden');
        // Small delay to allow CSS display:block to apply before adding opacity class
        setTimeout(() => {
            teamContent.classList.add('visible');
            ensureAdminControls();
        }, 50);
    } else {
        loginWrapper.classList.remove('hidden');
        teamContent.classList.add('hidden');
        teamContent.classList.remove('visible');
        removeAdminControls();
    }
}

function handleLogin(e) {
    e.preventDefault();
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('login-error');

    if (usernameInput === 'refadorg' && passwordInput === 'Refad09890@') {
        isTeamAuthenticated = true;
        sessionStorage.setItem('refad_auth', 'true');
        errorMsg.style.display = 'none';
        checkAuthStatus();
        document.getElementById('login-form').reset();
    } else {
        errorMsg.style.display = 'block';
        // Add visual shake
        const box = document.querySelector('.login-box');
        box.style.transform = 'translateX(-10px)';
        setTimeout(() => box.style.transform = 'translateX(10px)', 100);
        setTimeout(() => box.style.transform = 'translateX(-10px)', 200);
        setTimeout(() => box.style.transform = 'translateX(0)', 300);
    }
}

// Event Listeners
function setupEventListeners() {
    // Toggles
    langToggleBtn.addEventListener('click', () => {
        setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });

    themeToggleBtn.addEventListener('click', () => {
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
    });

    // Mobile Menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').className = 'fa-solid fa-bars';
        });
    });

    // Project Deletion Event Delegation
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.addEventListener('click', function (e) {
            const btn = e.target.closest('.delete-project-btn');
            if (btn) {
                e.stopPropagation();
                if (confirm("Are you sure you want to delete this project?")) {
                    const id = parseInt(btn.getAttribute('data-project-id'));
                    if (!deletedProjects.includes(id)) {
                        deletedProjects.push(id);
                        localStorage.setItem('refad_deleted_projects', JSON.stringify(deletedProjects));
                    }
                    const cardToRemove = document.getElementById(`project-card-${id}`);
                    if (cardToRemove) cardToRemove.remove();

                    if (customTranslations['en'] && customTranslations['en'][`tag_proj_${id}`]) {
                        delete customTranslations['en'][`tag_proj_${id}`];
                    }
                    if (customTranslations['ar'] && customTranslations['ar'][`tag_proj_${id}`]) {
                        delete customTranslations['ar'][`tag_proj_${id}`];
                    }
                }
            }
        });
    }

    if (mediaUploadInput) {
        mediaUploadInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (!file || !currentlyEditingMediaKey) return;

            const reader = new FileReader();
            reader.onload = function (event) {
                const url = event.target.result; // the base64 data URI

                customMedia[currentlyEditingMediaKey] = url;

                try {
                    localStorage.setItem('refad_custom_media', JSON.stringify(customMedia));
                } catch (err) {
                    alert("File is too large to save continuously! Please try a smaller image/video, or use a URL link.");
                    delete customMedia[currentlyEditingMediaKey];
                    // Clean up input
                    mediaUploadInput.value = '';
                    currentlyEditingMediaKey = null;
                    return;
                }

                // Re-render
                document.querySelectorAll(`[data-media-id="${currentlyEditingMediaKey}"]`).forEach(el => {
                    renderMedia(el, url);
                });

                // Clear input
                mediaUploadInput.value = '';
                currentlyEditingMediaKey = null;
            };

            reader.readAsDataURL(file);
        });
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Login Form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';

            const nameVal = document.getElementById('name').value.trim();
            const emailVal = document.getElementById('email').value.trim();
            const messageVal = document.getElementById('message').value.trim();

            // Save to localStorage inbox
            const msg = {
                id: Date.now(),
                name: nameVal,
                email: emailVal,
                message: messageVal,
                time: new Date().toLocaleString(),
                read: false
            };
            messages.unshift(msg);
            localStorage.setItem('refad_messages', JSON.stringify(messages));

            // Update inbox badge if admin is logged in
            renderInbox();

            // Open mailto to actually send the email as requested
            const subject = encodeURIComponent(`Message from ${nameVal} via Refad Org Website`);
            const body = encodeURIComponent(`Name: ${nameVal}\nEmail: ${emailVal}\n\nMessage:\n${messageVal}`);
            window.location.href = `mailto:awabmahmoud0908743517@gmail.com,Organizerefad@gmail.com?subject=${subject}&body=${body}`;

            setTimeout(() => {
                btn.textContent = currentLang === 'en' ? 'Opening Email Client...' : 'جاري فتح البريد...';
                btn.style.backgroundColor = '#2ecc71';
                contactForm.reset();
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                }, 3000);
            }, 1000);
        });
    }
}

// Admin Edit Logic
function ensureAdminControls() {
    if (document.getElementById('admin-controls')) return;

    const teamSection = document.getElementById('team');
    const container = teamSection.querySelector('.container');

    const adminDiv = document.createElement('div');
    adminDiv.id = 'admin-controls';
    adminDiv.className = 'admin-panel glass-panel mb-4';
    adminDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
                <h4 style="color: var(--accent); margin-bottom: 0.5rem;"><i class="fa-solid fa-pen-to-square"></i> Admin Panel</h4>
                <p style="margin-bottom:0; font-size:0.9rem;">Toggle edit mode to click and change text across the site.</p>
            </div>
            <div style="display: flex; gap: 0.8rem; flex-wrap: wrap; justify-content: flex-end;">
                <button id="add-project-btn" class="btn btn-secondary hidden" style="padding: 0.5rem 1rem;">Add Project <i class="fa-solid fa-plus"></i></button>
                <button id="save-all-btn" class="btn hidden" style="padding: 0.5rem 1rem; background: #2ecc71; border: none; color: #fff;"><i class="fa-solid fa-floppy-disk"></i> Save All</button>
                <button id="export-data-btn" class="btn hidden" style="padding: 0.5rem 1rem; background: #3498db; border: none; color: #fff;"><i class="fa-solid fa-file-export"></i> Export</button>
                <button id="import-data-btn" class="btn hidden" style="padding: 0.5rem 1rem; background: #9b59b6; border: none; color: #fff;"><i class="fa-solid fa-file-import"></i> Import</button>
                <button id="toggle-edit-mode" class="btn btn-outline" style="padding: 0.5rem 1rem;">Enable Edit Mode</button>
                <button id="logout-btn" class="btn btn-primary" style="padding: 0.5rem 1rem; background-color: #e74c3c; border:none;">Log Out</button>
            </div>
        </div>
        <!-- Inbox -->
        <div id="admin-inbox" style="margin-top: 1.5rem; border-top: 1px solid var(--border); padding-top: 1.5rem;">
            <h4 style="margin-bottom: 1rem;"><i class="fa-solid fa-inbox" style="color: var(--accent);"></i> Contact Messages <span id="inbox-badge" style="background: #e74c3c; color: #fff; padding: 2px 8px; border-radius: 50px; font-size: 0.75rem; margin-left: 6px;"></span></h4>
            <div id="inbox-list"></div>
        </div>
        <!-- Cloud Sync -->
        <div style="margin-top: 1.5rem; border-top: 1px solid var(--border); padding-top: 1.5rem;">
            <h4 style="margin-bottom: 0.5rem;"><i class="fa-solid fa-cloud" style="color: #3498db;"></i> Cloud Sync <span id="cloud-sync-status" style="font-size:0.75rem; margin-left: 8px;"></span></h4>
            <p style="font-size:0.85rem; margin-bottom: 1rem;">Connect to GitHub so changes appear in <strong>every browser & device</strong> (100MB limit).</p>
            
            <div id="cloud-setup-area" style="display: flex; gap: 0.8rem; flex-wrap: wrap; align-items: flex-end; margin-bottom: 1rem;">
                <div style="flex: 2; min-width: 180px;">
                    <label style="font-size:0.8rem; display:block; margin-bottom:4px;">GitHub Personal Access Token</label>
                    <input id="cloud-token" type="password" placeholder="ghp_..." value="${cloudSync.token}" style="width:100%; padding:0.5rem; border:1px solid var(--border); border-radius:8px; background:var(--bg-alt); color:var(--text-main); font-size:0.85rem;">
                </div>
                <div style="flex: 1; min-width: 150px;">
                    <label style="font-size:0.8rem; display:block; margin-bottom:4px;">Repo (user/repo)</label>
                    <input id="cloud-repo" type="text" placeholder="username/refad-data" value="${cloudSync.repo}" style="width:100%; padding:0.5rem; border:1px solid var(--border); border-radius:8px; background:var(--bg-alt); color:var(--text-main); font-size:0.85rem;">
                </div>
                <button id="cloud-connect-btn" class="btn" style="padding: 0.5rem 1.2rem; background: #3498db; border:none; color:#fff; white-space:nowrap;"><i class="fa-solid fa-plug"></i> Connect</button>
            </div>

            <div id="cloud-connected-area" class="hidden" style="background: rgba(52, 152, 219, 0.1); padding: 1rem; border-radius: 12px; border: 1px solid rgba(52, 152, 219, 0.2);">
                <p style="font-size: 0.9rem; margin-bottom: 0.8rem;"><strong>GitHub Connected!</strong> Edits push to <code>${cloudSync.repo}/${cloudSync.path}</code>.</p>
                <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
                    <button id="copy-sync-link-btn" class="btn" style="padding: 0.5rem 1rem; background: var(--accent); border:none; color:#000; font-size: 0.85rem;"><i class="fa-solid fa-link"></i> Copy Sync Link</button>
                    <button id="cloud-disconnect-btn" class="btn" style="padding: 0.5rem 1rem; background: transparent; border: 1px solid #e74c3c; color:#e74c3c; font-size: 0.85rem;">Disconnect</button>
                </div>
            </div>
        </div>
    `;

    container.insertBefore(adminDiv, document.getElementById('team-content'));
    renderInbox();
    updateCloudStatusUI();

    document.getElementById('cloud-connect-btn').addEventListener('click', async function () {
        const token = document.getElementById('cloud-token').value.trim();
        const repo = document.getElementById('cloud-repo').value.trim();
        if (!token || !repo) { showToast('❌ Token and Repo are required.', '#e74c3c'); return; }

        this.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Connecting...';
        this.disabled = true;

        cloudSync = { token, repo, path: 'refad-data.json', sha: '' };
        localStorage.setItem('refad_cloud_sync', JSON.stringify(cloudSync));

        const ok = await loadFromCloud();
        if (ok) {
            showToast('✅ Connected! GitHub data loaded.', '#3498db');
        } else {
            // If load fails, maybe it's a new repo/file, try pushing initial data
            const pushed = await saveToCloud();
            if (pushed) showToast('✅ Connected! Initialized cloud file.', '#3498db');
            else showToast('❌ Connection failed. Check Token & Repo.', '#e74c3c');
        }

        this.innerHTML = '<i class="fa-solid fa-plug"></i> Connect';
        this.disabled = false;
        updateCloudStatusUI();
    });

    document.getElementById('copy-sync-link-btn').addEventListener('click', function () {
        const link = generateSyncLink();
        if (link) {
            navigator.clipboard.writeText(link).then(() => {
                showToast('📋 Sync Link copied to clipboard!');
            });
        }
    });

    document.getElementById('cloud-disconnect-btn').addEventListener('click', function () {
        if (confirm("Disconnect from cloud? Data will only stay on this browser.")) {
            cloudSync = { binId: '', apiKey: '' };
            localStorage.setItem('refad_cloud_sync', JSON.stringify(cloudSync));
            updateCloudStatusUI();
            showToast('☁️ Cloud disconnected.');
        }
    });


    document.getElementById('logout-btn').addEventListener('click', function () {
        if (isEditMode) {
            isEditMode = false;
            toggleContentEditable();
        }
        isTeamAuthenticated = false;
        sessionStorage.setItem('refad_auth', 'false');
        checkAuthStatus();
        window.scrollTo({ top: document.getElementById('team').offsetTop - 100, behavior: 'smooth' });
    });

    document.getElementById('save-all-btn').addEventListener('click', function () {
        saveAllChanges();
    });

    document.getElementById('export-data-btn').addEventListener('click', function () {
        exportData();
    });

    document.getElementById('import-data-btn').addEventListener('click', function () {
        importData();
    });

    document.getElementById('toggle-edit-mode').addEventListener('click', function () {
        isEditMode = !isEditMode;
        this.textContent = isEditMode ? 'Disable Edit Mode' : 'Enable Edit Mode';
        this.classList.toggle('btn-primary');
        this.classList.toggle('btn-outline');

        toggleContentEditable();
    });

    document.getElementById('add-project-btn').addEventListener('click', function () {
        projectCount++;
        localStorage.setItem('refad_project_count', projectCount);
        renderCustomProjects();
        setLanguage(currentLang);
        loadCustomMedia();
        if (isEditMode) {
            // Re-run this to attach the event listeners to the new DOM elements
            isEditMode = false;
            toggleContentEditable();
            isEditMode = true;
            toggleContentEditable();
        }
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
}

function removeAdminControls() {
    const adminDiv = document.getElementById('admin-controls');
    if (adminDiv) adminDiv.remove();
    isEditMode = false;
    toggleContentEditable();
}

function renderInbox() {
    const list = document.getElementById('inbox-list');
    const badge = document.getElementById('inbox-badge');
    if (!list) return;

    const unread = messages.filter(m => !m.read).length;
    if (badge) badge.textContent = unread > 0 ? unread + ' new' : '';

    if (messages.length === 0) {
        list.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">No messages yet. Messages from the Contact form will appear here.</p>`;
        return;
    }

    list.innerHTML = messages.map(msg => `
        <div data-msg-id="${msg.id}" style="
            background: var(--bg-alt);
            border: 1px solid ${msg.read ? 'var(--border)' : 'var(--accent)'};
            border-radius: 12px;
            padding: 1.2rem 1.5rem;
            margin-bottom: 1rem;
            position: relative;
        ">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 0.5rem;">
                <div>
                    <strong style="font-size: 1rem;">${escapeHtml(msg.name)}</strong>
                    ${!msg.read ? '<span style="background:#e74c3c;color:#fff;padding:2px 8px;border-radius:50px;font-size:0.7rem;margin-left:6px;">NEW</span>' : ''}
                    <br>
                    <a href="mailto:${escapeHtml(msg.email)}" style="font-size:0.85rem; color: var(--accent);">${escapeHtml(msg.email)}</a>
                    <span style="font-size:0.75rem; color: var(--text-muted); margin-left: 1rem;">${msg.time}</span>
                </div>
                <div style="display:flex; gap: 0.5rem;">
                    ${!msg.read ? `<button onclick="markRead(${msg.id})" style="background:var(--primary);color:#fff;border:none;padding:4px 10px;border-radius:8px;cursor:pointer;font-size:0.8rem;"><i class='fa-solid fa-check'></i> Mark Read</button>` : ''}
                    <button onclick="deleteMessage(${msg.id})" style="background:#e74c3c;color:#fff;border:none;padding:4px 10px;border-radius:8px;cursor:pointer;font-size:0.8rem;"><i class='fa-solid fa-trash'></i></button>
                </div>
            </div>
            <p style="margin-top:0.8rem; margin-bottom:0; white-space: pre-wrap;">${escapeHtml(msg.message)}</p>
        </div>
    `).join('');
}

function markRead(id) {
    messages = messages.map(m => m.id === id ? { ...m, read: true } : m);
    localStorage.setItem('refad_messages', JSON.stringify(messages));
    renderInbox();
}

function deleteMessage(id) {
    messages = messages.filter(m => m.id !== id);
    localStorage.setItem('refad_messages', JSON.stringify(messages));
    renderInbox();
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function toggleContentEditable() {
    const addProjBtn = document.getElementById('add-project-btn');
    const saveAllBtn = document.getElementById('save-all-btn');
    const exportBtn = document.getElementById('export-data-btn');
    const importBtn = document.getElementById('import-data-btn');

    [addProjBtn, saveAllBtn, exportBtn, importBtn].forEach(btn => {
        if (!btn) return;
        if (isEditMode) btn.classList.remove('hidden');
        else btn.classList.add('hidden');
    });

    // toggle delete buttons
    document.querySelectorAll('.delete-project-btn').forEach(btn => {
        if (isEditMode) btn.classList.remove('hidden');
        else btn.classList.add('hidden');
    });

    // text elements
    const editableElements = document.querySelectorAll('[data-i18n]');
    editableElements.forEach(el => {
        if (isEditMode) {
            el.setAttribute('contenteditable', 'true');
            el.classList.add('editable-active');

            // Remove old listener to avoid duplicates, then add new one
            el.removeEventListener('blur', saveEdit);
            el.addEventListener('blur', saveEdit);
        } else {
            el.removeAttribute('contenteditable');
            el.classList.remove('editable-active');
            el.removeEventListener('blur', saveEdit);
        }
    });

    // media elements
    const mediaElements = document.querySelectorAll('[data-media-id]');
    mediaElements.forEach(el => {
        if (isEditMode) {
            el.classList.add('media-editable-active');
            el.removeEventListener('click', handleMediaEdit);
            el.addEventListener('click', handleMediaEdit);
            // Re-enable pointer events on the iframe inside the container if it's there? 
            // Better yet, in edit mode we want clicking on the container to trigger edit instead.
            // Pointer-events: none is set directly on iframe during render for safety during edit mode anyway.
        } else {
            el.classList.remove('media-editable-active');
            el.removeEventListener('click', handleMediaEdit);
        }
    });

    if (isEditMode) {
        document.body.classList.add('editing-active');
    } else {
        document.body.classList.remove('editing-active');
    }
}

function handleMediaEdit(e) {
    if (!isEditMode) return;

    e.preventDefault();
    e.stopPropagation();

    const el = e.currentTarget;
    const key = el.getAttribute('data-media-id');

    // Check if what they want to do is clear the media
    if (customMedia[key]) {
        if (confirm("Would you like to remove the custom media and revert back to default? \n\nClick OK to revert. Click Cancel to upload a new file.")) {
            delete customMedia[key];
            localStorage.setItem('refad_custom_media', JSON.stringify(customMedia));
            if (el.hasAttribute('data-original-html')) {
                el.innerHTML = el.getAttribute('data-original-html');
                el.style.background = ''; // reset to original css background
                el.removeAttribute('data-original-html');
            }
            return;
        }
    }

    // Start local file upload process
    currentlyEditingMediaKey = key;
    if (mediaUploadInput) {
        mediaUploadInput.click();
    }
}

function saveEdit(e) {
    const el = e.target;
    const key = el.getAttribute('data-i18n');
    const newText = el.textContent.trim();

    if (!customTranslations[currentLang]) {
        customTranslations[currentLang] = {};
    }

    customTranslations[currentLang][key] = newText;
    localStorage.setItem('refad_custom_translations', JSON.stringify(customTranslations));

    // Optional: add a tiny visual feedback that save worked
    el.style.backgroundColor = 'rgba(46, 204, 113, 0.2)';
    setTimeout(() => {
        el.style.backgroundColor = '';
    }, 500);
}

async function saveAllChanges() {
    // Force save any currently-open contenteditable fields
    if (!customTranslations[currentLang]) customTranslations[currentLang] = {};

    document.querySelectorAll('[data-i18n][contenteditable]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = el.textContent.trim();
        if (text) {
            customTranslations[currentLang][key] = text;
        }
    });

    // Save locally
    localStorage.setItem('refad_custom_translations', JSON.stringify(customTranslations));
    localStorage.setItem('refad_custom_media', JSON.stringify(customMedia));
    localStorage.setItem('refad_project_count', projectCount);
    localStorage.setItem('refad_deleted_projects', JSON.stringify(deletedProjects));

    // Auto-push to cloud if configured
    if (cloudSync.binId && cloudSync.apiKey) {
        showToast('⏳ Saving to cloud...', '#3498db');
        const ok = await saveToCloud();
        if (ok) {
            showToast('✅ Saved locally & to cloud!');
        } else {
            showToast('⚠️ Saved locally, but cloud push failed.', '#e67e22');
        }
    } else {
        showToast('✅ Saved locally!');
    }
}

function showToast(message, color) {
    const toast = document.getElementById('save-toast');
    if (!toast) return;
    toast.querySelector('span').textContent = message || 'Saved!';
    toast.style.background = color || '#2ecc71';
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
    toast.style.pointerEvents = 'auto';

    clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
        toast.style.transform = 'translateY(150%)';
        toast.style.opacity = '0';
        toast.style.pointerEvents = 'none';
    }, 3000);
}

function exportData() {
    saveAllChanges(); // ensure everything is current
    const payload = {
        refad_custom_translations: customTranslations,
        refad_custom_media: customMedia,
        refad_project_count: projectCount,
        refad_deleted_projects: deletedProjects
    };
    const json = JSON.stringify(payload);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'refad_site_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('📦 Data exported! Open the file to share.', '#3498db');
}

function importData() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json,application/json';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
    fileInput.click();
    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                const data = JSON.parse(e.target.result);
                if (data.refad_custom_translations) {
                    customTranslations = data.refad_custom_translations;
                    localStorage.setItem('refad_custom_translations', JSON.stringify(customTranslations));
                }
                if (data.refad_custom_media) {
                    customMedia = data.refad_custom_media;
                    localStorage.setItem('refad_custom_media', JSON.stringify(customMedia));
                }
                if (data.refad_project_count !== undefined) {
                    projectCount = data.refad_project_count;
                    localStorage.setItem('refad_project_count', projectCount);
                }
                if (data.refad_deleted_projects) {
                    deletedProjects = data.refad_deleted_projects;
                    localStorage.setItem('refad_deleted_projects', JSON.stringify(deletedProjects));
                }
                // Re-render everything
                applyDeletedProjects();
                renderCustomProjects();
                setLanguage(currentLang);
                loadCustomMedia();
                showToast('✅ Data imported successfully!', '#9b59b6');
            } catch (err) {
                showToast('❌ Invalid file. Please use an exported Refad JSON file.', '#e74c3c');
            }
        };
        reader.readAsText(file);
        document.body.removeChild(fileInput);
    });
}

// Run on load
document.addEventListener('DOMContentLoaded', init);

// ─── Cloud Sync (GitHub API) ────────────────────────────────────────────────

function buildCloudPayload() {
    return {
        refad_custom_translations: customTranslations,
        refad_custom_media: customMedia,
        refad_project_count: projectCount,
        refad_deleted_projects: deletedProjects
    };
}

async function saveToCloud() {
    if (!cloudSync.token || !cloudSync.repo) return false;
    try {
        const payload = buildCloudPayload();
        const content = b64EncodeUnicode(JSON.stringify(payload, null, 2));

        const url = `https://api.github.com/repos/${cloudSync.repo}/contents/${cloudSync.path}`;
        const body = {
            message: 'Update Refad site data',
            content: content
        };
        if (cloudSync.sha) body.sha = cloudSync.sha;

        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${cloudSync.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            console.error('GitHub Push Error:', res.status, err);
            // If SHA is out of sync, force a re-load next time
            if (res.status === 409) {
                await loadFromCloud();
                return await saveToCloud(); // retry once after loading correct SHA
            }
            return false;
        }

        const data = await res.json();
        cloudSync.sha = data.content.sha;
        localStorage.setItem('refad_cloud_sync', JSON.stringify(cloudSync));
        return true;
    } catch (err) {
        console.error('GitHub Sync Fetch Error:', err);
        return false;
    }
}

async function loadFromCloud() {
    if (!cloudSync.token || !cloudSync.repo) return false;
    try {
        const url = `https://api.github.com/repos/${cloudSync.repo}/contents/${cloudSync.path}`;
        const res = await fetch(url, {
            headers: { 'Authorization': `token ${cloudSync.token}` }
        });
        if (!res.ok) return false;

        const data = await res.json();
        cloudSync.sha = data.sha;
        localStorage.setItem('refad_cloud_sync', JSON.stringify(cloudSync));

        const decoded = decodeURIComponent(atob(data.content).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
        const record = JSON.parse(decoded);
        applyCloudData(record);
        return true;
    } catch (err) {
        console.error('GitHub Load Error:', err);
        return false;
    }
}

function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode('0x' + p1)));
}

function applyCloudData(data) {
    if (!data) return;
    if (data.refad_custom_translations) {
        customTranslations = data.refad_custom_translations;
        localStorage.setItem('refad_custom_translations', JSON.stringify(customTranslations));
    }
    if (data.refad_custom_media) {
        customMedia = data.refad_custom_media;
        localStorage.setItem('refad_custom_media', JSON.stringify(customMedia));
    }
    if (data.refad_project_count !== undefined) {
        projectCount = data.refad_project_count;
        localStorage.setItem('refad_project_count', projectCount);
    }
    if (data.refad_deleted_projects) {
        deletedProjects = data.refad_deleted_projects;
        localStorage.setItem('refad_deleted_projects', JSON.stringify(deletedProjects));
    }
    // Re-render with new data
    applyDeletedProjects();
    renderCustomProjects();
    setLanguage(currentLang);
    loadCustomMedia();
}

function updateCloudStatusUI() {
    const status = document.getElementById('cloud-sync-status');
    const setupArea = document.getElementById('cloud-setup-area');
    const connectedArea = document.getElementById('cloud-connected-area');

    if (!status) return;

    if (cloudSync.binId) {
        status.innerHTML = `<span style="background:#2ecc71;color:#fff;padding:2px 8px;border-radius:50px;">✓ Connected</span>`;
        if (setupArea) setupArea.classList.add('hidden');
        if (connectedArea) connectedArea.classList.remove('hidden');
    } else {
        status.innerHTML = `<span style="background:#e74c3c;color:#fff;padding:2px 8px;border-radius:50px;">Not Connected</span>`;
        if (setupArea) setupArea.classList.remove('hidden');
        if (connectedArea) connectedArea.classList.add('hidden');
    }
}

function generateSyncLink() {
    if (!cloudSync.token || !cloudSync.repo) return null;
    const url = new URL(window.location.href);
    url.searchParams.set('sync_repo', cloudSync.repo);
    url.searchParams.set('sync_token', cloudSync.token);
    return url.toString();
}
