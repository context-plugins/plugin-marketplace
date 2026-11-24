import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity1RazorpayDisputesApiSchema,
  type Entity1RazorpayDisputesApi,
} from "./entity1-razorpay-disputes-api.js";
import {
  paymentRazorpayPaymentsApiInternalSchema,
  paymentRazorpayPaymentsApiSchema,
  type PaymentRazorpayPaymentsApi,
} from "./payment-razorpay-payments-api.js";

export type PaymentsResponse = {
  entity?: Entity1RazorpayDisputesApi;
  /** Number of items in the current page. */
  count?: number;
  items?: PaymentRazorpayPaymentsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentsResponseProperties: s.Shape<PaymentsResponse> = {
  entity: s.optional(s.lazy(() => entity1RazorpayDisputesApiSchema)),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => paymentRazorpayPaymentsApiInternalSchema))),
};

export const paymentsResponseInternalSchema: Schema<PaymentsResponse> = s.object<PaymentsResponse>(
  paymentsResponseProperties,
  { additionalProperties: s.json() },
);

export const paymentsResponseSchema: Schema<PaymentsResponse> = s.lazySchema(() =>
  s.object<PaymentsResponse>(
    {
      ...paymentsResponseProperties,
      items: s.optional(s.array(s.lazy(() => paymentRazorpayPaymentsApiSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
