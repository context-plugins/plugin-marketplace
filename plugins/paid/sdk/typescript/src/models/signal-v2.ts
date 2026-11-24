import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * V2 signal schema with clean field names. IMPORTANT: Exactly one customer ID field (customer_id OR
 * external_customer_id) and exactly one product ID field (product_id OR external_product_id) must
 * be provided per signal.
 */
export type SignalV2 = {
  /** The name of the event being tracked */
  eventName: string;
  /**
   * Paid's display ID for the product (e.g., prod_abc123). Cannot be used with external_product_id.
   * Either this or external_product_id is required.
   */
  productId?: string;
  /**
   * Your system's product ID. Cannot be used with product_id. Either this or product_id is
   * required.
   */
  externalProductId?: string;
  /**
   * Paid's display ID for the customer (e.g., cus_xyz789). Cannot be used with
   * external_customer_id. Either this or external_customer_id is required.
   */
  customerId?: string;
  /**
   * Your system's customer ID. Cannot be used with customer_id. Either this or customer_id is
   * required.
   */
  externalCustomerId?: string;
  /** Optional additional data/metadata for the signal */
  data?: Record<string, unknown>;
  /**
   * A unique key to ensure idempotent signal processing. If a signal with the same idempotency key
   * has already been processed, the entire batch will be rejected with a 409 Conflict error.
   */
  idempotencyKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalV2Schema: Schema<SignalV2> = s.object<SignalV2>(
  {
    eventName: s.string(),
    productId: s.optional(s.string()),
    externalProductId: s.optional(s.string()),
    customerId: s.optional(s.string()),
    externalCustomerId: s.optional(s.string()),
    data: s.optional(s.record(s.string(), s.unknown())),
    idempotencyKey: s.optional(s.string()),
    _keysMap: {
      eventName: "event_name",
      productId: "product_id",
      externalProductId: "external_product_id",
      customerId: "customer_id",
      externalCustomerId: "external_customer_id",
      idempotencyKey: "idempotency_key",
    },
  },
  { additionalProperties: s.json() },
);
