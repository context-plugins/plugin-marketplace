import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentsRequest = {
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentsRequestProperties: s.Shape<PaymentsRequest> = {
  notes: s.record(s.string(), s.string()),
};

export const paymentsRequestInternalSchema: Schema<PaymentsRequest> = s.object<PaymentsRequest>(
  paymentsRequestProperties,
  { additionalProperties: s.json() },
);

export const paymentsRequestSchema: Schema<PaymentsRequest> = s.lazySchema(() =>
  s.object<PaymentsRequest>(
    {
      ...paymentsRequestProperties,
      notes: s.record(s.string(), s.string()).check(s.maxProperties(15)),
    },
    { additionalProperties: s.json() },
  ),
);
