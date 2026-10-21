import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of event-breaking rule to apply when creating a new inline ruleset. */
export const EventBreakerType = {
  Regex: "regex",
  Json: "json",
  JsonArray: "json_array",
  Header: "header",
  Timestamp: "timestamp",
  Csv: "csv",
  AwsCloudtrail: "aws_cloudtrail",
  AwsVpcflow: "aws_vpcflow",
  AzureFlowlog: "azure_flowlog",
} as const;
export type EventBreakerType = (typeof EventBreakerType)[keyof typeof EventBreakerType] | (string & {});

export const eventBreakerTypeSchema: EnumSchema<EventBreakerType> =
  s.enumOf<EventBreakerType>(EventBreakerType);
