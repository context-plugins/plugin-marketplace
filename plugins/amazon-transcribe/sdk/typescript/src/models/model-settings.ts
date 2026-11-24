import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelSettings = {
  /**
   * The name of the custom language model you want to use when processing your transcription job.
   * Note that custom language model names are case sensitive. The language of the specified custom
   * language model must match the language code that you specify in your transcription request. If
   * the languages do not match, the custom language model isn't applied. There are no errors or
   * warnings associated with a language mismatch.
   */
  languageModelName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelSettingsSchema: Schema<ModelSettings> = s.object<ModelSettings>(
  {
    languageModelName: s.optional(s.string()),
    _keysMap: {
      languageModelName: "LanguageModelName",
    },
  },
  { additionalProperties: s.json() },
);
