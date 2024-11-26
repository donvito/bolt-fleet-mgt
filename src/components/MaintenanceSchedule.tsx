import React from 'react';
import { Wrench, AlertCircle } from 'lucide-react';
import { Vehicle } from '../types/fleet';
import { format, isBefore } from 'date-fns';

interface MaintenanceScheduleProps {
  vehicles: Vehicle[];
}

export default function MaintenanceSchedule({ vehicles }: MaintenanceScheduleProps) {
  const sortedVehicles = [...vehicles].sort((a, b) => 
    new Date(a.nextMaintenance).getTime() - new Date(b.nextMaintenance).getTime()
  );

  const isUpcoming = (date: string) => {
    const maintenanceDate = new Date(date);
    const now = new Date();
    const sevenDaysFromNow = new Date();
    sevenDaysFromNow.setDate(now.getDate() + 7);
    return isBefore(maintenanceDate, sevenDaysFromNow);
  };

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {sortedVehicles.map((vehicle) => {
        const upcoming = isUpcoming(vehicle.nextMaintenance);
        return (
          <div key={vehicle.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  upcoming 
                    ? 'bg-yellow-100 dark:bg-yellow-900' 
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  {upcoming ? (
                    <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  ) : (
                    <Wrench className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{vehicle.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {format(new Date(vehicle.nextMaintenance), 'MMM dd, yyyy')}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mileage: {vehicle.mileage.toLocaleString()} mi
                </p>
                <p className={`text-sm ${
                  vehicle.status === 'maintenance'
                    ? 'text-yellow-600 dark:text-yellow-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {vehicle.status === 'maintenance' ? 'In Service' : 'Scheduled'}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}