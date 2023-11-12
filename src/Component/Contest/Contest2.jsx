import "../CSS/Contest.css";

const Contest2 = () => {
  return (
    <div>
      <h1>공모전 이력</h1>
      <img src="image/contest.jpg" alt="공모전" />
      <fieldset>
        <legend>삼성전자 대학생 프로그래밍 경진대회(Samsung Collegiate Programming Cup, SCPC)</legend>
        <ul>
          <li>SCPC 참가</li>
          <li>1차 예선 - 통과</li>
          <li>2차 예선 - 탈락</li>
          <li>본선 대회 진출 실패</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Contest2;