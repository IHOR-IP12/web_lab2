import React, { useState } from 'react';

function CatalogSearch({ data, setData }) {
    const [sortType, setSortType] = useState('price-low-to-high'); // По умолчанию сортируем по цене (можете выбрать другое значение по умолчанию)

    const handleSortChange = (event) => {
        setSortType(event.target.value);
        // Вызываем функцию сортировки
        sortData(event.target.value);
    };

    const sortData = (type) => {
        const sortedData = [...data];
        if (type === 'price-low-to-high') {
            sortedData.sort((a, b) => a.price - b.price); // Сортировка по цене от наименьшей к наибольшей
        } else if (type === 'price-high-to-low') {
            sortedData.sort((a, b) => b.price - a.price); // Сортировка по цене от наибольшей к наименьшей
        } else if (type === 'location') {
            sortedData.sort((a, b) => a.location.localeCompare(b.location)); // Сортировка по локации в алфавитном английском порядке
        } else if (type === 'area-low-to-high') {
            sortedData.sort((a, b) => a.area - b.area); // Сортировка по площади от наименьшей к наибольшей
        } else if (type === 'area-high-to-low') {
            sortedData.sort((a, b) => b.area - a.area); // Сортировка по площади от наибольшей к наименьшей
        }
        setData(sortedData);
    };

    return (
        <div className="catalog-search">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={handleSortChange} value={sortType}>
                <option value="price-low-to-high">Price (Low to High)</option>
                <option value="price-high-to-low">Price (High to Low)</option>
                <option value="location">Location (Alphabetical)</option>
                <option value="area-low-to-high">Area (Low to High)</option>
                <option value="area-high-to-low">Area (High to Low)</option>
            </select>
        </div>
    );
}

export default CatalogSearch;
