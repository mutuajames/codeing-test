import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CurrencyList } from './components/CurrencyList';
import fxData from './data/fx.json';

const flags = {};
const flagModules = import.meta.glob('./assets/flags/*.png', { eager: true });

Object.entries(flagModules).forEach(([path, module]) => {
  const filename = path.split('/').pop();
  flags[filename] = module.default;
});

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    // Filter out incomplete currency entries and format the data
    const formattedCurrencies = fxData.fx
      .filter(curr => curr.exchangeRate && curr.nameI18N) // Only include currencies with complete data
      .map(curr => ({
        currency: curr.currency,
        name: curr.nameI18N,
        rate: curr.exchangeRate.middle,
        buy: curr.exchangeRate.buy,
        sell: curr.exchangeRate.sell,
        precision: curr.precision
      }));
    setCurrencies(formattedCurrencies);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      window.location.hash = encodeURIComponent(searchTerm);
    } else {
      window.location.hash = '';
    }
  }, [searchTerm]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setSearchTerm(decodeURIComponent(hash));
    }
  }, []);

  const filteredCurrencies = useMemo(() => {
    if (!searchTerm) return currencies;
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return currencies.filter(currency => 
      currency.name.toLowerCase().includes(lowerSearchTerm) ||
      currency.currency.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm, currencies]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header baseCurrency={fxData.baseCurrency} lastUpdated={fxData.lastUpdated} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CurrencyList currencies={filteredCurrencies} flags={flags} baseCurrency={fxData.baseCurrency} />
    </div>
  );
};

export default App;