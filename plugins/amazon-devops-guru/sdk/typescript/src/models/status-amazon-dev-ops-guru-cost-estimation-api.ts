import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of creating this cost estimate. If it's still in progress, the status ONGOING is
 * returned. If it is finished, the status COMPLETED is returned.
 */
export const StatusAmazonDevOpsGuruCostEstimationApi = {
  Ongoing: "ONGOING",
  Completed: "COMPLETED",
} as const;
export type StatusAmazonDevOpsGuruCostEstimationApi =
  | (typeof StatusAmazonDevOpsGuruCostEstimationApi)[keyof typeof StatusAmazonDevOpsGuruCostEstimationApi]
  | (string & {});

export const statusAmazonDevOpsGuruCostEstimationApiSchema: EnumSchema<StatusAmazonDevOpsGuruCostEstimationApi> =
  s.enumOf<StatusAmazonDevOpsGuruCostEstimationApi>(StatusAmazonDevOpsGuruCostEstimationApi);
