import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeliveryStatus = {
  /** Delivery status code */
  status?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deliveryStatusSchema: Schema<DeliveryStatus> = s.object<DeliveryStatus>(
  {
    status: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
