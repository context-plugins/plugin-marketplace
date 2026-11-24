import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeOrganizationHealthResponse = {
  /**
   * An integer that specifies the number of open reactive insights in your Amazon Web Services
   * account.
   */
  openReactiveInsights: number;
  /**
   * An integer that specifies the number of open proactive insights in your Amazon Web Services
   * account.
   */
  openProactiveInsights: number;
  /**
   * An integer that specifies the number of metrics that have been analyzed in your organization.
   */
  metricsAnalyzed: number;
  /**
   * The number of Amazon DevOps Guru resource analysis hours billed to the current Amazon Web
   * Services account in the last hour.
   */
  resourceHours: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeOrganizationHealthResponseSchema: Schema<DescribeOrganizationHealthResponse> =
  s.object<DescribeOrganizationHealthResponse>(
    {
      openReactiveInsights: s.int(),
      openProactiveInsights: s.int(),
      metricsAnalyzed: s.int(),
      resourceHours: s.int(),
      _keysMap: {
        openReactiveInsights: "OpenReactiveInsights",
        openProactiveInsights: "OpenProactiveInsights",
        metricsAnalyzed: "MetricsAnalyzed",
        resourceHours: "ResourceHours",
      },
    },
    { additionalProperties: s.json() },
  );
