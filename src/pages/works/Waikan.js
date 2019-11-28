import React from 'react';
import Layout from '../../components/Layout';
import waikanworks from '../../assets/images/waikanworks.jpg';
import waikanworks2 from '../../assets/images/waikanworks2.jpg';
import programming from '../../assets/images/programming.jpg';

const Before = () => (
  <Layout>
    <div id="main">
      <header className="box major container topfit">
        <div className="container gutter-bottom">
          <div className="image fit">
            <img src={waikanworks} alt="waikanworks" />
          </div>
        </div>
        <h2>
          【ワイ勘定】
          <br />
          飲み会や合コンのお金を精算するためのアプリです。
          <br />
        </h2>
        <button className="button spacing">
          <a href="https://waikanzyou.firebaseapp.com/">DEMO</a>
        </button>
        <button className="button alt spacing">
          <a href="https://github.com/t-keshi-inoue/waikan">Github</a>
        </button>
      </header>

      <section>
        <div className="box major container">
          <h3>内容紹介</h3>
          <p>
            　お会計のときに、きっちりワリカンにする幹事はダサい。
            とはいえ、全部驕れるほどお金に余裕がないときもある。
            ということで、スマートに飲み会代を精算するためのアプリを作りました。
            集めるお金は1000円単位で計算します。だから端数のないスマートさ！
            ここだけの話、ちょっとズルして多めに集める計算オプションも用意しました。
          </p>
        </div>
      </section>

      <section>
        <div className="box major container with-image">
          <div className="container  gutter-bottom">
            <div className="image fit">
              <img src={waikanworks2} alt="waikanworks2" />
            </div>
          </div>
          <header>
            <h3>意図とレビュー</h3>
          </header>
          <h4>意図</h4>
          <p>
            説明不要で見たら使い方がわかるような、
            見やすいUIをとにかく意識して作りました。
          </p>
          <h4>レビュー</h4>
          <p>ー募集中ー</p>
        </div>
      </section>

      <section>
        <div className="box major container with-image">
          <div className="container  gutter-bottom">
            <div className="image fit">
              <img src={programming} alt="programming" />
            </div>
          </div>
          <h3>プログラミング</h3>
          <p>
            　ReactのライブラリであるFormikとYupというものを使って、
            入力を制御しました。具体的には、人数入力欄に数字以外が入力できない、
            金額が少なすぎるとエラーが出る、といった仕様になっています。
            localStorageに値を保管し、react-routerを使ってページ遷移を作っています。
            Single Page
            Applicationです。スマートフォンでの表示にも対応しています。
          </p>
          <ul>
            <li>言語：JavaScript</li>
            <li>ライブラリ：React</li>
            <li>スタイリング：grommet</li>
            <li>フォーム：Formik</li>
            <li>バリデーション：Yup</li>
            <li>ホスティング：Firbase Hosting</li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default Before;
