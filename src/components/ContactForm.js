import React from 'react';
export default function ContactForm() {
  return (
    <form method="post" action="#">
      <div className="row">
        <div className="col-6 col-12-mobilep">
          <input type="text" name="name" placeholder="お名前" />
        </div>
        <div className="col-6 col-12-mobilep">
          <input type="email" name="email" placeholder="メールアドレス" />
        </div>
        <div className="col-12">
          <textarea name="message" placeholder="メッセージ" rows="6"></textarea>
        </div>
        <div className="col-12">
          <ul className="actions special">
            <li>
              <input type="submit" value="送る" />
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
}
