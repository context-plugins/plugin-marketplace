import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { coordinatesSchema, type Coordinates } from "./coordinates.js";
import { shopperSchema, type Shopper } from "./shopper.js";
import {
  statusInstacartConnectPostCheckoutOrdersApiSchema,
  type StatusInstacartConnectPostCheckoutOrdersApi,
} from "./status-instacart-connect-post-checkout-orders-api.js";

export type OrderHandlingResponse = {
  /** The unique identifier for the order. */
  orderId?: string;
  /** The current status of the order. */
  status?: StatusInstacartConnectPostCheckoutOrdersApi;
  /** The delivery or pickup address. */
  address?: Address;
  /** The geographic coordinates of the delivery or pickup address. */
  coordinates?: Coordinates;
  /** Information about the current shopper assigned to the order. */
  shopper?: Shopper;
  /** Any delivery or pickup instructions included with the order. */
  notes?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderHandlingResponseSchema: Schema<OrderHandlingResponse> = s.object<OrderHandlingResponse>(
  {
    orderId: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusInstacartConnectPostCheckoutOrdersApiSchema)),
    address: s.optional(s.lazy(() => addressSchema)),
    coordinates: s.optional(s.lazy(() => coordinatesSchema)),
    shopper: s.optional(s.lazy(() => shopperSchema)),
    notes: s.optional(s.string()),
    _keysMap: {
      orderId: "order_id",
    },
  },
  { additionalProperties: s.json() },
);
