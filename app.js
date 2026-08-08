(() => {
  const app = document.getElementById("app");
  const STORAGE_KEY = "mfiJourneyStateV1";
  const todayKey = () => new Date().toISOString().slice(0, 10);

  const copy = {
    en: {
      home: "Home",
      stories: "Stories",
      duas: "Duas",
      salah: "Salah Tracker",
      pillars: "Pillars",
      manners: "Manners",
      calendar: "Calendar",
      parent: "Parent Dashboard",
      brand: "My First Islamic Journey",
      brandAr: "رحلة الإسلام الأولى",
      greeting: "Hello, Little Zezo!",
      salam: "Assalamu Alaikum!",
      progress: "Your Progress",
      stars: "stars",
      great: "You're doing great!",
      todaysStory: "Today's Story",
      play: "Play",
      moral: "Moral lesson",
      showMoral: "Show moral",
      listenFallback: "Read aloud",
      audioHint: "Add MP3 files to assets/audio for recorded playback. Read aloud works now.",
      localVideoHint: "Stories imported from your PDF. Add MP4 files in assets/videos later for video playback.",
      sourcePages: "PDF pages",
      zezoMoment: "Little Zezo & Adam!",
      zezoName: "Little Zezo",
      adamName: "Cousin Adam",
      zezoMediaHint: "Personal photos and video from Zezo and cousin Adam's journey.",
      openVideo: "Open video",
      storyActivity: "Story activity",
      trueFalsePrompt: "True or false",
      shortQuestion: "Question",
      videoComing: "Video can be added later. This story is ready now with a PDF thumbnail, gallery, audio fallback, and activity.",
      storyGallery: "Image gallery",
      chooseStory: "Choose a story",
      duasIntro: "Tap any card to listen and learn the meaning.",
      checkToday: "Check today's prayers",
      weeklyReport: "Weekly report",
      complete: "Complete",
      dragTitle: "Put the Five Pillars in order",
      dropHere: "Drop here",
      checkAnswers: "Check answers",
      resetGame: "Reset",
      correct: "Correct!",
      tryAgain: "Try again",
      quizTitle: "Quick quiz",
      quizQuestion: "Which one is one of the Five Pillars of Islam?",
      gardenTitle: "Good Manners Garden",
      gardenIntro: "Finish daily challenges to grow flowers.",
      done: "Done",
      hijriDate: "Hijri date",
      countdown: "Countdown",
      funFacts: "Fun facts",
      parentPin: "Enter parent PIN",
      pinHelp: "Default PIN is 1234 for local testing.",
      wrongPin: "Wrong PIN. Try again.",
      dashboardIntro: "Progress, settings, offline tools, and reminders.",
      childName: "Child name",
      difficulty: "Difficulty",
      easy: "Easy",
      medium: "Medium",
      brave: "Brave learner",
      offlineDownload: "Cache for offline",
      reminders: "Daily reminder",
      reminderOn: "Reminder enabled",
      reminderOff: "Enable reminder",
      saveSettings: "Save settings",
      locked: "Locked",
      unlocked: "Unlocked",
      localhost: "Offline-ready localhost",
      installReady: "Installable PWA",
      firebaseReady: "Firebase-ready data",
      nameSaved: "Name saved",
      settingsSaved: "Settings saved",
      cacheReady: "Core app cached for offline use.",
      notificationsBlocked: "Notifications are not available or were blocked.",
      notificationBody: "Time for a small Islamic learning moment.",
      close: "Close"
    },
    ar: {
      home: "الرئيسية",
      stories: "قصص",
      duas: "أدعية",
      salah: "متابعة الصلاة",
      pillars: "الأركان",
      manners: "آداب وأخلاق",
      calendar: "التقويم",
      parent: "لوحة ولي الأمر",
      brand: "My First Islamic Journey",
      brandAr: "رحلة الإسلام الأولى",
      greeting: "مرحباً أيها المتعلم الصغير!",
      salam: "السلام عليكم!",
      progress: "تقدمك",
      stars: "نجمة",
      great: "أنت رائع!",
      todaysStory: "قصة اليوم",
      play: "تشغيل",
      moral: "العبرة",
      showMoral: "أظهر العبرة",
      listenFallback: "اقرأ بصوت",
      audioHint: "أضف ملفات MP3 إلى assets/audio للتشغيل المسجل. القراءة الصوتية تعمل الآن.",
      localVideoHint: "تم استيراد القصص من ملف PDF. أضف ملفات MP4 في assets/videos لاحقاً لتشغيل الفيديو.",
      sourcePages: "صفحات PDF",
      zezoMoment: "زيزو وآدم!",
      zezoName: "زيزو الصغير",
      adamName: "آدم ابن العم",
      zezoMediaHint: "صور وفيديو من رحلة زيزو وآدم ابن العم.",
      openVideo: "افتح الفيديو",
      storyActivity: "نشاط القصة",
      trueFalsePrompt: "صح أم خطأ",
      shortQuestion: "سؤال",
      videoComing: "يمكن إضافة الفيديو لاحقاً. هذه القصة جاهزة الآن بصورة من PDF ومعرض وقراءة صوتية ونشاط.",
      storyGallery: "معرض الصور",
      chooseStory: "اختر قصة",
      duasIntro: "اضغط على أي بطاقة للاستماع وتعلم المعنى.",
      checkToday: "تابع صلوات اليوم",
      weeklyReport: "تقرير الأسبوع",
      complete: "مكتمل",
      dragTitle: "رتب أركان الإسلام الخمسة",
      dropHere: "ضع هنا",
      checkAnswers: "تحقق من الإجابات",
      resetGame: "إعادة",
      correct: "صحيح!",
      tryAgain: "حاول مرة أخرى",
      quizTitle: "اختبار سريع",
      quizQuestion: "أي مما يلي من أركان الإسلام؟",
      gardenTitle: "حديقة الأخلاق",
      gardenIntro: "أنهِ تحديات اليوم لتنمو الزهور.",
      done: "تم",
      hijriDate: "التاريخ الهجري",
      countdown: "العد التنازلي",
      funFacts: "معلومات لطيفة",
      parentPin: "أدخل رقم ولي الأمر",
      pinHelp: "الرقم الافتراضي للتجربة المحلية هو 1234.",
      wrongPin: "الرقم غير صحيح. حاول مرة أخرى.",
      dashboardIntro: "التقدم والإعدادات وأدوات العمل دون اتصال والتذكيرات.",
      childName: "اسم الطفل",
      difficulty: "المستوى",
      easy: "سهل",
      medium: "متوسط",
      brave: "متعلم شجاع",
      offlineDownload: "حفظ للعمل دون اتصال",
      reminders: "تذكير يومي",
      reminderOn: "تم تفعيل التذكير",
      reminderOff: "فعّل التذكير",
      saveSettings: "حفظ الإعدادات",
      locked: "مغلق",
      unlocked: "مفتوح",
      localhost: "جاهز محلياً",
      installReady: "قابل للتثبيت",
      firebaseReady: "جاهز لفايربيس",
      nameSaved: "تم حفظ الاسم",
      settingsSaved: "تم حفظ الإعدادات",
      cacheReady: "تم حفظ التطبيق الأساسي للعمل دون اتصال.",
      notificationsBlocked: "التنبيهات غير متاحة أو تم منعها.",
      notificationBody: "حان وقت لحظة تعلم إسلامية صغيرة.",
      close: "إغلاق"
    }
  };

  const navItems = [
    { id: "home", icon: "⌂", color: "module-duas" },
    { id: "stories", icon: "📖", color: "module-stories" },
    { id: "duas", icon: "🤲", color: "module-duas" },
    { id: "salah", icon: "☑", color: "module-salah" },
    { id: "pillars", icon: "▥", color: "module-pillars" },
    { id: "manners", icon: "♥", color: "module-manners" },
    { id: "calendar", icon: "☾", color: "module-calendar" }
  ];

  const fallbackContent = {
    stories: [],
    duas: [],
    prayers: [],
    pillars: [],
    iman: [],
    manners: [],
    facts: [],
    calendar_targets: []
  };

  let content = fallbackContent;
  let state = loadState();
  let draggedPillar = null;

  init();

  async function init() {
    content = await loadContent();
    ensureToday();
    await registerServiceWorker();
    bindEvents();
    render();
  }

  async function loadContent() {
    try {
      const response = await fetch("assets/data/content.json", { cache: "no-cache" });
      if (!response.ok) throw new Error("content fetch failed");
      return await response.json();
    } catch {
      return fallbackContent;
    }
  }

  function defaultState() {
    return {
      lang: "en",
      screen: "home",
      childName: "Zezo",
      selectedStory: "nuh",
      parentUnlocked: false,
      pinInput: "",
      pinError: "",
      difficulty: "easy",
      daily: {},
      pillarPlacements: {},
      pillarChecked: false,
      quizAnswer: "",
      notifications: false,
      lastMessage: ""
    };
  }

  function loadState() {
    try {
      return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
    } catch {
      return defaultState();
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function ensureToday() {
    const key = todayKey();
    if (!state.daily[key]) {
      state.daily[key] = { prayers: {}, manners: {} };
      saveState();
    }
    return state.daily[key];
  }

  function bindEvents() {
    app.addEventListener("click", onClick);
    app.addEventListener("change", onChange);
    app.addEventListener("dragstart", (event) => {
      const chip = event.target.closest("[data-drag-pillar]");
      if (!chip) return;
      draggedPillar = chip.dataset.dragPillar;
      event.dataTransfer.setData("text/plain", draggedPillar);
    });
    app.addEventListener("dragover", (event) => {
      if (event.target.closest("[data-drop-order]")) event.preventDefault();
    });
    app.addEventListener("drop", (event) => {
      const zone = event.target.closest("[data-drop-order]");
      if (!zone) return;
      event.preventDefault();
      const id = event.dataTransfer.getData("text/plain") || draggedPillar;
      if (!id) return;
      Object.keys(state.pillarPlacements).forEach((order) => {
        if (state.pillarPlacements[order] === id) delete state.pillarPlacements[order];
      });
      state.pillarPlacements[zone.dataset.dropOrder] = id;
      state.pillarChecked = false;
      saveState();
      render();
    });
    document.addEventListener("click", (event) => {
      if (event.target.matches("[data-close-modal]") || event.target.classList.contains("modal-backdrop")) {
        closeModal();
      }
    });
  }

  function onClick(event) {
    const screenButton = event.target.closest("[data-screen]");
    if (screenButton) {
      state.screen = screenButton.dataset.screen;
      state.pinError = "";
      saveState();
      render();
      return;
    }

    const langButton = event.target.closest("[data-lang-toggle]");
    if (langButton) {
      state.lang = state.lang === "en" ? "ar" : "en";
      saveState();
      render();
      return;
    }

    const storyButton = event.target.closest("[data-story-id]");
    if (storyButton) {
      state.selectedStory = storyButton.dataset.storyId;
      saveState();
      render();
      return;
    }

    const moralButton = event.target.closest("[data-moral-story]");
    if (moralButton) {
      const story = getStory(moralButton.dataset.moralStory);
      if (story) showModal(`<h2>${tr("moral")}</h2><p>${escapeHtml(local(story, "moral_en", "moral_ar"))}</p>`);
      return;
    }

    const speakButton = event.target.closest("[data-speak]");
    if (speakButton) {
      speak(decodeURIComponent(speakButton.dataset.speak), state.lang);
      return;
    }

    const prayerButton = event.target.closest("[data-prayer-id]");
    if (prayerButton) {
      const day = ensureToday();
      const id = prayerButton.dataset.prayerId;
      day.prayers[id] = !day.prayers[id];
      saveState();
      render();
      return;
    }

    const pillarChip = event.target.closest("[data-place-pillar]");
    if (pillarChip) {
      placePillarInNextSlot(pillarChip.dataset.placePillar);
      return;
    }

    const action = event.target.closest("[data-action]");
    if (!action) return;
    const name = action.dataset.action;

    if (name === "check-pillars") {
      state.pillarChecked = true;
      saveState();
      render();
    }
    if (name === "reset-pillars") {
      state.pillarPlacements = {};
      state.pillarChecked = false;
      saveState();
      render();
    }
    if (name === "quiz") {
      state.quizAnswer = action.dataset.answer;
      saveState();
      render();
    }
    if (name === "toggle-manner") {
      const day = ensureToday();
      const id = action.dataset.manner;
      day.manners[id] = !day.manners[id];
      saveState();
      render();
    }
    if (name === "pin-key") {
      pressPin(action.dataset.key);
    }
    if (name === "pin-clear") {
      state.pinInput = "";
      state.pinError = "";
      saveState();
      render();
    }
    if (name === "lock-parent") {
      state.parentUnlocked = false;
      state.pinInput = "";
      saveState();
      render();
    }
    if (name === "offline") {
      cacheOffline();
    }
    if (name === "notify") {
      requestReminder();
    }
    if (name === "save-settings") {
      saveState();
      state.lastMessage = tr("settingsSaved");
      saveState();
      render();
    }
  }

  function onChange(event) {
    if (event.target.matches("[data-child-name]")) {
      state.childName = event.target.value.trim() || "Amina";
      state.lastMessage = tr("nameSaved");
      saveState();
      render();
    }
    if (event.target.matches("[data-difficulty]")) {
      state.difficulty = event.target.value;
      saveState();
    }
  }

  function placePillarInNextSlot(id) {
    Object.keys(state.pillarPlacements).forEach((order) => {
      if (state.pillarPlacements[order] === id) delete state.pillarPlacements[order];
    });
    const next = [1, 2, 3, 4, 5].find((order) => !state.pillarPlacements[String(order)]);
    if (next) state.pillarPlacements[String(next)] = id;
    state.pillarChecked = false;
    saveState();
    render();
  }

  function pressPin(key) {
    if (key === "back") {
      state.pinInput = state.pinInput.slice(0, -1);
      state.pinError = "";
    } else if (state.pinInput.length < 4) {
      state.pinInput += key;
    }
    if (state.pinInput.length === 4) {
      if (state.pinInput === "1234") {
        state.parentUnlocked = true;
        state.pinInput = "";
        state.pinError = "";
      } else {
        state.pinError = tr("wrongPin");
        state.pinInput = "";
      }
    }
    saveState();
    render();
  }

  function render() {
    const dir = state.lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = state.lang;
    document.documentElement.dir = dir;
    app.setAttribute("dir", dir);
    app.innerHTML = `
      <div class="shell">
        ${renderSidebar()}
        <main class="main">
          ${renderTopbar()}
          <section class="content">${renderScreen()}</section>
        </main>
      </div>
    `;
    attachAudioFallbacks();
  }

  function renderSidebar() {
    return `
      <aside class="sidebar">
        <div class="brand">
          <img class="brand-mark" src="assets/images/app-icon.svg" alt="" />
          <div>
            <h2 class="brand-title">${tr("brand")}</h2>
            <p class="brand-subtitle">${tr("brandAr")}</p>
          </div>
        </div>
        <nav class="nav-list" aria-label="Main">
          ${navItems
            .map(
              (item) => `
            <button class="nav-button ${state.screen === item.id ? "active" : ""}" data-screen="${item.id}">
              <span class="nav-icon">${item.icon}</span>
              <span class="nav-text">
                <strong>${tr(item.id)}</strong>
                <small>${copy[item.id === "home" ? "ar" : state.lang === "en" ? "ar" : "en"]?.[item.id] || ""}</small>
              </span>
              <span aria-hidden="true">›</span>
            </button>
          `
            )
            .join("")}
        </nav>
        <button class="parent-entry" data-screen="parent">
          <span class="nav-icon">👪</span>
          <span class="nav-text">
            <strong>${tr("parent")}</strong>
            <small>${state.parentUnlocked ? tr("unlocked") : tr("locked")}</small>
          </span>
          <span aria-hidden="true">›</span>
        </button>
      </aside>
    `;
  }

  function renderTopbar() {
    return `
      <header class="topbar">
        <div class="profile">
          <div class="avatar-stack" aria-hidden="true">
            <div class="avatar"><img src="assets/images/little-zezo-avatar.jpg" alt="" /></div>
            <div class="avatar"><img src="assets/images/adam-cousin-avatar.jpg" alt="" /></div>
          </div>
          <div>
            <h1>${tr("greeting")}</h1>
            <p>${tr("salam")} ${escapeHtml(state.childName)}</p>
          </div>
        </div>
        <div class="top-cluster">
          <div class="top-actions">
            <button class="language-toggle" data-lang-toggle aria-label="Toggle language">
              <span class="${state.lang === "en" ? "active-lang" : ""}">EN</span>
              <span class="${state.lang === "ar" ? "active-lang" : ""}">العربية</span>
            </button>
            <button class="secondary-button" data-screen="parent">👪 ${tr("parent")}</button>
          </div>
          <div class="encouragement-card"><span>⭐</span><strong>${tr("great")}</strong><small>${state.lang === "ar" ? "استمر في التعلم والتألق" : "Keep learning, keep shining"}</small></div>
        </div>
      </header>
    `;
  }

  function renderScreen() {
    if (state.screen === "stories") return renderStories();
    if (state.screen === "duas") return renderDuas();
    if (state.screen === "salah") return renderSalah();
    if (state.screen === "pillars") return renderPillars();
    if (state.screen === "manners") return renderManners();
    if (state.screen === "calendar") return renderCalendar();
    if (state.screen === "parent") return renderParent();
    return renderHome();
  }

  function renderHome() {
    const story = getStory(state.selectedStory) || content.stories[0];
    return `
      <div class="home-grid">
        <div class="content">
          ${renderProgressPanel()}
          <div class="modules-grid">
            ${navItems
              .filter((item) => item.id !== "home")
              .map(
                (item) => `
              <button class="module-card ${item.color}" data-screen="${item.id}">
                <span class="module-icon">${item.icon}</span>
                <strong>${tr(item.id)}</strong>
                <small>${copy[state.lang === "en" ? "ar" : "en"][item.id]}</small>
              </button>
            `
              )
              .join("")}
          </div>
        </div>
        <div class="home-side content">
          <article class="panel zezo-media-card">
            <div class="family-photo-grid">
              <figure class="zezo-photo-frame">
                <img src="assets/images/little-zezo-photo.jpg" alt="${tr("zezoName")}" />
                <figcaption>${tr("zezoName")}</figcaption>
              </figure>
              <figure class="zezo-photo-frame">
                <img src="assets/images/adam-cousin-photo.jpg" alt="${tr("adamName")}" />
                <figcaption>${tr("adamName")}</figcaption>
              </figure>
            </div>
            <div class="media-controls">
              <p class="tag">${tr("zezoMoment")}</p>
              <h2>${tr("zezoMoment")}</h2>
              <p>${tr("zezoMediaHint")}</p>
              <video class="zezo-video" controls playsinline preload="metadata" poster="assets/images/little-zezo-photo.jpg">
                <source src="assets/videos/little-zezo.mov" type="video/mp4" />
                <source src="assets/videos/little-zezo.mov" type="video/quicktime" />
              </video>
              <a class="secondary-button video-link" href="assets/videos/little-zezo.mov" target="_blank" rel="noopener">▶ ${tr("openVideo")}</a>
            </div>
          </article>
          <article class="panel media-card">
            <img class="story-poster" src="${story?.images?.[0] || "assets/images/story-night-garden.png"}" alt="" />
            <div class="media-controls">
              <p class="tag">${tr("todaysStory")}</p>
              <h2>${story ? escapeHtml(local(story, "title_en", "title_ar")) : tr("stories")}</h2>
              <p>${story ? escapeHtml(local(story, "summary_en", "summary_ar")) : ""}</p>
              <div class="transport">
                <button class="icon-button" data-screen="stories" aria-label="${tr("stories")}">⟲</button>
                <button class="icon-button play-button" data-screen="stories" aria-label="${tr("play")}">▶</button>
                <button class="icon-button" data-moral-story="${story?.id || ""}" aria-label="${tr("moral")}">★</button>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="status-line panel">
        <span class="status-dot"></span>
        <span>${tr("localhost")}</span>
        <span>•</span>
        <span>${tr("installReady")}</span>
        <span>•</span>
        <span>${tr("firebaseReady")}</span>
      </div>
    `;
  }

  function renderProgressPanel() {
    const stars = earnedStars();
    const filled = Math.min(5, Math.floor(stars / 25));
    return `
      <section class="panel progress-panel">
        <div>
          <strong>${tr("progress")}</strong>
          <p class="mini-text">${tr("great")}</p>
        </div>
        <div class="stars" aria-label="${stars} ${tr("stars")}">
          ${Array.from({ length: 5 }, (_, index) => `<span class="star ${index < filled ? "" : "empty"}">★</span>`).join("")}
          <span class="reward-pill">${stars} ★</span>
        </div>
      </section>
    `;
  }

  function renderStories() {
    const selected = getStory(state.selectedStory) || content.stories[0];
    if (!selected) return renderEmpty("stories");
    const narration = state.lang === "ar" ? selected.audio_ar : selected.audio_en;
    const speakText = `${local(selected, "title_en", "title_ar")}. ${local(selected, "summary_en", "summary_ar")} ${local(
      selected,
      "moral_en",
      "moral_ar"
    )}`;
    return `
      <div class="section-heading panel">
        <div>
          <h2>${tr("stories")}</h2>
          <p>${tr("localVideoHint")}</p>
        </div>
        <button class="primary-button" data-moral-story="${selected.id}">★ ${tr("showMoral")}</button>
      </div>
      <div class="split-grid">
        <aside class="story-list">
          <div class="panel">
            <h3>${tr("chooseStory")}</h3>
          </div>
          ${content.stories.map((story) => renderStoryListItem(story, selected.id)).join("")}
        </aside>
        <article class="panel story-detail">
          <div class="story-hero">${renderVideo(selected)}</div>
          <div>
            <h2>${escapeHtml(local(selected, "title_en", "title_ar"))}</h2>
            ${selected.subtitle_en ? `<p class="tag">${escapeHtml(local(selected, "subtitle_en", "subtitle_ar"))}</p>` : ""}
            <p>${escapeHtml(local(selected, "summary_en", "summary_ar"))}</p>
            ${selected.source_page_start ? `<p class="mini-text">${tr("sourcePages")}: ${selected.source_page_start}-${selected.source_page_end}</p>` : ""}
          </div>
          <div class="audio-row">
            <div>
              <audio controls preload="metadata" src="${escapeAttr(narration)}"></audio>
              <p class="mini-text audio-help">${tr("audioHint")}</p>
            </div>
            <button class="secondary-button" data-speak="${encodeURIComponent(speakText)}">🔊 ${tr("listenFallback")}</button>
          </div>
          <h3>${tr("storyGallery")}</h3>
          <div class="gallery-strip">
            ${selected.images.map((image) => `<img class="gallery-image" src="${escapeAttr(image)}" alt="" />`).join("")}
          </div>
          ${renderStoryActivity(selected)}
        </article>
      </div>
    `;
  }


  function renderStoryActivity(story) {
    if (!story.quiz_tf_en && !story.quiz_short_en) return "";
    return `
      <section class="story-activity">
        <h3>${tr("storyActivity")}</h3>
        ${story.quiz_tf_en ? `<p><strong>${tr("trueFalsePrompt")}:</strong> ${escapeHtml(local(story, "quiz_tf_en", "quiz_tf_ar"))}</p>` : ""}
        ${story.quiz_short_en ? `<p><strong>${tr("shortQuestion")}:</strong> ${escapeHtml(local(story, "quiz_short_en", "quiz_short_ar"))}</p>` : ""}
      </section>
    `;
  }
  function renderStoryListItem(story, selectedId) {
    return `
      <button class="story-list-item ${story.id === selectedId ? "active" : ""}" data-story-id="${story.id}">
        <img src="${escapeAttr(story.images[0])}" alt="" />
        <span>
          <strong>${escapeHtml(local(story, "title_en", "title_ar"))}</strong>
          <small class="mini-text">${escapeHtml(local(story, "summary_en", "summary_ar"))}</small>
        </span>
      </button>
    `;
  }

  function renderVideo(story) {
    if (story.video_url) {
      return `<iframe class="video-frame" src="${escapeAttr(story.video_url)}" title="${escapeAttr(
        local(story, "title_en", "title_ar")
      )}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    }
    if (story.video_path) {
      return `<video class="local-video" controls poster="${escapeAttr(story.images[0])}"><source src="${escapeAttr(
        story.video_path
      )}" type="video/mp4" /></video>`;
    }
    return `<div class="video-placeholder"><img src="${escapeAttr(story.images[0])}" alt="" /><div><strong>${escapeHtml(local(story, "title_en", "title_ar"))}</strong><p>${tr("videoComing")}</p></div></div>`;
  }

  function renderDuas() {
    return `
      <div class="section-heading panel">
        <div>
          <h2>${tr("duas")}</h2>
          <p>${tr("duasIntro")}</p>
        </div>
      </div>
      <div class="dua-grid">
        ${content.duas
          .map(
            (dua) => `
          <article class="dua-card">
            <span class="tag">${escapeHtml(dua.category)}</span>
            <div class="arabic-text">${escapeHtml(dua.arabic)}</div>
            <div class="translit">${escapeHtml(dua.transliteration)}</div>
            <p>${escapeHtml(state.lang === "ar" ? dua.translation_ar : dua.translation_en)}</p>
            <audio controls preload="metadata" src="${escapeAttr(dua.audio_path)}"></audio>
            <p class="mini-text audio-help">${tr("audioHint")}</p>
            <button class="secondary-button" data-speak="${encodeURIComponent(
              `${dua.arabic}. ${dua.transliteration}. ${state.lang === "ar" ? dua.translation_ar : dua.translation_en}`
            )}">🔊 ${tr("listenFallback")}</button>
          </article>
        `
          )
          .join("")}
      </div>
    `;
  }

  function renderSalah() {
    const day = ensureToday();
    const completed = content.prayers.filter((prayer) => day.prayers[prayer.id]).length;
    return `
      <div class="section-heading panel">
        <div>
          <h2>${tr("salah")}</h2>
          <p>${tr("checkToday")} • ${completed}/5 ${tr("complete")}</p>
        </div>
        <span class="reward-pill">${completed * 6} ★</span>
      </div>
      <div class="tracker-grid">
        <section class="panel prayers">
          ${content.prayers
            .map(
              (prayer) => `
            <button class="prayer-row ${day.prayers[prayer.id] ? "done" : ""}" data-prayer-id="${prayer.id}">
              <span class="check-circle">✓</span>
              <span>
                <strong>${escapeHtml(local(prayer, "en", "ar"))}</strong>
                <small class="mini-text">${escapeHtml(state.lang === "ar" ? prayer.en : prayer.ar)}</small>
              </span>
              <span class="prayer-time">${escapeHtml(prayer.time)}</span>
            </button>
          `
            )
            .join("")}
        </section>
        <section class="panel report-card">
          <h2>${tr("weeklyReport")}</h2>
          <div class="week-bars">${renderWeekBars(completed)}</div>
        </section>
      </div>
    `;
  }

  function renderWeekBars(todayCompleted) {
    const days = state.lang === "ar" ? ["س", "ح", "ن", "ث", "ر", "خ", "ج"] : ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    const values = [2, 4, 3, 5, 4, 3, todayCompleted];
    return values
      .map(
        (value, index) => `
      <div class="week-bar">
        <div class="bar-fill" style="height:${Math.max(20, value * 34)}px"></div>
        <span class="bar-label">${days[index]}</span>
      </div>
    `
      )
      .join("");
  }

  function renderPillars() {
    const remaining = content.pillars.filter((pillar) => !Object.values(state.pillarPlacements).includes(pillar.id));
    const allCorrect = pillarsCorrect();
    return `
      <div class="section-heading panel">
        <div>
          <h2>${tr("pillars")}</h2>
          <p>${tr("dragTitle")}</p>
        </div>
        <div class="top-actions">
          <button class="primary-button" data-action="check-pillars">${tr("checkAnswers")}</button>
          <button class="secondary-button" data-action="reset-pillars">${tr("resetGame")}</button>
        </div>
      </div>
      <div class="game-grid">
        <section class="game-card">
          <h3>${tr("dragTitle")}</h3>
          <div class="chips">
            ${remaining
              .map(
                (pillar) => `
              <button class="chip" draggable="true" data-drag-pillar="${pillar.id}" data-place-pillar="${pillar.id}">
                ${escapeHtml(local(pillar, "en", "ar"))}
              </button>
            `
              )
              .join("")}
          </div>
          <div class="drop-zones">
            ${[1, 2, 3, 4, 5]
              .map((order) => {
                const pillar = content.pillars.find((item) => item.id === state.pillarPlacements[String(order)]);
                return `<div class="drop-zone ${pillar ? "filled" : ""}" data-drop-order="${order}">${order}. ${
                  pillar ? escapeHtml(local(pillar, "en", "ar")) : tr("dropHere")
                }</div>`;
              })
              .join("")}
          </div>
          ${
            state.pillarChecked
              ? `<p class="empty-note">${allCorrect ? tr("correct") : tr("tryAgain")}</p>`
              : `<p class="mini-text">${state.lang === "ar" ? "اسحب البطاقات أو اضغط عليها للترتيب." : "Drag cards or tap them to place in order."}</p>`
          }
        </section>
        <section class="game-card">
          <h3>${tr("quizTitle")}</h3>
          <p>${tr("quizQuestion")}</p>
          <div class="quiz-options">
            ${renderQuizChoice("salah", state.lang === "ar" ? "الصلاة" : "Salah")}
            ${renderQuizChoice("garden", state.lang === "ar" ? "الحديقة" : "Garden")}
            ${renderQuizChoice("colors", state.lang === "ar" ? "الألوان" : "Colors")}
          </div>
          <h3>${state.lang === "ar" ? "أركان الإيمان" : "Pillars of Iman"}</h3>
          <div class="chips">
            ${content.iman.map((item) => `<span class="tag">${escapeHtml(local(item, "en", "ar"))}</span>`).join("")}
          </div>
        </section>
      </div>
    `;
  }

  function renderQuizChoice(answer, label) {
    let className = "";
    if (state.quizAnswer === answer) className = answer === "salah" ? "correct" : "wrong";
    return `<button class="choice ${className}" data-action="quiz" data-answer="${answer}">${escapeHtml(label)}</button>`;
  }

  function renderManners() {
    const day = ensureToday();
    const doneCount = content.manners.filter((challenge) => day.manners[challenge.id]).length;
    return `
      <div class="section-heading panel">
        <div>
          <h2>${tr("gardenTitle")}</h2>
          <p>${tr("gardenIntro")}</p>
        </div>
        <span class="reward-pill">${doneCount * 8} ★</span>
      </div>
      <div class="garden-layout">
        <section class="panel story-list">
          ${content.manners
            .map(
              (challenge) => `
            <button class="challenge-button ${day.manners[challenge.id] ? "done" : ""}" data-action="toggle-manner" data-manner="${challenge.id}">
              <span>${escapeHtml(local(challenge, "en", "ar"))}</span>
              <strong>${day.manners[challenge.id] ? "✓" : "+"}</strong>
            </button>
          `
            )
            .join("")}
        </section>
        <section class="garden" aria-label="${tr("gardenTitle")}">
          ${doneCount === 0 ? `<p class="empty-note">${tr("gardenIntro")}</p>` : renderFlowers(doneCount)}
        </section>
      </div>
    `;
  }

  function renderFlowers(count) {
    const left = [18, 35, 52, 68, 82, 26, 60, 74];
    const colors = ["#f3726f", "#f5b82e", "#8a6ad8", "#2fa95b"];
    return Array.from({ length: count }, (_, index) => {
      const color = colors[index % colors.length];
      return `<span class="flower" style="left:${left[index]}%; background:${color}; animation-delay:${index * 70}ms">✦</span>`;
    }).join("");
  }

  function renderCalendar() {
    const hijri = hijriDate();
    return `
      <div class="calendar-grid">
        <section class="panel date-card">
          <h2>${tr("hijriDate")}</h2>
          <div class="hijri-date">${escapeHtml(hijri)}</div>
          <p>${new Date().toLocaleDateString(state.lang === "ar" ? "ar" : "en", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })}</p>
          <h3>${tr("countdown")}</h3>
          <div class="countdown">
            ${content.calendar_targets.map(renderCountdown).join("")}
          </div>
        </section>
        <section class="panel">
          <h2>${tr("funFacts")}</h2>
          <div class="facts-grid">
            ${content.facts
              .map(
                (fact) => `
              <article class="calendar-fact">
                <p>${escapeHtml(local(fact, "en", "ar"))}</p>
              </article>
            `
              )
              .join("")}
          </div>
        </section>
      </div>
    `;
  }

  function renderCountdown(target) {
    const days = daysUntil(target.date);
    return `
      <div class="count-tile">
        <strong>${days}</strong>
        <span>${escapeHtml(local(target, "label_en", "label_ar"))}</span>
      </div>
    `;
  }

  function renderParent() {
    if (!state.parentUnlocked) return renderPinLogin();
    const stars = earnedStars();
    const prayerPercent = Math.round((todayPrayerCount() / Math.max(1, content.prayers.length)) * 100);
    const mannersPercent = Math.round((todayMannersCount() / Math.max(1, content.manners.length)) * 100);
    return `
      <div class="section-heading panel">
        <div>
          <h2>${tr("parent")}</h2>
          <p>${tr("dashboardIntro")}</p>
        </div>
        <button class="secondary-button" data-action="lock-parent">${tr("locked")}</button>
      </div>
      <div class="dashboard-grid">
        <article class="dashboard-tile">
          <h3>${tr("progress")}</h3>
          <div class="progress-ring" style="--value:${Math.min(360, stars * 2.4)}deg"><span>${stars}★</span></div>
          <p>${tr("great")}</p>
        </article>
        <article class="dashboard-tile">
          <h3>${tr("salah")}</h3>
          <div class="progress-ring" style="--value:${prayerPercent * 3.6}deg"><span>${prayerPercent}%</span></div>
          <p>${todayPrayerCount()}/5 ${tr("complete")}</p>
        </article>
        <article class="dashboard-tile">
          <h3>${tr("manners")}</h3>
          <div class="progress-ring" style="--value:${mannersPercent * 3.6}deg"><span>${mannersPercent}%</span></div>
          <p>${todayMannersCount()}/${content.manners.length} ${tr("complete")}</p>
        </article>
      </div>
      <section class="panel settings-grid">
        <div class="setting-row">
          <label for="childName">${tr("childName")}</label>
          <input id="childName" data-child-name type="text" value="${escapeAttr(state.childName)}" />
        </div>
        <div class="setting-row">
          <label for="difficulty">${tr("difficulty")}</label>
          <select id="difficulty" data-difficulty>
            <option value="easy" ${state.difficulty === "easy" ? "selected" : ""}>${tr("easy")}</option>
            <option value="medium" ${state.difficulty === "medium" ? "selected" : ""}>${tr("medium")}</option>
            <option value="brave" ${state.difficulty === "brave" ? "selected" : ""}>${tr("brave")}</option>
          </select>
        </div>
        <div class="top-actions">
          <button class="primary-button" data-action="save-settings">✓ ${tr("saveSettings")}</button>
          <button class="secondary-button" data-action="offline">⬇ ${tr("offlineDownload")}</button>
          <button class="secondary-button" data-action="notify">🔔 ${state.notifications ? tr("reminderOn") : tr("reminderOff")}</button>
        </div>
        ${state.lastMessage ? `<p class="empty-note">${escapeHtml(state.lastMessage)}</p>` : ""}
      </section>
    `;
  }

  function renderPinLogin() {
    return `
      <section class="panel parent-login">
        <h2>${tr("parentPin")}</h2>
        <p>${tr("pinHelp")}</p>
        <div class="pin-display">
          ${Array.from({ length: 4 }, (_, index) => `<span class="pin-dot ${index < state.pinInput.length ? "filled" : ""}"></span>`).join("")}
        </div>
        <div class="pin-pad">
          ${["1", "2", "3", "4", "5", "6", "7", "8", "9"]
            .map((key) => `<button class="pin-key" data-action="pin-key" data-key="${key}">${key}</button>`)
            .join("")}
          <button class="pin-key" data-action="pin-clear">C</button>
          <button class="pin-key" data-action="pin-key" data-key="0">0</button>
          <button class="pin-key" data-action="pin-key" data-key="back">⌫</button>
        </div>
        ${state.pinError ? `<p class="empty-note">${escapeHtml(state.pinError)}</p>` : ""}
      </section>
    `;
  }

  function renderEmpty(screen) {
    return `<section class="panel"><h2>${tr(screen)}</h2><p class="empty-note">Add content to assets/data/content.json.</p></section>`;
  }

  function getStory(id) {
    return content.stories.find((story) => story.id === id);
  }

  function local(item, enKey, arKey) {
    return state.lang === "ar" ? item[arKey] || item[enKey] : item[enKey] || item[arKey];
  }

  function tr(key) {
    return copy[state.lang][key] || copy.en[key] || key;
  }

  function todayPrayerCount() {
    const day = ensureToday();
    return content.prayers.filter((prayer) => day.prayers[prayer.id]).length;
  }

  function todayMannersCount() {
    const day = ensureToday();
    return content.manners.filter((challenge) => day.manners[challenge.id]).length;
  }

  function pillarsCorrect() {
    return content.pillars.length > 0 && content.pillars.every((pillar) => state.pillarPlacements[String(pillar.order)] === pillar.id);
  }

  function earnedStars() {
    const prayerStars = todayPrayerCount() * 6;
    const mannerStars = todayMannersCount() * 8;
    const pillarStars = pillarsCorrect() ? 25 : 0;
    const quizStars = state.quizAnswer === "salah" ? 12 : 0;
    return 40 + prayerStars + mannerStars + pillarStars + quizStars;
  }

  function hijriDate() {
    try {
      return new Intl.DateTimeFormat(state.lang === "ar" ? "ar-SA-u-ca-islamic-umalqura" : "en-u-ca-islamic-umalqura", {
        day: "numeric",
        month: "long",
        year: "numeric"
      }).format(new Date());
    } catch {
      return state.lang === "ar" ? "تاريخ هجري تقريبي" : "Approximate Hijri date";
    }
  }

  function daysUntil(dateText) {
    const start = new Date();
    const target = new Date(`${dateText}T00:00:00`);
    const diff = Math.ceil((target - start) / 86400000);
    return Math.max(0, diff);
  }

  function speak(text, lang) {
    if (!("speechSynthesis" in window)) {
      showModal(`<h2>${tr("listenFallback")}</h2><p>${escapeHtml(text)}</p>`);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === "ar" ? "ar-SA" : "en-US";
    utterance.rate = 0.82;
    window.speechSynthesis.speak(utterance);
  }

  function attachAudioFallbacks() {
    app.querySelectorAll("audio").forEach((audio) => {
      audio.addEventListener("error", () => {
        const help = audio.parentElement?.querySelector(".audio-help") || audio.nextElementSibling;
        if (help) help.textContent = tr("audioHint");
      });
    });
  }

  async function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch {
      // Localhost still works without service worker support.
    }
  }

  async function cacheOffline() {
    if (!("caches" in window)) {
      state.lastMessage = state.lang === "ar" ? "التخزين المؤقت غير مدعوم في هذا المتصفح." : "Cache is not supported in this browser.";
      saveState();
      render();
      return;
    }
    const cache = await caches.open("my-first-islamic-journey-manual-v1");
    await cache.addAll([
      "./",
      "./index.html",
      "./styles.css",
      "./app.js",
      "./assets/data/content.json",
      "./assets/images/little-zezo-avatar.jpg",
      "./assets/images/little-zezo-photo.jpg",
      "./assets/images/adam-cousin-avatar.jpg",
      "./assets/images/adam-cousin-photo.jpg",
      "./assets/images/story-night-garden.png",
      "./assets/images/story-boat.svg",
      "./assets/images/story-rainbow.svg",
      "./assets/images/story-courtyard.svg",
      "./assets/images/garden.svg"
    ]);
    state.lastMessage = tr("cacheReady");
    saveState();
    render();
  }

  async function requestReminder() {
    if (!("Notification" in window)) {
      state.lastMessage = tr("notificationsBlocked");
      saveState();
      render();
      return;
    }
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      state.lastMessage = tr("notificationsBlocked");
      state.notifications = false;
      saveState();
      render();
      return;
    }
    state.notifications = true;
    state.lastMessage = tr("reminderOn");
    saveState();
    render();
    new Notification(tr("brand"), {
      body: tr("notificationBody"),
      icon: "assets/images/app-icon.svg"
    });
  }

  function showModal(html) {
    closeModal();
    const template = document.getElementById("modal-template");
    const node = template.content.cloneNode(true);
    node.querySelector(".modal-content").innerHTML = html;
    document.body.appendChild(node);
  }

  function closeModal() {
    document.querySelectorAll(".modal-backdrop").forEach((modal) => modal.remove());
  }

  function escapeHtml(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function escapeAttr(value = "") {
    return escapeHtml(value);
  }
})();
