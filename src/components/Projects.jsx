import PropTypes from "prop-types";

function Projects({ title, description, image }) {
  //   console.log(id, title, description, image);
  return (
    <section className="ProjectsComponent">
      <h1>{title}</h1>

      <img src={image} alt="toto" />
      <p>{description}</p>
    </section>
  );
}

export default Projects;

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
