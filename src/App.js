import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import index from "./Component/index";
import Introduction from "./Component/Introduction";
import Contest from "./Component/Contest";
import Career from "./Component/Career";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        이충호's portfolio
      </header>

      <div className="container">
        <nav>
          <div className="ho">
            <Link to={"/"}>홈</Link>
          </div>
          <div className="int">
            <Link to={"/introduction"}>자기소개</Link>
          </div>
          <div className="con">
            <Link to={"/contest"}>주요 경험 사항</Link>
            </div>
          <div className="car">
            <Link to={"/career"}>기타 경험 사항</Link>
            </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" Component={index} />
            <Route path="/introduction" Component={Introduction} />
            <Route path="/contest" Component={Contest} />
            <Route path="/career" Component={Career} />
          </Routes>
        </main>
      </div>
      <footer>
        <i>
          Copyright 2023. 이충호 all rights reserved.
          <br />
          email : dlcndgh70@gmail.com
          <br />
          연락처 : 010-8862-4855
        </i>
      </footer>
    </BrowserRouter>
  );
}

export default App;