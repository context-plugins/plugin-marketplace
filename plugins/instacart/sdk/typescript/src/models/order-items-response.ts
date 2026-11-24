import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postCheckoutOrderItemSchema, type PostCheckoutOrderItem } from "./post-checkout-order-item.js";

export type OrderItemsResponse = {
  /** The list of items in the order with their current statuses. */
  items?: PostCheckoutOrderItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderItemsResponseSchema: Schema<OrderItemsResponse> = s.object<OrderItemsResponse>(
  {
    items: s.optional(s.array(s.lazy(() => postCheckoutOrderItemSchema))),
  },
  { additionalProperties: s.json() },
);
