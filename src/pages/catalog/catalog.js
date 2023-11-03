import React, { useState } from 'react';
import CatalogSearch from '../../components/catalogSearch/catalogSearch';
import '../../components/catalogSearch/catalogSearch.css';
import ZooItems from '../../components/zooItems/zooItems';
import '../../components/zooItems/defaultZoo.css';
import '../../components/zooItems/zooItems.css';

import zoo1 from './zoosPhoto/Zoo1.jpg';
import zoo2 from './zoosPhoto/Zoo2.jpg';
import zoo3 from './zoosPhoto/Zoo3.jpg';
import zoo4 from './zoosPhoto/Zoo4.jpg';
import zoo5 from './zoosPhoto/Zoo5.jpg';
import zoo6 from './zoosPhoto/Zoo6.jpg';
import zoo7 from './zoosPhoto/Zoo7.jpg';

const zoodata = [
    {
        id: 1,
        name: 'Lion',
        price: 5000,
        area: 1000,
        location: 'Lviv',
        imageSrc: zoo1,
    },
    {
        id: 2,
        name: 'Zebra',
        price: 7000,
        area: 1200,
        location: 'Kyiv',
        imageSrc: zoo2,
    },
    {
        id: 3,
        name: 'Panda',
        price: 6000,
        area: 900,
        location: 'Odessa',
        imageSrc: zoo3,
    },
    {
        id: 4,
        name: 'Monkey',
        price: 5500,
        area: 1100,
        location: 'Kharkiv',
        imageSrc: zoo4,
    },
    {
        id: 5,
        name: 'Jiraff',
        price: 6500,
        area: 950,
        location: 'Dnipro',
        imageSrc: zoo5,
    },
    {
        id: 6,
        name: 'Peackok',
        price: 4800,
        area: 800,
        location: 'Lviv',
        imageSrc: zoo6,
    },
    {
        id: 7,
        name: 'Hipopotam',
        price: 5500,
        area: 1000,
        location: 'Kyiv',
        imageSrc: zoo7,
    },
];



function Catalog() {
    const [data, setData] = useState(zoodata);

    return (
        <div className="Home">
            <CatalogSearch data={data} setData={setData} />
            <ZooItems data={data} />
        </div>
    );
}

export default Catalog;





