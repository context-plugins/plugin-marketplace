import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1IssueSchema,
  type GoogleCloudApihubV1Issue,
} from "./google-cloud-apihub-v1-issue.js";
import {
  googleCloudApihubV1SummaryEntrySchema,
  type GoogleCloudApihubV1SummaryEntry,
} from "./google-cloud-apihub-v1-summary-entry.js";
import { linterSchema, type Linter } from "./linter.js";
import { stateApigeeProjectsApiSchema, type StateApigeeProjectsApi } from "./state-apigee-projects-api.js";

/** LintResponse contains the response from the linter. */
export type GoogleCloudApihubV1LintResponse = {
  /** Optional. Array of issues found in the analyzed document. */
  issues?: GoogleCloudApihubV1Issue[];
  /** Required. Name of the linting application. */
  source?: string;
  /** Required. Lint state represents success or failure for linting. */
  state?: StateApigeeProjectsApi;
  /** Required. Timestamp when the linting response was generated. */
  createTime?: string;
  /** Required. Name of the linter used. */
  linter?: Linter;
  /** Optional. Summary of all issue types and counts for each severity level. */
  summary?: GoogleCloudApihubV1SummaryEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1LintResponseSchema: Schema<GoogleCloudApihubV1LintResponse> =
  s.object<GoogleCloudApihubV1LintResponse>(
    {
      issues: s.optional(s.array(s.lazy(() => googleCloudApihubV1IssueSchema))),
      source: s.optional(s.string()),
      state: s.optional(s.lazy(() => stateApigeeProjectsApiSchema)),
      createTime: s.optional(s.string()),
      linter: s.optional(s.lazy(() => linterSchema)),
      summary: s.optional(s.array(s.lazy(() => googleCloudApihubV1SummaryEntrySchema))),
    },
    { additionalProperties: s.json() },
  );
