import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Defines if this payment service is currently active. */
export type Active1 = boolean;

export const active1Schema: Schema<Active1> = s.of<Active1>(s.union([s.boolean()]));
