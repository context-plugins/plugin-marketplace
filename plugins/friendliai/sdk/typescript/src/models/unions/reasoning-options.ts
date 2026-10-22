import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reasoningOptionSchema, type ReasoningOption } from "./reasoning-option.js";

/**
 * Reasoning controls the model supports, such as toggling it on or off, selecting an effort level,
 * or setting a token budget. A model may support more than one of these at the same time. Present
 * only when reasoning is supported.
 */
export type ReasoningOptions = ReasoningOption[];

export const reasoningOptionsSchema: Schema<ReasoningOptions> = s.of<ReasoningOptions>(
  s.union([s.array(s.lazy(() => reasoningOptionSchema))]),
);
