import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const ToppingsFilter = () => {
  const { toppings } = useStaticQuery(graphql`
    query {
      allSanityTopping {
        nodes {
          id
          name
          #   vegetarian
        }
      }
    }
  `);

  console.log(toppings);
  return (
    <div>
      <p>Toppings</p>
    </div>
  );
};
