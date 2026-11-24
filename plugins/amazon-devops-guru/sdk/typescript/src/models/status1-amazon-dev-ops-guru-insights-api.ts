import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of a reactive insight. */
export const Status1AmazonDevOpsGuruInsightsApi = {
  Ongoing: "ONGOING",
  Closed: "CLOSED",
} as const;
export type Status1AmazonDevOpsGuruInsightsApi =
  | (typeof Status1AmazonDevOpsGuruInsightsApi)[keyof typeof Status1AmazonDevOpsGuruInsightsApi]
  | (string & {});

export const status1AmazonDevOpsGuruInsightsApiSchema: EnumSchema<Status1AmazonDevOpsGuruInsightsApi> =
  s.enumOf<Status1AmazonDevOpsGuruInsightsApi>(Status1AmazonDevOpsGuruInsightsApi);
