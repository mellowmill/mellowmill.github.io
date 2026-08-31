document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('docs-sidebar');
    const menuToggle = document.querySelector('.docs-menu-toggle');

    if (sidebar && menuToggle) {
        menuToggle.addEventListener('click', function () {
            const isOpen = sidebar.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.querySelector('[data-menu-label]').textContent = isOpen ? 'Close' : 'Menu';
        });

        sidebar.querySelectorAll('.docs-nav a').forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.matchMedia('(max-width: 900px)').matches) {
                    sidebar.classList.remove('is-open');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.querySelector('[data-menu-label]').textContent = 'Menu';
                }
            });
        });
    }

    const searchInput = document.querySelector('.docs-search input');
    const nav = document.querySelector('.docs-nav');
    const emptyMessage = document.querySelector('.docs-nav-empty');

    if (searchInput && nav) {
        const links = Array.from(nav.querySelectorAll('a[data-search]'));
        const groups = Array.from(nav.querySelectorAll('.docs-nav-group'));

        searchInput.addEventListener('input', function () {
            const query = searchInput.value.trim().toLowerCase();
            let visibleCount = 0;

            links.forEach(function (link) {
                const matches = !query || link.dataset.search.toLowerCase().includes(query);
                link.classList.toggle('is-hidden', !matches);
                if (matches) visibleCount += 1;
            });

            groups.forEach(function (group) {
                const hasVisibleLink = group.querySelector('a[data-search]:not(.is-hidden)');
                group.classList.toggle('is-hidden', Boolean(query) && !hasVisibleLink);
            });

            if (emptyMessage) {
                emptyMessage.classList.toggle('is-visible', Boolean(query) && visibleCount === 0);
            }
        });
    }

    const platformSwitcher = document.querySelector('[data-platform-switcher]');

    if (platformSwitcher) {
        const tabs = Array.from(platformSwitcher.querySelectorAll('[role="tab"]'));
        const panels = Array.from(platformSwitcher.querySelectorAll('[data-platform-panel]'));

        function selectPlatform(platform, moveFocus) {
            tabs.forEach(function (tab) {
                const isSelected = tab.dataset.platform === platform;
                tab.setAttribute('aria-selected', String(isSelected));
                tab.tabIndex = isSelected ? 0 : -1;
            });

            panels.forEach(function (panel) {
                panel.hidden = panel.dataset.platformPanel !== platform;
            });

            if (moveFocus) {
                const selectedTab = tabs.find(function (tab) {
                    return tab.dataset.platform === platform;
                });
                if (selectedTab) selectedTab.focus();
            }
        }

        tabs.forEach(function (tab, index) {
            tab.addEventListener('click', function () {
                selectPlatform(tab.dataset.platform, false);
            });

            tab.addEventListener('keydown', function (event) {
                let nextIndex = index;

                if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
                if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
                if (event.key === 'Home') nextIndex = 0;
                if (event.key === 'End') nextIndex = tabs.length - 1;

                if (nextIndex !== index) {
                    event.preventDefault();
                    selectPlatform(tabs[nextIndex].dataset.platform, true);
                }
            });
        });

        const selectedTab = tabs.find(function (tab) {
            return tab.getAttribute('aria-selected') === 'true';
        });
        selectPlatform(selectedTab ? selectedTab.dataset.platform : tabs[0].dataset.platform, false);
    }

    const uiTour = document.querySelector('[data-ui-tour]');

    if (uiTour) {
        const hotspots = Array.from(uiTour.querySelectorAll('[data-tour-hotspot]'));

        function setActiveHotspot(activeHotspot) {
            hotspots.forEach(function (hotspot) {
                const isActive = hotspot === activeHotspot;
                hotspot.classList.toggle('is-active', isActive);
                hotspot.setAttribute('aria-expanded', String(isActive));
            });
        }

        hotspots.forEach(function (hotspot) {
            hotspot.addEventListener('click', function () {
                setActiveHotspot(hotspot.classList.contains('is-active') ? null : hotspot);
            });

            hotspot.addEventListener('focus', function () {
                if (!hotspot.classList.contains('is-active')) setActiveHotspot(null);
            });

            hotspot.addEventListener('pointerenter', function () {
                if (!hotspot.classList.contains('is-active')) setActiveHotspot(null);
            });

            hotspot.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    setActiveHotspot(null);
                    hotspot.blur();
                }
            });
        });

        document.addEventListener('click', function (event) {
            if (!uiTour.contains(event.target)) setActiveHotspot(null);
        });
    }
});
