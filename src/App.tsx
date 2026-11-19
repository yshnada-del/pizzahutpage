import type { ReactNode } from "react";
import coverPhoto from "./assets/pizzahut/project-cover.jpg";
import finalCover from "./assets/pizzahut/final-cover.webp";
import finalMobile from "./assets/pizzahut/final-mobile.webp";
import researchMenuPrices from "./assets/pizzahut/research-menu-prices.png";
import DesignSystem from "./DesignSystem";
import DesignShowcase from "./DesignShowcase";
import { personas, problems, projectPeriod, researchFindings, researchNotes } from "./caseStudy";

const screenshots = import.meta.glob<string>(
  [
    "./assets/pizzahut/pizzahut-wireframe-{main,menu,detail,cart,extra}.png",
  ],
  { eager: true, import: "default" },
);

function Screenshot({
  file, size, alt,
}: {
  file: string;
  size: readonly [number, number];
  alt: string;
}) {
  return (
    <img
      src={screenshots["./assets/pizzahut/" + file]}
      width={size[0]}
      height={size[1]}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  );
}

function SectionHeading({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <header className="section-heading">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{children}</p>
    </header>
  );
}

const orderingFlow = [
  {
    title: "주문 시작",
    steps: ["배달 또는 포장 선택", "선택한 방식으로 메뉴 목록 진입"],
    branch: "홈에서 주소 입력",
    branchSteps: "주소 입력 팝업 → 브라우저에 저장 → 홈에서 주소 확인",
  },
  {
    title: "메뉴 목록",
    steps: ["전체 메뉴 보기 · 분류 선택 · 메뉴명 검색", "상품 카드 선택"],
    branch: "홈에서 바로 상품 보기",
    branchSteps: "인기 메뉴 선택 → 해당 상품 상세",
  },
  {
    title: "상품 상세",
    steps: ["사이즈·엣지·수량 선택", "토핑·사이드 추가 (선택)", "선택 내역·합계 확인"],
    branch: "상품 정보 확인",
    branchSteps: "상품 정보 팝업 → 원산지·영양·알레르기 탭 전환 → 상세 화면",
  },
  {
    title: "장바구니",
    steps: ["상세에서 장바구니 담기", "담기 확인 → 장바구니 보기", "선택 내역·합계 확인", "메뉴 더 둘러보기 → 메뉴 목록"],
    branch: "헤더에서 바로 확인",
    branchSteps: "장바구니 아이콘 → 담아 둔 상품 확인",
  },
];

const flowBackdrop = [
  { file: "main", size: [1549, 3400] },
  { file: "menu", size: [1920, 2405] },
  { file: "detail", size: [1352, 3000] },
  { file: "cart", size: [1352, 3000] },
  { file: "extra", size: [1920, 2066] },
] as const;

