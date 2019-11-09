import React from 'react';
import Layout from '../../components/Layout';
import electricworks from '../../assets/images/electricworks.jpg';
import electricworks2 from '../../assets/images/electricworks2.jpg';
import programming from '../../assets/images/programming.jpg'

const Electric = () => (
  <Layout>
    <div id="main">
      <header className="box major container topfit">
        <div className="container gutter-bottom">
          <div className="image fit">
            <img src={electricworks} alt="tomateworks" />
          </div>
        </div>
        <h2>
          【Electric Sheep】
          <br />
          技術系のブログ
          <br />
        </h2>
        <button className="button spacing">
          <a href="https://cranky-cori-9304ff.netlify.com/">
            DEMO
          </a>
        </button>
        <button className="button alt spacing">
          <a href="https://github.com/t-keshi-inoue/redux-diary">
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
            ハッカソンやもくもく会などで学んだことを今まではpagesに記録していたのですが、
            ブログにして発信すればコンテンツにもなり、学習の積み上げにもなり、一石二鳥ではないかと考え作成しました。
            欲しい情報に早くたどり着けるように、カテゴリーとタグの2つの方法で分類されています。
            また右上の検索窓から記事を検索することも可能です。
          </p>
        </div>
      </section>

      <section>
        <div className="box major container with-image">
          <div className="container  gutter-bottom">
            <div className="image fit">
              <img src={electricworks2} alt="tomateworks2"/>
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
              Gatsbyのテンプレートをベースにしています。
              トップページにブログポストへの遷移がしやすいようにボタンを配置しました。
            </p>
            <h4>
              レビュー
            </h4>
            <p>
              -
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
            <li>スタイリング：styled-component</li>
            <li>ホスティング：Netlify</li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default Electric;
