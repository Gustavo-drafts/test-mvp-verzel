import { NextRequest, NextResponse } from "next/server"
import { createVehicle } from "./db"

export default async function handler(
  req: NextRequest,
  res: NextResponse
) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body)
    await createVehicle(data)
    return res.status(200).json({ message: "Success" }) 
  }
  return res.status(200).json({ message: "Other" }) 
}