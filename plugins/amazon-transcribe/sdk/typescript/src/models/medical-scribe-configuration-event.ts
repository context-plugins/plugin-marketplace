import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { medicalScribeContextSchema, type MedicalScribeContext } from "./medical-scribe-context.js";
import {
  medicalScribeEncryptionSettingsSchema,
  type MedicalScribeEncryptionSettings,
} from "./medical-scribe-encryption-settings.js";
import {
  medicalScribePostStreamAnalyticsSettingsSchema,
  type MedicalScribePostStreamAnalyticsSettings,
} from "./medical-scribe-post-stream-analytics-settings.js";
import {
  transcribestreamingMedicalScribeChannelDefinitionSchema,
  type TranscribestreamingMedicalScribeChannelDefinition,
} from "./transcribestreaming-medical-scribe-channel-definition.js";
import { vocabularyFilterMethod1Schema, type VocabularyFilterMethod1 } from "./vocabulary-filter-method1.js";

export type MedicalScribeConfigurationEvent = {
  /**
   * Specify the name of the custom vocabulary you want to use for your streaming session. Custom
   * vocabulary names are case-sensitive.
   */
  vocabularyName?: string;
  /**
   * Specify the name of the custom vocabulary filter you want to include in your streaming session.
   * Custom vocabulary filter names are case-sensitive. If you include VocabularyFilterName in the
   * MedicalScribeConfigurationEvent, you must also include VocabularyFilterMethod.
   */
  vocabularyFilterName?: string;
  /**
   * Specify how you want your custom vocabulary filter applied to the streaming session. To replace
   * words with ***, specify mask. To delete words, specify remove. To flag words without changing
   * them, specify tag.
   */
  vocabularyFilterMethod?: VocabularyFilterMethod1;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3
   * output bucket you specified, and use your KMS key if supplied. If the role that you specify
   * doesn’t have the appropriate permissions, your request fails. IAM role ARNs have the format
   * arn:partition:iam::account:role/role-name-with-path. For example:
   * arn:aws:iam::111122223333:role/Admin. For more information, see Amazon Web Services
   * HealthScribe.
   */
  resourceAccessRoleArn: string;
  /** Specify which speaker is on which audio channel. */
  channelDefinitions?: TranscribestreamingMedicalScribeChannelDefinition[];
  encryptionSettings?: MedicalScribeEncryptionSettings;
  postStreamAnalyticsSettings: MedicalScribePostStreamAnalyticsSettings;
  medicalScribeContext?: MedicalScribeContext;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeConfigurationEventSchema: Schema<MedicalScribeConfigurationEvent> =
  s.object<MedicalScribeConfigurationEvent>(
    {
      vocabularyName: s.optional(s.string()),
      vocabularyFilterName: s.optional(s.string()),
      vocabularyFilterMethod: s.optional(s.lazy(() => vocabularyFilterMethod1Schema)),
      resourceAccessRoleArn: s.string(),
      channelDefinitions: s.optional(
        s.array(s.lazy(() => transcribestreamingMedicalScribeChannelDefinitionSchema)),
      ),
      encryptionSettings: s.optional(s.lazy(() => medicalScribeEncryptionSettingsSchema)),
      postStreamAnalyticsSettings: medicalScribePostStreamAnalyticsSettingsSchema,
      medicalScribeContext: s.optional(s.lazy(() => medicalScribeContextSchema)),
      _keysMap: {
        vocabularyName: "VocabularyName",
        vocabularyFilterName: "VocabularyFilterName",
        vocabularyFilterMethod: "VocabularyFilterMethod",
        resourceAccessRoleArn: "ResourceAccessRoleArn",
        channelDefinitions: "ChannelDefinitions",
        encryptionSettings: "EncryptionSettings",
        postStreamAnalyticsSettings: "PostStreamAnalyticsSettings",
        medicalScribeContext: "MedicalScribeContext",
      },
    },
    { additionalProperties: s.json() },
  );
