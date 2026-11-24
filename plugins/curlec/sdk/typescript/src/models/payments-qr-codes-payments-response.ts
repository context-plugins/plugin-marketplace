import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity2RazorpayOrdersApiSchema,
  type Entity2RazorpayOrdersApi,
} from "./entity2-razorpay-orders-api.js";
import {
  paymentRazorpayOrdersApiInternalSchema,
  paymentRazorpayOrdersApiSchema,
  type PaymentRazorpayOrdersApi,
} from "./payment-razorpay-orders-api.js";

export type PaymentsQrCodesPaymentsResponse = {
  entity?: Entity2RazorpayOrdersApi;
  /** Number of items in the current page. */
  count?: number;
  items?: PaymentRazorpayOrdersApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentsQrCodesPaymentsResponseProperties: s.Shape<PaymentsQrCodesPaymentsResponse> = {
  entity: s.optional(s.lazy(() => entity2RazorpayOrdersApiSchema)),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => paymentRazorpayOrdersApiInternalSchema))),
};

export const paymentsQrCodesPaymentsResponseInternalSchema: Schema<PaymentsQrCodesPaymentsResponse> =
  s.object<PaymentsQrCodesPaymentsResponse>(paymentsQrCodesPaymentsResponseProperties, {
    additionalProperties: s.json(),
  });

export const paymentsQrCodesPaymentsResponseSchema: Schema<PaymentsQrCodesPaymentsResponse> = s.lazySchema(
  () =>
    s.object<PaymentsQrCodesPaymentsResponse>(
      {
        ...paymentsQrCodesPaymentsResponseProperties,
        items: s.optional(s.array(s.lazy(() => paymentRazorpayOrdersApiSchema))),
      },
      { additionalProperties: s.json() },
    ),
);
