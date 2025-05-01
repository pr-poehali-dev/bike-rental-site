
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  // Создаем массив страниц для отображения
  const getPageNumbers = () => {
    const pages = [];
    
    // Максимум 5 кнопок страниц
    const maxPagesToShow = 5;
    
    // Вычисляем начальную и конечную страницы для отображения
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    // Корректировка, если не хватает страниц в конце
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <nav className="flex justify-center mt-8">
      <ul className="flex items-center space-x-1">
        <li>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="h-9 w-9"
          >
            <Icon name="ChevronLeft" className="h-4 w-4" />
          </Button>
        </li>
        
        {getPageNumbers().map((page) => (
          <li key={page}>
            <Button
              variant={currentPage === page ? "default" : "outline"}
              onClick={() => onPageChange(page)}
              className={`h-9 w-9 ${currentPage === page ? 'bg-primary text-primary-foreground' : ''}`}
            >
              {page}
            </Button>
          </li>
        ))}
        
        <li>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="h-9 w-9"
          >
            <Icon name="ChevronRight" className="h-4 w-4" />
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
