import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentRedactionSchema, type ContentRedaction } from "./content-redaction.js";
import { jobExecutionSettingsSchema, type JobExecutionSettings } from "./job-execution-settings.js";
import {
  languageCodeAmazonTranscribeServiceTranscriptionJobsApiSchema,
  type LanguageCodeAmazonTranscribeServiceTranscriptionJobsApi,
} from "./language-code-amazon-transcribe-service-transcription-jobs-api.js";
import { languageCodeItemSchema, type LanguageCodeItem } from "./language-code-item.js";
import { languageIdSettingsSchema, type LanguageIdSettings } from "./language-id-settings.js";
import { languageOptionSchema, type LanguageOption } from "./language-option.js";
import { mediaFormatSchema, type MediaFormat } from "./media-format.js";
import { mediaSchema, type Media } from "./media.js";
import { modelSettingsSchema, type ModelSettings } from "./model-settings.js";
import { settingsSchema, type Settings } from "./settings.js";
import { subtitlesOutputSchema, type SubtitlesOutput } from "./subtitles-output.js";
import { tagSchema, type Tag } from "./tag.js";
import {
  toxicityDetectionSettingsSchema,
  type ToxicityDetectionSettings,
} from "./toxicity-detection-settings.js";
import { transcriptSchema, type Transcript } from "./transcript.js";
import {
  transcriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApiSchema,
  type TranscriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApi,
} from "./transcription-job-status-amazon-transcribe-service-transcription-jobs-api.js";

export type TranscriptionJob = {
  /**
   * The name of the transcription job. Job names are case sensitive and must be unique within an
   * Amazon Web Services account.
   */
  transcriptionJobName?: string;
  /**
   * Provides the status of the specified transcription job. If the status is COMPLETED, the job is
   * finished and you can find the results at the location specified in TranscriptFileUri (or
   * RedactedTranscriptFileUri, if you requested transcript redaction). If the status is FAILED,
   * FailureReason provides details on why your transcription job failed.
   */
  transcriptionJobStatus?: TranscriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApi;
  /**
   * The language code used to create your transcription job. This parameter is used with
   * single-language identification. For multi-language identification requests, refer to the plural
   * version of this parameter, LanguageCodes.
   */
  languageCode?: LanguageCodeAmazonTranscribeServiceTranscriptionJobsApi;
  /** The sample rate, in hertz, of the audio track in your input media file. */
  mediaSampleRateHertz?: number;
  /** The format of the input media file. */
  mediaFormat?: MediaFormat;
  media?: Media;
  transcript?: Transcript;
  /**
   * The date and time the specified transcription job began processing. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00
   * represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  startTime?: Date;
  /**
   * The date and time the specified transcription job request was made. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  creationTime?: Date;
  /**
   * The date and time the specified transcription job finished processing. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00
   * represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
   */
  completionTime?: Date;
  /**
   * If TranscriptionJobStatus is FAILED, FailureReason contains information about why the
   * transcription job request failed. The FailureReason field contains one of the following values:
   * Unsupported media format. The media format specified in MediaFormat isn't valid. Refer to refer
   * to the MediaFormat parameter for a list of supported formats. The media format provided does
   * not match the detected media format. The media format specified in MediaFormat doesn't match
   * the format of the input file. Check the media format of your media file and correct the
   * specified value. Invalid sample rate for audio f
   */
  failureReason?: string;
  settings?: Settings;
  modelSettings?: ModelSettings;
  jobExecutionSettings?: JobExecutionSettings;
  contentRedaction?: ContentRedaction;
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
  /** Provides the language codes you specified in your request. */
  languageOptions?: LanguageOption[];
  /**
   * The confidence score associated with the language identified in your media file. Confidence
   * scores are values between 0 and 1; a larger value indicates a higher probability that the
   * identified language correctly matches the language spoken in your media.
   */
  identifiedLanguageScore?: number;
  /**
   * The language codes used to create your transcription job. This parameter is used with
   * multi-language identification. For single-language identification requests, refer to the
   * singular version of this parameter, LanguageCode.
   */
  languageCodes?: LanguageCodeItem[];
  /**
   * The tags, each in the form of a key:value pair, assigned to the specified transcription job.
   */
  tags?: Tag[];
  subtitles?: SubtitlesOutput;
  /**
   * Provides the name and language of all custom language models, custom vocabularies, and custom
   * vocabulary filters that you included in your request.
   */
  languageIdSettings?: Record<string, LanguageIdSettings>;
  /** Provides information about the toxicity detection settings applied to your transcription. */
  toxicityDetection?: ToxicityDetectionSettings[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptionJobSchema: Schema<TranscriptionJob> = s.object<TranscriptionJob>(
  {
    transcriptionJobName: s.optional(s.string()),
    transcriptionJobStatus: s.optional(
      s.lazy(() => transcriptionJobStatusAmazonTranscribeServiceTranscriptionJobsApiSchema),
    ),
    languageCode: s.optional(s.lazy(() => languageCodeAmazonTranscribeServiceTranscriptionJobsApiSchema)),
    mediaSampleRateHertz: s.optional(s.int()),
    mediaFormat: s.optional(s.lazy(() => mediaFormatSchema)),
    media: s.optional(s.lazy(() => mediaSchema)),
    transcript: s.optional(s.lazy(() => transcriptSchema)),
    startTime: s.optional(s.dateTime()),
    creationTime: s.optional(s.dateTime()),
    completionTime: s.optional(s.dateTime()),
    failureReason: s.optional(s.string()),
    settings: s.optional(s.lazy(() => settingsSchema)),
    modelSettings: s.optional(s.lazy(() => modelSettingsSchema)),
    jobExecutionSettings: s.optional(s.lazy(() => jobExecutionSettingsSchema)),
    contentRedaction: s.optional(s.lazy(() => contentRedactionSchema)),
    identifyLanguage: s.optional(s.boolean()),
    identifyMultipleLanguages: s.optional(s.boolean()),
    languageOptions: s.optional(s.array(s.lazy(() => languageOptionSchema))),
    identifiedLanguageScore: s.optional(s.float64()),
    languageCodes: s.optional(s.array(s.lazy(() => languageCodeItemSchema))),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    subtitles: s.optional(s.lazy(() => subtitlesOutputSchema)),
    languageIdSettings: s.optional(
      s.record(
        s.string(),
        s.lazy(() => languageIdSettingsSchema),
      ),
    ),
    toxicityDetection: s.optional(s.array(s.lazy(() => toxicityDetectionSettingsSchema))),
    _keysMap: {
      transcriptionJobName: "TranscriptionJobName",
      transcriptionJobStatus: "TranscriptionJobStatus",
      languageCode: "LanguageCode",
      mediaSampleRateHertz: "MediaSampleRateHertz",
      mediaFormat: "MediaFormat",
      media: "Media",
      transcript: "Transcript",
      startTime: "StartTime",
      creationTime: "CreationTime",
      completionTime: "CompletionTime",
      failureReason: "FailureReason",
      settings: "Settings",
      modelSettings: "ModelSettings",
      jobExecutionSettings: "JobExecutionSettings",
      contentRedaction: "ContentRedaction",
      identifyLanguage: "IdentifyLanguage",
      identifyMultipleLanguages: "IdentifyMultipleLanguages",
      languageOptions: "LanguageOptions",
      identifiedLanguageScore: "IdentifiedLanguageScore",
      languageCodes: "LanguageCodes",
      tags: "Tags",
      subtitles: "Subtitles",
      languageIdSettings: "LanguageIdSettings",
      toxicityDetection: "ToxicityDetection",
    },
  },
  { additionalProperties: s.json() },
);
