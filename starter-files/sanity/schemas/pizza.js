import {MdLocalPizza as icon} from 'react-icons/md';

export default {
    // Computer Name
    name:"pizza",
    // Visible title,
    title: "Pizzas",
    type: "document",
    icon : icon,
    fields: [
        {
            name:"name",
            title: "Pizza Name",
            type:"string",
            description: "Name of Pizza"
        },
        {
            name:"slug",
            title: "Slug",
            type:"slug",
            options:{
                source: "name",
                maxLength:100
            }
        },
        {
            name:"image",
            title: "Image",
            type:"image",
            options:{
                hotspot: true,
                
            }
        },
        {
            name:"price",
            title: "Price",
            type:"number",
            description: "Price of Pizza in cents",
            validation: Rule => Rule.min(1000).max(50000),
            // TODO - Add custom input component
        },
    ]
}