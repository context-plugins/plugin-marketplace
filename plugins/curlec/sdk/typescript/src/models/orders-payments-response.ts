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

export type OrdersPaymentsResponse = {
  entity?: Entity2RazorpayOrdersApi;
  /** Number of items in the current page. */
  count?: number;
  items?: PaymentRazorpayOrdersApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ordersPaymentsResponseProperties: s.Shape<OrdersPaymentsResponse> = {
  entity: s.optional(s.lazy(() => entity2RazorpayOrdersApiSchema)),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => paymentRazorpayOrdersApiInternalSchema))),
};

export const ordersPaymentsResponseInternalSchema: Schema<OrdersPaymentsResponse> =
  s.object<OrdersPaymentsResponse>(ordersPaymentsResponseProperties, { additionalProperties: s.json() });

export const ordersPaymentsResponseSchema: Schema<OrdersPaymentsResponse> = s.lazySchema(() =>
  s.object<OrdersPaymentsResponse>(
    {
      ...ordersPaymentsResponseProperties,
      items: s.optional(s.array(s.lazy(() => paymentRazorpayOrdersApiSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
