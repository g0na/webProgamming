import '../CSS/Skills.css' ;

const Skills = () => {
  return (
    <div>
      <div className="img1">
        <img src="image/mypic1.jpeg" alt="나의 사진" />
      </div>  
      <div>
        <div className="text">
        <ul>
            <li>
              문서 작업
              <ul>
                <li>워드: 중</li>
                <li>파워포인트: 중</li>
                <li>엑셀: 하</li>
              </ul>
            </li>
            <br/>
            <li>
              프로그래밍 언어
              <ul>
                <li>C++: 상</li>
                <li>C언어: 중</li>
                <li>C#: 하</li>
                <li>JAVA: 중</li>
                <li>JavaScript: 중</li>
                <li>Python: 하</li>
              </ul>
            </li>
            <br/>
            <li>
              게임 개발 툴
              <ul>
                <li>Unity: 중</li>
                <li>Unreal Engine 5: 하</li>
              </ul>
            </li>
            <br/>
            <li>
              외국어
              <ul>
                <li>회화: 의사소통 가능</li>
                <li>작문: 의사소통 가능</li>
                <li>TOEIC: 935점 (2022.08)</li>
              </ul>
            </li>
            <li>
              자격증
              <ul>
                <li>자동차 운전면허증 1종보통</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
