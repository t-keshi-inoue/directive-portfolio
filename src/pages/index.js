import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import tomate from '../assets/images/tomate.jpg';
import before from '../assets/images/before.jpg';
import electric from '../assets/images/electric.jpg';
import tragic from '../assets/images/tragic.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <div id="main">
      <header className="major container medium">
        <h2>
          【私のモットー】
          <br />
          技術者の自己満足ではなく、
          <br />
          ユーザーの体験を第一に考える
        </h2>
        <sub>↓view works</sub>
      </header>

      <div className="box alt container">
        <section className="feature left">
          <Link to="/works/Tomate" className="image icon fa-heart">
            <img src={tomate} alt="tomate" />
          </Link>
          <div className="content">
            <h3>ToMate</h3>
            <small>レシピ検索API</small><br/>
            <sub>
              海外の料理のレシピを検索できるWebサイトです。<br/>
              コンセプト：「本場の味を、本場のレシピで」<br/>
              ペルソナ：20代女性　主婦
            </sub>
          </div>
        </section>
        <section className="feature right">
          <Link to="/works/Before" className="image icon fa-pencil">
            <img src={before} alt="before" />
          </Link>
          <div className="content">
            <h3>Before:trip</h3>
            <small>！作成中！</small><br/>
            <sub>
              外国語を学ベるアプリです。<br/>
              コンセプト：「飛行機の中で現地の言葉を学ぼう」<br/>
              ペルソナ：20代男女
            </sub>
          </div>
        </section>
        <section className="feature left">
          <Link to="/works/Electric" className="image icon fa-calendar">
            <img src={electric} alt="electric" />
          </Link>
          <div className="content">
          <h3>Electric Sheep</h3>
            <small>技術系のブログ</small><br/>
            <sub>
              備忘録も兼ねたプログラミングの学習記録です。<br/>
              コンセプト：「とにかく見やすいブログ」<br/>
              ペルソナ：エンジニア
          </sub>
          </div>
        </section>
        <section className="feature right">
          <Link to="/works/Tragic" className="image icon fa-music">
            <img src={tragic} alt="tragic" />
          </Link>
          <div className="content">
            <h3>Tragic Love Company</h3>
            <small>バンドPRページ</small><br/>
            <sub>
              友人のバンドのホームページです。<br/>
              コンセプト：「MusicVideoを見てもらう」<br/>
              ペルソナ：20代男女　音楽が好きな人
            </sub>
          </div>
        </section>
      </div>

      <footer className="major container medium">
        <h3>ご挨拶</h3>
        <p>
          転職活動中の26歳のエンジニアです。
        </p>
        <ul className="actions special">
          <li>
            <Link to="/Elements" className="button">
              About Me
            </Link>
          </li>
        </ul>
      </footer>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
