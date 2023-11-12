const Contest1 = () => {
  return (
    <div>
      <h1>게임 제작 프로젝트</h1>
      <img src="image/TPS1.png" alt="tps1" />
      <img src="image/TPS2.png" alt="tps2" />
      <fieldset>
        <legend>3인칭 슈팅 게임</legend>
        <ul>
          <li>Unreal Engine 5를 활용하여 제작한 게임</li>
          <li>3인칭 슈팅 게임</li>
          <li>봇들과 대전하는 5:5 시스템</li>
          <li>피격 시 체력이 줄어들고 한쪽팀이 전멸 시 승리 또는 패배 화면이 나오며 종료</li>
        </ul>
      </fieldset>
      <img src="image/unity1.png" alt="unity1" />
      <img src="image/unity2.png" alt="unity2" />
      <fieldset>
        <legend>2D 비행 슈팅 게임</legend>
        <ul>
          <li>Unity 2D를 활용하여 제작한 게임</li>
          <li>비행 슈팅 게임</li>
          <li>앞으로 진행하며 만나는 적 비행체를 파괴하는 게임</li>
          <li>정해진 시간동안 적들을 전부 제거하면 승리</li>
          <li>적들과 충돌하거나 적들이 화면 아래쪽으로 진행하면 체력 감소, 체력이 0이 되면 패배</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Contest1;