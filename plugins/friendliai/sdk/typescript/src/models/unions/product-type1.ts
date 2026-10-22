import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { productTypeSchema, type ProductType } from "../product-type.js";

/**
 * When `group_by=product_type`, this field provides the product type of the grouped usage result.
 * Supported values are `model_apis` and `dedicated_endpoints`.
 */
export type ProductType1 = ProductType;

export const productType1Schema: Schema<ProductType1> = s.of<ProductType1>(
  s.union([s.lazy(() => productTypeSchema)]),
);
