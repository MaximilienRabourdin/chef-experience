import { useState } from 'react';
import { PlayCircleIcon } from '@heroicons/react/20/solid';
import { ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon } from '@heroicons/react/24/outline';

const mainMenuItems = [
  { name: 'Entrée', icon: ChartPieIcon, subMenu: ['Salade', 'Soupe', 'Crevettes'] },
  { name: 'Plat', icon: CursorArrowRaysIcon, subMenu: ['Poulet', 'Poisson', 'Pâtes'] },
  { name: 'Dessert', icon: FingerPrintIcon, subMenu: ['Tarte', 'Glace', 'Fruits'] },
];

const callsToAction = [
  { name: 'Watch demo', icon: PlayCircleIcon },
  // Add more calls to action as needed
];

export default function Example() {
  const [selectedCategory, setSelectedCategory] = useState(mainMenuItems[0]);
  const [showFlyoutMenu, setShowFlyoutMenu] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left Side - Vertical Navigation */}
      <div className="w-1/6 bg-gray-800 text-white p-4">
        {mainMenuItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-x-2 p-2 cursor-pointer ${
              selectedCategory === item ? 'bg-gray-700' : ''
            }`}
            onClick={() => {
              setSelectedCategory(item);
              setShowFlyoutMenu(true);
            }}
          >
            <item.icon className="h-6 w-6" aria-hidden="true" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Flyout Menu */}
      {showFlyoutMenu && (
        <div className="w-1/6 bg-gray-200 p-4">
          {selectedCategory.subMenu.map((subItem) => (
            <div
              key={subItem}
              className="flex items-center gap-x-2 p-2 cursor-pointer"
            >
              <span>{subItem}</span>
            </div>
          ))}
        </div>
      )}

      {/* Right Side - Content */}
      <div className="flex-grow p-4">
        <h2 className="text-2xl font-bold mb-4">{selectedCategory.name}</h2>
        <p>Content for {selectedCategory.name}</p>

        {/* Add your video component or image display here */}
        
        <div className="mt-8 space-x-4">
          {callsToAction.map((action) => (
            <a
              key={action.name}
              href="#"
              className="flex items-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
            >
              <action.icon className="h-5 w-5 flex-none" aria-hidden="true" />
              {action.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
