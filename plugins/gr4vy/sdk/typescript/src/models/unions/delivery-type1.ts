import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { deliveryTypeSchema, type DeliveryType } from "../delivery-type.js";

/** The delivery type */
export type DeliveryType1 = DeliveryType;

export const deliveryType1Schema: Schema<DeliveryType1> = s.of<DeliveryType1>(
  s.union([s.lazy(() => deliveryTypeSchema)]),
);
