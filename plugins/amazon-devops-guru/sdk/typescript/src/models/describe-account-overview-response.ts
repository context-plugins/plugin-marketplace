import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeAccountOverviewResponse = {
  /**
   * An integer that specifies the number of open reactive insights in your Amazon Web Services
   * account that were created during the time range passed in.
   */
  reactiveInsights: number;
  /**
   * An integer that specifies the number of open proactive insights in your Amazon Web Services
   * account that were created during the time range passed in.
   */
  proactiveInsights: number;
  /**
   * The Mean Time to Recover (MTTR) for all closed insights that were created during the time range
   * passed in.
   */
  meanTimeToRecoverInMilliseconds: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeAccountOverviewResponseSchema: Schema<DescribeAccountOverviewResponse> =
  s.object<DescribeAccountOverviewResponse>(
    {
      reactiveInsights: s.int(),
      proactiveInsights: s.int(),
      meanTimeToRecoverInMilliseconds: s.int(),
      _keysMap: {
        reactiveInsights: "ReactiveInsights",
        proactiveInsights: "ProactiveInsights",
        meanTimeToRecoverInMilliseconds: "MeanTimeToRecoverInMilliseconds",
      },
    },
    { additionalProperties: s.json() },
  );
