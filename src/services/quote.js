import axios from "axios";

const getQuote = async () => {
  try {
    let result = await axios.get(
      "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
    );
    return result.data;
  } catch (e) {
    return { status: false, quotes: {} };
  }
};

const quoteService = {
  getQuote,
};

export default quoteService;
