import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AvgScore = number;

export const avgScoreSchema: Schema<AvgScore> = s.of<AvgScore>(s.union([s.float64()]));
