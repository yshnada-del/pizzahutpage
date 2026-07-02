import type { ReactNode } from "react";

type AssetModule = string;

const imageModules = import.meta.glob<AssetModule>("./assets/pizzahut/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const assetByName = new Map(
  Object.entries(imageModules).map(([path, src]) => [path.split("/").pop() ?? path, src]),
);

type Screen = {
  title: string;
  label: string;
  fileName: string;
  description: string;
};

type Point = {
  index: string;
  title: string;
  body: string;
};

type ProblemSolution = {
  problem: string;
  solution: string;
};

const overviewPoints: Point[] = [
  {
    index: "01",
    title: "할인 정보와 메뉴가 한 화면에서 바로 이해될 수 있을까?",
    body: "Clear Ordering Flow",
  },
  {
    index: "02",
    title: "이벤트, 메뉴, 주문 CTA가 서로 경쟁하고 있지는 않을까?",
    body: "Better Visual Hierarchy",
  },
  {
    index: "03",
    title: "사용자는 메뉴를 고른 뒤 바로 주문 행동으로 이어질 수 있을까?",
    body: "Conversion-focused UX",
  },
  {
    index: "04",
    title: "복잡한 피자 주문 여정을 더 짧고 명확하게 만들 수 있을까?",
    body: "Less Friction",
  },
];

const businessProblems: ProblemSolution[] = [
  {
    problem: "메뉴와 할인 정보가 여러 영역에 흩어져 주문 진입 경로를 찾기 어려움",
    solution: "할인, 인기 메뉴, 주문 CTA를 첫 화면의 핵심 흐름으로 통합",
  },
  {
    problem: "이벤트, 메뉴, 배너가 동시에 노출되어 사용자의 시선이 분산됨",
    solution: "대표 메뉴와 현재 혜택을 우선 노출하고 시선 흐름을 단순화",
  },
  {
    problem: "페이지별 CTA 역할과 UI 규칙이 달라 주문 전환의 힘이 약함",
    solution: "메뉴 탐색 이후 바로 주문으로 이어지는 일관된 CTA 체계 설계",
  },
];

const personas = [
  {
    priority: "1순위 페르소나",
    name: "김서연",
    age: "24",
    role: "대학생 / 취준생",
    variant: "female",
    avatarFileName: "persona-female.png",
    quote: "할인만 딱 정리돼서 보이면 바로 주문할 텐데, 왜 이렇게 한 번에 안 보일까?",
    pain:
      "서연은 평소 배달 음식을 자주 시켜 먹지만 시험 기간이나 친구들과 모일 때 피자헛을 찾습니다. 쿠폰과 이벤트 정보를 비교해야 하는데, 혜택이 흩어져 있으면 금방 피로를 느끼고 주문을 미룹니다.",
    keywords: ["할인 정보 확인", "쿠폰 비교", "가격 대비 혜택", "빠른 주문 진입"],
  },
  {
    priority: "2순위 페르소나",
    name: "박민준",
    age: "30",
    role: "회사원",
    variant: "male",
    avatarFileName: "persona-male.png",
    quote: "주문하려고 들어왔는데 생각보다 뭘 눌러야 할지 헷갈린다.",
    pain:
      "민준은 피자를 자주 먹는 편은 아니지만 야근이나 주말에 빠르게 주문하고 싶을 때 피자헛을 찾습니다. 이미 주문 의사는 있지만 메뉴 탐색이 길어지거나 버튼이 명확하지 않으면 답답함을 느낍니다.",
    keywords: ["빠른 메뉴 접근", "명확한 CTA", "선택 단계 최소화", "직접 주문 흐름"],
  },
];

const wireframes: Screen[] = [
  { title: "Main", label: "Wireframe", fileName: "pizzahut-wireframe-main.png", description: "" },
  { title: "Menu", label: "Wireframe", fileName: "pizzahut-wireframe-menu.png", description: "" },
  { title: "Detail", label: "Wireframe", fileName: "pizzahut-wireframe-detail.png", description: "" },
  { title: "Cart", label: "Wireframe", fileName: "pizzahut-wireframe-cart.png", description: "" },
  { title: "Login", label: "Wireframe", fileName: "pizzahut-wireframe-login.png", description: "" },
  { title: "Order", label: "Wireframe", fileName: "pizzahut-wireframe-order.png", description: "" },
  { title: "Extra", label: "Wireframe", fileName: "pizzahut-wireframe-extra.png", description: "" },
];

