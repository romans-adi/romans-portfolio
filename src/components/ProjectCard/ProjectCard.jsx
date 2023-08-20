import { Card, CardContent, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import './ProjectCard.scss';

const ProjectCard = (
  {
    title, description, technologies, date, links,
  },
) => (
  <Card className="project-card">
    <CardContent className="project-content">
      <Typography variant="h6" className="project-title">
        {title}
      </Typography>
      <Typography variant="body1" className="project-description">
        {description}
      </Typography>
      <div className="project-footer">
        <div className="technologies">
          {technologies.map((tech) => (
            <span key={tech} className="badge technology-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="links">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="badge link-badge"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
      <Typography variant="subtitle2" className="project-date">
        {date}
      </Typography>
    </CardContent>
  </Card>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProjectCard;
