import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentRequest = {
  customerId?: string;
  amount?: number;
  effectiveDate?: Date;
  payeeName?: string;
  receiverAccountNumber?: string;
  traceNumber?: string;
  originatorRoutingNumber?: string;
  originatorAccountNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentRequestSchema: Schema<PaymentRequest> = s.object<PaymentRequest>(
  {
    customerId: s.optional(s.string()),
    amount: s.optional(s.float64()),
    effectiveDate: s.optional(s.dateTime()),
    payeeName: s.optional(s.string()),
    receiverAccountNumber: s.optional(s.string()),
    traceNumber: s.optional(s.string()),
    originatorRoutingNumber: s.optional(s.string()),
    originatorAccountNumber: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
