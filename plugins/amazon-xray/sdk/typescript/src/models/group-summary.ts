import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightsConfigurationSchema, type InsightsConfiguration } from "./insights-configuration.js";

export type GroupSummary = {
  /** The unique case-sensitive name of the group. */
  groupName?: string;
  /** The ARN of the group generated based on the GroupName. */
  groupArn?: string;
  /** The filter expression defining the parameters to include traces. */
  filterExpression?: string;
  insightsConfiguration?: InsightsConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupSummarySchema: Schema<GroupSummary> = s.object<GroupSummary>(
  {
    groupName: s.optional(s.string()),
    groupArn: s.optional(s.string()),
    filterExpression: s.optional(s.string()),
    insightsConfiguration: s.optional(s.lazy(() => insightsConfigurationSchema)),
    _keysMap: {
      groupName: "GroupName",
      groupArn: "GroupARN",
      filterExpression: "FilterExpression",
      insightsConfiguration: "InsightsConfiguration",
    },
  },
  { additionalProperties: s.json() },
);
