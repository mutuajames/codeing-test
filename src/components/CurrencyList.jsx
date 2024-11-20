import React from 'react';
import { CurrencyCard } from './CurrencyCard';

export const CurrencyList = ({ currencies, flags, baseCurrency }) => {
  if (!Array.isArray(currencies)) {
    return <p className="text-center text-gray-500">Loading currencies...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {currencies.length === 0 ? (
        <p className="text-center text-gray-500">No currencies found</p>
      ) : (
        <div className="grid gap-4">
          {currencies.map((currency, index) => (
            <CurrencyCard 
              key={index}
              currency={currency}
              flags={flags}
              baseCurrency={baseCurrency}
            />
          ))}
        </div>
      )}
    </div>
  );
};