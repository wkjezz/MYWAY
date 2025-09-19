import CardPanel from "./components/CardPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <CardPanel
          weekStart="2025-09-15"
          weightChange={-0.8}
          amountLeft={10.4}
          targetWeight={180}
          goalAmount={2.0}                // <— numeric weekly goal (lbs)
          date="2025-09-20"
          blogTitle="Found a groove"
          blogBlurb="Dialed in lunches. Evening walks help."
          currentWeight={203.6}
          unit="lbs"                      // <— default is lbs; you can omit
        />
      </div>
    </div>
  );
}
