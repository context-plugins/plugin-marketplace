import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductsBase = {
  Stream: "stream",
  Edge: "edge",
} as const;
export type ProductsBase = (typeof ProductsBase)[keyof typeof ProductsBase] | (string & {});

export const productsBaseSchema: EnumSchema<ProductsBase> = s.enumOf<ProductsBase>(ProductsBase);
