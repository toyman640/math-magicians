import React, { useState, useEffect } from 'react';

function Quotes() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const GetData = async () => {
      try {
        const result = await fetch('https://api.api-ninjas.com/v1/quotes?limit=1&category=hope', { method: 'GET', headers: { 'X-Api-Key': 'hFl61f9hCHCBsGXi0S10VA==2C9iKOYx8LbDvxbP' } });
        if (!result.ok) {
          throw new Error('Failed to fetch data');
        }
        const ParsedQuote = await result.json();
        setQuote(ParsedQuote);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    GetData();
  }, []);
  if (isLoading) {
    return <p className="Quote">Loading...</p>;
  }

  if (error) {
    return (
      <p className="Quote">
        Error:
        {error}
      </p>
    );
  }
  return (
    <div className="Quote">
      { quote && (
      <div>
        <p>
          Quote:
          { Array.isArray(quote) ? quote[0].quote : quote.quote }
        </p>
        <p>
          Author:
          {Array.isArray(quote) ? quote[0].author : quote.author}
        </p>
      </div>
      )}
    </div>
  );
}

export default Quotes;
