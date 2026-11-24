import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1AmazonTranscribeServiceTranscriptionJobsApiSchema,
  type Status1AmazonTranscribeServiceTranscriptionJobsApi,
} from "./status1-amazon-transcribe-service-transcription-jobs-api.js";
import { transcriptionJobSummarySchema, type TranscriptionJobSummary } from "./transcription-job-summary.js";

export type ListTranscriptionJobsResponse = {
  /**
   * Lists all transcription jobs that have the status specified in your request. Jobs are ordered
   * by creation date, with the newest job first.
   */
  status?: Status1AmazonTranscribeServiceTranscriptionJobsApi;
  /**
   * If NextToken is present in your response, it indicates that not all results are displayed. To
   * view the next set of results, copy the string associated with the NextToken parameter in your
   * results output, then run your request again including NextToken with the value of the copied
   * string. Repeat as needed to view all your results.
   */
  nextToken?: string;
  /** Provides a summary of information about each result. */
  transcriptionJobSummaries?: TranscriptionJobSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTranscriptionJobsResponseSchema: Schema<ListTranscriptionJobsResponse> =
  s.object<ListTranscriptionJobsResponse>(
    {
      status: s.optional(s.lazy(() => status1AmazonTranscribeServiceTranscriptionJobsApiSchema)),
      nextToken: s.optional(s.string()),
      transcriptionJobSummaries: s.optional(s.array(s.lazy(() => transcriptionJobSummarySchema))),
      _keysMap: {
        status: "Status",
        nextToken: "NextToken",
        transcriptionJobSummaries: "TranscriptionJobSummaries",
      },
    },
    { additionalProperties: s.json() },
  );
