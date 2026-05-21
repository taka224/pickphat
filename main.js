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

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true" && !mq.matches) {
      setOpen(false);
      btn.focus();
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
