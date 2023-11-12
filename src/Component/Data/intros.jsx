import Major from "../Intro/Major";
import Resume from "../Intro/Resume";
import SelfIntro from "../Intro/SelfIntro";
import Skills from "../Intro/Skills";

const intros = [
  {
    tab: "기본 사항",
    content: <Resume></Resume>,
  },
  {
    tab: "전공 및 학력사항",
    content: <Major></Major>,
  },
  {
    tab: "보유 기술 및 자격증",
    content: <Skills></Skills>,
  },
  {
    tab: "자기소개서",
    content: <SelfIntro></SelfIntro>,
  }
];

export default intros;