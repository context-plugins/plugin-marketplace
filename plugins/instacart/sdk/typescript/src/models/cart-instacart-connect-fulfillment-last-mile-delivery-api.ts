import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cartItemInternalSchema, cartItemSchema, type CartItem } from "./cart-item.js";

/** The finalized cart for the order. */
export type CartInstacartConnectFulfillmentLastMileDeliveryApi = {
  /** The items to include in the order. */
  items?: CartItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cartInstacartConnectFulfillmentLastMileDeliveryApiProperties: s.Shape<CartInstacartConnectFulfillmentLastMileDeliveryApi> =
  {
    items: s.optional(s.array(s.lazy(() => cartItemInternalSchema))),
  };

export const cartInstacartConnectFulfillmentLastMileDeliveryApiInternalSchema: Schema<CartInstacartConnectFulfillmentLastMileDeliveryApi> =
  s.object<CartInstacartConnectFulfillmentLastMileDeliveryApi>(
    cartInstacartConnectFulfillmentLastMileDeliveryApiProperties,
    { additionalProperties: s.json() },
  );

export const cartInstacartConnectFulfillmentLastMileDeliveryApiSchema: Schema<CartInstacartConnectFulfillmentLastMileDeliveryApi> =
  s.lazySchema(() =>
    s.object<CartInstacartConnectFulfillmentLastMileDeliveryApi>(
      {
        ...cartInstacartConnectFulfillmentLastMileDeliveryApiProperties,
        items: s.optional(s.array(s.lazy(() => cartItemSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
