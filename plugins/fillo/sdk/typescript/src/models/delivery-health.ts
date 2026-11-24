import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deliverySchema, type Delivery } from "./delivery.js";
import { destinationSchema, type Destination } from "./destination.js";

/** Epoch-millisecond timestamps throughout, matching the dashboard's Activity data. */
export type DeliveryHealth = {
  /** The telemetry retention window the counts cover. They are not all-time totals. */
  windowDays: number;
  destinations: Destination[];
  /**
   * The bounded recent-delivery list, newest first — the same rows the form's Activity page shows.
   */
  deliveries: Delivery[];
  hasMore: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deliveryHealthSchema: Schema<DeliveryHealth> = s.object<DeliveryHealth>(
  {
    windowDays: s.int(),
    destinations: s.array(s.lazy(() => destinationSchema)),
    deliveries: s.array(s.lazy(() => deliverySchema)),
    hasMore: s.boolean(),
  },
  { additionalProperties: s.json() },
);
