import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessType = {
  Ecommerce: "ecommerce",
  Retail: "retail",
  FoodAndBeverage: "food_and_beverage",
  Events: "events",
} as const;
export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType] | (string & {});

export const businessTypeSchema: EnumSchema<BusinessType> = s.enumOf<BusinessType>(BusinessType);
