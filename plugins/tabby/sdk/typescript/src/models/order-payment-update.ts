import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  orderItemResponseInternalSchema,
  orderItemResponseSchema,
  type OrderItemResponse,
} from "./order-item-response.js";

export type OrderPaymentUpdate = {
  /** Merchant-assigned order number. */
  referenceId: string | null;
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
  items: OrderItemResponse[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const orderPaymentUpdateProperties: s.Shape<OrderPaymentUpdate> = {
  referenceId: s.nullable(s.string()),
  updatedAt: s.optional(s.dateTime()),
  taxAmount: s.defaulted(s.string(), "0.00"),
  shippingAmount: s.defaulted(s.string(), "0.00"),
  discountAmount: s.defaulted(s.string(), "0.00"),
  items: s.nullable(s.array(s.lazy(() => orderItemResponseInternalSchema))),
  _keysMap: {
    referenceId: "reference_id",
    updatedAt: "updated_at",
    taxAmount: "tax_amount",
    shippingAmount: "shipping_amount",
    discountAmount: "discount_amount",
  },
};

export const orderPaymentUpdateInternalSchema: Schema<OrderPaymentUpdate> = s.object<OrderPaymentUpdate>(
  orderPaymentUpdateProperties,
  { additionalProperties: s.json() },
);

export const orderPaymentUpdateSchema: Schema<OrderPaymentUpdate> = s.lazySchema(() =>
  s.object<OrderPaymentUpdate>(
    {
      ...orderPaymentUpdateProperties,
      items: s.nullable(s.array(s.lazy(() => orderItemResponseSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
