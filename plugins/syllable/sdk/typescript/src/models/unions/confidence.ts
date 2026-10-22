import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Confidence = number;

export const confidenceSchema: Schema<Confidence> = s.of<Confidence>(s.union([s.float64()]));
