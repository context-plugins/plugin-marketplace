import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PromptCacheKey = string;

export const promptCacheKeySchema: Schema<PromptCacheKey> = s.of<PromptCacheKey>(s.union([s.string()]));
