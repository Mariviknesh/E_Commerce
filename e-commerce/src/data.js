import tv1 from "./image/tv1.jpg"
import tv2 from "./image/tv2.jpg"
import phone1 from "./image/phone1.png"
import phone2 from "./image/phone2.jpg"
import laptop1 from "./image/laptop1.jpg"
import laptop2 from "./image/laptop2.jpg"

const data={
    products:[
        {
            id:'1',
            name:'Sony',
            type:'tv',
            price:15000,
            image:tv1,
        },
        {
            id:'2',
            name:'LG',
            type:'tv',
            price:20000,
            image:tv2,
        },
        {
            id:'3',
            name:'Dell',
            type:'laptop',
            price:65000,
            image:laptop1
        },
        {
            id:'4',
            name:'Hp',
            type:'laptop',
            price:100000,
            image:laptop2,
        },
        {
            id:'5',
            name:'Redmi',
            type:'phone',
            price:45000,
            image:phone1
        }, 
        {
            id:'6',
            name:'oppo',
            type:'phone',
            price:50000,
            image:phone2
        }
    ]
}
export default data;