import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The value of the metric calculation for the module data entry. The type depends on the metric.
 */
export type Value2 = number;

export const value2Schema: Schema<Value2> = s.of<Value2>(s.union([s.int(), s.float64()]));
