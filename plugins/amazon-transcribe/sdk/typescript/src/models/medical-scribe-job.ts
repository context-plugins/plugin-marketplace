import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCodeAmazonTranscribeServiceMedicalScribeJobApiSchema,
  type LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi,
} from "./language-code-amazon-transcribe-service-medical-scribe-job-api.js";
import { mediaSchema, type Media } from "./media.js";
import {
  medicalScribeChannelDefinitionSchema,
  type MedicalScribeChannelDefinition,
} from "./medical-scribe-channel-definition.js";
import { medicalScribeJobStatusSchema, type MedicalScribeJobStatus } from "./medical-scribe-job-status.js";
import { medicalScribeOutputSchema, type MedicalScribeOutput } from "./medical-scribe-output.js";
import { medicalScribeSettingsSchema, type MedicalScribeSettings } from "./medical-scribe-settings.js";
import { tagSchema, type Tag } from "./tag.js";

export type MedicalScribeJob = {
  /**
   * The name of the Medical Scribe job. Job names are case sensitive and must be unique within an
   * Amazon Web Services account.
   */
  medicalScribeJobName?: string;
  /**
   * Provides the status of the specified Medical Scribe job. If the status is COMPLETED, the job is
   * finished and you can find the results at the location specified in MedicalScribeOutput If the
   * status is FAILED, FailureReason provides details on why your Medical Scribe job failed.
   */
  medicalScribeJobStatus?: MedicalScribeJobStatus;
  /**
   * The language code used to create your Medical Scribe job. US English (en-US) is the only
   * supported language for Medical Scribe jobs.
   */
  languageCode?: LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi;
  media?: Media;
  medicalScribeOutput?: MedicalScribeOutput;
  /**
   * The date and time your Medical Scribe job began processing. Timestamps are in the format
   * YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a
   * Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  startTime?: Date;
  /**
   * The date and time the specified Medical Scribe job request was made. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents a Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  creationTime?: Date;
  /**
   * The date and time the specified Medical Scribe job finished processing. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents a Medical Scribe job that finished processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  completionTime?: Date;
  /**
   * If MedicalScribeJobStatus is FAILED, FailureReason contains information about why the
   * transcription job failed. See also: Common Errors.
   */
  failureReason?: string;
  settings?: MedicalScribeSettings;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3
   * bucket that contains your input files, write to the output bucket, and use your KMS key if
   * supplied. If the role that you specify doesn’t have the appropriate permissions your request
   * fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For
   * example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs.
   */
  dataAccessRoleArn?: string;
  /**
   * Makes it possible to specify which speaker is on which channel. For example, if the clinician
   * is the first participant to speak, you would set ChannelId of the first ChannelDefinition in
   * the list to 0 (to indicate the first channel) and ParticipantRole to CLINICIAN (to indicate
   * that it's the clinician speaking). Then you would set the ChannelId of the second
   * ChannelDefinition in the list to 1 (to indicate the second channel) and ParticipantRole to
   * PATIENT (to indicate that it's the patient speaking).
   */
  channelDefinitions?: MedicalScribeChannelDefinition[];
  /**
   * Indicates whether the MedicalScribeContext object was provided when the Medical Scribe job was
   * started.
   */
  medicalScribeContextProvided?: boolean;
  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to the Medical Scribe job.
   * To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeJobSchema: Schema<MedicalScribeJob> = s.object<MedicalScribeJob>(
  {
    medicalScribeJobName: s.optional(s.string()),
    medicalScribeJobStatus: s.optional(s.lazy(() => medicalScribeJobStatusSchema)),
    languageCode: s.optional(s.lazy(() => languageCodeAmazonTranscribeServiceMedicalScribeJobApiSchema)),
    media: s.optional(s.lazy(() => mediaSchema)),
    medicalScribeOutput: s.optional(s.lazy(() => medicalScribeOutputSchema)),
    startTime: s.optional(s.dateTime()),
    creationTime: s.optional(s.dateTime()),
    completionTime: s.optional(s.dateTime()),
    failureReason: s.optional(s.string()),
    settings: s.optional(s.lazy(() => medicalScribeSettingsSchema)),
    dataAccessRoleArn: s.optional(s.string()),
    channelDefinitions: s.optional(s.array(s.lazy(() => medicalScribeChannelDefinitionSchema))),
    medicalScribeContextProvided: s.optional(s.boolean()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    _keysMap: {
      medicalScribeJobName: "MedicalScribeJobName",
      medicalScribeJobStatus: "MedicalScribeJobStatus",
      languageCode: "LanguageCode",
      media: "Media",
      medicalScribeOutput: "MedicalScribeOutput",
      startTime: "StartTime",
      creationTime: "CreationTime",
      completionTime: "CompletionTime",
      failureReason: "FailureReason",
      settings: "Settings",
      dataAccessRoleArn: "DataAccessRoleArn",
      channelDefinitions: "ChannelDefinitions",
      medicalScribeContextProvided: "MedicalScribeContextProvided",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
