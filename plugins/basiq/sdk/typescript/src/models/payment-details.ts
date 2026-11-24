import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bpaySchema, type Bpay } from "./bpay.js";

export type PaymentDetails = {
  bpay?: Bpay;
  /**
   * 6 Digit APCA number for the initiating institution. The field is fixed-width and padded with
   * leading zeros if applicable.
   */
  apcaNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentDetailsSchema: Schema<PaymentDetails> = s.object<PaymentDetails>(
  {
    bpay: s.optional(s.lazy(() => bpaySchema)),
    apcaNumber: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
