import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * If true, restricts the model to at most one tool call at a time. Must not be provided when
 * `type=none`.
 */
export type DisableParallelToolUse = boolean;

export const disableParallelToolUseSchema: Schema<DisableParallelToolUse> = s.of<DisableParallelToolUse>(
  s.union([s.boolean()]),
);
