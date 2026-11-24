import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type OutputCostPerToken = number;

export const outputCostPerTokenSchema: Schema<OutputCostPerToken> = s.of<OutputCostPerToken>(
  s.union([s.float64()]),
);
