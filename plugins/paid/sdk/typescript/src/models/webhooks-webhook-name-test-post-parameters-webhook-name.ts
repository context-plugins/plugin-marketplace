import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WebhooksWebhookNameTestPostParametersWebhookName = {
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
export type WebhooksWebhookNameTestPostParametersWebhookName =
  | (typeof WebhooksWebhookNameTestPostParametersWebhookName)[keyof typeof WebhooksWebhookNameTestPostParametersWebhookName]
  | (string & {});

export const webhooksWebhookNameTestPostParametersWebhookNameSchema: EnumSchema<WebhooksWebhookNameTestPostParametersWebhookName> =
  s.enumOf<WebhooksWebhookNameTestPostParametersWebhookName>(
    WebhooksWebhookNameTestPostParametersWebhookName,
  );
