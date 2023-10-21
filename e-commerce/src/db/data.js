import { AiFillStar } from "react-icons/ai";

const data = [
    {
        img: 'https://loremflickr.com/640/360',
        title: "Nike Air Monarch IV",
        star: <AiFillStar className='rating-star' />,
        reviews: "(123 reviews)",
        prevPrice: "$140",
        newPrice: "200",
        company: "Nike",
        color: "white",
        category: "sneakers",
    },
    {
        img: "https://loremflickr.com/640/360",
        title: "Nike Nocta Glide",
        star: <AiFillStar className='rating-star' />,
        reviews: "(500 reviews)",
        prevPrice: "$140",
        newPrice: "200",
        company: "Vans",
        color: "white",
        category: "sneakers",
    }
    ,
    {
        img: "https://loremflickr.com/640/360",
        title: "Tom Ford Formal",
        star: <AiFillStar className='rating-star' />,
        reviews: "(123 reviews)",
        prevPrice: "$130",
        newPrice: "100",
        company: "Adidas",
        color: "white",
        category: "flats",
    }
    // add more objects here if needed
];

export default data;
