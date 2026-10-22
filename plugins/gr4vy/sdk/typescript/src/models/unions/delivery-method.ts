import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The delivery method */
export type DeliveryMethod = string;

export const deliveryMethodSchema: Schema<DeliveryMethod> = s.of<DeliveryMethod>(s.union([s.string()]));
