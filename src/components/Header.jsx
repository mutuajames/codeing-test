import React from 'react';

export const Header = ({ baseCurrency, lastUpdated }) => {
  const formattedDate = new Date(lastUpdated).toLocaleString();
  
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <h1 className="text-2xl font-bold text-center">Currency Exchange Rates</h1>
      <p className="text-center text-sm mt-2">
        Base Currency: {baseCurrency} | Last Updated: {formattedDate}
      </p>
    </header>
  );
};
