
import { useState } from "react";
import { profile, contacts, socials } from "../data";


const external = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

// Allows long email addresses to wrap naturally.
const softBreak = (value: string) =>
  value.split(/(?=@)/).flatMap((part, index) =>
    index ? [<wbr key={index} />, part] : [part]
  );

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`sidebar card${open ? " open" : ""}`}>
      {/* Profile header */}
      <div className="sidebar-head">
        <img
          className="avatar"
          src={profile.avatar}
          alt={profile.name}
        />

        <div className="sidebar-id">
          <h1 className="name">{profile.name}</h1>
          <p className="chip">{profile.title}</p>
        </div>

        {/* Visible on tablet and mobile */}
        <button
  type="button"
  className="toggle"
  aria-expanded={open}
  aria-controls="sidebar-more"
  aria-label={open ? "Hide contacts" : "Show contacts"}
  onClick={() => setOpen((previous) => !previous)}
>
  {open ? "Show Contacts" : "Show Contacts"}
</button>
      </div>

      {/* Contact details and social links */}
      <div id="sidebar-more" className="sidebar-more">
        <div className="sidebar-more-inner">
          <hr className="sidebar-divider" />

          <ul className="contacts">
            {contacts.map(({ label, value, icon: Icon, href }) => (
              <li key={label}>
                <span className="icon-box">
                  <Icon aria-hidden="true" />
                </span>

                <div className="contact-text">
                  <p className="label">{label}</p>

                  <p className="value">
                    {href ? (
                      <a href={href} {...external(href)}>
                        {softBreak(value)}
                      </a>
                    ) : (
                      value
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <hr className="sidebar-divider sidebar-divider-socials" />

          <ul className="socials">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  className="social"
                  href={href}
                  aria-label={label}
                  title={label}
                  {...external(href)}
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
