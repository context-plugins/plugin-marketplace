import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cartInstacartConnectFulfillmentLastMileDeliveryApiInternalSchema,
  cartInstacartConnectFulfillmentLastMileDeliveryApiSchema,
  type CartInstacartConnectFulfillmentLastMileDeliveryApi,
} from "./cart-instacart-connect-fulfillment-last-mile-delivery-api.js";
import { deliveryAddressSchema, type DeliveryAddress } from "./delivery-address.js";

export type CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi = {
  /** The identifier of the time slot hold from the reserve step. */
  holdId: string;
  /** The finalized cart for the order. */
  cart?: CartInstacartConnectFulfillmentLastMileDeliveryApi;
  /** The delivery address for the order. */
  deliveryAddress?: DeliveryAddress;
  /** Special instructions for the delivery driver. */
  deliveryInstructions?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiProperties: s.Shape<CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi> =
  {
    holdId: s.string(),
    cart: s.optional(s.lazy(() => cartInstacartConnectFulfillmentLastMileDeliveryApiInternalSchema)),
    deliveryAddress: s.optional(s.lazy(() => deliveryAddressSchema)),
    deliveryInstructions: s.optional(s.string()),
    _keysMap: {
      holdId: "hold_id",
      deliveryAddress: "delivery_address",
      deliveryInstructions: "delivery_instructions",
    },
  };

export const createOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiInternalSchema: Schema<CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi> =
  s.object<CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi>(
    createOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiProperties,
    { additionalProperties: s.json() },
  );

export const createOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiSchema: Schema<CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi> =
  s.lazySchema(() =>
    s.object<CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi>(
      {
        ...createOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiProperties,
        cart: s.optional(s.lazy(() => cartInstacartConnectFulfillmentLastMileDeliveryApiSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
