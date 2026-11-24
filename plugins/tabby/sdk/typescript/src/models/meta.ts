import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Merchant-defined data about the payment. This field is a key-value map. The example properties
 * provided below.
 */
export type Meta = {
  customer?: string | null;
  orderId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaSchema: Schema<Meta> = s.object<Meta>(
  {
    customer: s.optionalNullable(s.string()),
    orderId: s.optionalNullable(s.string()),
    _keysMap: {
      orderId: "order_id",
    },
  },
  { additionalProperties: s.json() },
);
