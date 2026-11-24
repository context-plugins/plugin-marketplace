import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ReasoningTokens = number;

export const reasoningTokensSchema: Schema<ReasoningTokens> = s.of<ReasoningTokens>(s.union([s.int()]));
