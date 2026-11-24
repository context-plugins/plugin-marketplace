import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  methodRazorpayPaymentLinksApiSchema,
  type MethodRazorpayPaymentLinksApi,
} from "./method-razorpay-payment-links-api.js";
import {
  status1RazorpayPaymentLinksApiSchema,
  type Status1RazorpayPaymentLinksApi,
} from "./status1-razorpay-payment-links-api.js";

export type PaymentRazorpayPaymentLinksApi = {
  amount?: number;
  paymentId?: string;
  plinkId?: string;
  method?: MethodRazorpayPaymentLinksApi;
  status?: Status1RazorpayPaymentLinksApi;
  createdAt?: number;
  updatedAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentRazorpayPaymentLinksApiSchema: Schema<PaymentRazorpayPaymentLinksApi> =
  s.object<PaymentRazorpayPaymentLinksApi>(
    {
      amount: s.optional(s.int()),
      paymentId: s.optional(s.string()),
      plinkId: s.optional(s.string()),
      method: s.optional(s.lazy(() => methodRazorpayPaymentLinksApiSchema)),
      status: s.optional(s.lazy(() => status1RazorpayPaymentLinksApiSchema)),
      createdAt: s.optional(s.int()),
      updatedAt: s.optional(s.int()),
      _keysMap: {
        paymentId: "payment_id",
        plinkId: "plink_id",
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    },
    { additionalProperties: s.json() },
  );
