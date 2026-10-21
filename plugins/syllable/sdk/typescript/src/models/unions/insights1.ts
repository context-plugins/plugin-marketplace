import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Insights1 = string | number;

export const insights1Schema: Schema<Insights1> = s.of<Insights1>(
  s.union([s.string(), s.int(), s.float64()]),
);
