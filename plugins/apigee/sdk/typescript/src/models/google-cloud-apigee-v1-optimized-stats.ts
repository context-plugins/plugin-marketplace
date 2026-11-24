import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1OptimizedStatsResponse2Schema,
  type GoogleCloudApigeeV1OptimizedStatsResponse2,
} from "./google-cloud-apigee-v1-optimized-stats-response2.js";

/** Encapsulates a response format for JavaScript Optimized Scenario. */
export type GoogleCloudApigeeV1OptimizedStats = {
  /**
   * Wraps the `stats` response for JavaScript Optimized Scenario with a response key. For example:
   * ```{ "Response": { "TimeUnit": [], "metaData": { "errors": [], "notices": [ "Source:Postgres",
   * "Table used: edge.api.aaxgroup001.agg_api", "PG Host:ruappg08-ro.production.apigeeks.net",
   * "query served by:80c4ebca-6a10-4a2e-8faf-c60c1ee306ca" ] }, "resultTruncated": false, "stats":
   * { "data": [ { "identifier": { "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ {
   * "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] }, { "env": "prod", "name":
   * "sum(is_error)", "values": [ 36.0 ] } ] } ] } } }```
   */
  response?: GoogleCloudApigeeV1OptimizedStatsResponse2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1OptimizedStatsSchema: Schema<GoogleCloudApigeeV1OptimizedStats> =
  s.object<GoogleCloudApigeeV1OptimizedStats>(
    {
      response: s.optional(s.lazy(() => googleCloudApigeeV1OptimizedStatsResponse2Schema)),
      _keysMap: {
        response: "Response",
      },
    },
    { additionalProperties: s.json() },
  );
