import React from 'react';

import Layout from '../components/Layout';

import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import pic1 from '../assets/images/tomate.png';
import pic2 from '../assets/images/skyhigh.png';
import pic3 from '../assets/images/canpass.png';
import pic4 from '../assets/images/tragic.png';

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
          <a href="https://tomate-receita.takeshitoras79.now.sh/" className="image icon fa-heart">
            <img src={pic1} alt="tomate" />
          </a>
          <div className="content">
            <h3>ToMate</h3>
            <small>レシピ検索API</small><br/>
            <sub>
              スペイン料理のレシピを検索できるWebサイトです。<br/>
              コンセプト：「本場の味を手軽に検索できる」<br/>
              ペルソナ：20代女性　主婦
            </sub>
          </div>
        </section>
        <section className="feature right">
          <a href="/#" className="image icon fa-pencil">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h3>Sky High</h3>
            <small>目標管理アプリ</small><br/>
            <sub>
              抽象度別で目標を管理できるWebアプリです。<br/>
              コンセプト：「大きな目標と小さなTODOを結びつける」<br/>
              ペルソナ：20代前半男性　大学生
            </sub>
          </div>
        </section>
        <section className="feature left">
          <a href="/#" className="image icon fa-calendar">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
          <h3>CanPass</h3>
            <small>EラーニングWebサイト</small><br/>
            <sub>
              簿記を学べるWebサイトです。<br/>
              コンセプト：「アレルギーにならない簿記学習サイト」<br/>
              ペルソナ：20代男女　会社員　営業部門
          </sub>
          </div>
        </section>
        <section className="feature right">
          <a href="https://hopeful-snyder-513666.netlify.com/" className="image icon fa-music">
            <img src={pic4} alt="tragic" />
          </a>
          <div className="content">
            <h3>Tragic Love Company</h3>
            <small>バンドPRページ</small><br/>
            <sub>
              友人のバンドのホームページです。<br/>
              コンセプト：「とにかくMusicVideoを見てもらう！」<br/>
              ペルソナ：20代男女　音楽が好きな人
            </sub>
          </div>
        </section>
      </div>

      <footer className="major container medium">
        <h3>ちょっと待って!</h3>
        <p>
          転職活動中のエンジニアです。少しだけ自己紹介させてください。
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
