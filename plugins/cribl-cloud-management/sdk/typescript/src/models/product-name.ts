import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Product name. */
export const ProductName = {
  Edge: "edge",
  Search: "search",
  Stream: "stream",
  Lake: "lake",
  Insights: "insights",
} as const;
export type ProductName = (typeof ProductName)[keyof typeof ProductName] | (string & {});

export const productNameSchema: EnumSchema<ProductName> = s.enumOf<ProductName>(ProductName);
