import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { baseModelName1Schema, type BaseModelName1 } from "./base-model-name1.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import {
  languageCode1AmazonTranscribeServiceLanguageModelApiSchema,
  type LanguageCode1AmazonTranscribeServiceLanguageModelApi,
} from "./language-code1-amazon-transcribe-service-language-model-api.js";
import { modelStatusSchema, type ModelStatus } from "./model-status.js";

export type CreateLanguageModelResponse = {
  /** The language code you selected for your custom language model. */
  languageCode?: LanguageCode1AmazonTranscribeServiceLanguageModelApi;
  /**
   * The Amazon Transcribe standard language model, or base model, you specified when creating your
   * custom language model.
   */
  baseModelName?: BaseModelName1;
  /** The name of your custom language model. */
  modelName?: string;
  inputDataConfig?: InputDataConfig;
  /**
   * The status of your custom language model. When the status displays as COMPLETED, your model is
   * ready to use.
   */
  modelStatus?: ModelStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createLanguageModelResponseSchema: Schema<CreateLanguageModelResponse> =
  s.object<CreateLanguageModelResponse>(
    {
      languageCode: s.optional(s.lazy(() => languageCode1AmazonTranscribeServiceLanguageModelApiSchema)),
      baseModelName: s.optional(s.lazy(() => baseModelName1Schema)),
      modelName: s.optional(s.string()),
      inputDataConfig: s.optional(s.lazy(() => inputDataConfigSchema)),
      modelStatus: s.optional(s.lazy(() => modelStatusSchema)),
      _keysMap: {
        languageCode: "LanguageCode",
        baseModelName: "BaseModelName",
        modelName: "ModelName",
        inputDataConfig: "InputDataConfig",
        modelStatus: "ModelStatus",
      },
    },
    { additionalProperties: s.json() },
  );
