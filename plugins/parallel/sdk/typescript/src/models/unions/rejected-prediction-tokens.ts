import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RejectedPredictionTokens = number;

export const rejectedPredictionTokensSchema: Schema<RejectedPredictionTokens> =
  s.of<RejectedPredictionTokens>(s.union([s.int()]));
