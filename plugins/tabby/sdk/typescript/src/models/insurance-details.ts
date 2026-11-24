import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clientSchema, type Client } from "./client.js";
import { paymentHistorySimpleSchema, type PaymentHistorySimple } from "./payment-history-simple.js";
import { policyDetailsSchema, type PolicyDetails } from "./policy-details.js";

export type InsuranceDetails = {
  /** Information about insurance */
  policyDetails: PolicyDetails;
  client: Client;
  paymentHistorySimple?: PaymentHistorySimple;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insuranceDetailsSchema: Schema<InsuranceDetails> = s.object<InsuranceDetails>(
  {
    policyDetails: policyDetailsSchema,
    client: clientSchema,
    paymentHistorySimple: s.optional(s.lazy(() => paymentHistorySimpleSchema)),
    _keysMap: {
      policyDetails: "policy_details",
      paymentHistorySimple: "payment_history_simple",
    },
  },
  { additionalProperties: s.json() },
);
