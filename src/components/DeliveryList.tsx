import React from 'react';
import { Package, Clock, MapPin } from 'lucide-react';
import { Delivery } from '../types/fleet';
import { format } from 'date-fns';

interface DeliveryListProps {
  deliveries: Delivery[];
}

export default function DeliveryList({ deliveries }: DeliveryListProps) {
  const statusColors = {
    'pending': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
    'in-progress': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100',
    'completed': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
    'delayed': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100',
  };

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {deliveries.map((delivery) => (
        <div key={delivery.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-medium text-gray-900 dark:text-white">{delivery.customer}</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[delivery.status]}`}>
              {delivery.status.charAt(0).toUpperCase() + delivery.status.slice(1)}
            </span>
          </div>
          
          <div className="ml-7 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="truncate">{delivery.destination}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>ETA: {format(new Date(delivery.eta), 'HH:mm')}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}