import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightsConfigurationSchema, type InsightsConfiguration } from "./insights-configuration.js";

export type UpdateGroupRequest = {
  /** The case-sensitive name of the group. */
  groupName?: string;
  /** The ARN that was generated upon creation. */
  groupArn?: string;
  /** The updated filter expression defining criteria by which to group traces. */
  filterExpression?: string;
  insightsConfiguration?: InsightsConfiguration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateGroupRequestSchema: Schema<UpdateGroupRequest> = s.object<UpdateGroupRequest>(
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
