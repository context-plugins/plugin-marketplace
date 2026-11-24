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

/** Encapsulates a response format for JavaScript Optimized Scenario. */
export type GoogleCloudApigeeV1OptimizedStatsResponse = {
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

export const googleCloudApigeeV1OptimizedStatsResponseSchema: Schema<GoogleCloudApigeeV1OptimizedStatsResponse> =
  s.object<GoogleCloudApigeeV1OptimizedStatsResponse>(
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
