import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeOrganizationOverviewResponse = {
  /**
   * An integer that specifies the number of open reactive insights in your Amazon Web Services
   * account.
   */
  reactiveInsights: number;
  /**
   * An integer that specifies the number of open proactive insights in your Amazon Web Services
   * account.
   */
  proactiveInsights: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeOrganizationOverviewResponseSchema: Schema<DescribeOrganizationOverviewResponse> =
  s.object<DescribeOrganizationOverviewResponse>(
    {
      reactiveInsights: s.int(),
      proactiveInsights: s.int(),
      _keysMap: {
        reactiveInsights: "ReactiveInsights",
        proactiveInsights: "ProactiveInsights",
      },
    },
    { additionalProperties: s.json() },
  );
