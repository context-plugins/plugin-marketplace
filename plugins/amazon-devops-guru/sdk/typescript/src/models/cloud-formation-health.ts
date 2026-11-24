import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightHealthSchema, type InsightHealth } from "./insight-health.js";

export type CloudFormationHealth = {
  /** The name of the CloudFormation stack. */
  stackName?: string;
  insight?: InsightHealth;
  /**
   * Number of resources that DevOps Guru is monitoring in your account that are specified by an
   * Amazon Web Services CloudFormation stack.
   */
  analyzedResourceCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudFormationHealthSchema: Schema<CloudFormationHealth> = s.object<CloudFormationHealth>(
  {
    stackName: s.optional(s.string()),
    insight: s.optional(s.lazy(() => insightHealthSchema)),
    analyzedResourceCount: s.optional(s.int()),
    _keysMap: {
      stackName: "StackName",
      insight: "Insight",
      analyzedResourceCount: "AnalyzedResourceCount",
    },
  },
  { additionalProperties: s.json() },
);
