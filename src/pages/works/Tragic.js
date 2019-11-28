import React from 'react';
import Layout from '../../components/Layout';
import tragicworks from '../../assets/images/tragicworks.jpg';
import tragicworks2 from '../../assets/images/tragicworks2.jpg';
import programming from '../../assets/images/programming.jpg'

const Tragic = () => (
  <Layout>
    <div id="main">
      <header className="box major container topfit">
        <div className="container gutter-bottom">
          <div className="image fit">
            <img src={tragicworks} alt="tomateworks" />
          </div>
        </div>
        <h2>
          【Tragic Love Company】
          <br />
          友人のバンドサイト
          <br />
        </h2>
        <button className="button spacing">
          <a href="https://hopeful-snyder-513666.netlify.com/">
            DEMO
          </a>
        </button>
        <button className="button alt spacing">
          <a href="https://github.com/t-keshi-inoue/TragicLoveCompany">
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
            前に一緒にバンドを組んでいた仲間が、新曲とそのMusicVideoを作ったことを聞いて、
            何かとても応援したい気持ちになりバンドホームページを作成させていただきました。
          </p>
        </div>
      </section>

      <section>
        <div className="box major container with-image">
          <div className="container  gutter-bottom">
            <div className="image fit">
              <img src={tragicworks2} alt="tomateworks2"/>
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
              離脱率を下げて、一番最初に新曲を聞いてもらえるように意識しました。
              「watch mv」を押して埋め込みのyoutubeを再生したくなることが狙いです。
              CDNというWebページの高速化機能をもったGatsbyなら、
              読み込みの遅さによるwebページからの離脱も避けられるのではないかと考えました。
            </p>
            <h4>
              レビュー
            </h4>
            <p>
              ブログサイトの無料テンプレートなどを使うとどうしても広告が入ってしまうため、
              それがないということが好評でした。
              Webページの見た目というのは、Webの持つ機能と同等かあるいは、
              それ以上にサイトへの評価を決定づけるものだということを感じました。
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
            <li>フレームワーク：Gatsby.js</li>
            <li>スタイリング：Less</li>
            <li>ホスティング：Netlify</li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default Tragic;
