import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Sample rate as a percentage of calls */
export type SampleRate = number;

export const sampleRateSchema: Schema<SampleRate> = s.of<SampleRate>(s.union([s.int(), s.float64()]));
