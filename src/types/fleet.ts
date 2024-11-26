export interface Vehicle {
  id: string;
  name: string;
  type: 'truck' | 'van' | 'car';
  status: 'active' | 'maintenance' | 'inactive';
  location: {
    lat: number;
    lng: number;
    lastUpdated: string;
  };
  driver: string;
  fuelLevel: number;
  nextMaintenance: string;
  mileage: number;
}

export interface Delivery {
  id: string;
  vehicleId: string;
  status: 'pending' | 'in-progress' | 'completed' | 'delayed';
  destination: string;
  eta: string;
  customer: string;
}