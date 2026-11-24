import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Mutually exclusive with orderId. Provide at most one. */
export type SyncValueReceiptRequestProduct = {
  productId: string;
  currency?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const syncValueReceiptRequestProductSchema: Schema<SyncValueReceiptRequestProduct> =
  s.object<SyncValueReceiptRequestProduct>(
    {
      productId: s.string(),
      currency: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
