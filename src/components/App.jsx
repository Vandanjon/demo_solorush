import avatar from "../assets/images/Avatar_web.jpg";
import MenuBurger from "./MenuBurger";
import projects from "../datas/projects.json";
import Projects from "./Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="page-container">
      <header className="top-header">
        <nav>
          <h1>Benoît Vandanjon</h1>

          <MenuBurger />
        </nav>
      </header>

      <main>
        <header className="main-header-container">
          <section className="left-side">
            <div>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#">TATA</a>
              <a href="#">TITI</a>
            </div>
          </section>

          <img src={avatar} alt="zourit" />

          <section className="right-side">
            <h2>Web Developer</h2>
            <h3>Benoît VANDANJON</h3>
          </section>
        </header>

        <section className="about-container">
          <article>
            <h2>À propos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              at aspernatur quae veniam, quam iure quaerat ipsam laborum,
              perferendis molestiae natus dolore officiis nisi? Commodi, cumque.
              Aliquid culpa ea libero nobis quas? Obcaecati voluptates dolorum
              sed maxime blanditiis labore rerum quo? Quas vitae assumenda
              necessitatibus. Quae magni atque neque ratione earum dolorum
              suscipit corporis consequuntur veritatis rerum aperiam, sed odio.
              Quas ut quo earum, sunt in blanditiis nihil, iste totam mollitia
              ratione, expedita tempore harum inventore voluptatem id cumque
              officiis maiores tenetur! Quod corporis expedita ducimus, maiores
              sequi quasi eum. Labore provident inventore iste nisi asperiores
              vel aspernatur quibusdam quod?
            </p>
          </article>
        </section>

        <section className="projects-container">
          <h2>Mes Projets</h2>

          <article>
            {projects.map((project) => (
              <Projects
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </article>
        </section>
      </main>

      <footer>ffff</footer>
    </div>
  );
}

export default App;
