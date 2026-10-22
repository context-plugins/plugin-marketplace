import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * When set to `true`, the number of tokens used will be included at the end of the stream result in
 * the form of `"usage": {"completion_tokens": number, "prompt_tokens": number, "total_tokens":
 * number}`.
 */
export type IncludeUsage = boolean;

export const includeUsageSchema: Schema<IncludeUsage> = s.of<IncludeUsage>(s.union([s.boolean()]));
