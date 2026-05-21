(function () {
  var btn = document.querySelector('header button[aria-controls="site-nav"]');
  var nav = document.getElementById("site-nav");
  if (!btn || !nav) return;

  var mq = window.matchMedia("(min-width: 768px)");

  function setOpen(open) {
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    if (mq.matches) {
      nav.removeAttribute("hidden");
      document.body.style.overflow = "";
    } else {
      nav.hidden = !open;
    }
  }

  if (mq.matches) {
    nav.removeAttribute("hidden");
  }

  btn.addEventListener("click", function () {
    if (mq.matches) return;
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });

  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      if (!mq.matches) setOpen(false);
    });
  });

  function navLinks() {
    return Array.prototype.slice.call(nav.querySelectorAll("a"));
  }

  document.addEventListener("keydown", function (e) {
    if (!mq.matches && btn.getAttribute("aria-expanded") === "true") {
      if (e.key === "Escape") {
        setOpen(false);
        btn.focus();
        return;
      }
      if (e.key === "Tab") {
        var links = navLinks();
        if (links.length === 0) return;
        var last = links[links.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === btn) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            btn.focus();
          }
        }
      }
    }
  });

  mq.addEventListener("change", function () {
    if (mq.matches) {
      nav.removeAttribute("hidden");
      document.body.style.overflow = "";
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "メニューを開く");
    } else {
      nav.hidden = true;
      document.body.style.overflow = "";
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "メニューを開く");
    }
  });
})();
