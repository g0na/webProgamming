import "./CSS/Index.css";

const index = () => {
  return (
    <div id="header">
      안녕하세요. 저는 이충호입니다.
      <br />
      <div className="img">
        <img src="image/mypic1.jpeg" alt="나의 사진" />
      </div>
      <div className="text">
        <li>저는 게임 개발자로써 성장하고 싶은 꿈나무 개발자입니다.</li>
        <br/>
        <li>Unity, Unreal Engine을 통해 간단한 게임을 만들어본 경험이 있습니다.</li>
        <br/>
        <li>뛰어난 의사소통 능력을 바탕으로 동료들과 협업할 때 큰 장점을 가지고 있습니다.</li>
        <br/>
        <li>저에 대해 더 알고 싶으시면 좌측 메뉴를 통해 확인해주세요!</li>
      </div>
    </div>
  );
};

export default index;