
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: FilterOptions) => void;
}

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  onlyAvailable: boolean;
}

const SearchFilter = ({ onSearch, onFilterChange }: SearchFilterProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleFilterChange = (
    key: keyof FilterOptions,
    value: string | [number, number] | boolean
  ) => {
    let newValue;
    
    if (key === "category") {
      setCategory(value as string);
      newValue = value;
    } else if (key === "priceRange") {
      setPriceRange(value as [number, number]);
      newValue = value;
    } else if (key === "onlyAvailable") {
      setOnlyAvailable(value as boolean);
      newValue = value;
    }
    
    onFilterChange({
      category,
      priceRange,
      onlyAvailable,
      [key]: newValue,
    } as FilterOptions);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      <div className="flex gap-2">
        <Input
          placeholder="Поиск велосипедов..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={handleSearch}>
          <Icon name="Search" className="mr-2 h-4 w-4" />
          Найти
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Категория</h3>
          <Select
            value={category}
            onValueChange={(value) => handleFilterChange("category", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все типы</SelectItem>
              <SelectItem value="mountain">Горные</SelectItem>
              <SelectItem value="road">Шоссейные</SelectItem>
              <SelectItem value="city">Городские</SelectItem>
              <SelectItem value="electric">Электровелосипеды</SelectItem>
              <SelectItem value="kids">Детские</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <h3 className="font-medium">Цена</h3>
            <span className="text-sm text-gray-500">
              {priceRange[0]} ₽ - {priceRange[1]} ₽
            </span>
          </div>
          <Slider
            defaultValue={[0, 5000]}
            max={5000}
            step={100}
            value={priceRange}
            onValueChange={(value) => handleFilterChange("priceRange", value as [number, number])}
            className="my-4"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="availability"
            checked={onlyAvailable}
            onCheckedChange={(checked) => 
              handleFilterChange("onlyAvailable", checked === true)
            }
          />
          <Label htmlFor="availability">Только доступные</Label>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
