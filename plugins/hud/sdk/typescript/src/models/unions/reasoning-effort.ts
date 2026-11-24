import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ReasoningEffort = string | number;

export const reasoningEffortSchema: Schema<ReasoningEffort> = s.of<ReasoningEffort>(
  s.union([s.string(), s.float64()]),
);
