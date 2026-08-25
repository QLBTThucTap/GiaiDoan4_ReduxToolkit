import axios from "axios";

export const fetchProductsApi = async () => {
  const response = await axios.get(
    "https://67da02f435c87309f52aafd1.mockapi.io/product",
  );
  return response.data;
};
