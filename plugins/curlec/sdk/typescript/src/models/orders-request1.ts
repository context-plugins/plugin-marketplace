import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OrdersRequest1 = {
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ordersRequest1Properties: s.Shape<OrdersRequest1> = {
  notes: s.record(s.string(), s.string()),
};

export const ordersRequest1InternalSchema: Schema<OrdersRequest1> = s.object<OrdersRequest1>(
  ordersRequest1Properties,
  { additionalProperties: s.json() },
);

export const ordersRequest1Schema: Schema<OrdersRequest1> = s.lazySchema(() =>
  s.object<OrdersRequest1>(
    {
      ...ordersRequest1Properties,
      notes: s.record(s.string(), s.string()).check(s.maxProperties(15)),
    },
    { additionalProperties: s.json() },
  ),
);
