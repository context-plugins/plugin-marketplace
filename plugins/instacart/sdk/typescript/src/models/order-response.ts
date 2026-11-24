import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fulfillmentType1Schema, type FulfillmentType1 } from "./fulfillment-type1.js";
import { orderItemSchema, type OrderItem } from "./order-item.js";
import { serviceOptionSchema, type ServiceOption } from "./service-option.js";
import { statusSchema, type Status } from "./status.js";
import { storeSchema, type Store } from "./store.js";

export type OrderResponse = {
  /** The unique identifier for the order. */
  id?: string;
  /** The current status of the order. */
  status?: Status;
  /** The timestamp when the order was created. */
  createdAt?: Date;
  /** The fulfillment type of the order. */
  fulfillmentType?: FulfillmentType1;
  serviceOption?: ServiceOption;
  store?: Store;
  /** The items included in the order. */
  items?: OrderItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderResponseSchema: Schema<OrderResponse> = s.object<OrderResponse>(
  {
    id: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    createdAt: s.optional(s.dateTime()),
    fulfillmentType: s.optional(s.lazy(() => fulfillmentType1Schema)),
    serviceOption: s.optional(s.lazy(() => serviceOptionSchema)),
    store: s.optional(s.lazy(() => storeSchema)),
    items: s.optional(s.array(s.lazy(() => orderItemSchema))),
    _keysMap: {
      createdAt: "created_at",
      fulfillmentType: "fulfillment_type",
      serviceOption: "service_option",
    },
  },
  { additionalProperties: s.json() },
);
