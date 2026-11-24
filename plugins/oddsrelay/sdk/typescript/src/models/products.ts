import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Products = {
  Ok: "ok",
  Slow: "slow",
  Stale: "stale",
} as const;
export type Products = (typeof Products)[keyof typeof Products] | (string & {});

export const productsSchema: EnumSchema<Products> = s.enumOf<Products>(Products);
