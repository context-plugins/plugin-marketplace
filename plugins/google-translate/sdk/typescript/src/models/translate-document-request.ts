import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentInputConfig3Schema, type DocumentInputConfig3 } from "./document-input-config3.js";
import { documentOutputConfig1Schema, type DocumentOutputConfig1 } from "./document-output-config1.js";
import {
  translateTextGlossaryConfig2Schema,
  type TranslateTextGlossaryConfig2,
} from "./translate-text-glossary-config2.js";

/** A document translation request. */
export type TranslateDocumentRequest = {
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
  /**
   * Required. The ISO-639 language code to use for translation of the input document, set to one of
   * the language codes listed in [Language
   * Support](https://cloud.google.com/translate/docs/languages).
   */
  targetLanguageCode?: string;
  /**
   * Optional. is_translate_native_pdf_only field for external customers. If true, the page limit of
   * online native pdf translation is 300 and only native pdf pages will be translated.
   */
  isTranslateNativePdfOnly?: boolean;
  /** Optional. If true, enable auto rotation correction in DVS. */
  enableRotationCorrection?: boolean;
  /**
   * Optional. If true, use the text removal server to remove the shadow text on background image
   * for native pdf translation. Shadow removal feature can only be enabled when
   * is_translate_native_pdf_only: false && pdf_native_only: false
   */
  enableShadowRemovalNativePdf?: boolean;
  /**
   * Optional. This flag is to support user customized attribution. If not provided, the default is
   * `Machine Translated by Google`. Customized attribution should follow rules in
   * https://cloud.google.com/translate/attribution#attribution_and_logos
   */
  customizedAttribution?: string;
  /**
   * Optional. Output configurations. Defines if the output file should be stored within Cloud
   * Storage as well as the desired output format. If not provided the translated file will only be
   * returned through a byte-stream and its output mime type will be the same as the input file's
   * mime type.
   */
  documentOutputConfig?: DocumentOutputConfig1;
  /**
   * Optional. The ISO-639 language code of the input document if known, for example, "en-US" or
   * "sr-Latn". Supported language codes are listed in [Language
   * Support](https://cloud.google.com/translate/docs/languages). If the source language isn't
   * specified, the API attempts to identify the source language automatically and returns the
   * source language within the response. Source language must be specified if the request contains
   * a glossary or a custom model.
   */
  sourceLanguageCode?: string;
  /** Required. Input configurations. */
  documentInputConfig?: DocumentInputConfig3;
  /**
   * Optional. The `model` type requested for this translation. The format depends on model type: -
   * AutoML Translation models:
   * `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General
   * (built-in) models:
   * `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If not provided,
   * the default Google model (NMT) will be used for translation.
   */
  model?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const translateDocumentRequestSchema: Schema<TranslateDocumentRequest> =
  s.object<TranslateDocumentRequest>(
    {
      labels: s.optional(s.record(s.string(), s.string())),
      glossaryConfig: s.optional(s.lazy(() => translateTextGlossaryConfig2Schema)),
      targetLanguageCode: s.optional(s.string()),
      isTranslateNativePdfOnly: s.optional(s.boolean()),
      enableRotationCorrection: s.optional(s.boolean()),
      enableShadowRemovalNativePdf: s.optional(s.boolean()),
      customizedAttribution: s.optional(s.string()),
      documentOutputConfig: s.optional(s.lazy(() => documentOutputConfig1Schema)),
      sourceLanguageCode: s.optional(s.string()),
      documentInputConfig: s.optional(s.lazy(() => documentInputConfig3Schema)),
      model: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
