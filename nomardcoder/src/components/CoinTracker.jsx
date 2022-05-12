import { useState, useEffect } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [have, setHave] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  });

  const haveMoney = (e) => {
    setHave(e.target.value);
  };

  return (
    <div>
      <h1>The Coins !! ({coins.length})</h1>
      <input type="number" value={have} onChange={haveMoney} />
      <p>$ {have}</p>

      <hr />

      {loading ? (
        <strong>Loading ...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} ,
              {have / coin.quotes.USD.price}개
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default CoinTracker;
