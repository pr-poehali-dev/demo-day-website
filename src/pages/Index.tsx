
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import SpeakersSection from "@/components/SpeakersSection";
import RegistrationForm from "@/components/RegistrationForm";

const Index = () => {
  // Дата демо-дня (пример: 20 июня 2025)
  const demoDay = new Date("2025-06-20T10:00:00");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#171B27]">
      {/* Hero Section с таймером */}
      <HeroSection date={demoDay} />

      {/* Таймлайн программы */}
      <section id="schedule" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Программа <span className="text-[#9b87f5]">демо-дня</span>
        </h2>
        <Timeline />
      </section>

      {/* Секция со спикерами */}
      <section id="speakers" className="container py-20 bg-[#1D2235] rounded-3xl mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Наши <span className="text-[#9b87f5]">спикеры</span>
        </h2>
        <SpeakersSection />
      </section>

      {/* Форма регистрации */}
      <section id="register" className="container py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Регистрация
          </h2>
          <p className="text-center text-gray-300 mb-8">
            Не пропустите наш эксклюзивный демо-день! Зарегистрируйтесь сейчас, 
            чтобы увидеть презентации самых инновационных стартапов.
          </p>
          <RegistrationForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151822] py-8 mt-20">
        <div className="container text-center text-gray-400">
          <p>&copy; 2025 Демо-день стартапа. Все права защищены.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-[#9b87f5] transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-[#9b87f5] transition-colors">
              Условия использования
            </a>
            <a href="#" className="hover:text-[#9b87f5] transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
