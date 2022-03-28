export const productOptionResolver = {
  Query: {
    productOptions: (_, __, { productOptions }) => productOptions,

    productOption: (_, { productOptionId }, { productOptions }) => {
      return productOptions.find((productOption) => productOption.id === productOptionId);
    },
  },

  ProductOption: {
    productOptionGroup: ({ productOptionGroupId }, __, { productOptionGroups }) => {
      return productOptionGroups.find(
        (productOptionGroup) => productOptionGroup.id === productOptionGroupId,
      );
    },
  },
};
