import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  title: string;
  desc: string;
  delay?: number;
  key?: React.Key;
}

export default function Card({ icon: Icon, title, desc, delay = 0 }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-2xl backdrop-blur-xl relative group hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col h-full overflow-hidden"
    >
      <div className="absolute -right-2 -top-2 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all"></div>
      <div className="relative z-10 w-11 h-11 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 sm:mb-4 shadow-inner">
        <Icon size={22} />
      </div>
      <h3 className="relative z-10 text-base sm:text-lg font-bold text-white mb-2">{title}</h3>
      <p className="relative z-10 text-gray-300 leading-relaxed font-semibold text-xs sm:text-sm">{desc}</p>
    </motion.div>
  );
}
