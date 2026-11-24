import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { productByExternalIdSchema, type ProductByExternalId } from "../product-by-external-id.js";
import { productByIdSchema, type ProductById } from "../product-by-id.js";

export type ProductAttribution = ProductById | ProductByExternalId;

export const productAttributionSchema: Schema<ProductAttribution> = s.of<ProductAttribution>(
  s.union([s.lazy(() => productByIdSchema), s.lazy(() => productByExternalIdSchema)]),
);
