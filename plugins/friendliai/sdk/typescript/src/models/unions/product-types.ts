import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { productTypeSchema, type ProductType } from "../product-type.js";

/**
 * Return only usage for the specified product types. Supported fields include `model_apis`,
 * `dedicated_endpoints` and any combination of them.
 */
export type ProductTypes = ProductType[];

export const productTypesSchema: Schema<ProductTypes> = s.of<ProductTypes>(
  s.union([s.array(s.lazy(() => productTypeSchema))]),
);
