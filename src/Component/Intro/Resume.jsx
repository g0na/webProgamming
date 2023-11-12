import '../CSS/Resume.css' ;

const Resume = () => {
  return (
    <div>
      <div className="img1">
        <img src="image/mypic1.jpeg" alt="나의 사진" />
      </div>  
      <div>
      <div className="text">
        <li>이름: 이충호</li>
        <br/>
        <li>나이: 25</li>
        <br/>
        <li>성별: 남</li>
        <br/>
        <li>취미: 게임</li>
        <br/>
        <li>MBTI: ESFJ</li>
        <br/>
        <li>희망 직업: 게임 프로그래머</li>
        <br/>
        <li>희망 기업: NEXON</li>
      </div>
      </div>
    </div>
    
  );
};

export default Resume;