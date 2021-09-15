// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Peter",
  middleName: "",
  lastName: "Dohr",
  message: " Passionate information security professional. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/pdohr33/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/pdohr/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/peterdohr/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/peter-dohr/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/PeterDohr/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:
    "My name is Peter Dohr. I am a Passionate Information Security Professional with experience in Threat Hunting, Application Security, Malware Analysis, Incident Response, Digital Forensics, Vulnerability Assessment, and Penetration testing.",
  resume: "https://docs.google.com/document/d/1u5eTL9C9UkkVnqC8i3Od871LtuNinAc-/edit?usp=sharing&ouid=113331349913830814727&rtpof=true&sd=true",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "pdohr33", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Incident Response", value: 95 },
    { name: "Digital Forensics", value: 95 },
    { name: "Malware Analysis", value: 85 },
    { name: "Pentration Testing", value: 75 },
    { name: "Application Security", value: 90 },
    { name: "Threat Hunting", value: 95 },
    { name: "Python", value: 75 },
    { name: "Powerhsell", value: 60 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 95 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 850 },
    { name: "Organization", value: 100 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Please feel free to email me at",
  email: "pdohr33@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Threat Hunt Lead',// Here Add Company Name
      companylogo: require('../assets/img/paychex.png'),
      date: 'March 2020 – Present',
    },
    {
      role: 'Penetration Test Engineer',
      companylogo: require('../assets/img/paychex.png'),
      date: 'June 2019 – March 2020',
    },
	{
      role: 'Security Investigation Unit: Specialist II',
      companylogo: require('../assets/img/paychex.png'),
      date: 'October 2017 – June 2019',
    },
	{
      role: 'Security Investigation Unit: Specialist I',
      companylogo: require('../assets/img/paychex.png'),
      date: 'October 2015 – October 2017',
    },
	{
      role: 'Information System Security Officer',
      companylogo: require('../assets/img/LL.png'),
      date: 'June 2014 – October 2015',
    },
	{
      role: 'Technical Researcher',
      companylogo: require('../assets/img/bs.png'),
      date: 'November 2013 – April 2014',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
