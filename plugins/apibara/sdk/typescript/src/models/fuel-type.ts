import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FuelType = {
  Diesel: "Diesel",
  Hybrid: "Hybrid",
  Electric: "Electric",
  Flexible: "Flexible",
  Gasoline: "Gasoline",
  AllOthers: "All others",
} as const;
export type FuelType = (typeof FuelType)[keyof typeof FuelType] | (string & {});

export const fuelTypeSchema: EnumSchema<FuelType> = s.enumOf<FuelType>(FuelType);
