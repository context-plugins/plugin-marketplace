import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SeverityAmazonDevOpsGuruChannelsApi = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
} as const;
export type SeverityAmazonDevOpsGuruChannelsApi =
  | (typeof SeverityAmazonDevOpsGuruChannelsApi)[keyof typeof SeverityAmazonDevOpsGuruChannelsApi]
  | (string & {});

export const severityAmazonDevOpsGuruChannelsApiSchema: EnumSchema<SeverityAmazonDevOpsGuruChannelsApi> =
  s.enumOf<SeverityAmazonDevOpsGuruChannelsApi>(SeverityAmazonDevOpsGuruChannelsApi);
