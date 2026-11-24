import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudFormationCollectionFilterSchema,
  type CloudFormationCollectionFilter,
} from "./cloud-formation-collection-filter.js";
import { tagCollectionFilterSchema, type TagCollectionFilter } from "./tag-collection-filter.js";

export type ResourceCollectionFilter = {
  cloudFormation?: CloudFormationCollectionFilter;
  /**
   * The Amazon Web Services tags used to filter the resources in the resource collection. Tags help
   * you identify and organize your Amazon Web Services resources. Many Amazon Web Services services
   * support tagging, so you can assign the same tag to resources from different services to
   * indicate that the resources are related. For example, you can assign the same tag to an Amazon
   * DynamoDB table resource that you assign to an Lambda function. For more information about using
   * tags, see the Tagging best practices whitepaper. Each Amazon Web Services tag has two parts. A
   * tag key (for example, CostCenter,
   */
  tags?: TagCollectionFilter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceCollectionFilterSchema: Schema<ResourceCollectionFilter> =
  s.object<ResourceCollectionFilter>(
    {
      cloudFormation: s.optional(s.lazy(() => cloudFormationCollectionFilterSchema)),
      tags: s.optional(s.array(s.lazy(() => tagCollectionFilterSchema))),
      _keysMap: {
        cloudFormation: "CloudFormation",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
