const coreColors = [
  { hex: "#C92332", tone: "light" },
  { hex: "#25231F", tone: "light" },
  { hex: "#77736E", tone: "light" },
  { hex: "#F8F6F2" },
  { hex: "#E8E5DF" },
  { hex: "#FFFFFF" },
  { hex: "#F5F4F1" },
];

const accentColors = [
  { hex: "#FAF0E9" },
  { hex: "#F7E5DF" },
  { hex: "#F5EBDF" },
  { hex: "#F9E8E9" },
];

const weights = [
  ["가변 굵기", 850],
  ["ExtraBold", 800],
  ["가변 굵기", 750],
  ["Bold", 700],
  ["Medium", 500],
  ["Regular", 400],
] as const;

const typography = [
  { sample: "마르게리타", size: 52.56, weight: 850 },
  { sample: "피자헛의 인기메뉴", size: 32, weight: 800 },
  { sample: "배달 주문", size: 20, weight: 750 },
  { sample: "리얼 BBQ 불고기", size: 18, weight: 750 },
  { sample: "장바구니 담기", size: 13, weight: 700 },
  { sample: "집에서 편하게 즐겨요", size: 11, weight: 400 },
];

function ColorPalette({ colors, className, label }: { colors: typeof coreColors; className: string; label: string }) {
  return (
    <ul className={"design-palette " + className} aria-label={label}>
      {colors.map((color) => (
        <li
          key={color.hex}
          className={color.tone === "light" ? "design-swatch design-swatch--light" : "design-swatch"}
          style={{ backgroundColor: color.hex }}
        >
          <code>{color.hex}</code>
        </li>
      ))}
    </ul>
  );
}

export default function DesignSystem() {
  return (
    <section className="design-system section" id="design-system" aria-labelledby="design-system-title">
      <div className="shell design-system__inner">
        <header className="design-system__heading">
          <p className="section-label">Design System</p>
          <h2 className="section-title" id="design-system-title">피자헛 디자인 시스템</h2>
        </header>

        <section className="design-system__colors" aria-labelledby="design-colors-title">
          <h3 className="section-subtitle" id="design-colors-title">Color system</h3>
          <ColorPalette colors={coreColors} className="design-palette--core" label="기본 색상" />
          <ColorPalette colors={accentColors} className="design-palette--accent" label="배너와 상품 표시 색상" />
        </section>

        <div className="design-system__type">
          <section aria-labelledby="design-weights-title">
            <h3 className="section-subtitle" id="design-weights-title">Font weight</h3>
            <ul className="design-weights">
              {weights.map(([name, weight]) => (
                <li key={weight} style={{ fontWeight: weight }}>
                  <span>Pretendard</span>
                  <span>{name} · {weight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="design-type-title">
            <h3 className="section-subtitle" id="design-type-title">Typography</h3>
            <ul className="design-type-list">
              {typography.map(({ sample, size, weight }) => (
                <li key={sample}>
                  <span className="design-type-list__sample" style={{ fontSize: `min(${size}px, 10vw)`, fontWeight: weight }}>{sample}</span>
                  <span className="design-type-list__spec">{size}px / {weight}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
