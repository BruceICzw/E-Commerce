import { AiFillStar } from "react-icons/ai";

const data = [
    {
        img: 'https://images.unsplash.com/photo-1520342868579-195c0d1c011a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
        title: 'Adidas Stan Smith',
        star: <AiFillStar className='rating-star' />,
        reviews: '(456 reviews)',
        prevPrice: '$120',
        newPrice: '$180',
        company: 'Adidas',
        color: 'green',
        category: 'sneakers',
    },
    {
        img: 'https://images.unsplash.com/photo-1515902817627-fa94d07b632f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
        title: 'Adidas Ultraboost 22',
        star: <AiFillStar className='rating-star' />,
        reviews: '(789 reviews)',
        prevPrice: '$180',
        newPrice: '$240',
        company: 'Adidas',
        color: 'black',
        category: 'sneakers',
    },
    {
        img: 'https://images.unsplash.com/photo-1521572171895-fb749a769b08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
        title: 'Adidas Superstar',
        star: <AiFillStar className='rating-star' />,
        reviews: '(1010 reviews)',
        prevPrice: '$110',
        newPrice: '$160',
        company: 'Adidas',
        color: 'white',
        category: 'sneakers',
    },
    {
        img: 'https://images.unsplash.com/photo-1542291026-7eec26ba477c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
        title: 'Adidas NMD R1',
        star: <AiFillStar className='rating-star' />,
        reviews: '(1213 reviews)',
        prevPrice: '$150',
        newPrice: '$200',
        company: 'Adidas',
        color: 'grey',
        category: 'sneakers',
    },
    {
        img: 'https://images.unsplash.com/photo-1584797112843-a73b729948d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
        title: 'Adidas Continental 80',
        star: <AiFillStar className='rating-star' />,
        reviews: '(1416 reviews)',
        prevPrice: '$100',
        newPrice: '$150',
        company: 'Adidas',
        color: 'white',
        category: 'sneakers',
    }
    // add more objects here if needed
];

export default data;
