import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Speed, speedSchema } from "./speed.js";

export type PaymentsRefundRequest = {
  /** Refund amount in paise. Omit to refund the full payment amount. */
  amount?: number;
  /**
   * normal: 5-7 business days. optimum: instant if available, falls back to normal.
   *
   * @default Speed.Normal
   */
  speed?: Speed;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Your internal reference identifier. */
  receipt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentsRefundRequestProperties: s.Shape<PaymentsRefundRequest> = {
  amount: s.optional(s.int()),
  speed: s.defaulted(speedSchema, Speed.Normal),
  notes: s.optional(s.record(s.string(), s.string())),
  receipt: s.optional(s.string()),
};

export const paymentsRefundRequestInternalSchema: Schema<PaymentsRefundRequest> =
  s.object<PaymentsRefundRequest>(paymentsRefundRequestProperties, { additionalProperties: s.json() });

export const paymentsRefundRequestSchema: Schema<PaymentsRefundRequest> = s.lazySchema(() =>
  s.object<PaymentsRefundRequest>(
    {
      ...paymentsRefundRequestProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
