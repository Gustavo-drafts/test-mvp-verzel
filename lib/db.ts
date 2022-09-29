import { prisma } from "./prisma";


export interface Vehicle {
  id: number;
  name: string;
  brand: string;
  model: string;
  imageUrl: string;
}

export async function getAllVehicles() {
  // const data = await prisma.vehicle.findMany();
  // return data;
}

export async function createVehicle({ name, brand, model, imageUrl }: Vehicle) {
  await prisma.vehicle.create({
    data: {
      name,
      brand,
      model,
      imageUrl
    }
  })
}