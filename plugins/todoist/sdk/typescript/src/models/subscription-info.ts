import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activationMethodSchema, type ActivationMethod } from "./activation-method.js";
import { planPriceSchema, type PlanPrice } from "./plan-price.js";
import { planSchema, type Plan } from "./plan.js";
import { status1Schema, type Status1 } from "./status1.js";

export type SubscriptionInfo = {
  /**
   * Current subscription status. `none` = never subscribed, `autorenew` = active and renewing,
   * `canceled` = active until period end, `expired` = no longer active, `trial` = in free trial,
   * `trial_canceled` = trial that will not convert.
   */
  status: Status1;
  /** Plan tier the user is currently on. */
  plan: Plan;
  /** Date the current paid period ends, in `YYYY-MM-DD` format. */
  expirationDate: string | null;
  /** How the active subscription was purchased. */
  activationMethod: ActivationMethod;
  /** Price of the active plan, when known. */
  planPrice: PlanPrice | null;
  /** One-time URL to the Stripe customer portal, if available. */
  billingPortalUrl: string | null;
  /**
   * One-time URL to a Stripe portal flow for switching from monthly to annual billing, if eligible.
   */
  billingPortalSwitchToAnnualUrl: string | null;
  /** `true` when the user has a Stripe customer with a portal session. */
  hasBillingPortal: boolean;
  /** `true` when a switch-to-annual flow is available in Stripe. */
  hasBillingPortalSwitchToAnnual: boolean;
  /**
   * Stripe customer credit balance, keyed by ISO 4217 currency code, with values in the smallest
   * currency unit (e.g. cents).
   */
  invoiceCreditBalance: Record<string, number> | null;
  /** `true` when the user is eligible to switch from a legacy Pro price to the current one. */
  hasSwitchLegacyToCurrent: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionInfoSchema: Schema<SubscriptionInfo> = s.object<SubscriptionInfo>(
  {
    status: status1Schema,
    plan: planSchema,
    expirationDate: s.nullable(s.string()),
    activationMethod: activationMethodSchema,
    planPrice: s.nullable(s.lazy(() => planPriceSchema)),
    billingPortalUrl: s.nullable(s.string()),
    billingPortalSwitchToAnnualUrl: s.nullable(s.string()),
    hasBillingPortal: s.boolean(),
    hasBillingPortalSwitchToAnnual: s.boolean(),
    invoiceCreditBalance: s.nullable(s.record(s.string(), s.int())),
    hasSwitchLegacyToCurrent: s.boolean(),
    _keysMap: {
      expirationDate: "expiration_date",
      activationMethod: "activation_method",
      planPrice: "plan_price",
      billingPortalUrl: "billing_portal_url",
      billingPortalSwitchToAnnualUrl: "billing_portal_switch_to_annual_url",
      hasBillingPortal: "has_billing_portal",
      hasBillingPortalSwitchToAnnual: "has_billing_portal_switch_to_annual",
      invoiceCreditBalance: "invoice_credit_balance",
      hasSwitchLegacyToCurrent: "has_switch_legacy_to_current",
    },
  },
  { additionalProperties: s.json() },
);
