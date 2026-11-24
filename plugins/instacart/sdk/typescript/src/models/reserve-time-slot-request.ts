import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cartInternalSchema, cartSchema, type Cart } from "./cart.js";

export type ReserveTimeSlotRequest = {
  /** The identifier of the service option time slot to reserve. */
  serviceOptionId: string;
  /** The customer's cart details to associate with the reservation. */
  cart?: Cart;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const reserveTimeSlotRequestProperties: s.Shape<ReserveTimeSlotRequest> = {
  serviceOptionId: s.string(),
  cart: s.optional(s.lazy(() => cartInternalSchema)),
  _keysMap: {
    serviceOptionId: "service_option_id",
  },
};

export const reserveTimeSlotRequestInternalSchema: Schema<ReserveTimeSlotRequest> =
  s.object<ReserveTimeSlotRequest>(reserveTimeSlotRequestProperties, { additionalProperties: s.json() });

export const reserveTimeSlotRequestSchema: Schema<ReserveTimeSlotRequest> = s.lazySchema(() =>
  s.object<ReserveTimeSlotRequest>(
    {
      ...reserveTimeSlotRequestProperties,
      cart: s.optional(s.lazy(() => cartSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
