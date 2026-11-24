import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1Range2Schema,
  type GoogleCloudApihubV1Range2,
} from "./google-cloud-apihub-v1-range2.js";
import {
  severityApigeeProjectsApiSchema,
  type SeverityApigeeProjectsApi,
} from "./severity-apigee-projects-api.js";

/** Issue contains the details of a single issue found by the linter. */
export type GoogleCloudApihubV1Issue = {
  /** Required. Human-readable message describing the issue found by the linter. */
  message?: string;
  /** Required. Severity level of the rule violation. */
  severity?: SeverityApigeeProjectsApi;
  /** Required. Object describing where in the file the issue was found. */
  range?: GoogleCloudApihubV1Range2;
  /** Required. Rule code unique to each rule defined in linter. */
  code?: string;
  /**
   * Required. An array of strings indicating the location in the analyzed document where the rule
   * was triggered.
   */
  path?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1IssueSchema: Schema<GoogleCloudApihubV1Issue> =
  s.object<GoogleCloudApihubV1Issue>(
    {
      message: s.optional(s.string()),
      severity: s.optional(s.lazy(() => severityApigeeProjectsApiSchema)),
      range: s.optional(s.lazy(() => googleCloudApihubV1Range2Schema)),
      code: s.optional(s.string()),
      path: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
