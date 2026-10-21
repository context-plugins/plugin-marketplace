import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the consumer order will be picked up rather than shipped. */
export type Orderforpickup = boolean;

export const orderforpickupSchema: Schema<Orderforpickup> = s.of<Orderforpickup>(s.union([s.boolean()]));
