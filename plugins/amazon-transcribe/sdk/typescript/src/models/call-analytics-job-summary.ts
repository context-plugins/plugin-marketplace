import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callAnalyticsJobDetailsSchema, type CallAnalyticsJobDetails } from "./call-analytics-job-details.js";
import { callAnalyticsJobStatus1Schema, type CallAnalyticsJobStatus1 } from "./call-analytics-job-status1.js";
import { languageCode1Schema, type LanguageCode1 } from "./language-code1.js";

export type CallAnalyticsJobSummary = {
  /**
   * The name of the Call Analytics job. Job names are case sensitive and must be unique within an
   * Amazon Web Services account.
   */
  callAnalyticsJobName?: string;
  /**
   * The date and time the specified Call Analytics job request was made. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents a transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  creationTime?: Date;
  /**
   * The date and time your Call Analytics job began processing. Timestamps are in the format
   * YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.789000-07:00 represents a
   * transcription job that started processing at 12:32 PM UTC-7 on May 4, 2022.
   */
  startTime?: Date;
  /**
   * The date and time the specified Call Analytics job finished processing. Timestamps are in the
   * format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:33:13.922000-07:00
   * represents a transcription job that started processing at 12:33 PM UTC-7 on May 4, 2022.
   */
  completionTime?: Date;
  /** The language code used to create your Call Analytics transcription. */
  languageCode?: LanguageCode1;
  /**
   * Provides the status of your Call Analytics job. If the status is COMPLETED, the job is finished
   * and you can find the results at the location specified in TranscriptFileUri (or
   * RedactedTranscriptFileUri, if you requested transcript redaction). If the status is FAILED,
   * FailureReason provides details on why your transcription job failed.
   */
  callAnalyticsJobStatus?: CallAnalyticsJobStatus1;
  callAnalyticsJobDetails?: CallAnalyticsJobDetails;
  /**
   * If CallAnalyticsJobStatus is FAILED, FailureReason contains information about why the Call
   * Analytics job failed. See also: Common Errors.
   */
  failureReason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const callAnalyticsJobSummarySchema: Schema<CallAnalyticsJobSummary> =
  s.object<CallAnalyticsJobSummary>(
    {
      callAnalyticsJobName: s.optional(s.string()),
      creationTime: s.optional(s.dateTime()),
      startTime: s.optional(s.dateTime()),
      completionTime: s.optional(s.dateTime()),
      languageCode: s.optional(s.lazy(() => languageCode1Schema)),
      callAnalyticsJobStatus: s.optional(s.lazy(() => callAnalyticsJobStatus1Schema)),
      callAnalyticsJobDetails: s.optional(s.lazy(() => callAnalyticsJobDetailsSchema)),
      failureReason: s.optional(s.string()),
      _keysMap: {
        callAnalyticsJobName: "CallAnalyticsJobName",
        creationTime: "CreationTime",
        startTime: "StartTime",
        completionTime: "CompletionTime",
        languageCode: "LanguageCode",
        callAnalyticsJobStatus: "CallAnalyticsJobStatus",
        callAnalyticsJobDetails: "CallAnalyticsJobDetails",
        failureReason: "FailureReason",
      },
    },
    { additionalProperties: s.json() },
  );
