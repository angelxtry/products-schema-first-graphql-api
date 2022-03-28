export const productResolver = {
  Query: {
    products: (_, { filter }, { products }) => {
      let data = products;
      if (filter) {
        data = data.filter((product) => product.productName.includes(filter.productName));
      }
      return data;
    },

    product: (_, { productId }, { products }) => {
      return products.find((product) => product.id === productId);
    },
  },

  Product: {
    productGroup: ({ productGroupId }, __, { productGroups }) => {
      return productGroups.find((productGroup) => productGroup.id === productGroupId);
    },

    productOptions: (
      { id: productId },
      __,
      { productOptionDetailRel, productOptions },
    ) => {
      const options = [];

      const relations = productOptionDetailRel.filter(
        (rel) => rel.productId === productId,
      );

      for (const rel of relations) {
        const option = productOptions.find((po) => po.id === rel.productOptionId);
        if (option) options.push(option);
      }

      return options;
    },
  },
};
