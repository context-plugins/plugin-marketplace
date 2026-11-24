import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type InputCostPerToken = number;

export const inputCostPerTokenSchema: Schema<InputCostPerToken> = s.of<InputCostPerToken>(
  s.union([s.float64()]),
);
