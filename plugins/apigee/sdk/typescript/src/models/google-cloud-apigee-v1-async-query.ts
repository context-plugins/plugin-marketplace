import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AsyncQueryResult1Schema,
  type GoogleCloudApigeeV1AsyncQueryResult1,
} from "./google-cloud-apigee-v1-async-query-result1.js";
import {
  googleCloudApigeeV1QueryMetadata1Schema,
  type GoogleCloudApigeeV1QueryMetadata1,
} from "./google-cloud-apigee-v1-query-metadata1.js";

export type GoogleCloudApigeeV1AsyncQuery = {
  /** ResultRows is available only after the query is completed. */
  resultRows?: string;
  /** Contains information like metrics, dimenstions etc of the AsyncQuery. */
  queryParams?: GoogleCloudApigeeV1QueryMetadata1;
  /** ResultFileSize is available only after the query is completed. */
  resultFileSize?: string;
  /**
   * Self link of the query. Example:
   * `/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` or
   * following format if query is running at host level:
   * `/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`
   */
  self?: string;
  /** Query state could be "enqueued", "running", "completed", "failed". */
  state?: string;
  /** Hostname is available only when query is executed at host level. */
  envgroupHostname?: string;
  /** Asynchronous Report ID. */
  reportDefinitionId?: string;
  /** Error is set when query fails. */
  error?: string;
  /** Asynchronous Query Name. */
  name?: string;
  /** Result is available only after the query is completed. */
  result?: GoogleCloudApigeeV1AsyncQueryResult1;
  /** ExecutionTime is available only after the query is completed. */
  executionTime?: string;
  /** Creation time of the query. */
  created?: string;
  /** Last updated timestamp for the query. */
  updated?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AsyncQuerySchema: Schema<GoogleCloudApigeeV1AsyncQuery> =
  s.object<GoogleCloudApigeeV1AsyncQuery>(
    {
      resultRows: s.optional(s.string()),
      queryParams: s.optional(s.lazy(() => googleCloudApigeeV1QueryMetadata1Schema)),
      resultFileSize: s.optional(s.string()),
      self: s.optional(s.string()),
      state: s.optional(s.string()),
      envgroupHostname: s.optional(s.string()),
      reportDefinitionId: s.optional(s.string()),
      error: s.optional(s.string()),
      name: s.optional(s.string()),
      result: s.optional(s.lazy(() => googleCloudApigeeV1AsyncQueryResult1Schema)),
      executionTime: s.optional(s.string()),
      created: s.optional(s.string()),
      updated: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
