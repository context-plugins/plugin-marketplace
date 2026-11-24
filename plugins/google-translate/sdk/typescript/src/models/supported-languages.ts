import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { supportedLanguageSchema, type SupportedLanguage } from "./supported-language.js";

/** The response message for discovering supported languages. */
export type SupportedLanguages = {
  /**
   * A list of supported language responses. This list contains an entry for each language the
   * Translation API supports.
   */
  languages?: SupportedLanguage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const supportedLanguagesSchema: Schema<SupportedLanguages> = s.object<SupportedLanguages>(
  {
    languages: s.optional(s.array(s.lazy(() => supportedLanguageSchema))),
  },
  { additionalProperties: s.json() },
);
