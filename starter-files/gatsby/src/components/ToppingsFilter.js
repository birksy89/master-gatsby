import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const ToppingsFilter = () => {
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          id
          name
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          id
          name
        }
      }
    }
  `);

  console.log({ toppings, pizzas });
  return (
    <div>
      <p>Toppings</p>
    </div>
  );
};
