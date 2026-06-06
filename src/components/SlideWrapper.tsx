import { motion } from 'motion/react';
import { ReactNode, createContext, useContext } from 'react';

export const SlideContext = createContext<{ current: number; total: number }>({ current: 0, total: 12 });

interface Props {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  lead?: string;
}

export default function SlideWrapper({ eyebrow, title, children, lead }: Props) {
  const { current, total } = useContext(SlideContext);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-6xl mx-auto flex flex-col justify-center min-h-max py-8 md:py-10 px-6 sm:px-8 lg:px-12"
    >
      {/* Header row with Topic (eyebrow) and Page Counter */}
      <div className="flex items-center justify-between mb-4 w-full">
        {eyebrow ? (
          <div className="inline-block px-4 py-1.5 border border-cyan-500/30 rounded-full bg-cyan-500/5 text-cyan-400 text-xs sm:text-sm font-bold tracking-widest">
            {eyebrow}
          </div>
        ) : (
          <div className="inline-block px-4 py-1.5 border border-cyan-500/30 rounded-full bg-cyan-500/5 text-cyan-400 text-xs sm:text-sm font-bold tracking-widest">
            ثبت اطلاعات
          </div>
        )}
        
        {/* Page counter aligned left */}
        <div className="text-xs sm:text-sm font-bold tracking-widest px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-cyan-400 shadow-sm font-mono select-none">
          {current + 1} / {total}
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 lg:mb-4 leading-[1.3] tracking-tight">
        {title}
      </h2>
      {lead && (
        <p className="text-sm sm:text-base text-gray-300 mb-5 lg:mb-6 max-w-4xl leading-relaxed font-semibold">
          {lead}
        </p>
      )}
      <div className="flex-1 w-full relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
