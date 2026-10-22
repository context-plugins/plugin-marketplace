import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Length in seconds of the uploaded recording */
export type Duration = number;

export const durationSchema: Schema<Duration> = s.of<Duration>(s.union([s.float64()]));
