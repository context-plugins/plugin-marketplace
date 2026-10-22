import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Date the model becomes retired and can no longer be saved or selected. */
export type SunsetDate1 = string;

export const sunsetDate1Schema: Schema<SunsetDate1> = s.of<SunsetDate1>(s.union([s.dateOnly()]));
