import React from 'react';
import { Menu, Bell, User } from 'lucide-react';
import VehicleCard from './components/VehicleCard';
import TabView from './components/TabView';
import DashboardStats from './components/DashboardStats';
import VehicleMap from './components/VehicleMap';
import ThemeToggle from './components/ThemeToggle';
import DashboardHeader from './components/DashboardHeader';
import { vehicles, deliveries } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Left Sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-80 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 overflow-y-auto">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Vehicle Fleet</h2>
          <div className="space-y-4">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-400 lg:hidden" />
                <h1 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">Fleet Management Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <Bell className="h-6 w-6" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <User className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <DashboardHeader vehicles={vehicles} deliveries={deliveries} />
            <DashboardStats vehicles={vehicles} />
            <div className="mt-8">
              <VehicleMap vehicles={vehicles} />
            </div>
          </div>
        </main>
      </div>

      {/* Right Sidebar */}
      <aside className="hidden lg:flex lg:flex-col w-96 border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
        <TabView vehicles={vehicles} deliveries={deliveries} />
      </aside>
    </div>
  );
}

export default App;