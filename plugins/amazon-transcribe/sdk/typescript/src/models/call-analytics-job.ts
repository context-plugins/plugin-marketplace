import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callAnalyticsJobDetailsSchema, type CallAnalyticsJobDetails } from "./call-analytics-job-details.js";
import {
  callAnalyticsJobSettingsSchema,
  type CallAnalyticsJobSettings,
} from "./call-analytics-job-settings.js";
import { callAnalyticsJobStatusSchema, type CallAnalyticsJobStatus } from "./call-analytics-job-status.js";
import { channelDefinitionSchema, type ChannelDefinition } from "./channel-definition.js";
import { languageCodeSchema, type LanguageCode } from "./language-code.js";
import { mediaFormatSchema, type MediaFormat } from "./media-format.js";
import { mediaSchema, type Media } from "./media.js";
import { tagSchema, type Tag } from "./tag.js";
import { transcriptSchema, type Transcript } from "./transcript.js";

export type CallAnalyticsJob = {
  /**
   * The name of the Call Analytics job. Job names are case sensitive and must be unique within an
   * Amazon Web Services account.
   */
  callAnalyticsJobName?: string;
  /**
   * Provides the status of the specified Call Analytics job. If the status is COMPLETED, the job is
   * finished and you can find the results at the location specified in TranscriptFileUri (or
   * RedactedTranscriptFileUri, if you requested transcript redaction). If the status is FAILED,
   * FailureReason provides details on why your transcription job failed.
   */
  callAnalyticsJobStatus?: CallAnalyticsJobStatus;
  callAnalyticsJobDetails?: CallAnalyticsJobDetails;
  /**
   * The language code used to create your Call Analytics job. For a list of supported languages and
   * their associated language codes, refer to the Supported languages table. If you do not know the
   * language spoken in your media file, you can omit this field and let Amazon Transcribe
   * automatically identify the language of your media. To improve the accuracy of language
   * identification, you can include several language codes and Amazon Transcribe chooses the
   * closest match for your transcription.
   */
  languageCode?: LanguageCode;
  /** The sample rate, in hertz, of the audio track in your input media file. */
  mediaSampleRateHertz?: number;
  /** The format of the input media file. */
  mediaFormat?: MediaFormat;
  media?: Media;
  transcript?: Transcript;
  /**
   * The date and time the specified Call Analytics job began processing. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00
   * represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  startTime?: Date;
  /**
   * The date and time the specified Call Analytics job request was made. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  creationTime?: Date;
  /**
   * The date and time the specified Call Analytics job finished processing. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00
   * represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
   */
  completionTime?: Date;
  /**
   * If CallAnalyticsJobStatus is FAILED, FailureReason contains information about why the Call
   * Analytics job request failed. The FailureReason field contains one of the following values:
   * Unsupported media format. The media format specified in MediaFormat isn't valid. Refer to refer
   * to the MediaFormat parameter for a list of supported formats. The media format provided does
   * not match the detected media format. The media format specified in MediaFormat doesn't match
   * the format of the input file. Check the media format of your media file and correct the
   * specified value. Invalid sample rate for audio
   */
  failureReason?: string;
  /** The Amazon Resource Name (ARN) you included in your request. */
  dataAccessRoleArn?: string;
  /**
   * The confidence score associated with the language identified in your media file. Confidence
   * scores are values between 0 and 1; a larger value indicates a higher probability that the
   * identified language correctly matches the language spoken in your media.
   */
  identifiedLanguageScore?: number;
  settings?: CallAnalyticsJobSettings;
  /** Indicates which speaker is on which channel. */
  channelDefinitions?: ChannelDefinition[];
  /**
   * The tags, each in the form of a key:value pair, assigned to the specified call analytics job.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const callAnalyticsJobSchema: Schema<CallAnalyticsJob> = s.object<CallAnalyticsJob>(
  {
    callAnalyticsJobName: s.optional(s.string()),
    callAnalyticsJobStatus: s.optional(s.lazy(() => callAnalyticsJobStatusSchema)),
    callAnalyticsJobDetails: s.optional(s.lazy(() => callAnalyticsJobDetailsSchema)),
    languageCode: s.optional(s.lazy(() => languageCodeSchema)),
    mediaSampleRateHertz: s.optional(s.int()),
    mediaFormat: s.optional(s.lazy(() => mediaFormatSchema)),
    media: s.optional(s.lazy(() => mediaSchema)),
    transcript: s.optional(s.lazy(() => transcriptSchema)),
    startTime: s.optional(s.dateTime()),
    creationTime: s.optional(s.dateTime()),
    completionTime: s.optional(s.dateTime()),
    failureReason: s.optional(s.string()),
    dataAccessRoleArn: s.optional(s.string()),
    identifiedLanguageScore: s.optional(s.float64()),
    settings: s.optional(s.lazy(() => callAnalyticsJobSettingsSchema)),
    channelDefinitions: s.optional(s.array(s.lazy(() => channelDefinitionSchema))),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    _keysMap: {
      callAnalyticsJobName: "CallAnalyticsJobName",
      callAnalyticsJobStatus: "CallAnalyticsJobStatus",
      callAnalyticsJobDetails: "CallAnalyticsJobDetails",
      languageCode: "LanguageCode",
      mediaSampleRateHertz: "MediaSampleRateHertz",
      mediaFormat: "MediaFormat",
      media: "Media",
      transcript: "Transcript",
      startTime: "StartTime",
      creationTime: "CreationTime",
      completionTime: "CompletionTime",
      failureReason: "FailureReason",
      dataAccessRoleArn: "DataAccessRoleArn",
      identifiedLanguageScore: "IdentifiedLanguageScore",
      settings: "Settings",
      channelDefinitions: "ChannelDefinitions",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
