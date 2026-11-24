import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProductById = {
  /** The Paid product ID */
  productId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productByIdSchema: Schema<ProductById> = s.object<ProductById>(
  {
    productId: s.string(),
  },
  { additionalProperties: s.json() },
);
