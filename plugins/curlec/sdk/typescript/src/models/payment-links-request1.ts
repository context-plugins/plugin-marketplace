import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentLinksRequest1 = {
  /** Add or update unique reference number. Max 40 characters. */
  referenceId?: string;
  /** Updated expiry Unix timestamp. */
  expireBy?: number;
  reminderEnable?: boolean;
  acceptPartial?: boolean;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentLinksRequest1Properties: s.Shape<PaymentLinksRequest1> = {
  referenceId: s.optional(s.string()),
  expireBy: s.optional(s.int()),
  reminderEnable: s.optional(s.boolean()),
  acceptPartial: s.optional(s.boolean()),
  notes: s.optional(s.record(s.string(), s.string())),
  _keysMap: {
    referenceId: "reference_id",
    expireBy: "expire_by",
    reminderEnable: "reminder_enable",
    acceptPartial: "accept_partial",
  },
};

export const paymentLinksRequest1InternalSchema: Schema<PaymentLinksRequest1> =
  s.object<PaymentLinksRequest1>(paymentLinksRequest1Properties, { additionalProperties: s.json() });

export const paymentLinksRequest1Schema: Schema<PaymentLinksRequest1> = s.lazySchema(() =>
  s.object<PaymentLinksRequest1>(
    {
      ...paymentLinksRequest1Properties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
