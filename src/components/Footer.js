import React from 'react';
import ContactForm from './ContactForm';
import config from '../../config';
export default function Footer() {
  return (
    <div id="footer">
      <div className="container medium">
        <header className="major last">
          <h2>Feel Free to Contact Me</h2>
        </header>

        <p>お気軽にご連絡をお待ちしております。</p>

        <ContactForm />

        <ul className="icons">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="copyright">
          <li>&copy; Takeshi Inoue. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
