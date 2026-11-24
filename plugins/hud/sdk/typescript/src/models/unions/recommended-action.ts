import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RecommendedAction = string;

export const recommendedActionSchema: Schema<RecommendedAction> = s.of<RecommendedAction>(
  s.union([s.string()]),
);
