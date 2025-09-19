import "./CardPanel.css";

export type CardPanelProps = {
  weekStart: string;          // not used yet (kept for your JSON contract)
  weightChange: number;
  amountLeft: number;
  targetWeight: number;       // not shown yet (for future chart)
  goalAmount: number;
  date: string;
  blogTitle: string;
  blogBlurb: string;
  currentWeight?: number;
  unit?: string;              // "lbs" (default)
};

function formatLongDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

const iFloor = (n: number) => Math.floor(n);
const absFloor = (n: number) => Math.abs(Math.floor(n));

type ChangeMood = "gain" | "loss" | "maintain";
function changeMood(n: number): ChangeMood {
  const v = Math.floor(n);
  if (v > 0) return "gain";
  if (v < 0) return "loss";
  return "maintain";
}

export default function CardPanel({
  weightChange,
  amountLeft,
  goalAmount,
  date,
  blogTitle,
  blogBlurb,
  currentWeight,
  unit = "lbs",
}: CardPanelProps) {
  const mood = changeMood(weightChange);
  const moodText =
    mood === "gain" ? "text-red-500" : mood === "loss" ? "text-green-500" : "text-amber-400";

  return (
    <article className="cardpanel py-5 md:py-6 pr-5 pl-3 md:pl-4">
      {/* chrome overlays */}
      <div aria-hidden className="cardpanel__overlay--streak" />
      <div aria-hidden className="cardpanel__overlay--grain" />
      <div aria-hidden className="cardpanel__overlay--vignette" />

      <div className="cardpanel__grid">
        {/* LEFT RAIL */}
        <div className="h-full">
          <ul className="cardpanel__rail">
            {/* Current */}
            <li className="rail-item">
              <div className="bubble">
                <span className="text-[#ff3b3b] font-extrabold text-3xl xl:text-4xl leading-none">
                  {currentWeight !== undefined ? iFloor(currentWeight) : "—"}
                </span>
              </div>
              <span className="rail-badge">Current ({unit})</span>
            </li>

            {/* Change (original filled icon, centered + animated) */}
            <li className="rail-item">
              <div className="bubble relative">
                {mood === "gain" && (
                  <svg
                    className="mood-mark mood-gain mood-anim mood-anim--up"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden
                  >
                    <path d="M12 4l-7 7h4v9h6v-9h4z" />
                  </svg>
                )}
                {mood === "loss" && (
                  <svg
                    className="mood-mark mood-loss mood-anim mood-anim--down"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden
                  >
                    <path d="M12 20l7-7h-4V4H9v9H5z" />
                  </svg>
                )}
                {mood === "maintain" && (
                  <svg
                    className="mood-mark mood-maintain mood-anim mood-anim--pulse"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden
                  >
                    <rect x="6.5" y="5" width="4.3" height="14" rx="1.2" />
                    <rect x="13.2" y="5" width="4.3" height="14" rx="1.2" />
                  </svg>
                )}

                <span
                  className={`${moodText} font-extrabold text-3xl xl:text-4xl leading-none relative`}
                >
                  {absFloor(weightChange)}
                </span>
              </div>
              <span className="rail-badge">Change ({unit})</span>
            </li>

            {/* Left */}
            <li className="rail-item">
              <div className="bubble">
                <span className="text-[#ff3b3b] font-extrabold text-3xl xl:text-4xl leading-none">
                  {iFloor(Math.max(amountLeft, 0))}
                </span>
              </div>
              <span className="rail-badge">Left ({unit})</span>
            </li>

            {/* Goal */}
            <li className="rail-item">
              <div className="bubble">
                <span className="text-[#ff3b3b] font-extrabold text-3xl xl:text-4xl leading-none">
                  {iFloor(Math.max(goalAmount, 0))}
                </span>
              </div>
              <span className="rail-badge">Goal ({unit})</span>
            </li>
          </ul>
        </div>

        {/* RIGHT PANE */}
        <div className="pane">
          <header className="pane--header">
            <h3 className="header-title">{blogTitle}</h3>
            <p className="header-date">{formatLongDate(date)}</p>
          </header>

          <section className="pane--blurb">
            <p className="blurb-text">{blogBlurb}</p>
          </section>
        </div>
      </div>
    </article>
  );
}
