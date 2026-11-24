import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1Metadata1Schema,
  type GoogleCloudApigeeV1Metadata1,
} from "./google-cloud-apigee-v1-metadata1.js";
import {
  googleCloudApigeeV1OptimizedStatsNode2Schema,
  type GoogleCloudApigeeV1OptimizedStatsNode2,
} from "./google-cloud-apigee-v1-optimized-stats-node2.js";

/**
 * Wraps the `stats` response for JavaScript Optimized Scenario with a response key. For example:
 * ```{ "Response": { "TimeUnit": [], "metaData": { "errors": [], "notices": [ "Source:Postgres",
 * "Table used: edge.api.aaxgroup001.agg_api", "PG Host:ruappg08-ro.production.apigeeks.net", "query
 * served by:80c4ebca-6a10-4a2e-8faf-c60c1ee306ca" ] }, "resultTruncated": false, "stats": { "data":
 * [ { "identifier": { "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ { "env":
 * "prod", "name": "sum(message_count)", "values": [ 36.0 ] }, { "env": "prod", "name":
 * "sum(is_error)", "values": [ 36.0 ] } ] } ] } } }```
 */
export type GoogleCloudApigeeV1OptimizedStatsResponse2 = {
  /** Metadata information about the query executed. */
  metaData?: GoogleCloudApigeeV1Metadata1;
  /**
   * Boolean flag that indicates whether the results were truncated based on the limit parameter.
   */
  resultTruncated?: boolean;
  /** List of time unit values. Time unit refers to an epoch timestamp value. */
  timeUnit?: string[];
  /** `stats` results. */
  stats?: GoogleCloudApigeeV1OptimizedStatsNode2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1OptimizedStatsResponse2Schema: Schema<GoogleCloudApigeeV1OptimizedStatsResponse2> =
  s.object<GoogleCloudApigeeV1OptimizedStatsResponse2>(
    {
      metaData: s.optional(s.lazy(() => googleCloudApigeeV1Metadata1Schema)),
      resultTruncated: s.optional(s.boolean()),
      timeUnit: s.optional(s.array(s.string())),
      stats: s.optional(s.lazy(() => googleCloudApigeeV1OptimizedStatsNode2Schema)),
      _keysMap: {
        timeUnit: "TimeUnit",
      },
    },
    { additionalProperties: s.json() },
  );
