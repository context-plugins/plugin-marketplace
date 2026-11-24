import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentIdentificationType1Schema,
  type ContentIdentificationType1,
} from "./content-identification-type1.js";
import {
  languageCode1AmazonTranscribeServiceMedicalTranscriptionJobApiSchema,
  type LanguageCode1AmazonTranscribeServiceMedicalTranscriptionJobApi,
} from "./language-code1-amazon-transcribe-service-medical-transcription-job-api.js";
import { outputLocationTypeSchema, type OutputLocationType } from "./output-location-type.js";
import { specialty1Schema, type Specialty1 } from "./specialty1.js";
import { transcriptionJobStatus1Schema, type TranscriptionJobStatus1 } from "./transcription-job-status1.js";
import { typeSchema, type Type } from "./type.js";

export type MedicalTranscriptionJobSummary = {
  /**
   * The name of the medical transcription job. Job names are case sensitive and must be unique
   * within an Amazon Web Services account.
   */
  medicalTranscriptionJobName?: string;
  /**
   * The date and time the specified medical transcription job request was made. Timestamps are in
   * the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  creationTime?: Date;
  /**
   * The date and time your medical transcription job began processing. Timestamps are in the format
   * YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a
   * transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  startTime?: Date;
  /**
   * The date and time the specified medical transcription job finished processing. Timestamps are
   * in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00
   * represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
   */
  completionTime?: Date;
  /**
   * The language code used to create your medical transcription. US English (en-US) is the only
   * supported language for medical transcriptions.
   */
  languageCode?: LanguageCode1AmazonTranscribeServiceMedicalTranscriptionJobApi;
  /**
   * Provides the status of your medical transcription job. If the status is COMPLETED, the job is
   * finished and you can find the results at the location specified in TranscriptFileUri. If the
   * status is FAILED, FailureReason provides details on why your transcription job failed.
   */
  transcriptionJobStatus?: TranscriptionJobStatus1;
  /**
   * If TranscriptionJobStatus is FAILED, FailureReason contains information about why the
   * transcription job failed. See also: Common Errors.
   */
  failureReason?: string;
  /**
   * Indicates where the specified medical transcription output is stored. If the value is
   * CUSTOMER_BUCKET, the location is the Amazon S3 bucket you specified using the OutputBucketName
   * parameter in your request. If you also included OutputKey in your request, your output is
   * located in the path you specified in your request. If the value is SERVICE_BUCKET, the location
   * is a service-managed Amazon S3 bucket. To access a transcript stored in a service-managed
   * bucket, use the URI shown in the TranscriptFileUri field.
   */
  outputLocationType?: OutputLocationType;
  /** Provides the medical specialty represented in your media. */
  specialty?: Specialty1;
  /**
   * Labels all personal health information (PHI) identified in your transcript. For more
   * information, see Identifying personal health information (PHI) in a transcription.
   */
  contentIdentificationType?: ContentIdentificationType1;
  /**
   * Indicates whether the input media is a dictation or a conversation, as specified in the
   * StartMedicalTranscriptionJob request.
   */
  type?: Type;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalTranscriptionJobSummarySchema: Schema<MedicalTranscriptionJobSummary> =
  s.object<MedicalTranscriptionJobSummary>(
    {
      medicalTranscriptionJobName: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      startTime: s.optional(s.dateTime()),
      completionTime: s.optional(s.dateTime()),
      languageCode: s.optional(
        s.lazy(() => languageCode1AmazonTranscribeServiceMedicalTranscriptionJobApiSchema),
      ),
      transcriptionJobStatus: s.optional(s.lazy(() => transcriptionJobStatus1Schema)),
      failureReason: s.optional(s.string()),
      outputLocationType: s.optional(s.lazy(() => outputLocationTypeSchema)),
      specialty: s.optional(s.lazy(() => specialty1Schema)),
      contentIdentificationType: s.optional(s.lazy(() => contentIdentificationType1Schema)),
      type: s.optional(s.lazy(() => typeSchema)),
      _keysMap: {
        medicalTranscriptionJobName: "MedicalTranscriptionJobName",
        creationTime: "CreationTime",
        startTime: "StartTime",
        completionTime: "CompletionTime",
        languageCode: "LanguageCode",
        transcriptionJobStatus: "TranscriptionJobStatus",
        failureReason: "FailureReason",
        outputLocationType: "OutputLocationType",
        specialty: "Specialty",
        contentIdentificationType: "ContentIdentificationType",
        type: "Type",
      },
    },
    { additionalProperties: s.json() },
  );
