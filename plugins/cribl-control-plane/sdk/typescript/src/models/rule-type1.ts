import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of event-breaking rule to apply when creating a new inline ruleset. */
export const RuleType1 = {
  Json: "json",
  Timestamp: "timestamp",
  AwsCloudtrail: "aws_cloudtrail",
  AwsVpcflow: "aws_vpcflow",
  AzureFlowlog: "azure_flowlog",
} as const;
export type RuleType1 = (typeof RuleType1)[keyof typeof RuleType1] | (string & {});

export const ruleType1Schema: EnumSchema<RuleType1> = s.enumOf<RuleType1>(RuleType1);
