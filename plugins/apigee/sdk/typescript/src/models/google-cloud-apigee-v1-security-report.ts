import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityReportMetadata3Schema,
  type GoogleCloudApigeeV1SecurityReportMetadata3,
} from "./google-cloud-apigee-v1-security-report-metadata3.js";
import {
  googleCloudApigeeV1SecurityReportResultMetadata1Schema,
  type GoogleCloudApigeeV1SecurityReportResultMetadata1,
} from "./google-cloud-apigee-v1-security-report-result-metadata1.js";

/** SecurityReport saves all the information about the created security report. */
export type GoogleCloudApigeeV1SecurityReport = {
  /** Report Definition ID. */
  reportDefinitionId?: string;
  /** ResultFileSize is available only after the query is completed. */
  resultFileSize?: string;
  /** Hostname is available only when query is executed at host level. */
  envgroupHostname?: string;
  /** Error is set when query fails. */
  error?: string;
  /**
   * Self link of the query. Example:
   * `/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`
   * or following format if query is running at host level:
   * `/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`
   */
  self?: string;
  /** Display Name specified by the user. */
  displayName?: string;
  /** ExecutionTime is available only after the query is completed. */
  executionTime?: string;
  /** Result is available only after the query is completed. */
  result?: GoogleCloudApigeeV1SecurityReportResultMetadata1;
  /** ResultRows is available only after the query is completed. */
  resultRows?: string;
  /** Contains information like metrics, dimenstions etc of the Security Report. */
  queryParams?: GoogleCloudApigeeV1SecurityReportMetadata3;
  /** Query state could be "enqueued", "running", "completed", "expired" and "failed". */
  state?: string;
  /** Output only. Last updated timestamp for the query. */
  updated?: string;
  /** Creation time of the query. */
  created?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityReportSchema: Schema<GoogleCloudApigeeV1SecurityReport> =
  s.object<GoogleCloudApigeeV1SecurityReport>(
    {
      reportDefinitionId: s.optional(s.string()),
      resultFileSize: s.optional(s.string()),
      envgroupHostname: s.optional(s.string()),
      error: s.optional(s.string()),
      self: s.optional(s.string()),
      displayName: s.optional(s.string()),
      executionTime: s.optional(s.string()),
      result: s.optional(s.lazy(() => googleCloudApigeeV1SecurityReportResultMetadata1Schema)),
      resultRows: s.optional(s.string()),
      queryParams: s.optional(s.lazy(() => googleCloudApigeeV1SecurityReportMetadata3Schema)),
      state: s.optional(s.string()),
      updated: s.optional(s.string()),
      created: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
