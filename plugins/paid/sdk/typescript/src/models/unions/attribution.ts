import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { productByExternalIdSchema, type ProductByExternalId } from "../product-by-external-id.js";
import { productByIdSchema, type ProductById } from "../product-by-id.js";

export type Attribution = ProductById | ProductByExternalId;

export const attributionSchema: Schema<Attribution> = s.of<Attribution>(
  s.union([s.lazy(() => productByIdSchema), s.lazy(() => productByExternalIdSchema)]),
);
