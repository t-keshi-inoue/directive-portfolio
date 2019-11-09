import React from 'react';
import Layout from '../../components/Layout';
import beforeworks from '../../assets/images/beforeworks.jpg';
import beforeworks2 from '../../assets/images/beforeworks2.jpg';
import programming from '../../assets/images/programming.jpg'

const Before = () => (
  <Layout>
    <div id="main">
      <header className="box major container topfit">
        <div className="container gutter-bottom">
          <div className="image fit">
            <img src={beforeworks} alt="tomateworks" />
          </div>
        </div>
        <h2>
          【Before:trip】
          <br />
          海外旅行に行く前に現地の言葉を学べるWebサイト
          <br />
        </h2>
        <button className="button spacing hidden">
          <a href="https://github.com/t-keshi-inoue/before-trip">
            DEMO
          </a>
        </button>
        <button className="button alt spacing">
          <a href="https://github.com/t-keshi-inoue/before-trip">
            Github
          </a>
        </button>
      </header>

      <section>
        <div className="box major container">
          <h3>
            作品紹介
          </h3>
          <p>
          　海外旅行に行くとき、ちゃんとその国の言葉を覚えてから行きたい。
          とはいえ、荷物が嵩張るので語学の本を持っていくのも嫌だ。
          ということで、海外旅行用の外国語学習サイトを作成しました。
          本格的な外国語学習ではなく一週間くらいの海外旅行で、
          ちょっと現地の言葉を話してみたい、といった要望に答えるサイトを目指しています。
          </p>
        </div>
      </section>

      <section>
        <div className="box major container with-image">
          <div className="container  gutter-bottom">
            <div className="image fit">
              <img src={beforeworks2} alt="tomateworks2"/>
            </div>
          </div>
          <header>
            <h3>
              デザインの意図とユーザーレビュー
            </h3>
          </header>
            <h4>
              デザイン
            </h4>
            <p>
              海外旅行にPCを持っていく方は、あまり多くありません。
              まず前提としてスマホで閲覧できることを意識しました。
              加えて、重要視したのは拡張性です。
              現段階では日本語→ポルトガル語にしか対応しておりませんが、
              これから様々な国の言葉を追加していけるようなデータベースの設計になっています。
            </p>
            <h4>
              レビュー
            </h4>
            <p>
              ー
            </p>
        </div>
      </section>

      <section>
        <div className="box major container with-image">
          <div className="container  gutter-bottom">
            <div className="image fit">
              <img src={programming} alt="programming" />
            </div>
          </div>
          <h3>
            技術スタック
          </h3>

          <ul>
            <li>言語：JavaScript</li>
            <li>ライブラリ：React</li>
            <li>スタイリング：styled-components</li>
            <li>データベース：Cloud Firestore</li>
            <li>ホスティング：Firbase Hosting</li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default Before;
