
import React, { useState, useEffect, useCallback } from 'react';
import { ScreenType, LoopItem } from './types';
import { INITIAL_LOOP_ITEMS } from './constants';
import ZmanimBoard from './components/ZmanimBoard';
import CarouselScreen from './components/CarouselScreen';
import SettingsPanel from './components/SettingsPanel';

const App: React.FC = () => {
  const [items, setItems] = useState<LoopItem[]>(() => {
    const saved = localStorage.getItem('synagogue_board_items');
    return saved ? JSON.parse(saved) : INITIAL_LOOP_ITEMS;
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  // Filter active items for the loop
  const activeItems = items.filter(item => item.isActive);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % activeItems.length);
  }, [activeItems.length]);

  useEffect(() => {
    if (activeItems.length === 0 || showSettings) return;

    const currentItem = activeItems[currentIndex];
    const timer = setTimeout(goToNext, (currentItem?.duration || 15) * 1000);

    return () => clearTimeout(timer);
  }, [currentIndex, activeItems, goToNext, showSettings]);

  const handleSaveItems = (newItems: LoopItem[]) => {
    setItems(newItems);
    localStorage.setItem('synagogue_board_items', JSON.stringify(newItems));
    setCurrentIndex(0); // Reset loop when settings saved
  };

  if (activeItems.length === 0) {
    return (
      <div className="h-screen bg-[#05060f] text-white flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">אין עמודים פעילים להצגה</h1>
        <button 
          onClick={() => setShowSettings(true)}
          className="bg-yellow-600 px-8 py-3 rounded-full text-black font-bold"
        >
          פתח הגדרות
        </button>
        {showSettings && (
          <SettingsPanel 
            currentItems={items} 
            onClose={() => setShowSettings(false)} 
            onSave={handleSaveItems} 
          />
        )}
      </div>
    );
  }

  const currentItem = activeItems[currentIndex];

  return (
    <div className="w-full h-screen overflow-hidden bg-black select-none cursor-none">
      <div className="w-full h-full transition-all duration-1000">
        {currentItem.type === ScreenType.MAIN ? (
          <ZmanimBoard onOpenSettings={() => setShowSettings(true)} />
        ) : (
          <CarouselScreen item={currentItem} />
        )}
      </div>

      {showSettings && (
        <div className="cursor-default">
          <SettingsPanel 
            currentItems={items} 
            onClose={() => setShowSettings(false)} 
            onSave={handleSaveItems} 
          />
        </div>
      )}

      {/* Hidden button for touch devices to open settings */}
      <div 
        className="fixed top-0 left-0 w-20 h-20 opacity-0 cursor-default" 
        onClick={() => setShowSettings(true)}
      />
    </div>
  );
};

export default App;
