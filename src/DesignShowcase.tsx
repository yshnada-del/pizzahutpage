import { comparisons, projectPeriod } from "./caseStudy";
import pizzaHutLogo from "./assets/pizzahut/pizzahut-logo.png";

const images = import.meta.glob<string>(
  [
    "./assets/pizzahut/pizzahut-before-*.png",
    "./assets/pizzahut/figma-{main,menu,detail,info,login}.png",
    "./assets/pizzahut/final-{main,menu,detail,info,login}.webp",
    "./assets/pizzahut/feature-{main,menu,detail,info,login}.webp",
  ],
  { eager: true, import: "default" },
);

type Shot = { file: string; size: readonly [number, number]; label: string };
type Scene = { label: string; note: string; focus: Shot };

const scenes: Record<string, Scene> = {
  main: {
    label: "Home",
    note: "프로모션을 본 뒤 배달·포장을 고르고 메뉴로 넘어가는 흐름을 다듬었습니다.",
    focus: { file: "feature-main.webp", size: [1290, 177], label: "최종안의 배달·포장·주소 입력" },
  },
  menu: {
    label: "Menu",
    note: "여러 피자의 가격을 비교하는 상황과 이미 원하는 피자가 정해진 상황을 모두 고려했습니다.",
    focus: { file: "feature-menu.webp", size: [1296, 725], label: "최종안의 메뉴 분류와 카드별 가격" },
  },
  detail: {
    label: "Product Detail",
    note: "기본 구성을 고르는 단계부터 장바구니에 담기 전 금액을 확인하는 단계까지 정리했습니다.",
    focus: { file: "feature-detail.webp", size: [1360, 143], label: "최종안의 선택 내역·합계·장바구니 담기" },
  },
  info: {
    label: "Product Information",
    note: "피자를 고르는 도중에 필요한 상품 정보를 한곳에서 확인할 수 있도록 개선했습니다.",
    focus: { file: "feature-info.webp", size: [985, 390], label: "최종안의 정보 종류와 메뉴 분류 탭" },
  },
  login: {
    label: "Login",
    note: "회원과 비회원이 각자 다음 단계로 이어갈 수 있도록 주문 진입 경로를 정리했습니다.",
    focus: { file: "feature-login.webp", size: [514, 646], label: "최종안의 회원·비회원 진입" },
  },
};

const stageLabels = ["기존 피자헛", "1차 시안", "최종안"];

function Photo({ file, size, alt }: { file: string; size: Shot["size"]; alt: string }) {
  return <img src={images["./assets/pizzahut/" + file]} width={size[0]} height={size[1]} alt={alt} loading="lazy" decoding="async" />;
}

function Comparison({ screen }: { screen: (typeof comparisons)[number] }) {
  const scene = scenes[screen.key];
  return (
    <article className={"comparison comparison--" + screen.key} aria-labelledby={"screen-" + screen.key}>
      <header className="showcase-scene__annotation">
        <p className="section-label showcase-scene__label">{scene.label}</p>
        <h3 className="section-title" id={"screen-" + screen.key}>{screen.title}</h3>
        <p className="section-description">{scene.note}</p>
      </header>

      <div className="comparison__stages">
        {screen.stages.map((stage, index) => (
          <figure className={index === 2 ? "stage final-stage" : "stage"} key={stage.file}>
            <figcaption>
              <span className="stage__label">{stageLabels[index]}</span>
              <h4>{stage.focus}</h4>
              <p>{stage.description}</p>
            </figcaption>
            <div className="stage__visual">
              <div className="stage__screen">
                <Photo file={stage.file} size={stage.size} alt={stageLabels[index] + " " + screen.label + " 데스크톱 전체 화면"} />
              </div>
              {index === 2 && (
                <div className="stage-focus">
                  <p>{scene.focus.label}</p>
                  <div className="stage-focus__image">
                    <Photo file={scene.focus.file} size={scene.focus.size} alt={scene.focus.label + " 확대 화면"} />
                  </div>
                </div>
              )}
            </div>
          </figure>
        ))}
      </div>
    </article>
  );
}

export default function DesignShowcase() {
  return (
    <>
      <section className="evolution section" id="design" aria-labelledby="showcase-title">
        <div className="shell">
          <header className="showcase-intro">
            <p className="section-label">BEFORE &amp; AFTER</p>
            <h2 className="section-title" id="showcase-title">피자 한 판을 고르고<br />주문하기까지.</h2>
            <p className="section-description">기존 피자헛 웹사이트에서 발견한 문제를 Figma에서 다시 설계했습니다. Codex로 실제 동작을 구현하며 각 화면을 어떻게 발전시켰는지 비교합니다.</p>
          </header>
          {comparisons.map((screen) => <Comparison key={screen.key} screen={screen} />)}
        </div>
      </section>

      <section className="showcase-outro" id="result" aria-labelledby="showcase-outro-title">
        <div className="shell">
          <img className="showcase-outro__logo" src={pizzaHutLogo} alt="Pizza Hut" width="866" height="650" loading="lazy" />
          <h2 className="section-title" id="showcase-outro-title" lang="en">THANK YOU</h2>
          <dl className="showcase-outro__credits">
            <div><dt>역할</dt><dd>기획 · 디자인 · 개발</dd></div>
            <div><dt>기간</dt><dd>{projectPeriod}</dd></div>
            <div><dt>툴</dt><dd>Figma · Codex · ChatGPT · HTML · CSS · JS</dd></div>
            <div><dt>기여도</dt><dd>100%</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}
