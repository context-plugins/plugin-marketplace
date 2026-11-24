import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Payment = {
  method?: string;
  currency?: string;
  amount?: number;
  paymentReferenceId?: string;
  financierData?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentSchema: Schema<Payment> = s.object<Payment>(
  {
    method: s.optional(s.string()),
    currency: s.optional(s.string()),
    amount: s.optional(s.int()),
    paymentReferenceId: s.optional(s.string()),
    financierData: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      paymentReferenceId: "payment_reference_id",
      financierData: "financier_data",
    },
  },
  { additionalProperties: s.json() },
);
