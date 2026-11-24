import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  costEstimationResourceCollectionFilterSchema,
  type CostEstimationResourceCollectionFilter,
} from "./cost-estimation-resource-collection-filter.js";
import { costEstimationTimeRangeSchema, type CostEstimationTimeRange } from "./cost-estimation-time-range.js";
import { serviceResourceCostSchema, type ServiceResourceCost } from "./service-resource-cost.js";
import {
  statusAmazonDevOpsGuruCostEstimationApiSchema,
  type StatusAmazonDevOpsGuruCostEstimationApi,
} from "./status-amazon-dev-ops-guru-cost-estimation-api.js";

export type GetCostEstimationResponse = {
  resourceCollection?: CostEstimationResourceCollectionFilter;
  /**
   * The status of creating this cost estimate. If it's still in progress, the status ONGOING is
   * returned. If it is finished, the status COMPLETED is returned.
   */
  status?: StatusAmazonDevOpsGuruCostEstimationApi;
  /**
   * An array of ResourceCost objects that each contains details about the monthly cost estimate to
   * analyze one of your Amazon Web Services resources.
   */
  costs?: ServiceResourceCost[];
  timeRange?: CostEstimationTimeRange;
  /**
   * The estimated monthly cost to analyze the Amazon Web Services resources. This value is the sum
   * of the estimated costs to analyze each resource in the Costs object in this response.
   */
  totalCost?: number;
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there
   * are no more pages, this value is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getCostEstimationResponseSchema: Schema<GetCostEstimationResponse> =
  s.object<GetCostEstimationResponse>(
    {
      resourceCollection: s.optional(s.lazy(() => costEstimationResourceCollectionFilterSchema)),
      status: s.optional(s.lazy(() => statusAmazonDevOpsGuruCostEstimationApiSchema)),
      costs: s.optional(s.array(s.lazy(() => serviceResourceCostSchema))),
      timeRange: s.optional(s.lazy(() => costEstimationTimeRangeSchema)),
      totalCost: s.optional(s.float64()),
      nextToken: s.optional(s.string()),
      _keysMap: {
        resourceCollection: "ResourceCollection",
        status: "Status",
        costs: "Costs",
        timeRange: "TimeRange",
        totalCost: "TotalCost",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
