import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { maxCharsPerResult1Schema, type MaxCharsPerResult1 } from "./unions/max-chars-per-result1.js";

/** Optional settings for returning full content. */
export type FullContentSettings = {
  /**
   * Optional limit on the number of characters to include in the full content for each url. Full
   * content always starts at the beginning of the page and is truncated at the limit if necessary.
   */
  maxCharsPerResult?: MaxCharsPerResult1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fullContentSettingsSchema: Schema<FullContentSettings> = s.object<FullContentSettings>(
  {
    maxCharsPerResult: s.optional(s.lazy(() => maxCharsPerResult1Schema)),
    _keysMap: {
      maxCharsPerResult: "max_chars_per_result",
    },
  },
  { additionalProperties: s.json() },
);
