import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Background from './components/Background';
import NavigationControls from './components/NavigationControls';
import { 
  Slide1, Slide2, Slide3, Slide4, Slide5, 
  Slide7, Slide8, Slide9, Slide10, Slide11, Slide12,
  Slide13
} from './components/SlideComponents';
import { SlideContext } from './components/SlideWrapper';

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide8, Slide9, Slide10, Slide11, Slide7, Slide12, Slide13];

export default function App() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let lastTime = 0;
    const cooldown = 900; // ms

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        setCurrent(p => Math.min(slides.length - 1, p + 1));
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        setCurrent(p => Math.max(0, p - 1));
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 15) return;
      
      const now = Date.now();
      if (now - lastTime < cooldown) return;

      if (e.deltaY > 0) {
        setCurrent(p => Math.min(slides.length - 1, p + 1));
        lastTime = now;
      } else if (e.deltaY < 0) {
        setCurrent(p => Math.max(0, p - 1));
        lastTime = now;
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;
      
      const now = Date.now();
      if (now - lastTime < cooldown) return;

      if (Math.abs(diffY) > 50) {
        if (diffY > 0) {
          setCurrent(p => Math.min(slides.length - 1, p + 1));
          lastTime = now;
        } else {
          setCurrent(p => Math.max(0, p - 1));
          lastTime = now;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  const SlideComponent = slides[current];

  return (
    <SlideContext.Provider value={{ current, total: slides.length }}>
      <div className="relative w-full h-screen overflow-hidden flex flex-col font-sans selection:bg-cyan-500/30">
        <Background />
        
        {/* Progress Bar at absolute top */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/5 z-50">
          <motion.div 
            className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </div>

        {/* Main Slide Content Area */}
        <main className="flex-1 relative overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 overflow-y-auto overflow-x-hidden flex flex-col justify-center"
            >
              <SlideComponent />
            </motion.div>
          </AnimatePresence>
        </main>

        <NavigationControls 
          current={current} 
          total={slides.length} 
          onNext={() => setCurrent(p => Math.min(slides.length - 1, p + 1))}
          onPrev={() => setCurrent(p => Math.max(0, p - 1))}
          onGo={(i) => setCurrent(i)}
        />
      </div>
    </SlideContext.Provider>
  );
}
