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
        {
            name:"toppings",
            title: "Toppings",
            type: "array",
            of:[{type: "reference" ,to: [{type: "topping"}]}]

        }
    ],
    preview: {
        select:{
            title:"name",
            media: "image",
            topping0: "toppings.0.name",
            topping1: "toppings.1.name",
            topping2: "toppings.2.name",
            topping3: "toppings.3.name",
        }
        ,
        prepare:({title, media, ...toppings }) => {
            //  Filter undefined toppings out
            const toppingsFiltered = []
            for (const [key, value] of Object.entries(toppings)) {
                if(value){

                    toppingsFiltered.push(value);
                }
              }

            //  Return the preview object for the pizza
            console.log(toppings)
           return  {
            title: `${title} `,
            media: media,
            subtitle: toppingsFiltered.join(", ")
        }
    }
    }
}