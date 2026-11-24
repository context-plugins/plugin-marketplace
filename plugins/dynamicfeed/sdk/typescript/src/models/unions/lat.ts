import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** latitude (use with lon instead of a preset), latitude (alternative to city) */
export type Lat = number;

export const latSchema: Schema<Lat> = s.of<Lat>(s.union([s.float64()]));
