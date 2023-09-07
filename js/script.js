// blending stuff

document.body.addEventListener("mousemove", (evt) => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY,
  });

  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1,
  });
});

//  gsap anim stuff

let hero = gsap;

hero.fromTo(
  "#escuela-placeholder",
  { opacity: 1 },
  { opacity: 0, duration: 2.5, ease: "expo.inOut" }
);
hero.fromTo(
  "#escuela-top-base",
  { x: 200 },
  { x: 0, duration: 1, delay: 2.5, ease: "expo.inOut" }
);
hero.fromTo(
  "#escuela-hero-text-base",
  { y: 200, skewY: 5, opacity: 0 },
  { y: 0, skewY: 0, opacity: 1, duration: 1, delay: 1, ease: "expo.inOut" }
);
hero.fromTo(
  "#escuela-hero-sub",
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 1.5, ease: "expo.inOut" }
);
hero.fromTo(
  ".escuela-button",
  { opacity: 0 },
  { opacity: 1, duration: 1, delay: 2, ease: "expo.inOut" }
);
hero.fromTo(
  "#anim",
  { opacity: 0 },
  { opacity: 0.8, duration: 1, delay: 0.5, ease: "expo.inOut" }
);

var rule = CSSRulePlugin.getRule("#escuela-hero-blend:after");
hero.fromTo(
  rule,
  {
    cssRule: {
      opacity: 0,
    },
  },
  {
    cssRule: {
      opacity: 0.15,
    },
    duration: 1,
    delay: 2.2,
    ease: "expo.inOut",
  }
);

// escuela progress stuff

const base = document.getElementById("progress-base");
const progress = document.getElementById("progress");
const logo = document.getElementById("logo");
const up = document.getElementById("up");

let length = progress.getTotalLength();

progress.style.strokeDasharray = length;
progress.style.strokeDashoffset = length;

const animate = (value) => {
  progress.style.strokeDashoffset = length - value;
};

let max =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
let val = length;

window.addEventListener("scroll", (e) => {
  val = (length / max) * window.scrollY;
  animate(val);

  if (val > length - 30) {
    up.style.visibility = "visible";
    logo.style.visibility = "hidden";
  } else {
    up.style.visibility = "hidden";
    logo.style.visibility = "visible";
  }
});

// top scroll

base.addEventListener("click", () => {
  toTop();
});

const toTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

// lottie stuff

window.onload = () => {
  animation.stop();
  run();
};

const run = () => {
  setTimeout(() => {
    animation.playSegments([0, 43], true);
    //animation.play();
  }, 1500);
};

let animation = bodymovin.loadAnimation({
  container: document.getElementById("anim"),
  path: "assets/data.json",
  renderer: "canvas",
  loop: false,
  autoplay: false,
});

const triggerAnim = (section, dir) => {
  console.log(section);
  const animbase = document.getElementById("anim");

  switch (section) {
    case "1":
      animbase.style.visibility = "visible";
      animation.playSegments([0, 43], true);
      console.log(0, 23);
      break;

    case "2":
      animbase.style.visibility = "visible";
      animation.playSegments([42, 120], true);
      console.log(23, 45);
      break;

    case "3":
      animbase.style.visibility = "visible";
      animation.playSegments([119, 150], true);
      console.log(23, 45);
      break;
    case "4":
      animbase.style.visibility = "visible";
      animation.playSegments([165, 225], true);
      console.log(23, 45);
      break;
    case "5":
      animbase.style.visibility = "hidden";
  }
};

let observer = new IntersectionObserver((e) => {
  var elem = e.filter((entry) => entry.isIntersecting);
  if (elem.length > 0) {
    elem = elem[0].target;
    triggerAnim(elem.dataset.order);
    console.log(elem.dataset.order);
  }
});

document.querySelectorAll("section").forEach((ele) => observer.observe(ele));

// project scope section

