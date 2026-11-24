import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ProductCreateType, productCreateTypeSchema } from "./product-create-type.js";

export type ProductCreate = {
  name: string;
  description?: string;
  externalId?: string;
  /** @default ProductCreateType.Product */
  type?: ProductCreateType;
  /** @default false */
  active?: boolean;
  productCode?: string;
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productCreateSchema: Schema<ProductCreate> = s.object<ProductCreate>(
  {
    name: s.string(),
    description: s.optional(s.string()),
    externalId: s.optional(s.string()),
    type: s.defaulted(productCreateTypeSchema, ProductCreateType.Product),
    active: s.defaulted(s.boolean(), false),
    productCode: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
