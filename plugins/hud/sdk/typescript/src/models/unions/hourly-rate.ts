import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type HourlyRate = number;

export const hourlyRateSchema: Schema<HourlyRate> = s.of<HourlyRate>(s.union([s.float64()]));
