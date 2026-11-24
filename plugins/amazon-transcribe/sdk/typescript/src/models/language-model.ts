import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { baseModelName2Schema, type BaseModelName2 } from "./base-model-name2.js";
import { encryptionConfigurationSchema, type EncryptionConfiguration } from "./encryption-configuration.js";
import { inputDataConfigSchema, type InputDataConfig } from "./input-data-config.js";
import { languageCode2Schema, type LanguageCode2 } from "./language-code2.js";
import { modelStatus1Schema, type ModelStatus1 } from "./model-status1.js";

export type LanguageModel = {
  /**
   * A unique name, chosen by you, for your custom language model. This name is case sensitive,
   * cannot contain spaces, and must be unique within an Amazon Web Services account.
   */
  modelName?: string;
  /**
   * The date and time the specified custom language model was created. Timestamps are in the format
   * YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents
   * 12:32 PM UTC-7 on May 4, 2022.
   */
  createTime?: Date;
  /**
   * The date and time the specified custom language model was last modified. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents 12:32 PM UTC-7 on May 4, 2022.
   */
  lastModifiedTime?: Date;
  /**
   * The language code used to create your custom language model. Each custom language model must
   * contain terms in only one language, and the language you select for your custom language model
   * must match the language of your training and tuning data. For a list of supported languages and
   * their associated language codes, refer to the Supported languages table. Note that US English
   * (en-US) is the only language supported with Amazon Transcribe Medical.
   */
  languageCode?: LanguageCode2;
  /**
   * The Amazon Transcribe standard language model, or base model, used to create your custom
   * language model.
   */
  baseModelName?: BaseModelName2;
  /**
   * The status of the specified custom language model. When the status displays as COMPLETED the
   * model is ready for use.
   */
  modelStatus?: ModelStatus1;
  /**
   * Shows if a more current base model is available for use with the specified custom language
   * model. If false, your custom language model is using the most up-to-date base model. If true,
   * there is a newer base model available than the one your language model is using. Note that to
   * update a base model, you must recreate the custom language model using the new base model. Base
   * model upgrades for existing custom language models are not supported.
   */
  upgradeAvailability?: boolean;
  /**
   * If ModelStatus is FAILED, FailureReason contains information about why the custom language
   * model request failed. See also: Common Errors.
   */
  failureReason?: string;
  inputDataConfig?: InputDataConfig;
  encryptionConfiguration?: EncryptionConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const languageModelSchema: Schema<LanguageModel> = s.object<LanguageModel>(
  {
    modelName: s.optional(s.string()),
    createTime: s.optional(s.dateTime()),
    lastModifiedTime: s.optional(s.dateTime()),
    languageCode: s.optional(s.lazy(() => languageCode2Schema)),
    baseModelName: s.optional(s.lazy(() => baseModelName2Schema)),
    modelStatus: s.optional(s.lazy(() => modelStatus1Schema)),
    upgradeAvailability: s.optional(s.boolean()),
    failureReason: s.optional(s.string()),
    inputDataConfig: s.optional(s.lazy(() => inputDataConfigSchema)),
    encryptionConfiguration: s.optional(s.lazy(() => encryptionConfigurationSchema)),
    _keysMap: {
      modelName: "ModelName",
      createTime: "CreateTime",
      lastModifiedTime: "LastModifiedTime",
      languageCode: "LanguageCode",
      baseModelName: "BaseModelName",
      modelStatus: "ModelStatus",
      upgradeAvailability: "UpgradeAvailability",
      failureReason: "FailureReason",
      inputDataConfig: "InputDataConfig",
      encryptionConfiguration: "EncryptionConfiguration",
    },
  },
  { additionalProperties: s.json() },
);
