import React from 'react';
import Layout from '../../components/Layout';
import livriowork1 from '../../assets/images/livriowork1.png';
import livrioworks2 from '../../assets/images/livrioworks2.png';
import livrioData from '../../assets/images/livrioData.png';
import programming from '../../assets/images/programming.jpg';

const Livrio = () => (
  <Layout>
    <div id="main">
      <header className="box major container topfit">
        <div className="container gutter-bottom">
          <div className="image fit">
            <img src={livriowork1} alt="livrioworks" />
          </div>
        </div>
        <h2>
          【Livrio】
          <br />
          開発チームが技術書を管理するためのツール
          <br />
        </h2>
        <button className="button spacing">
          <a href="https://livrio.firebaseapp.com/">DEMO</a>
        </button>
        <button className="button alt spacing">
          <a href="https://github.com/t-keshi-inoue/shirabeta">Github</a>
        </button>
      </header>

      <section>
        <div className="box major container">
          <h3>作品紹介</h3>
          <p>
            Livrioはチームのための図書館利用サービスです。これをつくったきっかけは、前職での体験でした。
            人事部に配属された当時私は、給与の仕組みについてなるべく早く理解したいと思っておりました。
            そこで先輩社員の方が、オフィスの書棚から「給与明細は謎だらけ」という本を取り出し、貸していただいたのを良く覚えています。
            その本は非常にわかりやすく、私が知りたいことがつまった一冊です。
            何が言いたいかというと、「その分野について詳しい人から推薦された本」は往々にして、実りの多い自分に最適な一冊になるのではないでしょうか。
            技術書においてもそんなことができたら…そんなふうに考えて作った次第です。
          </p>
        </div>
      </section>

      <section>
        <div className="box major container with-image">
          <div className="container gutter-bottom">
            <div className="image fit">
              <img src={livrioworks2} alt="livrioworks2" />
            </div>
          </div>
          <header>
            <h3>デザインの意図とユーザーレビュー</h3>
          </header>
          <h4>デザイン</h4>
          <p>
            デザインについてはQiitaのレイアウトを参考にしております。 例えば"How
            developers read is here"は、"How developers code is
            here"（Qiitaの標語）をもじったものです。
            デザインは余計な要素を排除し、シンプルな色使いと文字の見やすさを優先しました。
            また今回はとくに「デザインにもルールを」ということを意識し、余白の値などに統一性を持たせています。
            スマホ、タブレットからも閲覧が可能です。
          </p>
          <h4>レビュー</h4>
          <p>
            「ローダー（読込中にぐるぐる回るもの）までちゃんとしてていいね。」と言っていただきました。
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
          <h3>技術スタック</h3>

          <ul>
            <li>言語：JavaScript　（TypeScriptにリファクタリング済み）</li>
            <li>ライブラリ：React</li>
            <li>状態管理：Redux</li>
            <li>データベース：Firestore</li>
            <li>フォーム：Formik & Yup</li>
            <li>スタイリング：styled-components</li>
            <li>ホスティング：Firebase Hosting</li>
          </ul>
          <p>
            特に苦労した点は、コンポーネントの分割方法についてです。
            まず大きく『ロジックに関われる部分』と『見た目に関わる部分』に分けました。
            そして前者を【アトミックデザイン】、後者を【ダックスパターン】という仕組みに則って構成することで、
            読みやすく管理しやすいコードになったかと思います。
            全体として、「自分が1年後にこれを見ても、ストレスなくコードを読めるか？」と問いかけながら開発していったので、
            その試みが少しでも成功していれば幸いです。
            今後も、より安全な型付けに変え保守性を強化するなど、バージョンアップしていきたいと考えています。
          </p>
        </div>
      </section>

      <section>
        <div className="box major container with-image">
          <div className="container gutter-bottom">
            <div className="image fit">
              <img src={livrioData} alt="livrio" />
            </div>
          </div>
          <h3>難しかった点</h3>
          <p>
            NoSQLに触れるのが今回初めてであり、Firestoreの設計に苦戦しました。
            いわゆる「中間テーブル」のようなものは敢えて作らず、usersの中に主なデータを格納する設計にしています。
            borrowのサブコレクションに、ISBNコードに紐付けて借りた日や返した日などのデータがあります。
            commentsのサブコレクションに、同じくISBNコードに紐付けてコメントの内容やコメントした日付などのデータがあります。
            また、並んでいる本の中で自分のお気に入りの本やコメントした本の色を変えるという機能の実装のために、コレクション直下にlikes,commentsが配列として置かれています。
            これによりcommentsした際には2箇所に書き込みが生じる形になってしまいましたが、データの読み込みの際は簡単です。これらの設計が正解だったかどうかはわかりませんが、
            色々と悩む中でDB設計は非常に奥深いものだと学ぶことが出来ました。いづれは本格的なSQLに触れていきたいと思います。
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default Livrio;
