import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The maximum number of tokens to generate. Unsupported. */
export type MaxTokens = number;

export const maxTokensSchema: Schema<MaxTokens> = s.of<MaxTokens>(s.union([s.int()]));
