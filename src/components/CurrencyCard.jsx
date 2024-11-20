import React from 'react';

export const CurrencyCard = ({ currency, flags, baseCurrency }) => {
  const flagFilename = `${currency.currency.toLowerCase().slice(0, -1)}.png`;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-1/2 mx-auto flex items-center hover:bg-gray-50 transition">
      <img 
        src={flags[flagFilename]} 
        alt={`${currency.name} flag`} 
        className="w-16 h-12 mr-4 object-cover rounded"
        onError={(e) => {
          e.target.src = '/placeholder-flag.png';
          console.warn(`Flag not found for ${currency.currency}`);
        }}
      />
      <div className="flex-grow">
        <h2 className="font-bold text-lg">{currency.name}</h2>
        <p className="text-gray-600">{currency.currency}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold text-blue-600">
          1 {baseCurrency} = {currency.rate.toFixed(currency.precision)} {currency.currency}
        </p>
        <p className="text-sm text-gray-500">
          Buy: {currency.buy.toFixed(currency.precision)} | Sell: {currency.sell.toFixed(currency.precision)}
        </p>
      </div>
    </div>
  );
};