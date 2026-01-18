export const personalInfo = {
name: "Whelster Esmade",
role: "Web Developer",
tagline: "Building digital experiences that matter",
email: "Killuwhe21@gmail.com",
location: "Turno, Dipolog City, PH",
bio: "I'm a passionate web developer with 5+ years of experience building modern and responsive web applications. I enjoy turning complex ideas into clean, user-friendly, and effective digital solutions, also im a member of Devlabs",
longBio: `I started my journey in web development during college, where I discovered my passion for building things that live on the internet. I graduated from Jose Rizal Memorial State University, Batch 2024, with a Bachelor of Science in Computer Science, and was honored as JRMSU BSCS Best Programmer, Class of 2024. Since then, I’ve been developing my skills through academic projects, personal web builds, and student-led initiatives, and I’m currently preparing to launch my own startup project.

My main focus today is creating accessible, inclusive, and user-centered web applications. I enjoy the challenge of breaking down complex web development problems into simple, elegant, and effective solutions.

When I’m not coding, I explore new web technologies, contribute to open-source web projects, and enjoy a good cup of coffee while keeping up with the latest trends in tech.`,
resumeUrl: "/resume.pdf",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/KilluwheQT",
    icon: "Github",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/Kiluwhe",
    icon: "Facebook",
  },
  {
    name: "Email",
    url: "mailto:Killuwhe21@gmail.com",
    icon: "Mail",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 75 },
      { name: "PHP", level: 90 },
      { name: "MySQL", level: 90 },
      { name: "Firebase", level: 93 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 90 },
      { name: "Windsurf", level:93 },
      { name: "Photoshop", level: 75 },
      { name: "Canva", level: 80 },
      { name: "Cursor", level: 93 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "QR Code-Based Attendance System",
    description: "QRAMS is a modern QR code–based attendance management system designed for fast and reliable attendance tracking.",
    image: "/projects/qrams.png",
    tags: ["Next.js", "Firebase", "Vercel", "Javascript", "Tailwind CSS",],
    liveUrl: "https://qrams.vercel.app/",
    githubUrl: "https://github.com/KilluwheQT/qrams2.0",
    featured: true,
  },
  {
    id: 2,
    title: "QR Code-Based Attendance System 2.0 (OFFLINE)",
    description: "QRAMS is a modern QR-based attendance system built to record attendance quickly and reliably, even without an internet connection.",
    image: "/projects/qrams2.0.png",
    tags: ["Next.js", "PHP", "Tailwind CSS", "Javascript", "MySQL"],
    featured: true,
  },
  {
    id: 3,
    title: "Disaster Relief Management System",
    description: "A secure platform for managing and tracking disaster relief donations.",
    image: "/projects/drms.png",
    tags: ["Next.js", "Firebase", "Render", "Node.js", "Javascript"],
    liveUrl: "https://donation-e896.onrender.com/login/",
    githubUrl: "https://github.com/KilluwheQT/drm",
    featured: true,
  },
  {
    id: 4,
    title: "RFID/QRCODE Ticketing Fantasyland Kiddie Corner",
    description: "An RFID and QR code ticketing solution for Fantasyland Kiddie Corner, designed for efficient, secure, and fully cashless access.",
    image: "/projects/gfl.png",
    tags: ["Next.js", "Node.js", "Linux", "MySQL", "Tailwind CSS", "Javascript"],
    featured: true,
  },
  {
    id: 5,
    title: "Blockchain Based Voting Sytem",
    description: "A blockchain-powered voting system focused on vote integrity, security, and transparency.",
    image: "/projects/voting.png",
    tags: ["Asp.net", "C#", "PHP", "MySQL"],

    featured: false,
  },

 
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];
