import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WebhookUpdateResponseName = {
  BillingInvoiceCreated: "billing-invoice-created",
  BillingInvoicePaid: "billing-invoice-paid",
  BillingInvoicePosted: "billing-invoice-posted",
  BillingCheckoutCreated: "billing-checkout-created",
  BillingCheckoutCompleted: "billing-checkout-completed",
  BillingCheckoutExpired: "billing-checkout-expired",
  BillingPaymentSucceeded: "billing-payment-succeeded",
  BillingPaymentFailed: "billing-payment-failed",
  BillingCreditsDepleted: "billing-credits-depleted",
  BillingOverageIncurred: "billing-overage-incurred",
} as const;
export type WebhookUpdateResponseName =
  | (typeof WebhookUpdateResponseName)[keyof typeof WebhookUpdateResponseName]
  | (string & {});

export const webhookUpdateResponseNameSchema: EnumSchema<WebhookUpdateResponseName> =
  s.enumOf<WebhookUpdateResponseName>(WebhookUpdateResponseName);
