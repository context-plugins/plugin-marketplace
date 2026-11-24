import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { productAttributeUpsertSchema, type ProductAttributeUpsert } from "./product-attribute-upsert.js";

export type UpdateProductRequest = {
  name?: string;
  description?: string | null;
  active?: boolean;
  productCode?: string | null;
  externalId?: string | null;
  metadata?: Record<string, unknown> | null;
  productAttributes?: ProductAttributeUpsert[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateProductRequestSchema: Schema<UpdateProductRequest> = s.object<UpdateProductRequest>(
  {
    name: s.optional(s.string()),
    description: s.optionalNullable(s.string()),
    active: s.optional(s.boolean()),
    productCode: s.optionalNullable(s.string()),
    externalId: s.optionalNullable(s.string()),
    metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
    productAttributes: s.optional(s.array(s.lazy(() => productAttributeUpsertSchema))),
  },
  { additionalProperties: s.json() },
);
