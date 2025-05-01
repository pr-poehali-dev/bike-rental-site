
import { useState, useEffect } from "react";
import Layout from "@/components/ui/Layout";
import BikeCard, { Bike } from "@/components/catalog/BikeCard";
import SearchFilter, { FilterOptions } from "@/components/catalog/SearchFilter";
import Pagination from "@/components/catalog/Pagination";
import { bikes } from "@/data/bikes";
import { toast } from "@/components/ui/use-toast";

const ITEMS_PER_PAGE = 6;

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterOptions>({
    category: "all",
    priceRange: [0, 5000],
    onlyAvailable: false,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredBikes, setFilteredBikes] = useState<Bike[]>(bikes);

  // Применяем фильтры и поиск при их изменении
  useEffect(() => {
    let result = [...bikes];

    // Фильтр по поисковому запросу
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(bike => 
        bike.name.toLowerCase().includes(query) || 
        bike.category.toLowerCase().includes(query)
      );
    }

    // Фильтр по категории
    if (filters.category !== "all") {
      result = result.filter(bike => bike.category === filters.category);
    }

    // Фильтр по цене
    result = result.filter(
      bike => bike.price >= filters.priceRange[0] && bike.price <= filters.priceRange[1]
    );

    // Фильтр по доступности
    if (filters.onlyAvailable) {
      result = result.filter(bike => bike.available);
    }

    setFilteredBikes(result);
    setCurrentPage(1); // Сбрасываем на первую страницу при изменении фильтров
  }, [searchQuery, filters]);

  // Получаем велосипеды для текущей страницы
  const getCurrentPageBikes = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBikes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  // Обработчик добавления в корзину
  const handleAddToCart = (bikeId: number) => {
    const bike = bikes.find(b => b.id === bikeId);
    if (bike) {
      toast({
        title: "Товар добавлен в корзину",
        description: `${bike.name} был добавлен в вашу корзину`,
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Каталог велосипедов</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Боковая панель с фильтрами */}
          <div className="lg:col-span-1">
            <SearchFilter 
              onSearch={setSearchQuery}
              onFilterChange={setFilters}
            />
          </div>
          
          {/* Основной контент */}
          <div className="lg:col-span-3">
            {filteredBikes.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600">
                    Найдено велосипедов: {filteredBikes.length}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getCurrentPageBikes().map(bike => (
                    <BikeCard 
                      key={bike.id} 
                      bike={bike}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
                
                <Pagination 
                  totalPages={Math.ceil(filteredBikes.length / ITEMS_PER_PAGE)}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">
                  К сожалению, не найдено велосипедов, соответствующих вашим критериям.
                </p>
                <p className="mt-2 text-gray-500">
                  Попробуйте изменить параметры поиска или фильтров.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
