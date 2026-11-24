import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCode2AmazonTranscribeServiceOperationsApiSchema,
  type LanguageCode2AmazonTranscribeServiceOperationsApi,
} from "./language-code2-amazon-transcribe-service-operations-api.js";
import { mediaEncodingSchema, type MediaEncoding } from "./media-encoding.js";
import {
  medicalScribeEncryptionSettingsSchema,
  type MedicalScribeEncryptionSettings,
} from "./medical-scribe-encryption-settings.js";
import {
  medicalScribePostStreamAnalyticsResultSchema,
  type MedicalScribePostStreamAnalyticsResult,
} from "./medical-scribe-post-stream-analytics-result.js";
import {
  medicalScribePostStreamAnalyticsSettingsSchema,
  type MedicalScribePostStreamAnalyticsSettings,
} from "./medical-scribe-post-stream-analytics-settings.js";
import { streamStatusSchema, type StreamStatus } from "./stream-status.js";
import {
  transcribestreamingMedicalScribeChannelDefinitionSchema,
  type TranscribestreamingMedicalScribeChannelDefinition,
} from "./transcribestreaming-medical-scribe-channel-definition.js";
import {
  vocabularyFilterMethodAmazonTranscribeServiceOperationsApiSchema,
  type VocabularyFilterMethodAmazonTranscribeServiceOperationsApi,
} from "./vocabulary-filter-method-amazon-transcribe-service-operations-api.js";

export type MedicalScribeStreamDetails = {
  /** The identifier of the HealthScribe streaming session. */
  sessionId?: string;
  /** The date and time when the HealthScribe streaming session was created. */
  streamCreatedAt?: Date;
  /** The date and time when the HealthScribe streaming session was ended. */
  streamEndedAt?: Date;
  /** The Language Code of the HealthScribe streaming session. */
  languageCode?: LanguageCode2AmazonTranscribeServiceOperationsApi;
  /** The sample rate (in hertz) of the HealthScribe streaming session. */
  mediaSampleRateHertz?: number;
  /** The Media Encoding of the HealthScribe streaming session. */
  mediaEncoding?: MediaEncoding;
  /** The vocabulary name of the HealthScribe streaming session. */
  vocabularyName?: string;
  /** The name of the vocabulary filter used for the HealthScribe streaming session . */
  vocabularyFilterName?: string;
  /** The method of the vocabulary filter for the HealthScribe streaming session. */
  vocabularyFilterMethod?: VocabularyFilterMethodAmazonTranscribeServiceOperationsApi;
  /** The Amazon Resource Name (ARN) of the role used in the HealthScribe streaming session. */
  resourceAccessRoleArn?: string;
  /** The Channel Definitions of the HealthScribe streaming session. */
  channelDefinitions?: TranscribestreamingMedicalScribeChannelDefinition[];
  encryptionSettings?: MedicalScribeEncryptionSettings;
  /**
   * The streaming status of the HealthScribe streaming session. Possible Values: IN_PROGRESS PAUSED
   * FAILED COMPLETED This status is specific to real-time streaming. A COMPLETED status doesn't
   * mean that the post-stream analytics is complete. To get status of an analytics result, check
   * the Status field for the analytics result within the MedicalScribePostStreamAnalyticsResult.
   * For example, you can view the status of the ClinicalNoteGenerationResult.
   */
  streamStatus?: StreamStatus;
  postStreamAnalyticsSettings?: MedicalScribePostStreamAnalyticsSettings;
  postStreamAnalyticsResult?: MedicalScribePostStreamAnalyticsResult;
  /** Indicates whether the MedicalScribeContext object was provided when the stream was started. */
  medicalScribeContextProvided?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeStreamDetailsSchema: Schema<MedicalScribeStreamDetails> =
  s.object<MedicalScribeStreamDetails>(
    {
      sessionId: s.optional(s.string()),
      streamCreatedAt: s.optional(s.dateTime()),
      streamEndedAt: s.optional(s.dateTime()),
      languageCode: s.optional(s.lazy(() => languageCode2AmazonTranscribeServiceOperationsApiSchema)),
      mediaSampleRateHertz: s.optional(s.int()),
      mediaEncoding: s.optional(s.lazy(() => mediaEncodingSchema)),
      vocabularyName: s.optional(s.string()),
      vocabularyFilterName: s.optional(s.string()),
      vocabularyFilterMethod: s.optional(
        s.lazy(() => vocabularyFilterMethodAmazonTranscribeServiceOperationsApiSchema),
      ),
      resourceAccessRoleArn: s.optional(s.string()),
      channelDefinitions: s.optional(
        s.array(s.lazy(() => transcribestreamingMedicalScribeChannelDefinitionSchema)),
      ),
      encryptionSettings: s.optional(s.lazy(() => medicalScribeEncryptionSettingsSchema)),
      streamStatus: s.optional(s.lazy(() => streamStatusSchema)),
      postStreamAnalyticsSettings: s.optional(s.lazy(() => medicalScribePostStreamAnalyticsSettingsSchema)),
      postStreamAnalyticsResult: s.optional(s.lazy(() => medicalScribePostStreamAnalyticsResultSchema)),
      medicalScribeContextProvided: s.optional(s.boolean()),
      _keysMap: {
        sessionId: "SessionId",
        streamCreatedAt: "StreamCreatedAt",
        streamEndedAt: "StreamEndedAt",
        languageCode: "LanguageCode",
        mediaSampleRateHertz: "MediaSampleRateHertz",
        mediaEncoding: "MediaEncoding",
        vocabularyName: "VocabularyName",
        vocabularyFilterName: "VocabularyFilterName",
        vocabularyFilterMethod: "VocabularyFilterMethod",
        resourceAccessRoleArn: "ResourceAccessRoleArn",
        channelDefinitions: "ChannelDefinitions",
        encryptionSettings: "EncryptionSettings",
        streamStatus: "StreamStatus",
        postStreamAnalyticsSettings: "PostStreamAnalyticsSettings",
        postStreamAnalyticsResult: "PostStreamAnalyticsResult",
        medicalScribeContextProvided: "MedicalScribeContextProvided",
      },
    },
    { additionalProperties: s.json() },
  );
