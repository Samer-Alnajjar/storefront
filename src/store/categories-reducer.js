const initialState = {
  categories: [
    {
      normalizedName: "Electronics",
      displayName: "Electronics",
      description: "Description for electronics",
    },
    {
      normalizedName: "Food",
      displayName: "Food",
      description: "Description for food",
    },
  ],
  active: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      const categories = state.categories;
      const active = payload;
      return { categories, active };
    default:
      return state;
  }
};

export const activeCategory = (categoryName) => {
  return {
    type: "ACTIVE",
    payload: categoryName,
  };
};
