import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusAmazonTranscribeServiceMedicalScribeJobApiSchema,
  type StatusAmazonTranscribeServiceMedicalScribeJobApi,
} from "./status-amazon-transcribe-service-medical-scribe-job-api.js";

export type ListMedicalScribeJobsRequest = {
  /**
   * Returns only Medical Scribe jobs with the specified status. Jobs are ordered by creation date,
   * with the newest job first. If you do not include Status, all Medical Scribe jobs are returned.
   */
  status?: StatusAmazonTranscribeServiceMedicalScribeJobApi;
  /**
   * Returns only the Medical Scribe jobs that contain the specified string. The search is not case
   * sensitive.
   */
  jobNameContains?: string;
  /**
   * If your ListMedicalScribeJobs request returns more results than can be displayed, NextToken is
   * displayed in the response with an associated string. To get the next page of results, copy this
   * string and repeat your request, including NextToken with the value of the copied string. Repeat
   * as needed to view all your results.
   */
  nextToken?: string;
  /**
   * The maximum number of Medical Scribe jobs to return in each page of results. If there are fewer
   * results than the value that you specify, only the actual results are returned. If you do not
   * specify a value, a default of 5 is used.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMedicalScribeJobsRequestSchema: Schema<ListMedicalScribeJobsRequest> =
  s.object<ListMedicalScribeJobsRequest>(
    {
      status: s.optional(s.lazy(() => statusAmazonTranscribeServiceMedicalScribeJobApiSchema)),
      jobNameContains: s.optional(s.string()),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        status: "Status",
        jobNameContains: "JobNameContains",
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
