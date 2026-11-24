import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid
 * 1.5/1.6 is no longer supported. Instead, use the `billingType` field inside
 * `DeveloperMonetizationConfig` resource. Flag that specifies the billing account type, prepaid or
 * postpaid.
 */
export const PaymentFundingModel = {
  PaymentFundingModelUnspecified: "PAYMENT_FUNDING_MODEL_UNSPECIFIED",
  Prepaid: "PREPAID",
  Postpaid: "POSTPAID",
} as const;
export type PaymentFundingModel =
  | (typeof PaymentFundingModel)[keyof typeof PaymentFundingModel]
  | (string & {});

export const paymentFundingModelSchema: EnumSchema<PaymentFundingModel> =
  s.enumOf<PaymentFundingModel>(PaymentFundingModel);
