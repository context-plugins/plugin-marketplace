import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Duration of the event in milliseconds */
export type DurationMs1 = number;

export const durationMs1Schema: Schema<DurationMs1> = s.of<DurationMs1>(s.union([s.float64()]));
