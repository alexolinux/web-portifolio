import { Header } from "./components/header/header";
import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
      <Header/>      
      
      <div className="aboutme">
        <h2>#Who Am I</h2>
        <h3>
          <p>
          With over 14 years of dedicated experience in Infrastructure, including a decade in UNIX/GNU Linux administration journey, I have a skill set through hands-on practice. BSc. in Information Systems from Castelo Branco University, I hold certifications in AWS, LPIC-1, SUSE Certified Linux Administrator (CLA), and ITIL V3 Foundation. Passionate about Cloud and DevOps principles enthusiast, learning frequently in a collaborative environment.
          </p>
        </h3>
      </div>

      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>Portuguese-BR - Native Speaker</span>
          <span>English - B2 Level</span>
          <span>Spanish - Intermediate</span>
        </div>
        <h3>Certifications</h3>
        <div className="certifications-info">
          <span>EMOJI HERE</span>
          <span>TEXT HERE</span>
        </div>
      </div>

      <div className="buttons">
        <div className="social">

        </div>
        
        <button>contact</button>

      </div>
      
    </main>
  );
}
