import { paginatedFn } from '../../utils/paginatedFn.js';

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

  ProductGroup: {
    products: ({ id: productGroupId }, { pagination, filter }, { products }) => {
      let data = products.filter((product) => product.productGroupId === productGroupId);
      const productResultFn = paginatedFn(pagination);
      if (filter) {
        data = data.filter((product) => product.productName.includes(filter.productName));
      }
      return productResultFn(data);
    },
  },
};
