export const productOptionGroupResolver = {
  Query: {
    productOptionGroups: (_, __, { productOptionGroups }) => productOptionGroups,

    productOptionGroup: (_, { productOptionGroupId }, { productOptionGroups }) => {
      return productOptionGroups.find(
        (productOptionGroup) => productOptionGroup.id === productOptionGroupId,
      );
    },
  },

  ProductOptionGroup: {
    productGroup: ({ productGroupId }, __, { productGroups }) => {
      return productGroups.find((productGroup) => productGroup.id === productGroupId);
    },
  },
};
