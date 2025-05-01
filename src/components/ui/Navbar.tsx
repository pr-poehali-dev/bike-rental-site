
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Bike" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ВелоПрокат</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/catalog" className="text-gray-700 hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              О нас
            </Link>
            <Link to="/contacts" className="text-gray-700 hover:text-primary transition-colors">
              Контакты
            </Link>
            <Link to="/admin" className="text-gray-700 hover:text-primary transition-colors">
              Админ-панель
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Icon name="ShoppingCart" className="h-6 w-6 text-gray-700 hover:text-primary transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
            
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
