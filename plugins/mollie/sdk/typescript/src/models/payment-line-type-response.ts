import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of product purchased. For example, a physical or a digital product.
 *
 * The `tip` payment line type is not available when creating a payment.
 */
export const PaymentLineTypeResponse = {
  Physical: "physical",
  Digital: "digital",
  ShippingFee: "shipping_fee",
  Discount: "discount",
  StoreCredit: "store_credit",
  GiftCard: "gift_card",
  Surcharge: "surcharge",
  Tip: "tip",
} as const;
export type PaymentLineTypeResponse =
  | (typeof PaymentLineTypeResponse)[keyof typeof PaymentLineTypeResponse]
  | (string & {});

export const paymentLineTypeResponseSchema: EnumSchema<PaymentLineTypeResponse> =
  s.enumOf<PaymentLineTypeResponse>(PaymentLineTypeResponse);
