import { useState } from 'react';
import { Typography, Paper } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { v4 as uuidv4 } from 'uuid';
import { FaGithub, FaLinkedin, FaAngellist } from 'react-icons/fa';
import {
  Html5Original, Css3Original, SassOriginal, TailwindcssPlain, BootstrapOriginal, LessPlainWordmark, JavascriptOriginal, ReactOriginalWordmark, VuejsOriginal, ReduxOriginal, RubyOriginal, RspecOriginal, RailsPlainWordmark, PhpPlain, COriginal, FedoraPlain, FigmaOriginal, JqueryPlain, EslintOriginal, PostgresqlOriginal, MysqlOriginalWordmark, GulpPlain, NpmOriginalWordmark, GitOriginal,
} from 'devicons-react';
import ContactModal from '../Contact/ContactModal';
import ProjectCard from '../ProjectCard/ProjectCard';
import lolDraftImage from '../../../public/screenshots/lol-draft-2023.png';
import scores from '../../../public/screenshots/513-scores.png';
import weather from '../../../public/screenshots/538-weather.png';
import bookstore from '../../../public/screenshots/bookstore-cms.png';
import chronicler from '../../../public/screenshots/idea-chronicler.png';
import spaceTravelers from '../../../public/screenshots/space-travelers-hub.png';
import tvHub from '../../../public/screenshots/tv-series-hub.png';
import recipe from '../../../public/screenshots/ultimate-recipe-assistant.png';
import finansFlux from '../../../public/screenshots/finans-flux.png';
import traveliBooking from '../../../public/screenshots/traveli-booking.png';

import './AboutMe.scss';

