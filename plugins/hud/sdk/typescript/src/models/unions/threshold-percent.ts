import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ThresholdPercent = string;

export const thresholdPercentSchema: Schema<ThresholdPercent> = s.of<ThresholdPercent>(s.union([s.string()]));
