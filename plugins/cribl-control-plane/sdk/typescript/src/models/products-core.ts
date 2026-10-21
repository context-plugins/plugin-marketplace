import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductsCore = {
  Stream: "stream",
  Edge: "edge",
  Outpost: "outpost",
} as const;
export type ProductsCore = (typeof ProductsCore)[keyof typeof ProductsCore] | (string & {});

export const productsCoreSchema: EnumSchema<ProductsCore> = s.enumOf<ProductsCore>(ProductsCore);
