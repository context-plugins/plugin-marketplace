import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AcceptedPredictionTokens = number;

export const acceptedPredictionTokensSchema: Schema<AcceptedPredictionTokens> =
  s.of<AcceptedPredictionTokens>(s.union([s.int()]));
