window.addEventListener("load", () => {

  // العناصر التي نريد لها Scroll Animation
  const elements = document.querySelectorAll(".section-content, .menu-item, .menu-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },{
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));

  // منع الرجوع للسكرول القديم
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "auto";
  }
});