import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingCycle1Schema, type BillingCycle1 } from "./billing-cycle1.js";
import { taxBehaviorSchema, type TaxBehavior } from "./tax-behavior.js";

export type PlanPrice = {
  /** Formatted plan price amount. */
  amount: string;
  /** Raw plan price amount in the currency's smallest unit. */
  rawAmount: number;
  /** ISO 4217 currency code. */
  currency: string;
  /** Billing cycle for the plan price, or `null` if unknown. */
  billingCycle: BillingCycle1 | null;
  /** Tax behavior for the plan price. */
  taxBehavior: TaxBehavior;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planPriceSchema: Schema<PlanPrice> = s.object<PlanPrice>(
  {
    amount: s.string(),
    rawAmount: s.float64(),
    currency: s.string(),
    billingCycle: s.nullable(s.lazy(() => billingCycle1Schema)),
    taxBehavior: taxBehaviorSchema,
    _keysMap: {
      rawAmount: "raw_amount",
      billingCycle: "billing_cycle",
      taxBehavior: "tax_behavior",
    },
  },
  { additionalProperties: s.json() },
);
