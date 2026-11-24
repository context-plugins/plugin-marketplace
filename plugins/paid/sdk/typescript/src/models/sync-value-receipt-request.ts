import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  syncValueReceiptRequestProductSchema,
  type SyncValueReceiptRequestProduct,
} from "./sync-value-receipt-request-product.js";

export type SyncValueReceiptRequest = {
  /** Mutually exclusive with externalCustomerId. Exactly one is required. */
  customerId?: string;
  /** Mutually exclusive with customerId. Exactly one is required. */
  externalCustomerId?: string;
  startDate: Date;
  endDate: Date;
  /** Mutually exclusive with orderId. Provide at most one. */
  product?: SyncValueReceiptRequestProduct;
  /** Mutually exclusive with product. Provide at most one. */
  orderId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const syncValueReceiptRequestSchema: Schema<SyncValueReceiptRequest> =
  s.object<SyncValueReceiptRequest>(
    {
      customerId: s.optional(s.string()),
      externalCustomerId: s.optional(s.string()),
      startDate: s.dateTime(),
      endDate: s.dateTime(),
      product: s.optional(s.lazy(() => syncValueReceiptRequestProductSchema)),
      orderId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
