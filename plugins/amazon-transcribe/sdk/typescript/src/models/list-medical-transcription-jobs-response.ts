import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  medicalTranscriptionJobSummarySchema,
  type MedicalTranscriptionJobSummary,
} from "./medical-transcription-job-summary.js";
import {
  status1AmazonTranscribeServiceMedicalTranscriptionJobApiSchema,
  type Status1AmazonTranscribeServiceMedicalTranscriptionJobApi,
} from "./status1-amazon-transcribe-service-medical-transcription-job-api.js";

export type ListMedicalTranscriptionJobsResponse = {
  /**
   * Lists all medical transcription jobs that have the status specified in your request. Jobs are
   * ordered by creation date, with the newest job first.
   */
  status?: Status1AmazonTranscribeServiceMedicalTranscriptionJobApi;
  /**
   * If NextToken is present in your response, it indicates that not all results are displayed. To
   * view the next set of results, copy the string associated with the NextToken parameter in your
   * results output, then run your request again including NextToken with the value of the copied
   * string. Repeat as needed to view all your results.
   */
  nextToken?: string;
  /** Provides a summary of information about each result. */
  medicalTranscriptionJobSummaries?: MedicalTranscriptionJobSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMedicalTranscriptionJobsResponseSchema: Schema<ListMedicalTranscriptionJobsResponse> =
  s.object<ListMedicalTranscriptionJobsResponse>(
    {
      status: s.optional(s.lazy(() => status1AmazonTranscribeServiceMedicalTranscriptionJobApiSchema)),
      nextToken: s.optional(s.string()),
      medicalTranscriptionJobSummaries: s.optional(
        s.array(s.lazy(() => medicalTranscriptionJobSummarySchema)),
      ),
      _keysMap: {
        status: "Status",
        nextToken: "NextToken",
        medicalTranscriptionJobSummaries: "MedicalTranscriptionJobSummaries",
      },
    },
    { additionalProperties: s.json() },
  );
