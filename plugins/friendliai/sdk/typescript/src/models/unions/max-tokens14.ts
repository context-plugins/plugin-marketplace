import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Maximum number of tokens to generate for the assistant response. Must be greater than 0 when
 * provided.
 */
export type MaxTokens14 = number;

export const maxTokens14Schema: Schema<MaxTokens14> = s.of<MaxTokens14>(s.union([s.int()]));
