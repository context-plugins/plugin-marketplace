import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AverageAccuracy = number;

export const averageAccuracySchema: Schema<AverageAccuracy> = s.of<AverageAccuracy>(s.union([s.float64()]));
