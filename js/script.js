document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const aside = document.querySelector(".aside");
    const navToggler = document.querySelector(".nav-toggler");
    const navOverlay = document.querySelector(".nav-overlay");
    const navLinks = [...document.querySelectorAll(".nav a")];
    const sections = [...document.querySelectorAll(".main-content .section[id]")];
    const styleSwitcher = document.querySelector(".style-switcher");
    const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
    const dayNight = document.querySelector(".day-night");
    const skinLink = document.querySelector("#skin-color");
    const colorButtons = [...document.querySelectorAll("[data-color]")];
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    const toast = document.querySelector(".toast");

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion && "IntersectionObserver" in window) {
        sections.forEach((section) => section.classList.add("section-transition-ready"));

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("section-visible", entry.isIntersecting);
            });
        }, {
            threshold: 0.08,
            rootMargin: "-6% 0px -10% 0px"
        });

        sections.forEach((section) => sectionObserver.observe(section));
    } else {
        sections.forEach((section) => section.classList.add("section-visible"));
    }

    const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
    })[character]);

    const cleanProjectText = (value) => typeof value === "string" ? value.trim() : "";
    const cleanProjectList = (value) => Array.isArray(value)
        ? value.map(cleanProjectText).filter(Boolean)
        : [];

    const projectGrid = document.querySelector("#project-grid");
    if (projectGrid && Array.isArray(window.portfolioProjects)) {
        projectGrid.innerHTML = window.portfolioProjects.map((project, projectIndex) => {
            const images = cleanProjectList(project.images);
            const firstImage = images[0] || "images/portfolio/portfolio-1.jpg";
            const tags = cleanProjectList(project.tags);
            const projectType = cleanProjectText(project.type);
            const projectSummary = cleanProjectText(project.summary);

            return `
                <div class="portfolio-item">
                    <article class="project-card shadow-dark" data-project-index="${projectIndex}">
                        <div class="portfolio-img project-card-image">
                            <img src="${escapeHtml(firstImage)}" alt="${escapeHtml(project.title)} project screenshot" loading="lazy">
                            ${projectType ? `<span class="project-type">${escapeHtml(projectType)}</span>` : ""}
                        </div>
                        <div class="project-card-content">
                            <h3>${escapeHtml(project.title || "Project title")}</h3>
                            ${projectSummary ? `<p class="project-summary">${escapeHtml(projectSummary)}</p>` : ""}
                            ${tags.length ? `<div class="project-tags" aria-label="Technologies used">
                                ${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
                            </div>` : ""}
                            <button class="project-details-button" type="button">See details <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                        </div>
                    </article>
                </div>`;
        }).join("");
    }

    const storage = {
        get(key) {
            try {
                return localStorage.getItem(key);
            } catch (_error) {
                return null;
            }
        },
        set(key, value) {
            try {
                localStorage.setItem(key, value);
            } catch (_error) {
                // The portfolio still works if storage is blocked.
            }
        }
    };

    const showToast = (message) => {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add("show");
        window.clearTimeout(showToast.timeoutId);
        showToast.timeoutId = window.setTimeout(() => toast.classList.remove("show"), 3000);
    };

    const setMenuOpen = (isOpen) => {
        if (!aside || !navToggler || !navOverlay) return;
        aside.classList.toggle("open", isOpen);
        navToggler.classList.toggle("active", isOpen);
        navOverlay.classList.toggle("show", isOpen);
        navToggler.setAttribute("aria-expanded", String(isOpen));
        navToggler.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        body.classList.toggle("nav-open", isOpen && window.innerWidth <= 1199);
    };

    navToggler?.addEventListener("click", () => {
        setMenuOpen(!aside.classList.contains("open"));
    });

    navOverlay?.addEventListener("click", () => setMenuOpen(false));

    const setActiveNav = (sectionId) => {
        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${sectionId}`;
            link.classList.toggle("active", isActive);
            if (isActive) {
                link.setAttribute("aria-current", "page");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    };

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href").slice(1);
            const target = targetId ? document.getElementById(targetId) : null;
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", `#${targetId}`);
            setActiveNav(targetId);
            setMenuOpen(false);
        });
    });

    let scrollTicking = false;
    const updateActiveSection = () => {
        const marker = window.scrollY + window.innerHeight * 0.35;
        let currentSection = sections[0]?.id || "home";

        sections.forEach((section) => {
            if (section.offsetTop <= marker) currentSection = section.id;
        });

        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
            currentSection = sections.at(-1)?.id || currentSection;
        }

        setActiveNav(currentSection);
        scrollTicking = false;
    };

    window.addEventListener("scroll", () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(updateActiveSection);
            scrollTicking = true;
        }
    }, { passive: true });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1199) setMenuOpen(false);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMenuOpen(false);
            styleSwitcher?.classList.remove("open");
            styleSwitcherToggler?.setAttribute("aria-expanded", "false");
        }
    });

    const skinColors = {
        "color-1": "#ec1839",
        "color-2": "#fa5b0f",
        "color-3": "#37b182",
        "color-4": "#1854b4",
        "color-5": "#f021b2"
    };

    const applySkin = (colorName) => {
        const selectedColor = skinColors[colorName] ? colorName : "color-1";
        if (skinLink) skinLink.href = `css/skins/${selectedColor}.css?v=20260930-4`;
        if (themeMeta) themeMeta.content = skinColors[selectedColor];

        colorButtons.forEach((button) => {
            const isActive = button.dataset.color === selectedColor;
            button.classList.toggle("active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        storage.set("portfolio-skin", selectedColor);
    };

    colorButtons.forEach((button) => {
        button.addEventListener("click", () => applySkin(button.dataset.color));
    });

    styleSwitcherToggler?.addEventListener("click", () => {
        const isOpen = styleSwitcher.classList.toggle("open");
        styleSwitcherToggler.setAttribute("aria-expanded", String(isOpen));
        styleSwitcherToggler.setAttribute("aria-label", isOpen ? "Close appearance settings" : "Open appearance settings");
    });

    document.addEventListener("click", (event) => {
        if (!styleSwitcher?.classList.contains("open")) return;
        if (styleSwitcher.contains(event.target)) return;
        styleSwitcher.classList.remove("open");
        styleSwitcherToggler?.setAttribute("aria-expanded", "false");
    });

    const applyTheme = (theme) => {
        const useDarkMode = theme === "dark";
        body.classList.toggle("dark", useDarkMode);
        const icon = dayNight?.querySelector("i");
        icon?.classList.toggle("fa-sun", useDarkMode);
        icon?.classList.toggle("fa-moon", !useDarkMode);
        dayNight?.setAttribute("aria-label", useDarkMode ? "Switch to light mode" : "Switch to dark mode");
        storage.set("portfolio-theme", useDarkMode ? "dark" : "light");
    };

    dayNight?.addEventListener("click", () => {
        applyTheme(body.classList.contains("dark") ? "light" : "dark");
    });

    const savedTheme = storage.get("portfolio-theme");
    const preferredTheme = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(savedTheme || preferredTheme);
    applySkin(storage.get("portfolio-skin") || "color-1");

    const typingElement = document.querySelector(".typing");
    const roles = ["web developer", "software engineering graduate", "problem solver"];
    let roleIndex = Math.max(0, roles.indexOf(typingElement?.textContent.trim().toLowerCase()));

    if (typingElement && !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        window.setInterval(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            typingElement.classList.add("is-changing");
            window.setTimeout(() => {
                typingElement.textContent = roles[roleIndex];
                typingElement.classList.remove("is-changing");
            }, 180);
        }, 3000);
    }

    document.querySelectorAll("[data-unavailable-message]").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            showToast(link.dataset.unavailableMessage);
        });
    });

    const contactForm = document.querySelector("#contact-form");
    contactForm?.addEventListener("submit", (event) => {
        if (!contactForm.checkValidity()) {
            event.preventDefault();
            contactForm.reportValidity();
            return;
        }

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const status = contactForm.querySelector(".form-status");
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.querySelector("span").textContent = "Sending...";
        }
        if (status) status.textContent = "Sending your message securely...";
    });

    const projectModal = document.querySelector("#project-modal");
    const modalImage = projectModal?.querySelector(".project-modal-image");
    const modalTitle = projectModal?.querySelector("#project-modal-title");
    const modalType = projectModal?.querySelector(".project-modal-type");
    const modalTags = projectModal?.querySelector(".project-modal-tags");
    const modalDescription = projectModal?.querySelector(".project-modal-description");
    const modalLinks = projectModal?.querySelector(".project-modal-links");
    const galleryPrevious = projectModal?.querySelector(".gallery-previous");
    const galleryNext = projectModal?.querySelector(".gallery-next");
    const galleryStatus = projectModal?.querySelector(".gallery-status");
    const galleryThumbnails = projectModal?.querySelector(".gallery-thumbnails");
    let galleryImages = [];
    let galleryIndex = 0;
    let lastFocusedElement = null;
    let touchStartX = 0;

    const createTextSection = (title, value) => {
        const text = cleanProjectText(value);
        if (!text) return "";
        return `
            <section class="project-case-study-section">
                <h3>${escapeHtml(title)}</h3>
                <p>${escapeHtml(text)}</p>
            </section>`;
    };

    const createListSection = (title, value) => {
        const items = cleanProjectList(value);
        if (!items.length) return "";
        return `
            <section class="project-case-study-section">
                <h3>${escapeHtml(title)}</h3>
                <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </section>`;
    };

    const safeProjectUrl = (value) => {
        const url = cleanProjectText(value);
        if (!url || url === "#") return "";

        try {
            const resolvedUrl = new URL(url, window.location.href);
            return ["http:", "https:"].includes(resolvedUrl.protocol) ? url : "";
        } catch (_error) {
            return "";
        }
    };

    const renderProjectDetails = (project) => {
        modalDescription.innerHTML = [
            createTextSection("Overview", project.overview),
            createListSection("My Contribution", project.contribution),
            createListSection("Key Features", project.keyFeatures),
            createTextSection("Technical Challenge", project.technicalChallenge),
            createTextSection("How I Solved It", project.solution),
            createListSection("Results / Evidence", project.results)
        ].join("");
        modalDescription.hidden = !modalDescription.innerHTML.trim();

        const linkDefinitions = [
            { url: safeProjectUrl(project.github), label: "View Source Code", icon: "fab fa-github" },
            { url: safeProjectUrl(project.report), label: "View Report", icon: "fa fa-file-alt" },
            { url: safeProjectUrl(project.documentation), label: "View Documentation", icon: "fa fa-book-open" },
            { url: safeProjectUrl(project.demo), label: "View Live Demo", icon: "fa fa-external-link-alt" }
        ].filter((link) => link.url);

        modalLinks.innerHTML = linkDefinitions.map((link) => `
            <a class="project-modal-link" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">
                <i class="${link.icon}" aria-hidden="true"></i>
                <span>${escapeHtml(link.label)}</span>
            </a>
        `).join("");
        modalLinks.hidden = linkDefinitions.length === 0;
    };

    const updateGallery = () => {
        if (!modalImage || !galleryImages.length) return;
        modalImage.classList.add("is-changing");
        window.setTimeout(() => {
            modalImage.src = galleryImages[galleryIndex];
            modalImage.alt = `${modalTitle.textContent} screenshot ${galleryIndex + 1}`;
            modalImage.classList.remove("is-changing");
        }, 120);

        const hasMultipleImages = galleryImages.length > 1;
        galleryPrevious.hidden = !hasMultipleImages;
        galleryNext.hidden = !hasMultipleImages;
        galleryStatus.textContent = hasMultipleImages ? `${galleryIndex + 1} / ${galleryImages.length}` : "";
        galleryThumbnails.hidden = !hasMultipleImages;
        galleryThumbnails.querySelectorAll(".gallery-thumbnail").forEach((thumbnail, index) => {
            const isActive = index === galleryIndex;
            thumbnail.classList.toggle("active", isActive);
            thumbnail.setAttribute("aria-current", isActive ? "true" : "false");
        });
    };

    const renderGalleryThumbnails = () => {
        if (!galleryThumbnails) return;
        galleryThumbnails.innerHTML = galleryImages.map((imagePath, index) => `
            <button class="gallery-thumbnail" type="button" data-gallery-index="${index}" aria-label="Show project image ${index + 1}">
                <img src="${escapeHtml(imagePath)}" alt="" loading="lazy">
            </button>
        `).join("");

        galleryThumbnails.querySelectorAll(".gallery-thumbnail").forEach((thumbnail) => {
            thumbnail.addEventListener("click", () => {
                galleryIndex = Number(thumbnail.dataset.galleryIndex) || 0;
                updateGallery();
            });
        });
    };

    const moveGallery = (direction) => {
        if (galleryImages.length < 2) return;
        galleryIndex = (galleryIndex + direction + galleryImages.length) % galleryImages.length;
        updateGallery();
    };

    const openProjectModal = (card, trigger) => {
        if (!projectModal) return;
        const projectIndex = Number(card.dataset.projectIndex);
        const project = window.portfolioProjects?.[projectIndex];
        if (!project) return;

        galleryImages = cleanProjectList(project.images);
        if (!galleryImages.length) galleryImages = ["images/portfolio/portfolio-1.jpg"];
        galleryIndex = 0;
        lastFocusedElement = trigger;

        const projectType = cleanProjectText(project.type);
        const projectTags = cleanProjectList(project.tags);
        modalTitle.textContent = cleanProjectText(project.title) || "Project details";
        modalType.textContent = projectType;
        modalType.hidden = !projectType;
        modalTags.innerHTML = projectTags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
        modalTags.hidden = projectTags.length === 0;
        renderProjectDetails(project);
        renderGalleryThumbnails();
        updateGallery();

        projectModal.classList.add("open");
        projectModal.setAttribute("aria-hidden", "false");
        body.classList.add("modal-open");
        projectModal.querySelector(".project-modal-close")?.focus();
    };

    const closeProjectModal = () => {
        if (!projectModal?.classList.contains("open")) return;
        projectModal.classList.remove("open");
        projectModal.setAttribute("aria-hidden", "true");
        body.classList.remove("modal-open");
        lastFocusedElement?.focus();
    };

    document.querySelectorAll(".project-details-button").forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".project-card");
            if (card) openProjectModal(card, button);
        });
    });

    projectModal?.querySelectorAll("[data-close-modal]").forEach((element) => {
        element.addEventListener("click", closeProjectModal);
    });
    galleryPrevious?.addEventListener("click", () => moveGallery(-1));
    galleryNext?.addEventListener("click", () => moveGallery(1));

    projectModal?.addEventListener("touchstart", (event) => {
        touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });
    projectModal?.addEventListener("touchend", (event) => {
        const distance = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(distance) > 50) moveGallery(distance > 0 ? -1 : 1);
    }, { passive: true });

    document.addEventListener("keydown", (event) => {
        if (!projectModal?.classList.contains("open")) return;
        if (event.key === "Escape") closeProjectModal();
        if (event.key === "ArrowLeft") moveGallery(-1);
        if (event.key === "ArrowRight") moveGallery(1);
    });

    updateActiveSection();
});
