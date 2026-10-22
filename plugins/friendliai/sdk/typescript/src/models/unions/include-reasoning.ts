import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When `parse_reasoning=true`, include parsed reasoning (`reasoning_content`). Defaults to true.
 *
 * For more detailed information, please refer
 * [here](https://friendli.ai/docs/guides/reasoning#reasoning-parsing-with-friendli).
 */
export type IncludeReasoning = boolean;

export const includeReasoningSchema: Schema<IncludeReasoning> = s.of<IncludeReasoning>(
  s.union([s.boolean()]),
);
