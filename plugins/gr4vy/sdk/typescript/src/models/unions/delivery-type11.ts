import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { deliveryTypeSchema, type DeliveryType } from "../delivery-type.js";

/** The type of delivery for this cart item. */
export type DeliveryType11 = DeliveryType;

export const deliveryType11Schema: Schema<DeliveryType11> = s.of<DeliveryType11>(
  s.union([s.lazy(() => deliveryTypeSchema)]),
);
