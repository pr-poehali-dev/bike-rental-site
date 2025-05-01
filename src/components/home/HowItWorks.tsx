
import Icon from "@/components/ui/icon";

const steps = [
  {
    id: 1,
    title: "Выберите велосипед",
    description: "Просмотрите наш каталог и выберите велосипед, который подходит именно вам",
    icon: "Search"
  },
  {
    id: 2,
    title: "Забронируйте онлайн",
    description: "Укажите даты аренды и оформите заказ через наш сайт",
    icon: "CalendarCheck"
  },
  {
    id: 3,
    title: "Заберите велосипед",
    description: "Приходите в наш пункт проката и получите свой велосипед",
    icon: "Bike"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Как это работает</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Арендовать велосипед просто и удобно. Всего три шага, и вы уже наслаждаетесь поездкой!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon name={step.icon} className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
