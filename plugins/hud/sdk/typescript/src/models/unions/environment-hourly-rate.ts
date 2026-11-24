import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EnvironmentHourlyRate = number;

export const environmentHourlyRateSchema: Schema<EnvironmentHourlyRate> = s.of<EnvironmentHourlyRate>(
  s.union([s.float64()]),
);
