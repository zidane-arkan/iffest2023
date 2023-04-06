
// DUMMY DATA
const classes = [
    {
        subTitle: 'Web Development',
        title: 'Front-End Developer',
        content: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.'
    },
    {
        subTitle: 'Web Development',
        title: 'Back-End Developer',
        content: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.'
    },
    {
        subTitle: 'Mobile Development',
        title: 'Flutter Developer',
        content: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.'
    },
    {
        subTitle: 'Android Development',
        title: 'Kotlin Developer',
        content: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.'
    }
];
const classParent = document.getElementById('classesParent');

classes.forEach((item) => {
    const classImage = document.createElement('img');
    classImage.src = "https://dummyimage.com/720x400";
    classImage.className = "object-cover object-center w-full h-40 mb-6 rounded";
    classImage.alt = "Classes";
    const divParent = document.createElement('div');
    divParent.className = "p-4 xl:w-1/4 md:w-1/2";
    const divContent = document.createElement('div');
    divContent.className = "p-6 bg-gray-800 rounded-lg bg-opacity-40";
    const headingTitle = document.createElement('h2');
    headingTitle.className = "mb-4 text-lg font-medium text-white title-font";
    const headingSub = document.createElement('h3');
    headingSub.className = "text-xs font-medium tracking-widest text-yellow-400 title-font";
    const content = document.createElement('p');
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


