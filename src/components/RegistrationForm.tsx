
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    interests: [] as string[],
    agreement: false,
    newsletter: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    { id: "startup", label: "Я представляю стартап" },
    { id: "investor", label: "Я инвестор" },
    { id: "media", label: "Я представитель СМИ" },
    { id: "corporate", label: "Я представитель корпорации" },
    { id: "general", label: "Я заинтересован в теме стартапов" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, id]
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(item => item !== id)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация формы
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.agreement) {
      toast({
        title: "Ошибка при отправке",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }
    
    // Имитация отправки формы
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Регистрация успешна!",
        description: "Мы отправили дополнительную информацию на ваш email",
      });
      
      // Сброс формы
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        interests: [],
        agreement: false,
        newsletter: false
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Card className="overflow-hidden bg-[#1D2235]/80 border border-[#9b87f5]/20 backdrop-blur-sm">
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-white">Имя *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-[#151822] border-[#9b87f5]/20 text-white focus:border-[#9b87f5]"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white">Фамилия *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-[#151822] border-[#9b87f5]/20 text-white focus:border-[#9b87f5]"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#151822] border-[#9b87f5]/20 text-white focus:border-[#9b87f5]"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">Компания</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-[#151822] border-[#9b87f5]/20 text-white focus:border-[#9b87f5]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="role" className="text-white">Должность</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => setFormData({...formData, role: value})}
              >
                <SelectTrigger className="bg-[#151822] border-[#9b87f5]/20 text-white focus:border-[#9b87f5]">
                  <SelectValue placeholder="Выберите должность" />
                </SelectTrigger>
                <SelectContent className="bg-[#1D2235] border-[#9b87f5]/20">
                  <SelectItem value="founder">Основатель / CEO</SelectItem>
                  <SelectItem value="cto">CTO / Технический директор</SelectItem>
                  <SelectItem value="product">Продуктовый менеджер</SelectItem>
                  <SelectItem value="marketing">Маркетинг</SelectItem>
                  <SelectItem value="investor">Инвестор</SelectItem>
                  <SelectItem value="other">Другое</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-3">
            <Label className="text-white">Я участвую как:</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {interestOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={option.id}
                    checked={formData.interests.includes(option.id)}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange(option.id, checked as boolean)
                    }
                    className="border-[#9b87f5]/50 data-[state=checked]:bg-[#9b87f5] data-[state=checked]:text-white"
                  />
                  <label
                    htmlFor={option.id}
                    className="text-sm font-medium text-gray-300 cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="agreement"
                checked={formData.agreement}
                onCheckedChange={(checked) => 
                  setFormData({...formData, agreement: checked as boolean})
                }
                className="border-[#9b87f5]/50 data-[state=checked]:bg-[#9b87f5] data-[state=checked]:text-white"
                required
              />
              <label
                htmlFor="agreement"
                className="text-sm font-medium text-gray-300"
              >
                Я согласен с условиями обработки персональных данных *
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="newsletter"
                checked={formData.newsletter}
                onCheckedChange={(checked) => 
                  setFormData({...formData, newsletter: checked as boolean})
                }
                className="border-[#9b87f5]/50 data-[state=checked]:bg-[#9b87f5] data-[state=checked]:text-white"
              />
              <label
                htmlFor="newsletter"
                className="text-sm font-medium text-gray-300"
              >
                Я хочу получать новости о предстоящих мероприятиях
              </label>
            </div>
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:from-[#8a76e4] hover:to-[#6d5898] text-white"
          >
            {isSubmitting ? (
              <>
                <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                Отправка...
              </>
            ) : (
              "Зарегистрироваться"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
