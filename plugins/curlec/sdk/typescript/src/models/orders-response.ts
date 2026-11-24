import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity2RazorpayOrdersApiSchema,
  type Entity2RazorpayOrdersApi,
} from "./entity2-razorpay-orders-api.js";
import { orderInternalSchema, orderSchema, type Order } from "./order.js";

export type OrdersResponse = {
  entity?: Entity2RazorpayOrdersApi;
  /** Number of items in the current page. */
  count?: number;
  items?: Order[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ordersResponseProperties: s.Shape<OrdersResponse> = {
  entity: s.optional(s.lazy(() => entity2RazorpayOrdersApiSchema)),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => orderInternalSchema))),
};

export const ordersResponseInternalSchema: Schema<OrdersResponse> = s.object<OrdersResponse>(
  ordersResponseProperties,
  { additionalProperties: s.json() },
);

export const ordersResponseSchema: Schema<OrdersResponse> = s.lazySchema(() =>
  s.object<OrdersResponse>(
    {
      ...ordersResponseProperties,
      items: s.optional(s.array(s.lazy(() => orderSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
