import React, { useState } from 'react';
import { Vehicle, Delivery } from '../types/fleet';
import MaintenanceSchedule from './MaintenanceSchedule';
import DeliveryList from './DeliveryList';

interface TabViewProps {
  vehicles: Vehicle[];
  deliveries: Delivery[];
}

export default function TabView({ vehicles, deliveries }: TabViewProps) {
  const [activeTab, setActiveTab] = useState<'maintenance' | 'deliveries'>('maintenance');

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('maintenance')}
            className={`py-4 px-6 inline-flex items-center gap-2 border-b-2 font-medium text-sm ${
              activeTab === 'maintenance'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Maintenance
          </button>
          <button
            onClick={() => setActiveTab('deliveries')}
            className={`py-4 px-6 inline-flex items-center gap-2 border-b-2 font-medium text-sm ${
              activeTab === 'deliveries'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Deliveries
          </button>
        </nav>
      </div>
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'maintenance' ? (
          <MaintenanceSchedule vehicles={vehicles} />
        ) : (
          <DeliveryList deliveries={deliveries} />
        )}
      </div>
    </div>
  );
}