import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Output token count delta when included. */
export type OutputTokens = number;

export const outputTokensSchema: Schema<OutputTokens> = s.of<OutputTokens>(s.union([s.int()]));
