import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reasoningEffort1Schema, type ReasoningEffort1 } from "../reasoning-effort1.js";

/**
 * Sets how much reasoning the model does before answering. Higher values give more thorough
 * responses but take longer. This affects reasoning models only, and the available options depend
 * on the model.
 */
export type ReasoningEffort = ReasoningEffort1;

export const reasoningEffortSchema: Schema<ReasoningEffort> = s.of<ReasoningEffort>(
  s.union([s.lazy(() => reasoningEffort1Schema)]),
);
