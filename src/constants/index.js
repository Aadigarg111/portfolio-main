import { Trophy, 
  Rocket, 
  Brain, 
  Code,
  Star,
  Users,
  Globe,
  Award,
  Medal,
  Laptop,
  Coffee,
  Lightbulb } from 'lucide-react';
import {
    
    bny,
    ivlabs,
    profile,
    riderover,
    
  } from "../assets";

  const services = [
    {
      title: "C",
      
    },
    {
      title: "C++",
      
    },
    {
      title: "Java",
       
    },
    {
      title: "Python",
       
    },
    {
      title: "SQL",
     
    },
    {
      title: "HTML",
       
    },
    {
      title: "Tailwind CSS",
       
    },
    {
      title: "Javascript",
      
    },
    {
      title: "React Js",
       
    },
    {
      title: "Node Js",
      
    },
    
  
    {
      title: "MongoDB"
    },
    {
      title: "Flutter",
       
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "lorem ipsum",
      icon: bny,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Working on web application development using React, Node.js, and MongoDB",
      ],
    },
    {
      title: "SDE Intern",
      company_name: "lorem ipsum",
      icon: bny,
      iconBg: "#E6DEDD",
      date: "May 2023 - July 2023",
      points: [
        "Developed a web application using React, Node.js, and MongoDB for managing financial transactions",
      ],
    },
    
  ];
  
  const projects = [
    {
      title: "Collaby - A Collaborative Board",
      link: "/",
      description: "Collaby is an intuitive and interactive collaborative board designed to enhance teamwork and productivity. It allows users to brainstorm, share ideas, and work together in real-time. With features like drag-and-drop elements, customizable boards, and seamless integration with modern tools, Collaby is perfect for project management, creative planning, and remote collaboration."
    },
    
    {
      title: " SpaceTrack",
      link: "/",
      description: "Void Voyager: An immersive 3D solar system explorer that brings the cosmos to life in your browser with stunning visuals and intuitive controls."
    },
    
  ];

  const achievements = [
    {
      icon: Laptop,
      description: "1+ years of experience in software development, specializing in web and mobile applications",
      color: "from-teal-500 to-emerald-500"
    },
    {
      icon: Medal,
      description: "1x Hackathon Winner",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Trophy,
      description: "Qualified for the finals of 5 hackathons",
      color: "from-violet-600 to-indigo-600"
    },
    {
      icon: Rocket,
      description: "Worked on 10+ projects, including web apps, mobile apps, and computer vision solutions, showcasing versatility and expertise in various technologies",
      color: "from-rose-500 to-orange-500"
    },
    {
      icon: Brain,
      description: "Achieved 5-star rating on HackerRank, demonstrating exceptional coding skills and problem-solving abilities",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Code,
      description: "250+ LeetCode problems solved, showcasing strong problem-solving skills and algorithmic knowledge",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      description: "Great team player, successfully collaborating with diverse teams to deliver high-quality projects on time",
      color: "from-purple-500 to-pink-500"
    },
  ];

  const name = "Aadi Garg"
  const subText = "App Developer | Fullstack Web developer"
  
  export { services, experiences,  projects, name, subText, achievements };