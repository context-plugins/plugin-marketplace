import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  translateTextGlossaryConfig3Schema,
  type TranslateTextGlossaryConfig3,
} from "./translate-text-glossary-config3.js";

/** A single translation response. */
export type Translation = {
  /**
   * Text translated into the target language. If an error occurs during translation, this field
   * might be excluded from the response.
   */
  translatedText?: string;
  /**
   * The ISO-639 language code of source text in the initial request, detected automatically, if no
   * source language was passed within the initial request. If the source language was passed,
   * auto-detection of the language does not occur and this field is empty.
   */
  detectedLanguageCode?: string;
  /**
   * Only present when `model` is present in the request. `model` here is normalized to have project
   * number. For example: If the `model` requested in TranslationTextRequest is
   * `projects/{project-id}/locations/{location-id}/models/general/nmt` then `model` here would be
   * normalized to `projects/{project-number}/locations/{location-id}/models/general/nmt`.
   */
  model?: string;
  /** The `glossary_config` used for this translation. */
  glossaryConfig?: TranslateTextGlossaryConfig3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const translationSchema: Schema<Translation> = s.object<Translation>(
  {
    translatedText: s.optional(s.string()),
    detectedLanguageCode: s.optional(s.string()),
    model: s.optional(s.string()),
    glossaryConfig: s.optional(s.lazy(() => translateTextGlossaryConfig3Schema)),
  },
  { additionalProperties: s.json() },
);
