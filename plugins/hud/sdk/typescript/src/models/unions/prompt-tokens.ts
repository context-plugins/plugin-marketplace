import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PromptTokens = number;

export const promptTokensSchema: Schema<PromptTokens> = s.of<PromptTokens>(s.union([s.int()]));
