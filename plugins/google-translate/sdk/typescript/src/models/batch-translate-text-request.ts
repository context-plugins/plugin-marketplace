import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputConfigSchema, type InputConfig } from "./input-config.js";
import { outputConfig2Schema, type OutputConfig2 } from "./output-config2.js";
import {
  translateTextGlossaryConfigSchema,
  type TranslateTextGlossaryConfig,
} from "./translate-text-glossary-config.js";

/** The batch translation request. */
export type BatchTranslateTextRequest = {
  /**
   * Required. Output configuration. If 2 input configs match to the same file (that is, same input
   * path), we don't generate output for duplicate inputs.
   */
  outputConfig?: OutputConfig2;
  /**
   * Required. Source language code. Supported language codes are listed in [Language
   * Support](https://cloud.google.com/translate/docs/languages).
   */
  sourceLanguageCode?: string;
  /**
   * Optional. The models to use for translation. Map's key is target language code. Map's value is
   * model name. Value can be a built-in general model, or an AutoML Translation model. The value
   * format depends on model type: - AutoML Translation models:
   * `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General
   * (built-in) models:
   * `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, If the map is
   * empty or a specific model is not requested for a language pair, then default google model (nmt)
   * is used.
   */
  models?: Record<string, string>;
  /**
   * Required. Specify up to 10 language codes here. Supported language codes are listed in
   * [Language Support](https://cloud.google.com/translate/docs/languages).
   */
  targetLanguageCodes?: string[];
  /** Optional. Glossaries to be applied for translation. It's keyed by target language code. */
  glossaries?: Record<string, TranslateTextGlossaryConfig>;
  /**
   * Optional. The labels with user-defined metadata for the request. Label keys and values can be
   * no longer than 63 characters (Unicode codepoints), can only contain lowercase letters, numeric
   * characters, underscores and dashes. International characters are allowed. Label values are
   * optional. Label keys must start with a letter. See
   * https://cloud.google.com/translate/docs/advanced/labels for more information.
   */
  labels?: Record<string, string>;
  /**
   * Required. Input configurations. The total number of files matched should be <= 100. The total
   * content size should be <= 100M Unicode codepoints. The files must use UTF-8 encoding.
   */
  inputConfigs?: InputConfig[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchTranslateTextRequestSchema: Schema<BatchTranslateTextRequest> =
  s.object<BatchTranslateTextRequest>(
    {
      outputConfig: s.optional(s.lazy(() => outputConfig2Schema)),
      sourceLanguageCode: s.optional(s.string()),
      models: s.optional(s.record(s.string(), s.string())),
      targetLanguageCodes: s.optional(s.array(s.string())),
      glossaries: s.optional(
        s.record(
          s.string(),
          s.lazy(() => translateTextGlossaryConfigSchema),
        ),
      ),
      labels: s.optional(s.record(s.string(), s.string())),
      inputConfigs: s.optional(s.array(s.lazy(() => inputConfigSchema))),
    },
    { additionalProperties: s.json() },
  );
