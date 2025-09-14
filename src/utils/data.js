// Skills Section Logo's
import htmlLogo from '../assets/tech_logo/html.png';
import cssLogo from '../assets/tech_logo/css.png';
import javascriptLogo from '../assets/tech_logo/javascript.png';
import reactjsLogo from '../assets/tech_logo/reactjs.png';
import reduxLogo from '../assets/tech_logo/redux.png';
import nextjsLogo from '../assets/tech_logo/nextjs.png';
import tailwindcssLogo from '../assets/tech_logo/tailwindcss.png';
import bootstrapLogo from '../assets/tech_logo/bootstrap.png';
import nodejsLogo from '../assets/tech_logo/nodejs.png';
import expressjsLogo from '../assets/tech_logo/express.png';
import mysqlLogo from '../assets/tech_logo/mysql.png';
import mongodbLogo from '../assets/tech_logo/mongodb.png';
import cLogo from '../assets/tech_logo/c.png';
import cppLogo from '../assets/tech_logo/cpp.png';
import javaLogo from '../assets/tech_logo/java.png';
import pythonLogo from '../assets/tech_logo/python.png';
import typescriptLogo from '../assets/tech_logo/typescript.png';
import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import vscodeLogo from '../assets/tech_logo/vscode.png';
import postmanLogo from '../assets/tech_logo/postman.png';
import mcLogo from '../assets/tech_logo/mc.png';
import figmaLogo from '../assets/tech_logo/figma.png';
import vercelLogo from '../assets/tech_logo/vercel.png';

// Experience Section Logo's
import webverseLogo from '../assets/company_logo/webverse_logo.png';
import agcLogo from '../assets/company_logo/agc_logo.png';
import newtonschoolLogo from '../assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import bca from '../assets/education_logo/asp.png'
import maharastraBoard from '../assets/education_logo/maharastra board.jpeg';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    
    {
      id: 1,
      img: bca,
      school: "ASP College Devrukh",
      date: "Sept 2023 - Aug 2025",
      grade: "7.20 CGPA ",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from ASP College Devrukh . Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSC College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: maharastraBoard,
      school: "Paisa Fund English School and College,Sangameshwar",
      date: "Apr 2021 - March 2022",
      grade: "52%",
      desc: "I completed my class 12 education in Science from Paisa Fund English School, under the maharastra board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "Maharastra Board - HSC in Science",
    },
    {
      id: 0,
      img: maharastraBoard,
      school: "Paisa Fund English School and College,Sangameshwar",
      date: "Sept 2018 - July 2019",
      grade: "62.80%",
      desc: "I have completed my SCC in  from Paisa Fund English School and College,Sangameshwar. ",
      degree: "Maharastra Board - SCC",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Assal Konkani",
      description:
        "Built a frontend e-commerce platform with Next.js, shadcn/ui, Tailwind CSS, and MongoDB, delivering a responsive and modern shopping experience.",
      tags: ["HTML", "CSS", "JavaScript", "API" ,"Tailwind CSS", "Next JS", "MongoDB"],
      webapp: " https://assal-kokani.vercel.app/"

    },
    {
      id: 1,
      title: "Portfolio",
      description:
        "Developed a responsive portfolio site to showcase projects and skills with a clean and modern UI.",
      
      tags: ["React JS", "Tailwind CSS","Javascript","EmailJS"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    
  ];  