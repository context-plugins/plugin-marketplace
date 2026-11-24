import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filing year, for the grant-graph fields. Ignored, with a note, on fields that read the latest
 * filing.
 */
export type Year1 = number;

export const year1Schema: Schema<Year1> = s.of<Year1>(s.union([s.int()]));
