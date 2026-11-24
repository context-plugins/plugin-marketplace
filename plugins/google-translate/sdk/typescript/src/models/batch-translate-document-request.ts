import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  batchDocumentInputConfigSchema,
  type BatchDocumentInputConfig,
} from "./batch-document-input-config.js";
import {
  batchDocumentOutputConfig1Schema,
  type BatchDocumentOutputConfig1,
} from "./batch-document-output-config1.js";
import {
  translateTextGlossaryConfigSchema,
  type TranslateTextGlossaryConfig,
} from "./translate-text-glossary-config.js";

/** The BatchTranslateDocument request. */
export type BatchTranslateDocumentRequest = {
  /**
   * Optional. This flag is to support user customized attribution. If not provided, the default is
   * `Machine Translated by Google`. Customized attribution should follow rules in
   * https://cloud.google.com/translate/attribution#attribution_and_logos
   */
  customizedAttribution?: string;
  /**
   * Required. Output configuration. If 2 input configs match to the same file (that is, same input
   * path), we don't generate output for duplicate inputs.
   */
  outputConfig?: BatchDocumentOutputConfig1;
  /**
   * Optional. If true, use the text removal server to remove the shadow text on background image
   * for native pdf translation. Shadow removal feature can only be enabled when
   * is_translate_native_pdf_only: false && pdf_native_only: false
   */
  enableShadowRemovalNativePdf?: boolean;
  /**
   * Optional. The models to use for translation. Map's key is target language code. Map's value is
   * the model name. Value can be a built-in general model, or an AutoML Translation model. The
   * value format depends on model type: - AutoML Translation models:
   * `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General
   * (built-in) models:
   * `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is
   * empty or a specific model is not requested for a language pair, then default google model (nmt)
   * is used.
   */
  models?: Record<string, string>;
  /**
   * Required. The ISO-639 language code to use for translation of the input document. Specify up to
   * 10 language codes here. Supported language codes are listed in [Language
   * Support](https://cloud.google.com/translate/docs/languages).
   */
  targetLanguageCodes?: string[];
  /**
   * Optional. The file format conversion map that is applied to all input files. The map key is the
   * original mime_type. The map value is the target mime_type of translated documents. Supported
   * file format conversion includes: - `application/pdf` to
   * `application/vnd.openxmlformats-officedocument.wordprocessingml.document` If nothing specified,
   * output files will be in the same format as the original file.
   */
  formatConversions?: Record<string, string>;
  /** Optional. Glossaries to be applied. It's keyed by target language code. */
  glossaries?: Record<string, TranslateTextGlossaryConfig>;
  /**
   * Required. The ISO-639 language code of the input document if known, for example, "en-US" or
   * "sr-Latn". Supported language codes are listed in [Language
   * Support](https://cloud.google.com/translate/docs/languages).
   */
  sourceLanguageCode?: string;
  /**
   * Required. Input configurations. The total number of files matched should be <= 100. The total
   * content size to translate should be <= 100M Unicode codepoints. The files must use UTF-8
   * encoding.
   */
  inputConfigs?: BatchDocumentInputConfig[];
  /** Optional. If true, only native pdf pages will be translated. */
  pdfNativeOnly?: boolean;
  /** Optional. If true, enable auto rotation correction in DVS. */
  enableRotationCorrection?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchTranslateDocumentRequestSchema: Schema<BatchTranslateDocumentRequest> =
  s.object<BatchTranslateDocumentRequest>(
    {
      customizedAttribution: s.optional(s.string()),
      outputConfig: s.optional(s.lazy(() => batchDocumentOutputConfig1Schema)),
      enableShadowRemovalNativePdf: s.optional(s.boolean()),
      models: s.optional(s.record(s.string(), s.string())),
      targetLanguageCodes: s.optional(s.array(s.string())),
      formatConversions: s.optional(s.record(s.string(), s.string())),
      glossaries: s.optional(
        s.record(
          s.string(),
          s.lazy(() => translateTextGlossaryConfigSchema),
        ),
      ),
      sourceLanguageCode: s.optional(s.string()),
      inputConfigs: s.optional(s.array(s.lazy(() => batchDocumentInputConfigSchema))),
      pdfNativeOnly: s.optional(s.boolean()),
      enableRotationCorrection: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
