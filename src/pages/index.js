import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import tomate from '../assets/images/tomate.jpg';
import waikan from '../assets/images/waikan.jpg';
import electric from '../assets/images/electric.jpg';
import tragic from '../assets/images/tragic.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <div id="main">
      <header className="major container medium">
        <h2>【プロフィール要約】</h2>
        <ul>
          <li>26歳</li>
          <li>岐阜→大阪→ポルトガル→大阪→東京</li>
          <li>JavaScriptメイン</li>
        </ul>
        <sub>↓view works</sub>
      </header>

      <div className="box alt container">
        <section className="feature right">
          <Link to="/works/Livrio" className="image icon fa-heart">
            <img src={tomate} alt="tomate" />
          </Link>
          <div className="content">
            <h3>Livrio</h3>
            <small>図書管理サービス</small>
            <br />
            <sub>
              開発チームが技術書を管理するためのツールです。
              <br />
              コンセプト：「技術書が探せる・見つかる・借りられる」
              <br />
              ペルソナ：30代男性　エンジニア
            </sub>
          </div>
        </section>
        <section className="feature left">
          <Link to="/works/Waikan" className="image icon fa-beer">
            <img src={waikan} alt="waikan" />
          </Link>
          <div className="content">
            <h3>ワイ勘定</h3>
            <small>幹事のための勘定アプリ</small>
            <br />
            <sub>
              飲み会や合コンのお金を精算するためのアプリ
              <br />
              コンセプト：「シンプルなUI」
              <br />
              ペルソナ：20代男女
            </sub>
          </div>
        </section>
        <section className="feature right">
          <Link to="/works/Tomate" className="image icon fa-heart">
            <img src={tomate} alt="tomate" />
          </Link>
          <div className="content">
            <h3>ToMate</h3>
            <small>レシピ検索API</small>
            <br />
            <sub>
              海外の料理のレシピを検索できるWebサイトです。
              <br />
              コンセプト：「本場の味を、本場のレシピで」
              <br />
              ペルソナ：20代女性　主婦
            </sub>
          </div>
        </section>

        <section className="feature left">
          <Link to="/works/Electric" className="image icon fa-calendar">
            <img src={electric} alt="electric" />
          </Link>
          <div className="content">
            <h3>Electric Sheep</h3>
            <small>技術系のブログ</small>
            <br />
            <sub>
              備忘録も兼ねたプログラミングの学習記録です。
              <br />
              コンセプト：「読みやすさを重視したブログ」
              <br />
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
            <small>バンドPRページ</small>
            <br />
            <sub>
              友人のバンドのホームページです。
              <br />
              コンセプト：「MusicVideoを見てもらう」
              <br />
              ペルソナ：20代男女　音楽が好きな人
            </sub>
          </div>
        </section>
      </div>

      <footer className="major container medium">
        <h3>ご挨拶</h3>
        <p>
          <span style={{ fontWeight: 'bold' }}>転職活動中</span>
          のエンジニアです。
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
