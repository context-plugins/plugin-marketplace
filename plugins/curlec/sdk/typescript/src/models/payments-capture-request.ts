import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentsCaptureRequest = {
  /** Amount to capture in paise. Must equal authorized amount unless partial capture is enabled. */
  amount: number;
  /** @default "INR" */
  currency?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentsCaptureRequestSchema: Schema<PaymentsCaptureRequest> = s.object<PaymentsCaptureRequest>(
  {
    amount: s.int(),
    currency: s.defaulted(s.string(), "INR"),
  },
  { additionalProperties: s.json() },
);
