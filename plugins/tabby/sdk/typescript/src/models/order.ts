import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderItemInternalSchema, orderItemSchema, type OrderItem } from "./order-item.js";

export type Order = {
  /** Merchant-assigned order number. */
  referenceId: string;
  /**
   * Date and time the order was last updated, in UTC, and displayed in ISO 8601 datetime format.
   */
  updatedAt?: Date;
  /** Total tax for the order. @default "0.00" */
  taxAmount?: string;
  /** Total shipping cost for the order. @default "0.00" */
  shippingAmount?: string;
  /**
   * Total discount for the order. Should be positive or zero. Shows up on Tabby App for the
   * Customer's convenience.
   *
   * @default "0.00"
   */
  discountAmount?: string;
  /** Array of objects representing the order items in this payment. */
  items: OrderItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const orderProperties: s.Shape<Order> = {
  referenceId: s.string(),
  updatedAt: s.optional(s.dateTime()),
  taxAmount: s.defaulted(s.string(), "0.00"),
  shippingAmount: s.defaulted(s.string(), "0.00"),
  discountAmount: s.defaulted(s.string(), "0.00"),
  items: s.array(s.lazy(() => orderItemInternalSchema)),
  _keysMap: {
    referenceId: "reference_id",
    updatedAt: "updated_at",
    taxAmount: "tax_amount",
    shippingAmount: "shipping_amount",
    discountAmount: "discount_amount",
  },
};

export const orderInternalSchema: Schema<Order> = s.object<Order>(orderProperties, {
  additionalProperties: s.json(),
});

export const orderSchema: Schema<Order> = s.lazySchema(() =>
  s.object<Order>(
    {
      ...orderProperties,
      items: s.array(s.lazy(() => orderItemSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
