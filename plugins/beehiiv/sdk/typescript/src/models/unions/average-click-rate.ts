import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The publications historical average click through rate */
export type AverageClickRate = number | boolean;

export const averageClickRateSchema: Schema<AverageClickRate> = s.of<AverageClickRate>(
  s.union([s.float64(), s.boolean()]),
);
