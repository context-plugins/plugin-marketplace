import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCodeAmazonTranscribeServiceMedicalScribeJobApiSchema,
  type LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi,
} from "./language-code-amazon-transcribe-service-medical-scribe-job-api.js";
import { medicalScribeJobStatusSchema, type MedicalScribeJobStatus } from "./medical-scribe-job-status.js";

export type MedicalScribeJobSummary = {
  /**
   * The name of the Medical Scribe job. Job names are case sensitive and must be unique within an
   * Amazon Web Services account.
   */
  medicalScribeJobName?: string;
  /**
   * The date and time the specified Medical Scribe job request was made. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents a Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  creationTime?: Date;
  /**
   * The date and time your Medical Scribe job began processing. Timestamps are in the format
   * YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a
   * Medical Scribe job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  startTime?: Date;
  /**
   * The date and time the specified Medical Scribe job finished processing. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents a Medical Scribe job that finished processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  completionTime?: Date;
  /**
   * The language code used to create your Medical Scribe job. US English (en-US) is the only
   * supported language for Medical Scribe jobs.
   */
  languageCode?: LanguageCodeAmazonTranscribeServiceMedicalScribeJobApi;
  /**
   * Provides the status of the specified Medical Scribe job. If the status is COMPLETED, the job is
   * finished and you can find the results at the location specified in MedicalScribeOutput If the
   * status is FAILED, FailureReason provides details on why your Medical Scribe job failed.
   */
  medicalScribeJobStatus?: MedicalScribeJobStatus;
  /**
   * If MedicalScribeJobStatus is FAILED, FailureReason contains information about why the
   * transcription job failed. See also: Common Errors.
   */
  failureReason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeJobSummarySchema: Schema<MedicalScribeJobSummary> =
  s.object<MedicalScribeJobSummary>(
    {
      medicalScribeJobName: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      startTime: s.optional(s.dateTime()),
      completionTime: s.optional(s.dateTime()),
      languageCode: s.optional(s.lazy(() => languageCodeAmazonTranscribeServiceMedicalScribeJobApiSchema)),
      medicalScribeJobStatus: s.optional(s.lazy(() => medicalScribeJobStatusSchema)),
      failureReason: s.optional(s.string()),
      _keysMap: {
        medicalScribeJobName: "MedicalScribeJobName",
        creationTime: "CreationTime",
        startTime: "StartTime",
        completionTime: "CompletionTime",
        languageCode: "LanguageCode",
        medicalScribeJobStatus: "MedicalScribeJobStatus",
        failureReason: "FailureReason",
      },
    },
    { additionalProperties: s.json() },
  );
