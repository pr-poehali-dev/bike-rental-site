
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export interface Bike {
  id: number;
  name: string;
  category: string;
  price: number;
  imageSrc: string;
  available: boolean;
  rating: number;
}

interface BikeCardProps {
  bike: Bike;
  onAddToCart: (bikeId: number) => void;
}

const BikeCard = ({ bike, onAddToCart }: BikeCardProps) => {
  const { id, name, category, price, imageSrc, available, rating } = bike;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-48 object-cover"
        />
        {!available && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Badge variant="destructive" className="text-sm py-1">Недоступен</Badge>
          </div>
        )}
        <Badge className="absolute top-2 right-2 bg-primary">{category}</Badge>
      </div>

      <div className="p-4">
        <Link to={`/catalog/${id}`} className="block">
          <h3 className="font-semibold text-lg hover:text-primary transition-colors truncate">
            {name}
          </h3>
        </Link>

        <div className="flex items-center mt-1 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Icon 
              key={i}
              name={i < rating ? "Star" : "StarOff"} 
              className={`h-4 w-4 ${i < rating ? 'text-amber-500' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-xs text-gray-600 ml-1">{rating.toFixed(1)}</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-lg">{price} ₽/день</span>
          <Button 
            size="sm" 
            onClick={() => onAddToCart(id)}
            disabled={!available}
            className="text-sm"
          >
            <Icon name="ShoppingCart" className="h-4 w-4 mr-1" />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
