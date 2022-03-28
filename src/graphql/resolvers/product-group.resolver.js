export const productGroupResolver = {
  Query: {
    productGroups: (_, __, { productGroups }) => {
      return productGroups;
    },
  },
};
