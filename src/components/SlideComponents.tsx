import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, Zap, BarChart, Globe, Lock, Palette, Smartphone, Moon, Film, 
  Home, Beaker, FileText, ClipboardList, Briefcase, HelpCircle, ArrowLeft, 
  Link as LinkIcon, ExternalLink, ShieldCheck, Heart, Users, MapPin, 
  Activity, DollarSign, Award, CheckCircle, LineChart, LayoutDashboard,
  XCircle, AlertTriangle, Layers, CreditCard, Bell, Database, PieChart,
  CalendarDays, Settings, Clock
} from 'lucide-react';
import SlideWrapper from './SlideWrapper';
import Card from './Card';
import content from '../content.json';

export const Slide1 = () => {
  const icons = [Globe, Activity, Award];
  
  return (
    <SlideWrapper 
      eyebrow={content.slide1.eyebrow}
      title={<>{content.slide1.titleStart}<span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-blue-400 to-indigo-500 font-black">{content.slide1.titleHighlight}</span></>}
      lead={content.slide1.lead}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 w-full">
        {content.slide1.cards.map((c, i) => {
          const Icon = icons[i];
          const isPlus = i === 0;
          const isPro = i === 1;
          const isProMax = i === 2;
          
          return (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`bg-white/5 backdrop-blur-xl border p-5 rounded-2xl flex flex-col justify-between hover:bg-white/10 hover:border-opacity-40 transition-all ${c.border} relative overflow-hidden`}
            >
              {isProMax && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[9px] font-black px-3 py-0.5 rounded-b-xl shadow-lg uppercase tracking-wider">
                  سایت فوق‌پیشرفته
                </div>
              )}
              {isPro && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-[9px] font-black px-3 py-0.5 rounded-b-xl shadow-lg uppercase tracking-wider">
                  سایت پیشرفته
                </div>
              )}
              {isPlus && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 bg-gradient-to-r from-slate-500 to-slate-600 text-white text-[9px] font-black px-3 py-0.5 rounded-b-xl shadow-lg uppercase tracking-wider">
                  سایت محتوایی
                </div>
              )}
              
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-black text-white">{c.title}</h3>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${c.badgeColor}`}>
                      {c.badge}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 font-semibold min-h-[72px]">
                    {c.desc}
                  </p>
                </div>
                
                <div className="mt-2 flex items-center gap-2 text-xs text-gray-400 border-t border-white/5 pt-3">
                  <Icon className={isProMax ? 'text-indigo-400' : isPro ? 'text-cyan-400' : 'text-slate-400'} size={16} />
                  <span className="font-bold">{c.usage}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SlideWrapper>
  );
};

export const Slide2 = () => (
  <SlideWrapper 
    eyebrow={content.slide2.eyebrow}
    title={<>{content.slide2.titleStart}<br/><span className="text-2xl sm:text-3xl text-cyan-400 mt-2 block">{content.slide2.titleHighlight}</span></>}
    lead={content.slide2.lead}
  >
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-6">
      {content.slide2.kpis.map((kpi, i) => (
        <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i*0.1 }} className="bg-white/5 backdrop-blur-xl border border-white/10 text-center p-5 sm:p-6 rounded-2xl hover:border-cyan-500/30 hover:bg-white/10 transition-all shadow-lg group relative">
          <div className="absolute -right-2 -top-2 w-16 h-16 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-all pointer-events-none"></div>
          <div className="text-3xl sm:text-4xl text-cyan-400 font-black mb-1.5 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] relative z-10">{kpi.v}</div>
          <div className="text-gray-300 font-semibold text-xs sm:text-sm relative z-10">{kpi.l}</div>
        </motion.div>
      ))}
    </div>
  </SlideWrapper>
);

export const Slide3 = () => {
    const icons = [Users, CalendarDays, CreditCard, Bell, Globe, Settings];
    return (
      <SlideWrapper eyebrow={content.slide3.eyebrow} title={content.slide3.title}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.slide3.cards.map((c, i) => {
             const Icon = icons[i];
             return <Card key={i} delay={0.2 + i*0.1} icon={Icon} title={c.title} desc={c.desc} />;
          })}
        </div>
      </SlideWrapper>
    );
};

