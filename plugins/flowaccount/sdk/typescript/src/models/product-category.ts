import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProductCategory = {
  id?: number;
  name?: string | null;
  isDelete?: boolean;
  isShare?: boolean;
  resetTransactionId?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productCategorySchema: Schema<ProductCategory> = s.object<ProductCategory>(
  {
    id: s.optional(s.int()),
    name: s.optionalNullable(s.string()),
    isDelete: s.optional(s.boolean()),
    isShare: s.optional(s.boolean()),
    resetTransactionId: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
