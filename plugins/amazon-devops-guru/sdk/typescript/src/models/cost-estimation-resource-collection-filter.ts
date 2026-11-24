import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudFormationCostEstimationResourceCollectionFilterSchema,
  type CloudFormationCostEstimationResourceCollectionFilter,
} from "./cloud-formation-cost-estimation-resource-collection-filter.js";
import {
  tagCostEstimationResourceCollectionFilterSchema,
  type TagCostEstimationResourceCollectionFilter,
} from "./tag-cost-estimation-resource-collection-filter.js";

export type CostEstimationResourceCollectionFilter = {
  cloudFormation?: CloudFormationCostEstimationResourceCollectionFilter;
  /**
   * The Amazon Web Services tags used to filter the resource collection that is used for a cost
   * estimate. Tags help you identify and organize your Amazon Web Services resources. Many Amazon
   * Web Services services support tagging, so you can assign the same tag to resources from
   * different services to indicate that the resources are related. For example, you can assign the
   * same tag to an Amazon DynamoDB table resource that you assign to an Lambda function. For more
   * information about using tags, see the Tagging best practices whitepaper. Each Amazon Web
   * Services tag has two parts. A tag key (for examp
   */
  tags?: TagCostEstimationResourceCollectionFilter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const costEstimationResourceCollectionFilterSchema: Schema<CostEstimationResourceCollectionFilter> =
  s.object<CostEstimationResourceCollectionFilter>(
    {
      cloudFormation: s.optional(s.lazy(() => cloudFormationCostEstimationResourceCollectionFilterSchema)),
      tags: s.optional(s.array(s.lazy(() => tagCostEstimationResourceCollectionFilterSchema))),
      _keysMap: {
        cloudFormation: "CloudFormation",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
