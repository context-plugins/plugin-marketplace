import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Details about the replacement product suggested by the shopper. */
export type Replacement = {
  /** The name of the replacement product. */
  productName?: string;
  /** The product identifier of the replacement. */
  productId?: string;
  /** The quantity of the replacement product. */
  quantity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const replacementSchema: Schema<Replacement> = s.object<Replacement>(
  {
    productName: s.optional(s.string()),
    productId: s.optional(s.string()),
    quantity: s.optional(s.int()),
    _keysMap: {
      productName: "product_name",
      productId: "product_id",
    },
  },
  { additionalProperties: s.json() },
);
