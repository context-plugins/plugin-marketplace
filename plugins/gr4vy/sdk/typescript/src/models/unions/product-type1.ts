import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { productTypeSchema, type ProductType } from "../product-type.js";

/** The product type of the cart item. */
export type ProductType1 = ProductType;

export const productType1Schema: Schema<ProductType1> = s.of<ProductType1>(
  s.union([s.lazy(() => productTypeSchema)]),
);
