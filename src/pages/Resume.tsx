
import { FiDownload } from "react-icons/fi";
import Heading from "../components/Heading";
import { resumeSections } from "../data";

export default function Resume() {
  return (
    <section className="resume-page">
      <Heading>Resume</Heading>

      <a
        href={`${import.meta.env.BASE_URL}Devansh_Indoliyan__CV%20(2).pdf`}
        download="Devansh_Indoliyan_CV.pdf"
        className="btn center"
      >
        <FiDownload aria-hidden="true" />
        Download Resume
      </a>

      <div className="resume-sections">
        {resumeSections.map((section) => {
          const SectionIcon = section.icon;

          return (
            <section
              key={section.id}
              className="resume-section"
            >
              <h3 className="h3 with-icon">
                <span className="icon-box">
                  <SectionIcon aria-hidden="true" />
                </span>

                {section.title}
              </h3>

              {section.type === "skills" ? (
                <ul className="resume-skills">
                  {section.items.map((skill) => (
                    <li key={skill.label}>
                      <strong>{skill.label}:</strong>{" "}
                      {skill.value}
                    </li>
                  ))}
                </ul>
              ) : (
                <ol className="timeline">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <h4>{item.title}</h4>

                      {item.meta && (
                        <span className="period">
                          {item.meta}
                        </span>
                      )}

                      <div className="resume-bullets">
                        {item.bullets.map((bullet, index) => (
                          <p
                            className="text"
                            key={`${item.title}-${index}`}
                          >
                            • {bullet}
                          </p>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          );
        })}
      </div>
    </section>
  );
}
