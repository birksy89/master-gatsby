import {FaPepperHot as icon} from 'react-icons/fa';

export default {
    // Computer Name
    name:"topping",
    // Visible title,
    title: "Toppings",
    type: "document",
    icon : icon,
    fields: [
        {
            name:"name",
            title: "Topping Name",
            type:"string",
            description: "Name of Topping"
        },
        {
            name:"vegitarian",
            title: "Vegitarian?",
            type:"boolean",
            description: "Is this suitable for vegitarians?",
            options:{
                layout: "checkbox"
            }
        },
       
    ],
    preview: {
        select:{
            name:"name",
            vegitarian: "vegitarian"
        }
        ,
        prepare:(fields) => ({
            title: `${fields.name} ${fields.vegitarian ?"🌿": ""} `
        })
    }
}