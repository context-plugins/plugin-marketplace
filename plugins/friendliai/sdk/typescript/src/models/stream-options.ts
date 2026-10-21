import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { includeUsageSchema, type IncludeUsage } from "./unions/include-usage.js";

export type StreamOptions = {
  /**
   * When set to `true`, the number of tokens used will be included at the end of the stream result
   * in the form of `"usage": {"completion_tokens": number, "prompt_tokens": number, "total_tokens":
   * number}`.
   */
  includeUsage?: IncludeUsage;
};

export const streamOptionsSchema: Schema<StreamOptions> = s.object<StreamOptions>({
  includeUsage: s.optional(s.lazy(() => includeUsageSchema)),
  _keysMap: {
    includeUsage: "include_usage",
  },
});
