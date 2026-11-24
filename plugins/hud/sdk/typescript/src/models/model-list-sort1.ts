import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Row order. Signed-out callers cannot sort by `usage`. */
export const ModelListSort1 = {
  Provider: "provider",
  Usage: "usage",
  Recent: "recent",
  Name: "name",
  PriceLow: "price_low",
  PriceHigh: "price_high",
  Speed: "speed",
} as const;
export type ModelListSort1 = (typeof ModelListSort1)[keyof typeof ModelListSort1] | (string & {});

export const modelListSort1Schema: EnumSchema<ModelListSort1> = s.enumOf<ModelListSort1>(ModelListSort1);
