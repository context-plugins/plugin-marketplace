import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Date the voice becomes retired and can no longer be saved or selected */
export type SunsetDate = string;

export const sunsetDateSchema: Schema<SunsetDate> = s.of<SunsetDate>(s.union([s.dateOnly()]));
