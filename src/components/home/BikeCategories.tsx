
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Городские велосипеды",
    description: "Идеальный выбор для поездок по городу и паркам",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    slug: "city"
  },
  {
    id: 2,
    name: "Горные велосипеды",
    description: "Для любителей бездорожья и активного отдыха",
    image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    slug: "mountain"
  },
  {
    id: 3,
    name: "Детские велосипеды",
    description: "Безопасные и комфортные модели для детей всех возрастов",
    image: "https://images.unsplash.com/photo-1607869861986-da7d50831876?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    slug: "kids"
  }
];

const BikeCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Категории велосипедов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            У нас представлен широкий выбор велосипедов для любых целей и возрастов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/catalog?category=${category.slug}`}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikeCategories;
