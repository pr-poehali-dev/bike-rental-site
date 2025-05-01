
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Прокат велосипедов для всей семьи
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Большой выбор велосипедов на любой вкус и для любых целей. Доступные цены, удобная система бронирования и отличный сервис!
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="font-medium">
                <Link to="/catalog">Каталог велосипедов</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium">
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Велосипед на прокат" 
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
