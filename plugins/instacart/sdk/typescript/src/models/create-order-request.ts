import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cart1InternalSchema, cart1Schema, type Cart1 } from "./cart1.js";
import { deliveryAddressSchema, type DeliveryAddress } from "./delivery-address.js";

export type CreateOrderRequest = {
  /** The identifier of the time slot hold from the reserve step. */
  holdId: string;
  /** The finalized cart for the order. */
  cart?: Cart1;
  /** The delivery address for the order. */
  deliveryAddress?: DeliveryAddress;
  /** Special instructions for the delivery driver. */
  deliveryInstructions?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createOrderRequestProperties: s.Shape<CreateOrderRequest> = {
  holdId: s.string(),
  cart: s.optional(s.lazy(() => cart1InternalSchema)),
  deliveryAddress: s.optional(s.lazy(() => deliveryAddressSchema)),
  deliveryInstructions: s.optional(s.string()),
  _keysMap: {
    holdId: "hold_id",
    deliveryAddress: "delivery_address",
    deliveryInstructions: "delivery_instructions",
  },
};

export const createOrderRequestInternalSchema: Schema<CreateOrderRequest> = s.object<CreateOrderRequest>(
  createOrderRequestProperties,
  { additionalProperties: s.json() },
);

export const createOrderRequestSchema: Schema<CreateOrderRequest> = s.lazySchema(() =>
  s.object<CreateOrderRequest>(
    {
      ...createOrderRequestProperties,
      cart: s.optional(s.lazy(() => cart1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