function OrderFlowChart() {
  return (
    <section className="flow-board" id="flowchart" aria-labelledby="flow-title">
      <div className="flow-board__backdrop" aria-hidden="true">
        {flowBackdrop.map((view) => (
          <Screenshot key={view.file} file={"pizzahut-wireframe-" + view.file + ".png"} size={view.size} alt="" />
        ))}
      </div>
      <div className="shell flow-board__inner">
        <header className="flow-board__heading">
          <h2 className="section-label" id="flow-title">FLOW CHART &amp; WIREFRAME</h2>
        </header>

        <div className="flow-origin"><span>피자헛 홈</span></div>
        <div className="flow-lanes">
          {orderingFlow.map((lane) => (
            <article className="flow-lane flow-lane--order" key={lane.title}>
              <h3>{lane.title}</h3>
              <ol className="flow-lane__steps">
                {lane.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
              <div className="flow-lane__branch">
                <h4>{lane.branch}</h4>
                <p>{lane.branchSteps}</p>
              </div>
            </article>
          ))}
          <article className="flow-lane flow-lane--login">
            <h3>로그인</h3>
            <div className="flow-lane__entry-options">
              <div><h4>회원 로그인</h4><p>데모 로그인 후 홈</p></div>
              <div><h4>비회원 주문</h4><p>주문 방식을 유지해 메뉴 목록으로</p></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

const researchVisuals = [
  <ul className="research-benefits" key="benefits" aria-label="기존 사이트에서 혜택이 표시된 위치">
    <li><span>프로모션 배너</span><strong>이벤트·제휴 혜택</strong></li>
    <li><span>회원 안내 영역</span><strong>로그인 혜택</strong></li>
  </ul>,
  <img className="research-prices" key="prices" src={researchMenuPrices} alt="기존 메뉴 카드 두 개의 가격 영역. 각 상품의 사이즈별 배달·포장 가격이 세로로 이어집니다." width="615" height="344" loading="lazy" />,
  <div className="research-dialogs" key="information">
    <ul aria-label="개별 창으로 열리던 상품 정보">
      <li>원산지</li>
      <li>영양정보</li>
      <li>알레르기</li>
    </ul>
    <p>다른 정보를 볼 때 열려 있는 창을 닫고 다시 선택</p>
  </div>,
];

function ResearchSections() {
  return (
    <>
      <section className="overview research-overview" id="overview" aria-labelledby="overview-title">
        <div className="shell research-overview__inner">
          <h2 className="section-label research-heading" id="overview-title">Overview</h2>
          <div className="research-overview__copy">
            <p>피자헛 웹사이트는 프로모션 확인부터 메뉴 선택, 배달 및 포장 주문까지 다양한 기능을 제공하고 있습니다. 하지만 주문 과정이 편리하지 않고, 필요한 정보를 확인하기 위해 여러 화면을 오가야 하는 번거로움이 있었습니다.</p>
            <p>특히 혜택을 확인한 뒤에도 메뉴 가격이나 옵션, 주문 방법을 다시 확인해야 하는 점에 주목했습니다. 이러한 불편함을 줄이기 위해 필요한 정보를 한눈에 확인하고, 원하는 메뉴를 선택한 뒤 다음 단계까지 자연스럽게 이어질 수 있도록 주문 화면을 개선했습니다.</p>
          </div>
        </div>
      </section>

      <section className="desk-research" id="problem" aria-labelledby="desk-research-title">
        <div className="shell">
          <header className="research-intro">
            <p className="section-label research-heading">Desk research</p>
            <h2 className="section-title" id="desk-research-title">기존 피자헛의 주문 화면을 살펴봤습니다</h2>
            <p className="section-description">기존 사이트를 따라가며 혜택이 표시되는 위치, 메뉴별 가격을 읽는 순서, 상품 정보를 확인하는 방식을 비교했습니다.</p>
          </header>
          <div className="research-evidence">
            {problems.map((problem, index) => (
              <article className="research-card" key={problem.area}>
                <h3>{problem.area}</h3>
                <div className="research-card__visual">{researchVisuals[index]}</div>
                <p>{problem.observation}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="user-research" id="user-research" aria-labelledby="user-research-title">
        <div className="shell">
          <header className="research-intro">
            <p className="section-label research-heading">User research</p>
            <h2 className="section-title" id="user-research-title">사용자 관점에서 본 주문의 불편</h2>
            <p className="section-description">기존 화면에서 발견한 불편을 주문 상황별로 재구성한 가상 시나리오입니다.</p>
          </header>
          <ul className="review-list" role="list">
            {researchNotes.map((note) => (
              <li className="review-card" key={note.title}>
                <h3>{note.title}</h3>
                <blockquote>{note.quote}</blockquote>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function ResearchSynthesis() {
  return (
    <section id="process" aria-label="리서치 종합 및 개선 방향">
      <div className="research-synthesis section">
        <div className="shell">
          <SectionHeading label="Insights" title="주문 흐름에서 발견한 다섯 가지 문제">
            Overview에서 정리한 주문 흐름에 Desk research의 화면 관찰, User research의 가상 주문 시나리오, 두 페르소나의 목표를 대조했습니다.
          </SectionHeading>
          <ol className="research-findings">
            {researchFindings.map((finding, index) => (
              <li className="research-finding" key={finding.issue}>
                <span className="finding-number" aria-hidden="true">{index + 1}</span>
                <div>
                  <p className="research-finding__context">{finding.context}</p>
                  <h3>{finding.issue}</h3>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="solution-section section">
        <div className="shell solution-board">
          <SectionHeading label="Solution" title="기존 문제를 화면 개선으로 연결">
            각 문제에 대응하는 개선 방향을 정리했습니다.
          </SectionHeading>
          <div className="solution-board__headings" aria-hidden="true"><span>AS-IS</span><span>TO-BE</span></div>
          <ol className="solution-stack">
            {researchFindings.map((finding, index) => (
              <li className="solution-row" key={finding.issue}>
                <div className="solution-card solution-card--before" role="group" aria-label="AS-IS">
                  <span className="finding-number" aria-hidden="true">{index + 1}</span>
                  <div>
                    <span className="solution-card__label" aria-hidden="true">AS-IS</span>
                    <h3>{finding.issue}</h3>
                    <p>{finding.current}</p>
                  </div>
                </div>
                <span className="solution-row__connector" aria-hidden="true" />
                <div className="solution-card solution-card--after" role="group" aria-label="TO-BE">
                  <span className="finding-number" aria-hidden="true">{index + 1}</span>
                  <div>
                    <span className="solution-card__label" aria-hidden="true">TO-BE</span>
                    <h3>{finding.goal}</h3>
                    <p>{finding.response}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <main>
        <header className="hero" aria-labelledby="hero-title">
          <div className="shell hero__inner">
            <div className="hero__copy">
              <h1 id="hero-title" aria-describedby="hero-project" lang="en">Pizza H<span className="hero__title-front">ut</span></h1>
              <p className="hero__project" id="hero-project">웹사이트 리뉴얼</p>
              <p className="hero__period"><strong>작업기간</strong> <span>{projectPeriod}</span></p>
            </div>
            <div className="hero__visual">
              <div className="hero__photo"><img src={coverPhoto} alt="" width="1536" height="1024" fetchPriority="high" /></div>
              <figure className="hero__browser">
                <img src={finalCover} alt="최종 메인 화면. 신메뉴 배너 아래에 배달·포장 주문과 주소 입력이 배치되어 있습니다." width="1440" height="900" fetchPriority="high" />
              </figure>
              <figure className="hero__phone">
                <img src={finalMobile} alt="모바일에서 본 리뉴얼 메인 첫 화면" width="390" height="844" />
              </figure>
            </div>
          </div>
        </header>

        <ResearchSections />

        <section className="persona-section section" id="persona" aria-labelledby="persona-title">
          <div className="shell">
            <h2 className="section-label persona-section__title" id="persona-title">PERSONA</h2>
            <div className="persona-grid">
              {personas.map((persona) => (
                <article className="persona" key={persona.name}>
                  <div className="persona__identity">
                    <ul className="persona__tags" aria-label="주문 키워드">
                      {persona.tags.map((tag) => <li key={tag}>#{tag}</li>)}
                    </ul>
                    <header className="persona__header">
                      <img src={persona.image} alt="" width="140" height="140" loading="lazy" />
                      <h3>{persona.name}</h3>
                      <p className="persona__profile">{persona.detail}</p>
                      <p className="persona__type">{persona.type}</p>
                    </header>
                  </div>
                  <div className="persona__body">
                    <blockquote><span>{persona.quote[0]}</span><strong>{persona.quote[1]}</strong></blockquote>
                    <div className="persona__comparison-labels" aria-hidden="true">
                      <span>PAIN POINT</span><span>NEEDS</span>
                    </div>
                    <ul className="persona__pairs">
                      {persona.pairs.map(([pain, need]) => (
                        <li key={pain}>
                          <p><span>기존의 불편</span>{pain}</p>
                          <p><span>필요한 경험</span>{need}</p>
                        </li>
                      ))}
                    </ul>
                    <dl className="persona__details">
                      <div><dt>주문 상황</dt><dd>{persona.situation}</dd></div>
                      <div><dt>주문 목표</dt><dd>{persona.goal}</dd></div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ResearchSynthesis />

        <div id="wireframe">
          <OrderFlowChart />
        </div>

        <DesignSystem />

        <DesignShowcase />
      </main>
    </>
  );
}

export default App;