const AboutMe = () => {
  const [openToWork] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const openModal = () => {
    if (openToWork) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const projects = [
    {
      id: uuidv4(),
      title: 'Lorem Ipsum League Draft 2023',
      description: 'This website utilizes a pre-defined template. The project centers around a fictional event with all names, cities, and venues generated by free AI generators and/or the project author.',
      date: 'April 2023',
      technologies: ['HTML', 'CSS', 'Tailwind CSS', 'Webpack', 'JavaScript'],
      links: [
        { text: 'Source Code', url: 'https://github.com/romans-adi/lol-draft-2023' },
        { text: 'Live Demo', url: 'https://lorem-ipsum-draft-2023.onrender.com/' },
      ],
      screenshot: lolDraftImage,
    },
    {
      id: uuidv4(),
      title: 'Bookstore CMS',
      description: 'The Bookstore project is a website that allows users to view, add, and remove books from a list. It utilizes React and Redux to provide an interactive user interface and manage the application state.',
      date: 'May 2023',
      technologies: ['React', 'SCSS', 'Redux Toolkit'],
      links: [
        { text: 'Source Code', url: 'https://github.com/romans-adi/bookstore' },
        { text: 'Live Demo', url: 'https://bookstore-cms-owyj.onrender.com/' },
      ],
      screenshot: bookstore,
    },
    {
      id: uuidv4(),
      title: '538 Weather',
      description: 'Simple single-page application (SPA) that uses an open-source API to display real-time weather data for a specific location.',
      date: 'July 2023',
      technologies: ['Vue.js', 'JavaScript', 'TypeScript', 'SCSS', 'Tailwind CSS', 'Pinia'],
      links: [
        { text: 'Source Code', url: 'https://github.com/romans-adi/538-weather' },
        { text: 'Live Demo', url: 'https://five38-weather.onrender.com/' },
      ],
      screenshot: weather,
    },
    {
      id: uuidv4(),
      title: 'TV Series Hub',
      description: 'This is the web page used to show information about TV Series, using API like TV Maze to get information and another API to store information about the user interaction. Project was made in a duo.',
      date: 'May 2023',
      technologies: ['HTML', 'CSS', 'JavaScript', 'REST API'],
      links: [
        { text: 'Source Code', url: 'https://github.com/romans-adi/tv-series-hub' },
        { text: 'Live Demo', url: 'https://alvaroiporre.github.io/JavaScript-Capstone-Project/' },
      ],
      screenshot: tvHub,
    },
    {
      id: uuidv4(),
      title: "Space Travelers' Hub",
      description: 'This project is designed to serve a company that offers commercial and scientific space travel services. It utilizes real-time data from the SpaceX API, allowing users to book rockets and join selected space missions. Project was made in a duo.',
      date: 'June 2023',
      technologies: ['React', 'Redux', 'Jest', 'SCSS', 'API'],
      links: [
        { text: 'Source Code', url: 'https://github.com/romans-adi/space-travelers-hub' },
        { text: 'Live Demo', url: 'https://space-travelers-hub-05ai.onrender.com/' },
      ],
      screenshot: spaceTravelers,
    },
    {
      id: uuidv4(),
      title: '513 Scores',
      description: 'The live sports scores application is a React-based platform that uses Redux for state management and an API to fetch real-time sports data. It provides users with up-to-date scores, match schedules, and other relevant information for various sports events, delivering a seamless and interactive experience.',
      date: 'June 2023',
      technologies: ['React', 'Redux', 'Jest', 'SCSS', 'API'],
      links: [
        { text: 'Source Code', url: 'https://github.com/romans-adi/513-scores' },
        { text: 'Live Demo', url: 'https://five13-scores.onrender.com/' },
      ],
      screenshot: scores,
    },
    {
      id: uuidv4(),
      title: 'IdeaChronicler',
      description: "The 'Idea Chronicler' project is a fully functional blog application that enables users to view and interact with posts by leaving comments and liking content. It serves as a platform for users to share ideas and engage in discussions through written content.",
      date: 'August 2023',
      technologies: ['MVC', 'Ruby on Rails', 'Ruby', 'JavaScript', 'Stimulus', 'RSpec', 'PostgreSQL', 'HTML', 'SCSS', 'Devise', 'API'],
      links: [
        { text: 'Source Code', url: 'https://github.com/romans-adi/IdeaChronicler' },
        { text: 'Live Demo', url: 'https://idea-chronicler.onrender.com/' },
      ],
      screenshot: chronicler,
    },
    {
      id: uuidv4(),
      title: 'Ultimate Recipe Assistant',
      description: 'Ultimate Recipe Assistant is a cooking app with user authentication and authorization, featuring models like User, Food, Recipe, and Recipe Food, complete with data validations, CRUD actions, and optimized queries to simplify kitchen adventures.',
      date: 'September 2023',
      technologies: ['MVC', 'Ruby on Rails', 'Ruby', 'RSpec', 'PostgreSQL', 'HTML', 'SCSS', 'Tailwind CSS', 'Devise', 'Stimulus'],
      links: [
        { text: 'Source Code', url: 'https://github.com/romans-adi/recipe-app' },
        { text: 'Live Demo', url: 'https://ultimate-recipe-assistant.onrender.com/' },
      ],
      screenshot: recipe,
    },
    {
      id: uuidv4(),
      title: 'Finans Flux',
      description: 'FinansFlux is a robust financial mobile application built on a Postgres database, fortified by Devise authentication for security. It empowers users with features like transaction categorization, real-time expense tracking, and intuitive category creation.',
      date: 'September 2023',
      technologies: ['MVC', 'Ruby on Rails', 'Ruby', 'RSpec', 'PostgreSQL', 'HTML', 'SCSS', 'Tailwind CSS', 'Devise', 'Stimulus'],
      links: [
        { text: 'Source Code', url: 'https://github.com/romans-adi/finans-flux' },
        { text: 'Live Demo', url: 'https://finans-flux.onrender.com/' },
      ],
      screenshot: finansFlux,
    },
    {
      id: uuidv4(),
      title: 'Traveli Booking',
      description: 'Traveli Booking is a user-friendly travel planning and booking platform that was developed on behalf of my study partner. This project seamlessly integrates React Router, Redux, and Redux Toolkit\'s createAsyncThunk for real-time data. It offers a responsive design, secure authentication, and robust backend support, ensuring a seamless travel planning experience.',
      date: 'October 2023',
      technologies: ['MVC', 'Ruby on Rails', 'React', 'RSpec', 'PostgreSQL', 'HTML', 'SCSS', 'Tailwind CSS', 'Jest', 'Devise', 'REST API'],
      links: [
        { text: 'Source Code', url: 'https://github.com/romans-adi/travel-booking-frontend' },
        { text: 'Live Demo', url: 'https://traveli.onrender.com/' },
      ],
      screenshot: traveliBooking,
    },
  ];

  const sortedProjects = projects.sort((a, b) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    return months.indexOf(b.date.split(' ')[0]) - months.indexOf(a.date.split(' ')[0]);
  });

  return (
    <Paper className="about-me-container" elevation={3}>
      <div className="two-column-container">
        <div className="left-column">
          <div className="description">
            <Typography
              variant="h3"
              className={`name ${openToWork ? 'mailto-link' : ''}`}
              onClick={openModal}
            >
              Romans Špiļaks
              {openToWork && (
              <span
                className={`status-badge ${hovered ? 'hovered' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {hovered ? (
                  <MailOutlineIcon fontSize="medium" />
                ) : 'Open To Work'}
              </span>
              )}
            </Typography>
            <ContactModal isOpen={modalOpen} onRequestClose={closeModal} />
            <Typography variant="h6" className="position">
              Full Stack Software Engineer
            </Typography>
            <div className="tools">
              <div className="tool-list">
                <div className="tool-icon" data-tooltip="HTML">
                  <Html5Original className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="CSS">
                  <Css3Original className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="SASS">
                  <SassOriginal className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="Tailwind">
                  <TailwindcssPlain className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="Bootstrap">
                  <BootstrapOriginal className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="LESS">
                  <LessPlainWordmark className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="JavaScript">
                  <JavascriptOriginal className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="React">
                  <ReactOriginalWordmark className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="Vue">
                  <VuejsOriginal className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="Redux">
                  <ReduxOriginal className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="Ruby">
                  <RubyOriginal className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="RSpec">
                  <RspecOriginal className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="Rails">
                  <RailsPlainWordmark className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="PHP">
                  <PhpPlain className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="C">
                  <COriginal className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="Fedora">
                  <FedoraPlain className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="Figma">
                  <FigmaOriginal className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="jQuery">
                  <JqueryPlain className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="ESLint">
                  <EslintOriginal className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="PostgreSQL">
                  <PostgresqlOriginal className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="MySQL">
                  <MysqlOriginalWordmark className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="Gulp">
                  <GulpPlain className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="npm">
                  <NpmOriginalWordmark className="icon" />
                </div>
                <div className="tool-icon" data-tooltip="Git">
                  <GitOriginal className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="network-icons-container">
            <a href="https://github.com/romans-adi" target="_blank" rel="noopener noreferrer" className="network-icon-link">
              <FaGithub className="network-icon" />
            </a>
            <a href="https://www.linkedin.com/in/obj513/" target="_blank" rel="noopener noreferrer" className="network-icon-link">
              <FaLinkedin className="network-icon" />
            </a>
            <a href="https://wellfound.com/u/romans-spilaks" target="_blank" rel="noopener noreferrer" className="network-icon-link">
              <FaAngellist className="network-icon" />
            </a>
          </div>
        </div>
        <div className="right-column">
          <div className="text-container">
            <Typography variant="body1" className="content">
              I&apos;m a versatile software developer experienced in UI/UX design and proficient in HTML, CSS, JavaScript (including
              {' '}
              <strong>React</strong>
              {' '}
              and some Vue.js), as well as having some experience with PHP,
              {' '}
              <strong>Ruby</strong>
              , and relational databases (RDBMS). Recently, I learned
              {' '}
              <strong>Ruby on Rails</strong>
              , and I&apos;m excited to apply my knowledge. I&apos;m passionate about solving problems and finding innovative solutions.
              <br />
              <br />
              I trained at Microverse, a well-known online coding school, where I gained a strong foundation in software development principles by collaborating with diverse developers and have successfully executed projects that demonstrate my ability to create high-quality web solutions with engaging user experiences and efficient backend functionalities.
              <br />
              <br />
              I am actively pursuing new software engineering opportunities and bring a strong commitment, adaptability, and a desire to discuss how my skills can enhance your team. I invite you to connect so that we can explore the potential for collaboration, ultimately achieving outstanding results together.
            </Typography>
          </div>
          <div className="project-cards">
            {sortedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                screenshot={project.screenshot}
                description={project.description}
                date={project.date}
                technologies={project.technologies}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default AboutMe;
