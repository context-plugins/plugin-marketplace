import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TailProbability = number;

export const tailProbabilitySchema: Schema<TailProbability> = s.of<TailProbability>(s.union([s.float64()]));
