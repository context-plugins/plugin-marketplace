import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The publications historical average open rate */
export type AverageOpenRate = number | boolean;

export const averageOpenRateSchema: Schema<AverageOpenRate> = s.of<AverageOpenRate>(
  s.union([s.float64(), s.boolean()]),
);
