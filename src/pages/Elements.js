import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <div id="main">
      <div className="box container">
        <header>
          <h2>Takeshi Inoue</h2>
        </header>
        <section>
          <header>
            <h3>
              Frontend Engineer<br />
            </h3>
            <p>26years old</p>
          </header>
          <p>
            {''}　未経験の新米エンジニア。
            大学時代は <strong>ポルトガル語</strong> を学び、新卒で<b>製造業</b> に就職。
            人事部に配属される。<strong>マクロ(VBA)</strong>に出会い、プログラミングに惹かれる。
            人事システム導入経験を経て、エンジニアを志す。
          </p>
        </section>
        <br />
        <section>
          <header>
            <h3>来歴</h3>
          </header>
          <div className="table-wrapper">
            <table className="default">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Action</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2018.3</td>
                  <td>卒業</td>
                  <td>
                    国立大学を卒業、社会人へ
                  </td>
                </tr>
                <tr>
                  <td>2018.4</td>
                  <td>入社</td>
                  <td>
                    製造業人事部に所属
                  </td>
                </tr>
                <tr>
                  <td>2019.9</td>
                  <td>退職</td>
                  <td>
                    東京に拠点を移して転職活動を進める
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <br />
        <section>
          <header>
            <h3>プログラミング</h3>
          </header>
          <div className="table-wrapper">
            <table className="default">
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Weight</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HTML/CSS</td>
                  <td>ー</td>
                  <td>
                    Webサイトの作成ができるレベル
                  </td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>ー</td>
                  <td>
                    アニメーションやDOM操作ができるレベル
                  </td>
                </tr>
                <tr>
                  <td>React</td>
                  <td>学習中</td>
                  <td>
                    Webアプリを開発できるレベル
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <button>←Back to Top</button>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