const scope = {

  intro: `
  <ul>
  <li> Introduced in 1867 as a commercial crop, Ceylon Tea has grown to be a main source of foreign exchange in Sri Lanka providing direct and indirect employment to nearly 1 million citizens.</li>
  <li> 4% of the land is dedicated to tea plantations producing an annual harvest of about 340 million kilos.</li>
  <li> A major challenge in the tea industry - Blister Blight caused by pathogen (Exobasidium vexans), results in the greatest damage with a crop loss greater than 30%. </li>
  <li> Annual Financial Loss: $ 371 million </li>
  <li> The fungus attacks the tender tea shoot, negatively affecting the tea harvest directly </li>
  This study proposes a system to identify the disease with its progression and propagation along with existing nutrient deficiencies.
  </ul>`,

  gap: `
  <span class="text-highlight">The First Mobile Application to </span>,
  <ul>
  <li> Detect suspicious tea leaves in real-time.</li>
  <li> Identify Tea Cultivars. </li>
  <li> Assess Blister Blight severity based on both Severity Symptoms and Inflicted Leaf Area.  </li>
  <li> Visualize Blister infected areas in tea with the dispersion patterns. </li>
  <li> Predict the emergence date for the Blister Blight season. </li>
  <li> Notify the users who are in the risk infestation area. </li>
  <li> Identify tea deficiency symptoms. </li>
  

  </ul>
  `,

  problem: `
  <ul>
  <li> How to identify the tea leaves infected with Blister Blight at the initial stage ?</li>
  <li> What is the Cultivar of the tea leaf ?</li>
  <li> If the tea leaf is infected with Blister Blight, what is the severity level ? </li>
  <li> When will the user get Blister Blight ? </li>
  <li> If the tea leaf is not infected with Blister Blight, does it have any deficiency ? </li>
  </ul>
  `,

  objectives: `
  <span class="text-highlight"> Objectives</span>
  <ul>
  <li> Suspicious Tea Leaf Identification and Tea Disease Classification </li>
  <li> Identifying the Progression Levels of Blister Blight. </li>
  <li> Differentiating Tea cultivars and Nutrient Deficiencies in Tea Leaves. </li>
  <li> Disease Dispersion and Blister Blight Season Forecasting. </li>
  </ul>
  `,
};

document.querySelector("#project-scope").innerHTML = scope.intro;

const setContent = (i) => {
  switch (i) {
    case "1":
      document.querySelector("#project-scope").innerHTML = scope.intro;
      break;

    case "2":
      document.querySelector("#project-scope").innerHTML = scope.background;
      break;

    case "3":
      document.querySelector("#project-scope").innerHTML = scope.gap;
      break;
    case "4":
      document.querySelector("#project-scope").innerHTML = scope.problem;
      break;
    case "5":
      document.querySelector("#project-scope").innerHTML = scope.objectives;
      break;
  }
};

document.querySelectorAll("#scope-nav").forEach((item) => {
  item.addEventListener("click", () => {
    setContent(item.dataset.tab);
    removeActive();
    item.classList.add("tab-active");
  });
});

const removeActive = () => {
  document.querySelectorAll("#scope-nav").forEach((item) => {
    item.classList.remove("tab-active");
    hero.fromTo(
      "#project-scope",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "expo.inOut" }
    );
  });
};

// documents

document.querySelectorAll("#doc-i").forEach((item) => {
  item.addEventListener("click", () => {
    removeDocActive();
    item.classList.add("doc-active");
    if (item.dataset.doc == "1") {
      docActive();
    } else {
      proposalActive();
    }
  });
});

const docActive = () => {
  gsap.to("#m2", {
    display: "none",
    stagger: -0.1,
    duration: 0.2,
    delay: 0.1,
  });

  gsap.to("#m1", {
    display: "flex",
    stagger: -0.1,
    duration: 0.2,
    delay: 0.1,
  });
};

const proposalActive = () => {
  gsap.to("#m1", {
    display: "none",
    stagger: -0.1,
    duration: 0.2,
    delay: 0.1,
  });

  gsap.to("#m2", {
    display: "flex",
    stagger: -0.1,
    duration: 0.2,
    delay: 0.1,
  });
};

const removeDocActive = () => {
  document.querySelectorAll("#doc-i").forEach((item) => {
    item.classList.remove("doc-active");
  });
};

docActive();

// mobile navigation

let open = false;

document.getElementById("nav-mob").addEventListener("click", () => {
  open = !open;
  if (open) {
    gsap.to("#mob-nav", { autoAlpha: 1, duration: 1, ease: "expo.inOut" });
  } else {
    gsap.to("#mob-nav", { autoAlpha: 0, duration: 1, ease: "expo.inOut" });
  }
});

// mob nav close when click items

document.querySelectorAll("#mob-nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    gsap.to("#mob-nav", { autoAlpha: 0, duration: 1, ease: "expo.inOut" });
  });
});

//  cta action

document.getElementById("cta").addEventListener("click", () => {
  window.location.replace("#escuela-section-1");
});

// custom navigation

const navigate = (url) => {
  window.location.href = url;
};
