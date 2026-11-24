import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditUsageSchema, type CreditUsage } from "./credit-usage.js";

export type BillingCreditUsage = {
  /** Billing period in YYYYMM format */
  period?: string;
  /** Array of consumptions, each detailing an endpoint use and its credit usage */
  usage?: CreditUsage[];
  /** Total of requests made */
  requests?: number;
  /** Total of credits used */
  credits?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billingCreditUsageSchema: Schema<BillingCreditUsage> = s.object<BillingCreditUsage>(
  {
    period: s.optional(s.string()),
    usage: s.optional(s.array(s.lazy(() => creditUsageSchema))),
    requests: s.optional(s.int()),
    credits: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
