import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { maxCharsPerResultSchema, type MaxCharsPerResult } from "./unions/max-chars-per-result.js";

/** Optional settings for returning relevant excerpts. */
export type V1ExcerptSettings = {
  /**
   * Optional upper bound on the total number of characters to include per url. Excerpts may contain
   * fewer characters than this limit to maximize relevance and token efficiency.
   */
  maxCharsPerResult?: MaxCharsPerResult;
};

export const v1ExcerptSettingsSchema: Schema<V1ExcerptSettings> = s.object<V1ExcerptSettings>({
  maxCharsPerResult: s.optional(s.lazy(() => maxCharsPerResultSchema)),
  _keysMap: {
    maxCharsPerResult: "max_chars_per_result",
  },
});
