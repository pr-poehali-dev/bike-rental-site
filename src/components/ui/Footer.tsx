
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Bike" className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ВелоПрокат</span>
            </div>
            <p className="text-gray-600 mb-4">
              Лучший сервис проката велосипедов в городе. Широкий выбор моделей для всей семьи.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-600 hover:text-primary transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-600 hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Icon name="MapPin" className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-600">ул. Велосипедная, 15, Москва</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="Phone" className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-600">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="Mail" className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-600">info@velorent.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} ВелоПрокат. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
