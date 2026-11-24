import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentsQrCodesRequest1 = {
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentsQrCodesRequest1Properties: s.Shape<PaymentsQrCodesRequest1> = {
  notes: s.record(s.string(), s.string()),
};

export const paymentsQrCodesRequest1InternalSchema: Schema<PaymentsQrCodesRequest1> =
  s.object<PaymentsQrCodesRequest1>(paymentsQrCodesRequest1Properties, { additionalProperties: s.json() });

export const paymentsQrCodesRequest1Schema: Schema<PaymentsQrCodesRequest1> = s.lazySchema(() =>
  s.object<PaymentsQrCodesRequest1>(
    {
      ...paymentsQrCodesRequest1Properties,
      notes: s.record(s.string(), s.string()).check(s.maxProperties(15)),
    },
    { additionalProperties: s.json() },
  ),
);
