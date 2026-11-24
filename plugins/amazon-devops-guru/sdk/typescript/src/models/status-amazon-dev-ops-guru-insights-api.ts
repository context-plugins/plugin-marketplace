import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the proactive insight. */
export const StatusAmazonDevOpsGuruInsightsApi = {
  Ongoing: "ONGOING",
  Closed: "CLOSED",
} as const;
export type StatusAmazonDevOpsGuruInsightsApi =
  | (typeof StatusAmazonDevOpsGuruInsightsApi)[keyof typeof StatusAmazonDevOpsGuruInsightsApi]
  | (string & {});

export const statusAmazonDevOpsGuruInsightsApiSchema: EnumSchema<StatusAmazonDevOpsGuruInsightsApi> =
  s.enumOf<StatusAmazonDevOpsGuruInsightsApi>(StatusAmazonDevOpsGuruInsightsApi);
