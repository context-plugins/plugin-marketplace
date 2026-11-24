import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A single supported language response corresponds to information related to one supported
 * language.
 */
export type SupportedLanguage = {
  /** Can be used as a source language. */
  supportSource?: boolean;
  /**
   * Human-readable name of the language localized in the display language specified in the request.
   */
  displayName?: string;
  /** Can be used as a target language. */
  supportTarget?: boolean;
  /**
   * Supported language code, generally consisting of its ISO 639-1 identifier, for example, 'en',
   * 'ja'. In certain cases, ISO-639 codes including language and region identifiers are returned
   * (for example, 'zh-TW' and 'zh-CN').
   */
  languageCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const supportedLanguageSchema: Schema<SupportedLanguage> = s.object<SupportedLanguage>(
  {
    supportSource: s.optional(s.boolean()),
    displayName: s.optional(s.string()),
    supportTarget: s.optional(s.boolean()),
    languageCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
