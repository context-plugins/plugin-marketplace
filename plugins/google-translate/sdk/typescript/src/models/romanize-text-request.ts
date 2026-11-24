import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The request message for synchronous romanization. */
export type RomanizeTextRequest = {
  /** Required. The content of the input in string format. */
  contents?: string[];
  /**
   * Optional. The ISO-639 language code of the input text if known, for example, "hi" or "zh".
   * Supported language codes are listed in [Language
   * Support](https://cloud.google.com/translate/docs/languages#roman). If the source language isn't
   * specified, the API attempts to identify the source language automatically and returns the
   * source language for each content in the response.
   */
  sourceLanguageCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const romanizeTextRequestSchema: Schema<RomanizeTextRequest> = s.object<RomanizeTextRequest>(
  {
    contents: s.optional(s.array(s.string())),
    sourceLanguageCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
