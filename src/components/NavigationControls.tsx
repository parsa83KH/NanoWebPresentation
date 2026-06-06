interface Props {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onGo: (i: number) => void;
}

export default function NavigationControls({ current, total, onNext, onPrev, onGo }: Props) {
  return (
    <>
      {/* Side Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 hidden xl:flex">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current 
                ? 'bg-cyan-400 scale-[1.7] shadow-[0_0_12px_rgba(34,211,238,0.8)]' 
                : 'bg-white/20 hover:bg-white/40 hover:scale-125'
            }`}
            aria-label={`اسلاید ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
