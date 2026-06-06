import { motion } from 'motion/react';

export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050B15]">
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, #22d3ee 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>
      <motion.div 
        animate={{ 
          x: ['-10%', '10%', '-5%'], 
          y: ['-10%', '5%', '-10%'],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px]"
      />
      <motion.div 
        animate={{ 
          x: ['10%', '-10%', '5%'], 
          y: ['10%', '-5%', '10%'],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute bottom-[-100px] right-[-100px] w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[150px]"
      />
    </div>
  );
}
