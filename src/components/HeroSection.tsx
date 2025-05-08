
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  date: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroSection = ({ date }: HeroSectionProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +date - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [date]);

  const scrollToRegister = () => {
    const registerSection = document.getElementById("register");
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative bg-gradient-to-b from-transparent to-[#1A1F2C]">
      {/* Градиентный фон и блюр эффект */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-[#9b87f5]/30 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[20%] w-80 h-80 bg-[#6e59a5]/20 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
          Демо-день<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#7E69AB]">
            инновационных стартапов
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Присоединяйтесь к нам на эксклюзивном мероприятии, где самые перспективные 
          стартапы представят свои инновационные решения
        </p>

        {/* Таймер обратного отсчёта */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Дней", value: timeLeft.days },
            { label: "Часов", value: timeLeft.hours },
            { label: "Минут", value: timeLeft.minutes },
            { label: "Секунд", value: timeLeft.seconds },
          ].map((item) => (
            <div 
              key={item.label} 
              className="flex flex-col items-center justify-center p-4 bg-[#1D2235]/80 rounded-xl border border-[#9b87f5]/20 backdrop-blur-sm"
            >
              <span className="text-3xl md:text-5xl font-bold text-white mb-2">{item.value}</span>
              <span className="text-gray-400">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToRegister}
            className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#8a76e4] hover:to-[#6d5898] text-white px-8 py-6 text-lg h-auto"
          >
            Зарегистрироваться
          </Button>
          <Button 
            variant="outline" 
            className="border-[#9b87f5]/50 text-white hover:bg-[#9b87f5]/10 px-8 py-6 text-lg h-auto"
            onClick={() => document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" })}
          >
            Узнать больше
          </Button>
        </div>
      </div>

      {/* Скролл вниз кнопка */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-black/30"
          onClick={() => document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ArrowDown className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
