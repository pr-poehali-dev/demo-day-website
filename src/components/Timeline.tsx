
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const timelineEvents = [
  {
    time: "10:00 - 10:30",
    title: "Регистрация участников",
    description: "Приветственный кофе и нетворкинг",
    icon: "Coffee"
  },
  {
    time: "10:30 - 11:00",
    title: "Открытие демо-дня",
    description: "Вступительное слово от организаторов",
    icon: "Mic2"
  },
  {
    time: "11:00 - 12:30",
    title: "Презентации стартапов (Часть 1)",
    description: "6 инновационных проектов по 15 минут",
    icon: "PresentationIcon"
  },
  {
    time: "12:30 - 13:30",
    title: "Обеденный перерыв",
    description: "Кейтеринг и нетворкинг",
    icon: "Utensils"
  },
  {
    time: "13:30 - 15:00",
    title: "Презентации стартапов (Часть 2)",
    description: "6 инновационных проектов по 15 минут",
    icon: "BarChart"
  },
  {
    time: "15:00 - 16:00",
    title: "Панельная дискуссия",
    description: "Тренды и будущее индустрии",
    icon: "Users"
  },
  {
    time: "16:00 - 17:00",
    title: "Нетворкинг и закрытие",
    description: "Общение с основателями стартапов",
    icon: "GlassWater"
  }
];

const Timeline = () => {
  return (
    <div className="relative">
      {/* Вертикальная линия */}
      <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#9b87f5] to-[#7E69AB]/30 transform -translate-x-1/2" />
      
      <div className="space-y-12 relative">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`relative flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
            {/* Маркер на временной шкале */}
            <div className="absolute left-4 sm:left-1/2 w-8 h-8 bg-[#9b87f5] rounded-full transform -translate-x-1/2 flex items-center justify-center shadow-lg shadow-[#9b87f5]/30 z-10">
              <Icon name={event.icon} size={16} className="text-white" />
            </div>
            
            {/* Контент */}
            <div className={`pl-16 sm:pl-0 ${index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'} sm:w-1/2`}>
              <Card className="overflow-hidden bg-[#1D2235]/80 border border-[#9b87f5]/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="text-[#9b87f5] font-mono font-medium mb-2">{event.time}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Пустая половина для соблюдения выравнивания */}
            <div className="hidden sm:block sm:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
