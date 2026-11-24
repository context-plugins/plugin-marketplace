import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fulfillmentTypeSchema, type FulfillmentType } from "./fulfillment-type.js";

export type ServiceOption = {
  /** The unique identifier for the service option. */
  id?: string;
  /** The date of the service option. */
  date?: string;
  /** The start time of the delivery or pickup window. */
  windowStartsAt?: Date;
  /** The end time of the delivery or pickup window. */
  windowEndsAt?: Date;
  /** The type of fulfillment for this service option. */
  fulfillmentType?: FulfillmentType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceOptionSchema: Schema<ServiceOption> = s.object<ServiceOption>(
  {
    id: s.optional(s.string()),
    date: s.optional(s.dateOnly()),
    windowStartsAt: s.optional(s.dateTime()),
    windowEndsAt: s.optional(s.dateTime()),
    fulfillmentType: s.optional(s.lazy(() => fulfillmentTypeSchema)),
    _keysMap: {
      windowStartsAt: "window_starts_at",
      windowEndsAt: "window_ends_at",
      fulfillmentType: "fulfillment_type",
    },
  },
  { additionalProperties: s.json() },
);
