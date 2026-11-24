import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { medicalScribeJobSummarySchema, type MedicalScribeJobSummary } from "./medical-scribe-job-summary.js";
import {
  status1AmazonTranscribeServiceMedicalScribeJobApiSchema,
  type Status1AmazonTranscribeServiceMedicalScribeJobApi,
} from "./status1-amazon-transcribe-service-medical-scribe-job-api.js";

export type ListMedicalScribeJobsResponse = {
  /**
   * Lists all Medical Scribe jobs that have the status specified in your request. Jobs are ordered
   * by creation date, with the newest job first.
   */
  status?: Status1AmazonTranscribeServiceMedicalScribeJobApi;
  /**
   * If NextToken is present in your response, it indicates that not all results are displayed. To
   * view the next set of results, copy the string associated with the NextToken parameter in your
   * results output, then run your request again including NextToken with the value of the copied
   * string. Repeat as needed to view all your results.
   */
  nextToken?: string;
  /** Provides a summary of information about each result. */
  medicalScribeJobSummaries?: MedicalScribeJobSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMedicalScribeJobsResponseSchema: Schema<ListMedicalScribeJobsResponse> =
  s.object<ListMedicalScribeJobsResponse>(
    {
      status: s.optional(s.lazy(() => status1AmazonTranscribeServiceMedicalScribeJobApiSchema)),
      nextToken: s.optional(s.string()),
      medicalScribeJobSummaries: s.optional(s.array(s.lazy(() => medicalScribeJobSummarySchema))),
      _keysMap: {
        status: "Status",
        nextToken: "NextToken",
        medicalScribeJobSummaries: "MedicalScribeJobSummaries",
      },
    },
    { additionalProperties: s.json() },
  );
