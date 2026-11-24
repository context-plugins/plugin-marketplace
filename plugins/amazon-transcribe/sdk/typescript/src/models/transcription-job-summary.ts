import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentRedactionSchema, type ContentRedaction } from "./content-redaction.js";
import { languageCodeItemSchema, type LanguageCodeItem } from "./language-code-item.js";
import {
  languageCode2AmazonTranscribeServiceTranscriptionJobsApiSchema,
  type LanguageCode2AmazonTranscribeServiceTranscriptionJobsApi,
} from "./language-code2-amazon-transcribe-service-transcription-jobs-api.js";
import { modelSettingsSchema, type ModelSettings } from "./model-settings.js";
import {
  outputLocationTypeAmazonTranscribeServiceTranscriptionJobsApiSchema,
  type OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi,
} from "./output-location-type-amazon-transcribe-service-transcription-jobs-api.js";
import {
  toxicityDetectionSettingsSchema,
  type ToxicityDetectionSettings,
} from "./toxicity-detection-settings.js";
import {
  transcriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApiSchema,
  type TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApi,
} from "./transcription-job-status1-amazon-transcribe-service-transcription-jobs-api.js";

export type TranscriptionJobSummary = {
  /**
   * The name of the transcription job. Job names are case sensitive and must be unique within an
   * Amazon Web Services account.
   */
  transcriptionJobName?: string;
  /**
   * The date and time the specified transcription job request was made. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  creationTime?: Date;
  /**
   * The date and time your transcription job began processing. Timestamps are in the format
   * YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a
   * transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  startTime?: Date;
  /**
   * The date and time the specified transcription job finished processing. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00
   * represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
   */
  completionTime?: Date;
  /** The language code used to create your transcription. */
  languageCode?: LanguageCode2AmazonTranscribeServiceTranscriptionJobsApi;
  /**
   * Provides the status of your transcription job. If the status is COMPLETED, the job is finished
   * and you can find the results at the location specified in TranscriptFileUri (or
   * RedactedTranscriptFileUri, if you requested transcript redaction). If the status is FAILED,
   * FailureReason provides details on why your transcription job failed.
   */
  transcriptionJobStatus?: TranscriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApi;
  /**
   * If TranscriptionJobStatus is FAILED, FailureReason contains information about why the
   * transcription job failed. See also: Common Errors.
   */
  failureReason?: string;
  /**
   * Indicates where the specified transcription output is stored. If the value is CUSTOMER_BUCKET,
   * the location is the Amazon S3 bucket you specified using the OutputBucketName parameter in your
   * request. If you also included OutputKey in your request, your output is located in the path you
   * specified in your request. If the value is SERVICE_BUCKET, the location is a service-managed
   * Amazon S3 bucket. To access a transcript stored in a service-managed bucket, use the URI shown
   * in the TranscriptFileUri or RedactedTranscriptFileUri field.
   */
  outputLocationType?: OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi;
  contentRedaction?: ContentRedaction;
  modelSettings?: ModelSettings;
  /**
   * Indicates whether automatic language identification was enabled (TRUE) for the specified
   * transcription job.
   */
  identifyLanguage?: boolean;
  /**
   * Indicates whether automatic multi-language identification was enabled (TRUE) for the specified
   * transcription job.
   */
  identifyMultipleLanguages?: boolean;
  /**
   * The confidence score associated with the language identified in your media file. Confidence
   * scores are values between 0 and 1; a larger value indicates a higher probability that the
   * identified language correctly matches the language spoken in your media.
   */
  identifiedLanguageScore?: number;
  /**
   * The language codes used to create your transcription job. This parameter is used with
   * multi-language identification. For single-language identification, the singular version of this
   * parameter, LanguageCode, is present.
   */
  languageCodes?: LanguageCodeItem[];
  /** Indicates whether toxicity detection was enabled for the specified transcription job. */
  toxicityDetection?: ToxicityDetectionSettings[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptionJobSummarySchema: Schema<TranscriptionJobSummary> =
  s.object<TranscriptionJobSummary>(
    {
      transcriptionJobName: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      startTime: s.optional(s.dateTime()),
      completionTime: s.optional(s.dateTime()),
      languageCode: s.optional(s.lazy(() => languageCode2AmazonTranscribeServiceTranscriptionJobsApiSchema)),
      transcriptionJobStatus: s.optional(
        s.lazy(() => transcriptionJobStatus1AmazonTranscribeServiceTranscriptionJobsApiSchema),
      ),
      failureReason: s.optional(s.string()),
      outputLocationType: s.optional(
        s.lazy(() => outputLocationTypeAmazonTranscribeServiceTranscriptionJobsApiSchema),
      ),
      contentRedaction: s.optional(s.lazy(() => contentRedactionSchema)),
      modelSettings: s.optional(s.lazy(() => modelSettingsSchema)),
      identifyLanguage: s.optional(s.boolean()),
      identifyMultipleLanguages: s.optional(s.boolean()),
      identifiedLanguageScore: s.optional(s.float64()),
      languageCodes: s.optional(s.array(s.lazy(() => languageCodeItemSchema))),
      toxicityDetection: s.optional(s.array(s.lazy(() => toxicityDetectionSettingsSchema))),
      _keysMap: {
        transcriptionJobName: "TranscriptionJobName",
        creationTime: "CreationTime",
        startTime: "StartTime",
        completionTime: "CompletionTime",
        languageCode: "LanguageCode",
        transcriptionJobStatus: "TranscriptionJobStatus",
        failureReason: "FailureReason",
        outputLocationType: "OutputLocationType",
        contentRedaction: "ContentRedaction",
        modelSettings: "ModelSettings",
        identifyLanguage: "IdentifyLanguage",
        identifyMultipleLanguages: "IdentifyMultipleLanguages",
        identifiedLanguageScore: "IdentifiedLanguageScore",
        languageCodes: "LanguageCodes",
        toxicityDetection: "ToxicityDetection",
      },
    },
    { additionalProperties: s.json() },
  );
