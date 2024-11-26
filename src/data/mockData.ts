import { Vehicle, Delivery } from '../types/fleet';

export const vehicles: Vehicle[] = [
  {
    id: 'v1',
    name: 'Truck FL-501',
    type: 'truck',
    status: 'active',
    location: {
      lat: 40.7589,
      lng: -73.9851,
      lastUpdated: new Date(Date.now() - 5 * 60000).toISOString() // 5 minutes ago
    },
    driver: 'Robert Martinez',
    fuelLevel: 75,
    nextMaintenance: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
    mileage: 127543
  },
  {
    id: 'v2',
    name: 'Van FL-238',
    type: 'van',
    status: 'maintenance',
    location: {
      lat: 40.7128,
      lng: -74.0060,
      lastUpdated: new Date(Date.now() - 120 * 60000).toISOString() // 2 hours ago
    },
    driver: 'Sarah Chen',
    fuelLevel: 45,
    nextMaintenance: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(), // tomorrow
    mileage: 89234
  },
  {
    id: 'v3',
    name: 'Car FL-157',
    type: 'car',
    status: 'active',
    location: {
      lat: 40.7549,
      lng: -73.9840,
      lastUpdated: new Date(Date.now() - 2 * 60000).toISOString() // 2 minutes ago
    },
    driver: 'Michael O\'Connor',
    fuelLevel: 90,
    nextMaintenance: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
    mileage: 45123
  },
  {
    id: 'v4',
    name: 'Truck FL-502',
    type: 'truck',
    status: 'active',
    location: {
      lat: 40.7282,
      lng: -73.9942,
      lastUpdated: new Date(Date.now() - 8 * 60000).toISOString() // 8 minutes ago
    },
    driver: 'David Williams',
    fuelLevel: 65,
    nextMaintenance: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
    mileage: 156789
  },
  {
    id: 'v5',
    name: 'Van FL-239',
    type: 'van',
    status: 'inactive',
    location: {
      lat: 40.7549,
      lng: -73.9789,
      lastUpdated: new Date(Date.now() - 360 * 60000).toISOString() // 6 hours ago
    },
    driver: 'Emily Rodriguez',
    fuelLevel: 15,
    nextMaintenance: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days from now
    mileage: 67890
  }
];

export const deliveries: Delivery[] = [
  {
    id: 'd1',
    vehicleId: 'v1',
    status: 'in-progress',
    destination: '350 5th Ave, New York, NY 10118',
    eta: new Date(Date.now() + 25 * 60000).toISOString(), // 25 minutes from now
    customer: 'Empire State Logistics'
  },
  {
    id: 'd2',
    vehicleId: 'v3',
    status: 'pending',
    destination: '30 Rockefeller Plaza, New York, NY 10112',
    eta: new Date(Date.now() + 45 * 60000).toISOString(), // 45 minutes from now
    customer: 'Rockefeller Center Co.'
  },
  {
    id: 'd3',
    vehicleId: 'v4',
    status: 'in-progress',
    destination: '200 Park Ave, New York, NY 10166',
    eta: new Date(Date.now() + 15 * 60000).toISOString(), // 15 minutes from now
    customer: 'MetLife Building'
  },
  {
    id: 'd4',
    vehicleId: 'v1',
    status: 'completed',
    destination: '75 9th Ave, New York, NY 10011',
    eta: new Date(Date.now() - 30 * 60000).toISOString(), // 30 minutes ago
    customer: 'Chelsea Market'
  },
  {
    id: 'd5',
    vehicleId: 'v4',
    status: 'delayed',
    destination: '385 Broadway, New York, NY 10013',
    eta: new Date(Date.now() + 60 * 60000).toISOString(), // 1 hour from now
    customer: 'Broadway Commerce'
  }
];