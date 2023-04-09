// DUMMY DATA
const classes = [
  {
    subTitle: "Web Development",
    title: "Front-End Developer",
    content:
      "Shape the digital world with your creativity and code. Join our team of frontend developers and bring stunning designs to life.",
  },
  {
    subTitle: "Web Development",
    title: "Back-End Developer",
    content:
      "Behind every great website, there's a backend developer powering its functionality. Lets make a difference by building scalable systems.",
  },
  {
    subTitle: "Mobile Development",
    title: "Flutter Developer",
    content:
      "Create stunning mobile apps with ease. Join our team of Flutter developers and bring your ideas to life!",
  },
  {
    subTitle: "Android Development",
    title: "Kotlin Developer",
    content:
      "Build powerful and efficient Android apps. Join our team of Kotlin developers and make an impact on the world of mobile technology.",
  },
];
const classParent = document.getElementById("classesParent");

classes.forEach((item) => {
  const classImage = document.createElement("img");
  classImage.src =
    "https://plus.unsplash.com/premium_photo-1661573322713-0935eae5f6a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80";
  classImage.className = "object-cover object-center w-full h-40 mb-6 rounded";
  classImage.alt = "Classes";
  const divParent = document.createElement("div");
  divParent.className = "p-4 xl:w-1/4 md:w-1/2";
  const divContent = document.createElement("div");
  divContent.className = "p-6 bg-gray-800 rounded-lg bg-opacity-40";
  const headingTitle = document.createElement("h2");
  headingTitle.className = "mb-4 text-lg font-medium text-white title-font";
  const headingSub = document.createElement("h3");
  headingSub.className =
    "text-xs font-medium tracking-widest text-yellow-400 title-font";
  const content = document.createElement("p");
  content.className = "text-base leading-relaxed";

  headingTitle.textContent = item.title;
  headingSub.textContent = item.subTitle;
  content.textContent = item.content;

  divContent.appendChild(headingSub);
  divContent.appendChild(headingTitle);
  divContent.appendChild(classImage);
  divContent.appendChild(content);

  divParent.appendChild(divContent);
  return classParent.appendChild(divParent);
});

let acc = document.getElementsByClassName("accordion");
let i;
let len = acc.length;
console.log(len);
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    console.log(panel);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