const beforeAfterPairs = [
  {
    title: "Main Page",
    beforeFileName: "pizzahut-before-main.png",
    afterFileName: "pizzahut-screen-main.png",
    beforeSummary:
      "기존 메인 페이지는 로그인 혜택, 제휴 배너, 가맹점 모집 등 부가 정보의 비중이 커서 사용자가 가장 먼저 확인해야 할 대표 메뉴와 주문 동선이 잘 드러나지 않았습니다.",
    afterSummary:
      "리뉴얼에서는 사용자의 주요 목적을 메뉴 확인과 빠른 주문으로 보고, 대표 메뉴와 주문 CTA를 중심으로 화면을 재구성했습니다. 가맹점 모집과 단체 주문은 중간 영역에 간결하게 배치하고, 이벤트·프로모션은 카드형으로 정리해 혜택을 한눈에 확인할 수 있도록 개선했습니다.",
  },
  {
    title: "Menu Page",
    beforeFileName: "pizzahut-before-menu.png",
    afterFileName: "pizzahut-screen-menu.png",
    beforeSummary:
      "기존 메뉴 페이지는 인기 메뉴 안에 신메뉴가 함께 노출되어 메뉴 분류가 명확하지 않았습니다. 또한 가격 정보가 세로로 길게 배치되어 있어 사용자가 메뉴별 가격을 한눈에 비교하기 어려웠습니다.",
    afterSummary:
      "리뉴얼에서는 인기 메뉴, 신메뉴, 전체 메뉴를 구분해 사용자가 원하는 메뉴를 더 쉽게 탐색할 수 있도록 개선했습니다. 가격 정보는 가로형으로 정리해 메뉴별 가격을 빠르게 비교하고 확인할 수 있도록 구성했습니다.",
  },
  {
    title: "Detail Page",
    beforeFileName: "pizzahut-before-detail.png",
    afterFileName: "pizzahut-screen-detail.png",
    beforeSummary:
      "기존 상세 페이지는 도우, 토핑, 사이드, 음료 등 선택 옵션이 한 화면에 모두 나열되어 있어 화면이 길어지고 정보가 복잡하게 느껴졌습니다. 사용자는 원하는 옵션을 찾기 위해 많은 스크롤을 해야 했고, 선택 과정의 집중도가 떨어질 수 있었습니다.",
    afterSummary:
      "리뉴얼에서는 사용자가 가장 먼저 선택해야 하는 도우 옵션을 우선 노출하고, 나머지 옵션은 필요할 때 클릭해서 확인할 수 있도록 구성했습니다. 이를 통해 화면을 더 깔끔하게 정리하고, 불필요한 스크롤을 줄여 사용자가 원하는 옵션만 선택하며 주문을 진행할 수 있도록 개선했습니다.",
  },
  {
    title: "Product Info",
    beforeFileName: "pizzahut-before-cart.png",
    afterFileName: "pizzahut-screen-cart.png",
    beforeSummary:
      "기존 상세 페이지는 영양정보, 알레르기 정보, 원산지 정보를 각각 따로 확인해야 하는 구조였습니다. 사용자가 다른 정보를 보려면 현재 창을 닫고 다시 해당 버튼을 클릭해야 해서 확인 과정이 번거로웠습니다.",
    afterSummary:
      "리뉴얼에서는 영양정보, 알레르기 정보, 원산지 정보를 하나의 정보 박스로 통합했습니다. 한 번 클릭하면 같은 창 안에서 탭 전환만으로 필요한 정보를 확인할 수 있어, 반복적인 창 열기/닫기 과정을 줄이고 더 간편하게 상품 정보를 비교할 수 있도록 개선했습니다.",
  },
  {
    title: "Login Page",
    beforeFileName: "pizzahut-before-login.png",
    afterFileName: "pizzahut-screen-login.png",
    beforeSummary:
      "기존 로그인 페이지는 휴대폰번호/이메일 로그인을 클릭한 뒤, 다음 화면으로 이동해야 실제 로그인을 진행할 수 있어 불필요한 단계가 있었습니다. 또한 비회원 주문 진입이 한눈에 드러나지 않아 주문을 빠르게 진행하기 어려웠습니다.",
    afterSummary:
      "리뉴얼에서는 로그인 입력창을 바로 노출해 사용자가 추가 클릭 없이 바로 로그인할 수 있도록 개선했습니다. 또한 회원 로그인과 비회원 주문을 탭으로 구분해, 로그인 사용자와 비회원 사용자 모두 자신의 상황에 맞게 빠르게 주문을 이어갈 수 있도록 구성했습니다.",
  },
];

