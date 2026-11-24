import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 1 = NonStockProduct 3 = SparepartProduct 5 = SampleProduct 7 = FreemiumProduct 9 = SupplyProduct
 * 11 = OthersProduct
 */
export const ProductNonInventoryType = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
  _11: 11,
} as const;
export type ProductNonInventoryType =
  | (typeof ProductNonInventoryType)[keyof typeof ProductNonInventoryType]
  | (number & {});

export const productNonInventoryTypeSchema: EnumSchema<ProductNonInventoryType> =
  s.enumOf<ProductNonInventoryType>(ProductNonInventoryType);
