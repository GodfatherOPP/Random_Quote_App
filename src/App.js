import { useEffect, useState } from "react";
import { getQuote } from "./store/slice/quote";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { quote } = useSelector((state) => state.quoteSlice);

  useEffect(() => {
    setLoading(true);
    dispatch(getQuote());
    setLoading(false);
  }, [dispatch, setLoading]);
  const handleQuote = () => {
    setLoading(true);
    dispatch(getQuote())
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    console.log("new quote");
  };

  return (
    <div className="App">
      {loading ? (
        <div id="quote-box">
          <h1 className="top">...Loading</h1>
        </div>
      ) : (
        <div id="quote-box">
          <div className="top">
            <div id="text">
              <i>"{quote.text}"</i>
            </div>
            <div id="author">
              <b>{quote.author}</b>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-left">
              <a
                id="tweet-quote"
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${quote.text}--${quote.author}`}>
                <button>
                  <span>
                    <i class="bi bi-twitter"></i>
                  </span>
                </button>
              </a>
            </div>
            <div className="bottom-right">
              <button id="new-quote" onClick={handleQuote}>
                <span>new quote</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
