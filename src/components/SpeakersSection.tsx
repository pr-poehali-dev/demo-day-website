
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

// Данные спикеров
const speakers = [
  {
    name: "Елена Смирнова",
    role: "CEO & Founder",
    company: "InnoTech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80",
    bio: "Серийный предприниматель с опытом успешных выходов.",
    social: {
      twitter: "elena_smirnova",
      linkedin: "elenasmirnova"
    },
    tags: ["AI", "Менторство"]
  },
  {
    name: "Алексей Иванов",
    role: "CTO",
    company: "TechForward",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&auto=format&fit=crop&q=80",
    bio: "Технический визионер с 15+ годами опыта в разработке.",
    social: {
      twitter: "alexivanov",
      linkedin: "alexivanov"
    },
    tags: ["Blockchain", "ML"]
  },
  {
    name: "Мария Петрова",
    role: "Инвестор",
    company: "VC Capital",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&q=80",
    bio: "Партнер ведущего венчурного фонда с портфелем 50+ стартапов.",
    social: {
      twitter: "mariapvc",
      linkedin: "mariapetrova"
    },
    tags: ["Инвестиции", "SaaS"]
  },
  {
    name: "Дмитрий Козлов",
    role: "Основатель",
    company: "DataSense",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&auto=format&fit=crop&q=80",
    bio: "Эксперт в области больших данных и аналитики.",
    social: {
      twitter: "dmitrykozlov",
      linkedin: "dmitrykozlov"
    },
    tags: ["BigData", "Analytics"]
  },
  {
    name: "Ольга Никитина",
    role: "Директор по маркетингу",
    company: "GrowthLab",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&auto=format&fit=crop&q=80",
    bio: "Специализируется на стратегии роста для B2B стартапов.",
    social: {
      twitter: "olganikitina",
      linkedin: "olganikitina"
    },
    tags: ["Growth", "B2B"]
  },
  {
    name: "Андрей Соколов",
    role: "Продуктовый стратег",
    company: "ProductMinds",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80",
    bio: "Помогает стартапам создавать продукты, которые любят пользователи.",
    social: {
      twitter: "andreysokolov",
      linkedin: "andreysokolov"
    },
    tags: ["UX", "Product"]
  }
];

const SpeakersSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {speakers.map((speaker, index) => (
        <Card 
          key={index} 
          className="overflow-hidden bg-[#232739] border border-[#9b87f5]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#9b87f5]/10"
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16 rounded-xl border-2 border-[#9b87f5]/30">
                <AvatarImage src={speaker.image} alt={speaker.name} />
                <AvatarFallback className="bg-[#7E69AB]/20 text-[#9b87f5]">
                  {speaker.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                <p className="text-[#9b87f5] mb-1">
                  {speaker.role}, {speaker.company}
                </p>
                <div className="flex gap-2 mt-2">
                  <a href={`https://twitter.com/${speaker.social.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                    <Icon name="Twitter" size={18} />
                  </a>
                  <a href={`https://linkedin.com/in/${speaker.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                    <Icon name="Linkedin" size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mt-4 mb-4">{speaker.bio}</p>
            
            <div className="flex flex-wrap gap-2">
              {speaker.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="outline" className="bg-[#1A1F2C] text-[#9b87f5] border-[#9b87f5]/30">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SpeakersSection;
