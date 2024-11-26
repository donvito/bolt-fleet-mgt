import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Vehicle } from '../types/fleet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface VehicleMapProps {
  vehicles: Vehicle[];
}

export default function VehicleMap({ vehicles }: VehicleMapProps) {
  const center = vehicles.reduce(
    (acc, vehicle) => ({
      lat: acc.lat + vehicle.location.lat / vehicles.length,
      lng: acc.lng + vehicle.location.lng / vehicles.length,
    }),
    { lat: 0, lng: 0 }
  );

  const statusColors = {
    active: 'text-green-600 dark:text-green-400',
    maintenance: 'text-yellow-600 dark:text-yellow-400',
    inactive: 'text-red-600 dark:text-red-400',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Vehicle Locations</h2>
      <div className="h-[400px] rounded-lg overflow-hidden">
        <MapContainer
          center={[center.lat, center.lng]}
          zoom={12}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {vehicles.map((vehicle) => (
            <Marker
              key={vehicle.id}
              position={[vehicle.location.lat, vehicle.location.lng]}
            >
              <Popup>
                <div className="p-2 dark:bg-gray-800 dark:text-white">
                  <h3 className="font-semibold">{vehicle.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Driver: {vehicle.driver}</p>
                  <p className={`text-sm font-medium ${statusColors[vehicle.status]}`}>
                    {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}