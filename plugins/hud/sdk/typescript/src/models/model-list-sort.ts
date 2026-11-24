import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ModelListSort = {
  Provider: "provider",
  Usage: "usage",
  Recent: "recent",
  Name: "name",
  PriceLow: "price_low",
  PriceHigh: "price_high",
  Speed: "speed",
} as const;
export type ModelListSort = (typeof ModelListSort)[keyof typeof ModelListSort] | (string & {});

export const modelListSortSchema: EnumSchema<ModelListSort> = s.enumOf<ModelListSort>(ModelListSort);
