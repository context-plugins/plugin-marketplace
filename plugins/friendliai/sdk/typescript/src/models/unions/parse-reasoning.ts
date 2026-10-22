import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Parses model reasoning into `reasoning_content` while keeping the answer in `content`. Default
 * value may vary between endpoints.
 *
 * For more detailed information, please refer
 * [here](https://friendli.ai/docs/guides/reasoning#reasoning-parsing-with-friendli).
 */
export type ParseReasoning = boolean;

export const parseReasoningSchema: Schema<ParseReasoning> = s.of<ParseReasoning>(s.union([s.boolean()]));
