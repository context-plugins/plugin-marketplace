import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contentIdentificationTypeSchema,
  type ContentIdentificationType,
} from "./content-identification-type.js";
import {
  languageCodeAmazonTranscribeServiceMedicalTranscriptionJobApiSchema,
  type LanguageCodeAmazonTranscribeServiceMedicalTranscriptionJobApi,
} from "./language-code-amazon-transcribe-service-medical-transcription-job-api.js";
import { mediaFormatSchema, type MediaFormat } from "./media-format.js";
import { mediaSchema, type Media } from "./media.js";
import { medicalTranscriptSchema, type MedicalTranscript } from "./medical-transcript.js";
import {
  medicalTranscriptionSettingSchema,
  type MedicalTranscriptionSetting,
} from "./medical-transcription-setting.js";
import { specialtySchema, type Specialty } from "./specialty.js";
import { tagSchema, type Tag } from "./tag.js";
import { transcriptionJobStatusSchema, type TranscriptionJobStatus } from "./transcription-job-status.js";
import { typeSchema, type Type } from "./type.js";

export type MedicalTranscriptionJob = {
  /**
   * The name of the medical transcription job. Job names are case sensitive and must be unique
   * within an Amazon Web Services account.
   */
  medicalTranscriptionJobName?: string;
  /**
   * Provides the status of the specified medical transcription job. If the status is COMPLETED, the
   * job is finished and you can find the results at the location specified in TranscriptFileUri. If
   * the status is FAILED, FailureReason provides details on why your transcription job failed.
   */
  transcriptionJobStatus?: TranscriptionJobStatus;
  /**
   * The language code used to create your medical transcription job. US English (en-US) is the only
   * supported language for medical transcriptions.
   */
  languageCode?: LanguageCodeAmazonTranscribeServiceMedicalTranscriptionJobApi;
  /** The sample rate, in hertz, of the audio track in your input media file. */
  mediaSampleRateHertz?: number;
  /** The format of the input media file. */
  mediaFormat?: MediaFormat;
  media?: Media;
  transcript?: MedicalTranscript;
  /**
   * The date and time the specified medical transcription job began processing. Timestamps are in
   * the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00
   * represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  startTime?: Date;
  /**
   * The date and time the specified medical transcription job request was made. Timestamps are in
   * the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  creationTime?: Date;
  /**
   * The date and time the specified medical transcription job finished processing. Timestamps are
   * in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00
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
  settings?: MedicalTranscriptionSetting;
  /** Indicates whether content identification was enabled for your transcription request. */
  contentIdentificationType?: ContentIdentificationType;
  /** Describes the medical specialty represented in your media. */
  specialty?: Specialty;
  /**
   * Indicates whether the input media is a dictation or a conversation, as specified in the
   * StartMedicalTranscriptionJob request.
   */
  type?: Type;
  /**
   * The tags, each in the form of a key:value pair, assigned to the specified medical transcription
   * job.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalTranscriptionJobSchema: Schema<MedicalTranscriptionJob> =
  s.object<MedicalTranscriptionJob>(
    {
      medicalTranscriptionJobName: s.optional(s.string()),
      transcriptionJobStatus: s.optional(s.lazy(() => transcriptionJobStatusSchema)),
      languageCode: s.optional(
        s.lazy(() => languageCodeAmazonTranscribeServiceMedicalTranscriptionJobApiSchema),
      ),
      mediaSampleRateHertz: s.optional(s.int()),
      mediaFormat: s.optional(s.lazy(() => mediaFormatSchema)),
      media: s.optional(s.lazy(() => mediaSchema)),
      transcript: s.optional(s.lazy(() => medicalTranscriptSchema)),
      startTime: s.optional(s.dateTime()),
      creationTime: s.optional(s.dateTime()),
      completionTime: s.optional(s.dateTime()),
      failureReason: s.optional(s.string()),
      settings: s.optional(s.lazy(() => medicalTranscriptionSettingSchema)),
      contentIdentificationType: s.optional(s.lazy(() => contentIdentificationTypeSchema)),
      specialty: s.optional(s.lazy(() => specialtySchema)),
      type: s.optional(s.lazy(() => typeSchema)),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        medicalTranscriptionJobName: "MedicalTranscriptionJobName",
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
        contentIdentificationType: "ContentIdentificationType",
        specialty: "Specialty",
        type: "Type",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
