import React from 'react';
import Layout from '../../components/Layout';
import tomateworks from '../../assets/images/tomateworks.jpg';
import tomateworks2 from '../../assets/images/tomateworks2.jpg';
import programming from '../../assets/images/programming.jpg'

const Tomate = () => (
  <Layout>
    <div id="main">
      <header className="box major container topfit">
        <div className="container gutter-bottom">
          <div className="image fit">
            <img src={tomateworks} alt="tomateworks" />
          </div>
        </div>
        <h2>
          【toMate】
          <br />
          海外の料理のレシピを検索できるWebサイト
          <br />
        </h2>
        <button className="button spacing">
          <a href="https://tomate-receita.takeshitoras79.now.sh/">
            DEMO
          </a>
        </button>
        <button className="button alt spacing">
          <a href="https://github.com/t-keshi-inoue/tomate">
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
          ToMateは『本場の味を本場のレシピで作ろう！』というコンセプトで、
          好きな料理の名前を検索窓に入れて簡単に海外のレシピを検索することができます。
          留学からの帰国後、ポルトガルの料理が恋しくなってしまい、
          自分で作ってはみたのですがどうしてもあの時の味になりませんでした。
          そこでわかったのですが、日本語のWebサイトに載っているポルトガル料理のレシピと、
          ポルトガルのWebサイトに載っているポルトガル料理のレシピはまるで違うものでした。
          日本人の舌に合わせた「ポルトガル風」のレシピではなく、
          現地の方が毎日口にしているような本物のポルトガルのレシピを知りたい。。。
          そんな風に思うのは私だけではないはず、ということで開発したものです。
          このサイトをきっかけに、海外の食文化に興味をもったり、
          海外の言葉を勉強してみたいと思う方がいたら、とても嬉しいです。
          </p>
        </div>
      </section>

      <section>
        <div className="box major container with-image">
          <div className="container gutter-bottom">
            <div className="image fit">
              <img src={tomateworks2} alt="tomateworks2"/>
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
              レシピを見ながら料理を作りたいという方のために、
              スマホか、あるいはタブレットで見られることを想定して作りました。
              パソコンをキッチンに持ってくる人は、そうそういないだろうと思ってのことです。
              まず、フォントや画像のサイズがデバイスに合うように調整しました。
              また、サイトの一番上に戻るために何回も指を上下させてなくていいように、
              右下に赤い「∧」マークのFABを実装しました。
              FABは下にスクロールすると表示され、押すと一番上に移動します。
            </p>
            <h4>
              レビュー
            </h4>
            <p>
              使い方が分かりにくいというお声をいただきました。
              そこで、検索窓を横幅いっぱいまで大きくし、
              どういうサイトなのか直感的にわかるようにしました。
            </p>
        </div>
      </section>

      <section>
        <div className="box major container with-image">
          <div className="container gutter-bottom">
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
            <li>フレームワーク：Next.js</li>
            <li>スタイリング：material-ui</li>
            <li>ホスティング：Next.js(zeit now)</li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default Tomate;
