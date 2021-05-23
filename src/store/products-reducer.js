const initialState = {
  products: [
    {
      category: "Electronics",
      name: "Macbook Air",
      price: 700,
      count: 10,
      image: "https://cdn.mos.cms.futurecdn.net/HvjfsxzQHCZxpUYTVgyBDM.jpg",
    },
    {
      category: "Electronics",
      name: "Dell XPS",
      price: 1000,
      count: 10,
      image:
        "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/xps_13_9310/general/xps-13_black_open-up-left-v2.jpg?fmt=pjpg&pscan=auto&scl=1&wid=3334&hei=2017&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=3334,2017",
    },
    {
      category: "Food",
      name: "Mensaf",
      price: 25,
      count: 10,
      image: "https://i.ytimg.com/vi/e45mZ6Jnqdw/hqdefault.jpg",
    },
    {
      category: "Food",
      name: "Maqlobah",
      price: 10,
      count: 10,
      image:
        "https://images.deliveryhero.io/image/talabat/MenuItems/%D9%85%D9%82%D9%84%D9%88%D8%A8%D8%A9_%D8%AF%D8%AC%D8%A7%D8%AC_%D8%A7%D8%AD%D9%85%D8%B1_636177542427114004.jpg",
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
const productsReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "ACTIVE":
      let product = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { ...state, product: product };
    default:
      return state;
  }
};

export default productsReducer;
