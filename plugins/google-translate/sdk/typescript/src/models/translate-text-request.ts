import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  translateTextGlossaryConfig2Schema,
  type TranslateTextGlossaryConfig2,
} from "./translate-text-glossary-config2.js";
import { transliterationConfig2Schema, type TransliterationConfig2 } from "./transliteration-config2.js";

/** The request message for synchronous translation. */
export type TranslateTextRequest = {
  /**
   * Required. The content of the input in string format. We recommend the total content be less
   * than 30,000 codepoints. The max length of this field is 1024. Use BatchTranslateText for larger
   * text.
   */
  contents?: string[];
  /**
   * Optional. The format of the source text, for example, "text/html", "text/plain". If left blank,
   * the MIME type defaults to "text/html".
   */
  mimeType?: string;
  /**
   * Optional. The ISO-639 language code of the input text if known, for example, "en-US" or
   * "sr-Latn". Supported language codes are listed in [Language
   * Support](https://cloud.google.com/translate/docs/languages). If the source language isn't
   * specified, the API attempts to identify the source language automatically and returns the
   * source language within the response.
   */
  sourceLanguageCode?: string;
  /**
   * Optional. The labels with user-defined metadata for the request. Label keys and values can be
   * no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric
   * characters, underscores and dashes. International characters are allowed. Label values are
   * optional. Label keys must start with a letter. See
   * https://cloud.google.com/translate/docs/advanced/labels for more information.
   */
  labels?: Record<string, string>;
  /**
   * Optional. Glossary to be applied. The glossary must be within the same region (have the same
   * location-id) as the model, otherwise an INVALID_ARGUMENT (400) error is returned.
   */
  glossaryConfig?: TranslateTextGlossaryConfig2;
  /** Optional. Transliteration to be applied. */
  transliterationConfig?: TransliterationConfig2;
  /**
   * Optional. The `model` type requested for this translation. The format depends on model type: -
   * AutoML Translation models:
   * `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General
   * (built-in) models:
   * `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, - Translation LLM
   * models:
   * `projects/{project-number-or-id}/locations/{location-id}/models/general/translation-llm`, For
   * global (non-regionalized) requests, use `location-id` `global`. For example,
   * `projects/{project-number-or-id}/locations/global/models/general/nmt`. If not provided, the
   * default Google model (NMT) will be used
   */
  model?: string;
  /**
   * Required. The ISO-639 language code to use for translation of the input text, set to one of the
   * language codes listed in [Language Support](https://cloud.google.com/translate/docs/languages).
   */
  targetLanguageCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const translateTextRequestSchema: Schema<TranslateTextRequest> = s.object<TranslateTextRequest>(
  {
    contents: s.optional(s.array(s.string())),
    mimeType: s.optional(s.string()),
    sourceLanguageCode: s.optional(s.string()),
    labels: s.optional(s.record(s.string(), s.string())),
    glossaryConfig: s.optional(s.lazy(() => translateTextGlossaryConfig2Schema)),
    transliterationConfig: s.optional(s.lazy(() => transliterationConfig2Schema)),
    model: s.optional(s.string()),
    targetLanguageCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
