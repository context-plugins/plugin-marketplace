import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CompletionTokens = number;

export const completionTokensSchema: Schema<CompletionTokens> = s.of<CompletionTokens>(s.union([s.int()]));
