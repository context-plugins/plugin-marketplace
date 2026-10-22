import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Date the provider becomes retired and can no longer be saved or selected. */
export type SunsetDate2 = string;

export const sunsetDate2Schema: Schema<SunsetDate2> = s.of<SunsetDate2>(s.union([s.dateOnly()]));
