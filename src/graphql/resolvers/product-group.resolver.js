export const productGroupResolver = {
  Query: {
    productGroups: (_, { filter }, { productGroups }) => {
      let result = productGroups;
      if (filter?.productGroupName) {
        result = result.filter((pg) =>
          pg.productGroupName.includes(filter.productGroupName),
        );
      }
      if (filter?.companyName) {
        result = result.filter((pg) => pg.companyName.includes(filter.companyName));
      }
      return result;
    },

    productGroup: (_, { productGroupId }, { productGroups }) => {
      return productGroups.find((productGroup) => productGroup.id === productGroupId);
    },
  },
};