export const Slide4 = () => {
  const patientIcons = [FileText, ClipboardList, CreditCard, Bell];
  const samplerIcons = [Smartphone, MapPin, Beaker, CheckCircle];

  return (
    <SlideWrapper 
      eyebrow={content.slide4.eyebrow} 
      title={content.slide4.title}
      lead={content.slide4.lead}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4">
        {/* Patient Lane */}
        <div className="bg-[#082f49]/30 border border-[#0284c7]/20 backdrop-blur-xl p-4 sm:p-5 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl pointer-events-none" />
          <h3 className="text-base font-bold text-cyan-400 mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            {content.slide4.patientTrackTitle}
          </h3>
          
          <div className="space-y-3">
            {content.slide4.patientTrack.map((step, i) => {
              const Icon = patientIcons[i];
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all relative group"
                >
                  <div className="w-9 h-9 shrink-0 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base mb-0.5 flex items-center gap-1.5">
                      <span className="text-[10px] text-cyan-400/80 font-mono">۰{i+1}.</span>
                      {step.title}
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-semibold">{step.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="absolute right-[30px] -bottom-[15px] w-[2px] h-[15px] bg-cyan-500/20 hidden sm:block z-0" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Sampler App Lane */}
        <div className="bg-[#1e1b4b]/40 border border-[#4f46e5]/20 backdrop-blur-xl p-4 sm:p-5 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/5 blur-3xl pointer-events-none" />
          <h3 className="text-base font-bold text-indigo-400 mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            {content.slide4.samplerTrackTitle}
          </h3>

          <div className="space-y-3">
            {content.slide4.samplerTrack.map((step, i) => {
              const Icon = samplerIcons[i];
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all relative group"
                >
                  <div className="w-9 h-9 shrink-0 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base mb-0.5 flex items-center gap-1.5">
                       <span className="text-[10px] text-indigo-400/80 font-mono">۰{i+1}.</span>
                      {step.title}
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-semibold">{step.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="absolute right-[30px] -bottom-[15px] w-[2px] h-[15px] bg-indigo-500/20 hidden sm:block z-0" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export const Slide5 = () => {
  return (
    <SlideWrapper eyebrow={content.slide5.eyebrow} title={content.slide5.title}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-2 text-right">
        {/* Left Column: KPI & General Admin card */}
        <div className="lg:col-span-5 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold border-b border-white/10 pb-3 mb-3 flex items-center gap-2 text-white">
              <PieChart className="text-cyan-400" size={20}/>
              {content.slide5.card1Title}
            </h3>
            <ul className="space-y-2 text-xs text-gray-300 font-semibold">
              {content.slide5.card1Items.map((t, i) => (
                <li key={i} className="flex gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                  <CheckCircle size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 text-[10px] text-gray-400 font-medium leading-relaxed">
            * مدیران سیستم به پنل‌های آماری مجزا متصل هستند و اطلاعات آماری مالی را به همراه مانیتورینگ عملکرد پرسنل بدون داشتن مهارت کامپیوتتر تحلیل می‌کنند.
          </div>
        </div>

        {/* Right Column: Full administrative and oversight panel description */}
        <div className="lg:col-span-7 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl pointer-events-none" />
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-2 text-white">
                <Users className="text-indigo-400" size={20}/>
                <h3 className="text-base font-bold">پنل مدیریتی غنی و نظارت فرآیندی کامل (سایت پرو)</h3>
              </div>
              <span className="text-[10px] sm:text-xs font-black bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 px-2.5 py-1 rounded-full">
                عملیاتی و پویا بدون نیاز به برنامه‌نویسی
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <p className="text-gray-300 font-semibold leading-relaxed">
                در نسخه <span className="text-cyan-400 font-bold">پرو</span>، مدیریت فراتر از صرفاً ویرایش متن است. شما کنترل همه‌جانبه سیستم و فرآیندهای کاری آزمایشگاه را به دست می‌گیرید؛ کلیه پرسنل هم‌محور کارتابل روان خود را دارند و مسئولین آزمایشگاه تغییرات را مستقیماً اعمال می‌کنند:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/20 border border-white/5 rounded-xl p-3 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-green-400 font-bold">
                    <CheckCircle size={14} /> مدیریت کامل و پویا بدون نیاز به دانش برنامه‌نویسی
                  </div>
                  <p className="text-gray-300 font-medium leading-relaxed text-[11px]">
                     مدیر سیستم می‌تواند ساعت‌های پاسخ‌دهی، ظرفیت نمونه‌گیری اعزامی صفی، فعال/غیرفعال کردن درگاه‌های تسویه زرین‌پال، و قیمت‌ها را شخصاً در چند ثانیه و بدون نیاز به برنامه‌نویسی تنظیم کند.
                  </p>
                </div>

                <div className="bg-black/20 border border-white/5 rounded-xl p-3 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-bold">
                    <PieChart size={14} /> تحلیل آماری و گزارش‌گیری یکپارچه
                  </div>
                  <p className="text-gray-300 font-medium leading-relaxed text-[11px]">
                    نمایش زنده چرخۀ عملیات و حجم مراجعین بر اساس دسته‌بندی‌ها، درآمدهای تفکیکی تراکنش‌ها، راندمان فعالیت پرسنل سیار و گلوگاه‌های در فرآیند پاسخ‌دهی کادر آزمایشگاهی.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 font-semibold text-xs text-gray-300 gap-1 mt-1 bg-white/[0.02] p-2.5 border border-white/5 rounded-xl">
                <span className="text-white font-bold text-xs mb-1">تعیین دسترسی جداگانه پرسنل (۳ نقش کلیدی):</span>
                <span className="flex items-center gap-1.5"><span className="text-cyan-400 font-bold">•</span> پذیرش: مدیریت نسخه‌ها، تایید مدارک و صدور پیش فاکتور دیجیتال.</span>
                <span className="flex items-center gap-1.5"><span className="text-cyan-400 font-bold">•</span> نمونه‌گیر سیار: مدیریت مأموریت با GPS زنده و بارکدگذاری لوله‌ها.</span>
                <span className="flex items-center gap-1.5"><span className="text-cyan-400 font-bold">•</span> سوپروایزر: نظارت کلان فرآیندی و عملیاتی کلان.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export const Slide6 = () => (
  <SlideWrapper eyebrow={content.slide6.eyebrow} title={content.slide6.title} lead={content.slide6.lead}>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
        <div className="bg-gradient-to-l from-blue-600/10 to-transparent border border-blue-500/20 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-[0_15px_30px_-10px_rgba(6,182,212,0.15)] group hover:border-blue-500/40 transition-colors">
            <Layers className="text-blue-400 mb-3" size={24} />
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{content.slide6.card1Title}</h3>
            <ul className="space-y-1.5 text-gray-300 font-semibold text-xs sm:text-sm">
              {content.slide6.card1Items.map((item, i) => (
                <li key={i}><span className="text-cyan-400 ml-1.5">•</span> <span className="text-gray-400 font-normal">{item.bullet}:</span> {item.text}</li>
             ))}
           </ul>
        </div>
        <div className="bg-gradient-to-r from-blue-600/10 to-transparent border border-blue-500/20 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-[0_15px_30px_-10px_rgba(6,182,212,0.15)] group hover:border-blue-500/40 transition-colors">
           <Zap className="text-blue-400 mb-3" size={24} />
           <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{content.slide6.card2Title}</h3>
           <ul className="space-y-1.5 text-gray-300 font-semibold text-xs sm:text-sm">
             {content.slide6.card2Items.map((item, i) => (
                <li key={i}><span className="text-indigo-400 ml-1.5">•</span> <span className="text-gray-400 font-normal">{item.bullet}:</span> {item.text}</li>
             ))}
           </ul>
        </div>
     </div>
  </SlideWrapper>
);

export const Slide7 = () => {
  const icons = [Users, Heart, Beaker, Zap];

  return (
    <SlideWrapper eyebrow={content.slide7.eyebrow} title={content.slide7.title} lead={content.slide7.lead}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mt-1 text-right no-scrollbar overflow-hidden">
        {/* Left Column (Feature Cards) styled like Slide11: Indigo Glass Card */}
        <div className="bg-indigo-500/10 border border-indigo-500/20 p-3.5 sm:p-4 rounded-xl backdrop-blur-xl flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="text-xs sm:text-sm font-bold text-white mb-1.5 flex items-center gap-1.5 border-b border-white/5 pb-1">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
              قابلیت‌های کلیدی پلتفرم پرومکس (ProMax)
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {content.slide7.cards.map((c, i) => {
                const Icon = icons[i] || Zap;
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.1 + i*0.04 }} 
                    className="bg-white/5 border border-white/5 p-2 rounded-lg flex items-start gap-2 hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <Icon className="text-indigo-400 shrink-0 mt-0.5" size={14} />
                    <div>
                      <h4 className="text-[11px] sm:text-xs font-black text-white mb-0.5">{c.title}</h4>
                      <p className="text-gray-300 text-[10px] sm:text-[11px] font-semibold leading-relaxed">{c.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Descriptions of Multi-Level Oversight & Admin Capabilities styled like Slide11: Cyan Glass Card */}
        <div className="bg-cyan-500/10 border border-cyan-500/20 p-3.5 sm:p-4 rounded-xl backdrop-blur-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-white/10 pb-1.5">
              <div className="flex items-center gap-1.5">
                <Lock className="text-cyan-400" size={13} />
                <h3 className="text-[11px] sm:text-xs font-bold text-white">پنل فوق‌پیشرفته و سطوح دسترسی نانو پرومکس</h3>
              </div>
              <span className="text-[9px] font-black bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                ۵ سطح دسترسی پویا
              </span>
            </div>

            <p className="text-gray-300 font-semibold leading-relaxed text-[10px] sm:text-[11px]">
              درگاه ادمین <span className="text-cyan-400 font-bold">پرومکس</span> با معماری چندسطحی پلتفرمی هوشمند ارائه می‌دهد تا آزمایشگاه بر کل ارکان عملیات آنلاین و مالی بدون نیاز به تخصص برنامه‌نویسی حکومت کند:
            </p>

            {/* Two Panel aspects with extremely tight margins to avoid scrollbars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="bg-black/30 border border-cyan-500/10 rounded-lg p-2 space-y-0.5">
                <div className="text-cyan-300 font-black text-[10px] sm:text-[11px] flex items-center gap-1">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                  <span>قوانین هوش تشخیصی</span>
                </div>
                <p className="text-gray-300 font-semibold leading-relaxed text-[9.5px] sm:text-[10px]">
                  تغییر و افزودن آسان قوانین الگوریتم پیشنهاد چکاپ‌ها بدون هیچ دانش فنی.
                </p>
              </div>

              <div className="bg-black/30 border border-cyan-500/10 rounded-lg p-2 space-y-0.5">
                <div className="text-cyan-300 font-black text-[10px] sm:text-[11px] flex items-center gap-1">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                  <span>آمار مالی پزشکان</span>
                </div>
                <p className="text-gray-300 font-semibold leading-relaxed text-[9.5px] sm:text-[10px]">
                  پایش سود تراکنش‌ها، کنترل پورتال سهم‌های مشارکت پزشکان و گزارش BI.
                </p>
              </div>
            </div>

            {/* 6 Roles Grid */}
            <div className="space-y-1 text-[10px] text-gray-300 font-semibold bg-white/[0.02] border border-white/5 p-1.5 rounded-lg">
              <div className="text-white font-bold text-[9.5px] sm:text-[10px] mb-0.5">یکپارچگی ۵ سطح دسترسی به صورت زنده:</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-[9px]">
                <div className="flex items-center gap-1 bg-white/[0.04] border border-white/5 py-0.5 px-1.5 rounded-md hover:bg-white/10 transition-colors"><CheckCircle size={8} className="text-cyan-400 shrink-0" /><span>پزشک همکار</span></div>
                <div className="flex items-center gap-1 bg-white/[0.04] border border-white/5 py-0.5 px-1.5 rounded-md hover:bg-white/10 transition-colors"><CheckCircle size={8} className="text-cyan-400 shrink-0" /><span>بیمار تعاملی</span></div>
                <div className="flex items-center gap-1 bg-white/[0.04] border border-white/5 py-0.5 px-1.5 rounded-md hover:bg-white/10 transition-colors"><CheckCircle size={8} className="text-cyan-400 shrink-0" /><span>مدیر ارشد (BI)</span></div>
                <div className="flex items-center gap-1 bg-white/[0.04] border border-white/5 py-0.5 px-1.5 rounded-md hover:bg-white/10 transition-colors"><CheckCircle size={8} className="text-cyan-400 shrink-0" /><span>کادر آزمایشگاه</span></div>
                <div className="flex items-center gap-1 bg-white/[0.04] border border-white/5 py-0.5 px-1.5 rounded-md hover:bg-white/10 transition-colors"><CheckCircle size={8} className="text-cyan-400 shrink-0" /><span>پشتیبانی/نمونه‌گیر</span></div>
                <div className="flex items-center gap-1 bg-white/[0.04] border border-white/5 py-0.5 px-1.5 rounded-md hover:bg-white/10 transition-colors"><CheckCircle size={8} className="text-cyan-400 shrink-0" /><span>ادمین کلان و ناظر</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export const Slide8 = () => (
  <SlideWrapper 
    eyebrow={content.slide8.eyebrow} 
    title={<>{content.slide8.titleStart}<span className="text-2xl text-gray-400 mt-2 block">{content.slide8.titleHighlight}</span></>}
    lead={content.slide8.lead}
  >
     <div className="mt-4 bg-white/5 border border-white/10 p-5 sm:p-6 rounded-2xl text-center backdrop-blur-xl">
       <AlertTriangle className="mx-auto text-amber-500 mb-3" size={32} />
       <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{content.slide8.alertTitle}</h3>
       <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base font-semibold">
         {content.slide8.alertText}
       </p>
     </div>
  </SlideWrapper>
);

export const Slide9 = () => {
  const icons = [Users, Beaker, FileText, ClipboardList];
  return (
    <SlideWrapper eyebrow={content.slide9.eyebrow} title={content.slide9.title}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mt-1 text-right no-scrollbar overflow-hidden">
        {/* Left Column: List of 4 cards from content.slide9.cards (styled like Slide7 Left) */}
        <div className="bg-amber-500/10 border border-amber-500/20 p-4 sm:p-5 rounded-xl backdrop-blur-xl flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm font-bold text-white mb-1.5 flex items-center gap-1.5 border-b border-white/5 pb-1">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              امکانات لندینگ و محتوای ایستا (پلاس)
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {content.slide9.cards.slice(0, 4).map((c, i) => {
                const Icon = icons[i] || HelpCircle;
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.1 + i*0.04 }} 
                    className="bg-white/5 border border-white/5 p-2 rounded-lg flex items-start gap-2 hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <Icon className="text-amber-400 shrink-0 mt-0.5" size={14} />
                    <div>
                      <h4 className="text-[11px] sm:text-xs font-black text-white mb-0.5">{c.title}</h4>
                      <p className="text-gray-300 text-[10px] sm:text-[11px] font-semibold leading-relaxed">{c.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: CMS details (styled like Slide7 Right) */}
        <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 sm:p-5 rounded-xl backdrop-blur-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-1.5 border-b border-white/10 pb-1.5">
              <div className="flex items-center gap-1.5">
                <LayoutDashboard className="text-cyan-400" size={13} />
                <h3 className="text-[11px] sm:text-xs font-bold text-white">پنل ساده مدیریت محتوا و وبلاگ (سایت پلاس)</h3>
              </div>
              <span className="text-[9px] font-black bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                ادمین ساده تک‌کاربره
              </span>
            </div>

            <p className="text-gray-300 font-semibold leading-relaxed text-[10px] sm:text-[11px]">
              نسخه <span className="text-cyan-400 font-bold">پلاس</span> به یک کنترل‌پنل ساده جهت مدیریت اخبار، کاتالوگ فرضی تست‌ها و افزودن مقاله جدید مجهز است:
            </p>

            {/* Two Panel aspects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="bg-black/30 border border-cyan-500/10 rounded-lg p-2.5 space-y-0.5">
                <div className="text-cyan-300 font-black text-[10px] sm:text-[11px] flex items-center gap-1">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                  <span>انتشار و بروزرسانی وبلاگ</span>
                </div>
                <p className="text-gray-300 font-semibold leading-relaxed text-[9.5px] sm:text-[10px]">
                  افزودن و ویرایش آسان مقالات علمی وبلاگ جهت جذب مراجعین و افزایش سئو.
                </p>
              </div>

              <div className="bg-black/30 border border-cyan-500/10 rounded-lg p-2.5 space-y-0.5">
                <div className="text-cyan-300 font-black text-[10px] sm:text-[11px] flex items-center gap-1">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full" />
                  <span>اطلاعات تفصیلی شعب</span>
                </div>
                <p className="text-gray-300 font-semibold leading-relaxed text-[9.5px] sm:text-[10px]">
                  بروزرسانی تعرفه فرضی تست‌ها، کادر درمانی، آدرس‌ها، ساعات کار و لیست بیمه‌ها.
                </p>
              </div>
            </div>

            {/* Static reminder section */}
            <div className="bg-black/40 border border-white/5 p-2.5 rounded-lg space-y-1">
              <div className="text-white font-bold text-[9.5px] sm:text-[10px] flex items-center gap-1">
                <ShieldCheck size={11} className="text-cyan-400" />
                <span>مفهوم کلیدی مدیریت محتوا:</span>
              </div>
              <p className="text-gray-400 text-[9px] sm:text-[10px] font-semibold leading-relaxed">
                این لایه صرفاً برای تغییرات اسنادی و متنی سایت است و قابلیت تعامل، مدیریت پرونده‌ها، دسترسی مراجعین یا ثبت سفارشات فرآیندی در آن قرار ندارد؛ بلکه ساختاری مستقل و کاملاً ایستا است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export const Slide10 = () => (
  <SlideWrapper eyebrow={content.slide10.eyebrow} title={content.slide10.title} lead={content.slide10.lead}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
       {content.slide10.cards.map((c, i) => (
         <motion.div 
           key={i} 
           initial={{ opacity: 0, y: 15 }} 
           animate={{ opacity: 1, y: 0 }} 
           transition={{ delay: 0.2 + i*0.1 }} 
           className="bg-red-500/10 border border-red-500/20 p-4 sm:p-5 rounded-2xl flex items-start gap-3"
         >
           <XCircle className="text-red-400 shrink-0 mt-0.5" size={24} />
           <div>
             <h3 className="text-base sm:text-lg font-bold text-white mb-1">{c.title}</h3>
             <p className="text-gray-300 text-xs sm:text-sm font-semibold leading-relaxed">{c.desc}</p>
           </div>
         </motion.div>
       ))}
    </div>
  </SlideWrapper>
);

export const Slide11 = () => (
  <SlideWrapper eyebrow={content.slide11.eyebrow} title={content.slide11.title} lead={content.slide11.lead}>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
       <div className="bg-orange-500/10 border border-orange-500/20 p-4 sm:p-5 rounded-2xl backdrop-blur-xl">
         <AlertTriangle className="text-orange-400 mb-3" size={24} />
         <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{content.slide11.card1Title}</h3>
         <p className="text-gray-300 font-semibold leading-relaxed text-xs sm:text-sm">{content.slide11.card1Desc}</p>
       </div>
       <div className="bg-red-500/10 border border-red-500/20 p-4 sm:p-5 rounded-2xl backdrop-blur-xl">
         <DollarSign className="text-red-400 mb-3" size={24} />
         <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{content.slide11.card2Title}</h3>
         <p className="text-gray-300 font-semibold leading-relaxed text-xs sm:text-sm">{content.slide11.card2Desc}</p>
       </div>
     </div>
  </SlideWrapper>
);

export const Slide12 = () => (
  <SlideWrapper eyebrow={content.slide12.eyebrow} title={content.slide12.title}>
    <div className="mt-4 bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl w-full">
      <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr] bg-white/10 border-b border-white/10 text-center py-3 font-bold text-xs sm:text-sm md:text-base text-white">
        <div className="text-right px-4 sm:px-8 whitespace-nowrap">{content.slide12.col1}</div>
        <div className="text-indigo-400 whitespace-nowrap">{content.slide12.col2}</div>
        <div className="text-cyan-400 whitespace-nowrap">{content.slide12.col3}</div>
        <div className="text-gray-400 whitespace-nowrap">{content.slide12.col4}</div>
      </div>
      {content.slide12.rows.map((row, i) => (
        <div key={i} className="grid grid-cols-[2.5fr_1fr_1fr_1fr] border-b border-white/5 text-center py-2.5 hover:bg-white/5 transition-colors items-center">
          <div className="text-right px-4 sm:px-8 text-gray-200 font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">{row.t}</div>
          <div className="flex justify-center text-xs font-bold text-indigo-400">
            {!row.a.includes("ندارد") && (row.a.includes("دارد") || row.a !== "") ? (
              <span className="bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 whitespace-nowrap text-[10px] sm:text-xs">
                {row.a === "دارد" ? <CheckCircle className="text-indigo-400" size={18}/> : row.a}
              </span>
            ) : (
              <XCircle className="text-red-500" size={18}/>
            )}
          </div>
          <div className="flex justify-center text-xs font-bold text-cyan-400">
            {!row.b.includes("ندارد") && (row.b.includes("دارد") || row.b !== "") ? (
              <span className="bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 whitespace-nowrap text-[10px] sm:text-xs">
                {row.b === "دارد" ? <CheckCircle className="text-cyan-400" size={18}/> : row.b}
              </span>
            ) : (
              <XCircle className="text-red-500" size={18}/>
            )}
          </div>
          <div className="flex justify-center text-xs font-bold text-gray-400">
            {!row.c.includes("ندارد") && (row.c.includes("دارد") || row.c !== "") ? (
              <span className="bg-gray-500/10 px-2 py-0.5 rounded border border-gray-500/20 whitespace-nowrap text-[10px] sm:text-xs">
                {row.c === "دارد" ? <CheckCircle className="text-gray-400" size={18}/> : row.c}
              </span>
            ) : (
              <XCircle className="text-red-500" size={18}/>
            )}
          </div>
        </div>
      ))}
    </div>
  </SlideWrapper>
);

export const Slide13 = () => (
  <SlideWrapper eyebrow={content.slide13.eyebrow} title={content.slide13.title}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 w-full">
      {content.slide13.cards.map((c, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: i * 0.12 }}
          className={`bg-white/5 backdrop-blur-xl border p-5 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-all ${c.border}`}
        >
          {c.type === 'pro' && (
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
              پکیج پیشرفته هوشمند
            </div>
          )}
          {c.type === 'promax' && (
            <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
              بی‌رقیب و همه‌جانبه (VIP)
            </div>
          )}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-black text-white">{c.title}</h3>
              <span className={`text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full border ${
                c.type === 'plus' ? 'text-gray-400 bg-gray-400/10 border-gray-400/20' :
                c.type === 'pro' ? 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20' :
                'text-indigo-400 bg-indigo-400/10 border-indigo-400/20'
              }`}>{c.badge}</span>
            </div>
            
            <p className="text-gray-400 text-xs leading-relaxed mb-4 border-b border-white/5 pb-4 min-h-[48px]">{c.desc}</p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <DollarSign className={c.type === 'plus' ? 'text-gray-400' : c.type === 'pro' ? 'text-cyan-400' : 'text-indigo-400'} size={18} />
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">هزینه نهایی طراحی و استقرار</div>
                  <div className="text-base sm:text-lg font-black text-white">{c.initial}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 border-t border-white/5 pt-3">
                <Clock className={c.type === 'plus' ? 'text-gray-400' : c.type === 'pro' ? 'text-cyan-400' : 'text-indigo-400'} size={18} />
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">مدت زمان تحویل و راه‌اندازی</div>
                  <div className="text-xs sm:text-sm font-black text-white font-sans">
                    {c.type === 'plus' ? '۱ ماه (۳۰ روز کاری)' : c.type === 'pro' ? '۳ ماه (۹۰ روز کاری)' : '۶ ماه (۱۸۰ روز کاری)'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 border-t border-white/5 pt-3">
                <ShieldCheck className={c.type === 'plus' ? 'text-gray-400' : c.type === 'pro' ? 'text-cyan-400' : 'text-indigo-400'} size={18} />
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">خدمات پشتیبانی فنی</div>
                  <div className="text-xs sm:text-sm font-black text-white">{c.support}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5 leading-relaxed font-semibold">{c.supportDesc}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 border-t border-white/5 pt-3">
                <Award className={c.type === 'plus' ? 'text-gray-400' : c.type === 'pro' ? 'text-cyan-400' : 'text-indigo-400'} size={18} />
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">سهم مشارکت از افزایش سود مراجعات</div>
                  <div className="text-xs sm:text-sm font-black text-white">{c.share}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SlideWrapper>
);

export const Slide14 = () => (
  <SlideWrapper eyebrow={content.slide14.eyebrow} title={content.slide14.title}>
    <div className="space-y-2 mt-3 max-w-5xl mx-auto w-full">
      {content.slide14.steps.map((st, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i*0.12 }} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 p-3.5 rounded-2xl border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all shadow-lg group backdrop-blur-xl">
          <div className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-sm sm:text-base font-black text-white shadow-inner group-hover:scale-105 transition-transform">{st.n}</div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-0.5">{st.t}</h4>
            <p className="text-gray-300 text-xs sm:text-sm font-semibold leading-relaxed max-w-3xl">{st.d}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SlideWrapper>
);
