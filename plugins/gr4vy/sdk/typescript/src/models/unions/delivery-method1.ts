import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The method of delivery for this cart item. */
export type DeliveryMethod1 = string;

export const deliveryMethod1Schema: Schema<DeliveryMethod1> = s.of<DeliveryMethod1>(s.union([s.string()]));
