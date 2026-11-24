import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { baseModelNameSchema, type BaseModelName } from "./base-model-name.js";
import { encryptionConfigurationSchema, type EncryptionConfiguration } from "./encryption-configuration.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import {
  languageCodeAmazonTranscribeServiceLanguageModelApiSchema,
  type LanguageCodeAmazonTranscribeServiceLanguageModelApi,
} from "./language-code-amazon-transcribe-service-language-model-api.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateLanguageModelRequest = {
  /**
   * The language code that represents the language of your model. Each custom language model must
   * contain terms in only one language, and the language you select for your custom language model
   * must match the language of your training and tuning data. For a list of supported languages and
   * their associated language codes, refer to the Supported languages table. Note that US English
   * (en-US) is the only language supported with Amazon Transcribe Medical. A custom language model
   * can only be used to transcribe files in the same language as the model. For example, if you
   * create a custom language model usi
   */
  languageCode: LanguageCodeAmazonTranscribeServiceLanguageModelApi;
  /**
   * The Amazon Transcribe standard language model, or base model, used to create your custom
   * language model. Amazon Transcribe offers two options for base models: Wideband and Narrowband.
   * If the audio you want to transcribe has a sample rate of 16,000 Hz or greater, choose WideBand.
   * To transcribe audio with a sample rate less than 16,000 Hz, choose NarrowBand.
   */
  baseModelName: BaseModelName;
  /**
   * A unique name, chosen by you, for your custom language model. This name is case sensitive,
   * cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to
   * create a new custom language model with the same name as an existing custom language model, you
   * get a ConflictException error.
   */
  modelName: string;
  inputDataConfig: InputDataConfig;
  encryptionConfiguration?: EncryptionConfiguration;
  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new custom language
   * model at the time you create this new model. To learn more about using tags with Amazon
   * Transcribe, refer to Tagging resources.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createLanguageModelRequestSchema: Schema<CreateLanguageModelRequest> =
  s.object<CreateLanguageModelRequest>(
    {
      languageCode: languageCodeAmazonTranscribeServiceLanguageModelApiSchema,
      baseModelName: baseModelNameSchema,
      modelName: s.string(),
      inputDataConfig: inputDataConfigSchema,
      encryptionConfiguration: s.optional(s.lazy(() => encryptionConfigurationSchema)),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        languageCode: "LanguageCode",
        baseModelName: "BaseModelName",
        modelName: "ModelName",
        inputDataConfig: "InputDataConfig",
        encryptionConfiguration: "EncryptionConfiguration",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