function getAsset(fileName: string) {
  return assetByName.get(fileName);
}

function SectionIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="section-intro">
      <span>{kicker}</span>
      <h2>{title}</h2>
      {children}
    </header>
  );
}

function App() {
  const heroCover = getAsset("main_pizzahut.png");

  return (
    <main>
      <section className="hero">
        {heroCover ? <img className="hero__cover" src={heroCover} alt="Pizza Hut web design case study cover" /> : null}
      </section>

      <section className="case-section case-section--light overview-showcase" id="overview">
        <div className="container">
          <header className="overview-head">
            <span>Overview</span>
            <h2>
              복잡한 피자 주문,
              <br />
              더 쉽게 이어질 수 없을까?
            </h2>
            <p>
              피자헛 리뉴얼 프로젝트는 기존 사이트에서 발견한 정보 과밀, 복잡한 메뉴 구조, 약한 주문 CTA 문제를
              개선해 사용자가 할인 정보와 메뉴를 빠르게 이해하고 주문 행동으로 자연스럽게 이어지도록 설계한 UX/UI
              리디자인입니다.
            </p>
          </header>
          <div className="overview-floating-list">
            {overviewPoints.map((point) => (
              <article className={`overview-note overview-note--${point.index}`} key={point.title}>
                <i aria-hidden="true" />
                <strong>{point.title}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section case-section--cream" id="problem">
        <div className="container">
          <SectionIntro kicker="Design Process" title="분석부터 개선안까지 이어지는 디자인 과정">
            <p>
              기존 피자헛 사이트는 메뉴, 프로모션, 배너, 주문 기능이 한 화면에 많이 배치되어 사용자가 원하는 정보를
              빠르게 찾기 어려웠습니다. 할인 중심 사용자와 빠른 주문 중심 사용자 모두에게 주문까지의 흐름이 명확하지
              않다는 문제가 있었습니다.
            </p>
          </SectionIntro>
          <div className="problem-goal-board">
            <div className="problem-goal-board__labels">
              <span>문제점</span>
              <span>솔루션</span>
            </div>
            <div className="problem-goal-board__rows">
              {businessProblems.map((item) => (
                <div className="problem-goal-row" key={item.problem}>
                  <div>{item.problem}</div>
                  <div>{item.solution}</div>
                </div>
              ))}
            </div>
            <div className="problem-goal-board__arrow" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="problem-goal-board__result">
              피자헛 리뉴얼은 <strong>정보를 덜어내는 것이 아니라, 주문 전환에 필요한 정보가 먼저 보이는 구조</strong>
              로 사용자가 할인 확인부터 메뉴 선택, 주문 CTA까지 자연스럽게 이어지는 경험을 설계합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section case-section--light" id="persona">
        <div className="container">
          <header className="persona-head">
            <span>Persona</span>
            <h2>사용자 조사 기반 핵심 페르소나</h2>
            <p>
              피자헛 웹사이트 사용자는 할인 정보를 확인하려는 사용자와 빠르게 주문하려는 사용자로 나눌 수 있습니다.
              서로 다른 목적을 갖지만 공통적으로 짧은 판단과 빠른 주문 흐름을 필요로 합니다.
            </p>
          </header>
          <div className="persona-grid">
            {personas.map((persona) => (
              <article className={`persona-card persona-card--${persona.variant}`} key={persona.name}>
                <div className="persona-card__visual">
                  <div className="persona-avatar" aria-label={`${persona.name} 캐릭터 아이콘`}>
                    {getAsset(persona.avatarFileName) ? (
                      <img src={getAsset(persona.avatarFileName)} alt={`${persona.name} 캐릭터 아이콘`} loading="lazy" />
                    ) : (
                      <span />
                    )}
                  </div>
                  <div className="persona-speech">“{persona.quote}”</div>
                </div>
                <div className="persona-card__body">
                  <div className="persona-profile">
                    <span>{persona.priority}</span>
                    <h3>{persona.name}</h3>
                    <p>
                      {persona.age}세 · {persona.role}
                    </p>
                  </div>
                  <div className="persona-pain">
                    <h4>Pain point</h4>
                    <p>{persona.pain}</p>
                  </div>
                  <div className="persona-keywords">
                    <h4>Key words</h4>
                    <ul>
                      {persona.keywords.map((keyword) => (
                        <li key={keyword}>{keyword}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section case-section--cream wireframe-section" id="wireframe">
        <div className="container">
          <SectionIntro kicker="Wireframe" title="주문 흐름을 화면 단위로 정리한 와이어프레임">
            <p>
              메인에서 메뉴 탐색, 상세 선택, 장바구니와 로그인으로 이어지는 핵심 여정을 한눈에 확인할 수 있도록 화면
              구조를 정리했습니다.
            </p>
          </SectionIntro>
          <div className="wireframe-collage">
            {wireframes.map((screen, index) => (
              <figure className={`wireframe-shot wireframe-shot--${index + 1}`} key={screen.fileName}>
                {getAsset(screen.fileName) ? (
                  <img src={getAsset(screen.fileName)} alt={`${screen.title} wireframe`} loading="lazy" />
                ) : (
                  <div className="placeholder">
                    <strong>{screen.fileName}</strong>
                  </div>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section before-after-section" id="design">
        <div className="container">
          <SectionIntro kicker="Before & After" title="기존 디자인과 리뉴얼 디자인 비교">
            <p>
              피자헛의 기존 화면과 리뉴얼 화면을 같은 흐름으로 나란히 배치해, 페이지별 구조와 시각적 변화가 한눈에
              보이도록 정리했습니다.
            </p>
          </SectionIntro>
          <div className="before-after-comparison">
            {beforeAfterPairs.map((screen) => (
              <article className="comparison-pair" key={screen.title}>
                <div className="comparison-pair__title">
                  <span>{screen.title}</span>
                </div>
                <div className="comparison-pair__row">
                  <figure className="comparison-pair__shot">
                    <figcaption>Before</figcaption>
                    {getAsset(screen.beforeFileName) ? (
                      <img src={getAsset(screen.beforeFileName)} alt={`${screen.title} before`} loading="lazy" />
                    ) : (
                      <div className="placeholder">
                        <strong>{screen.beforeFileName}</strong>
                      </div>
                    )}
                  </figure>
                  <div className="comparison-pair__copy">
                    <span>기존 디자인</span>
                    <h3>{screen.title}</h3>
                    <p>{screen.beforeSummary}</p>
                  </div>
                </div>
                <div className="comparison-pair__row comparison-pair__row--reverse">
                  <div className="comparison-pair__copy comparison-pair__copy--after">
                    <span>리뉴얼 디자인</span>
                    <h3>{screen.title}</h3>
                    <p>{screen.afterSummary}</p>
                  </div>
                  <figure className="comparison-pair__shot comparison-pair__shot--after">
                    <figcaption>After</figcaption>
                    {getAsset(screen.afterFileName) ? (
                      <img src={getAsset(screen.afterFileName)} alt={`${screen.title} after`} loading="lazy" />
                    ) : (
                      <div className="placeholder">
                        <strong>{screen.afterFileName}</strong>
                      </div>
                    )}
                  </figure>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default App;
