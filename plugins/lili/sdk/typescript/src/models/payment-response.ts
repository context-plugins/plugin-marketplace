import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

export type PaymentResponse = {
  /** The payment ID */
  paymentId?: string;
  /** The payment details */
  details?: string;
  /** The payment status */
  status?: Status1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentResponseSchema: Schema<PaymentResponse> = s.object<PaymentResponse>(
  {
    paymentId: s.optional(s.string()),
    details: s.optional(s.string()),
    status: s.optional(s.lazy(() => status1Schema)),
  },
  { additionalProperties: s.json() },
);
