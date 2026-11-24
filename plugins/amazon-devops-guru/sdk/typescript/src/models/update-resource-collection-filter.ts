import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  updateCloudFormationCollectionFilterSchema,
  type UpdateCloudFormationCollectionFilter,
} from "./update-cloud-formation-collection-filter.js";
import {
  updateTagCollectionFilterSchema,
  type UpdateTagCollectionFilter,
} from "./update-tag-collection-filter.js";

export type UpdateResourceCollectionFilter = {
  cloudFormation?: UpdateCloudFormationCollectionFilter;
  /**
   * The updated Amazon Web Services tags used to filter the resources in the resource collection.
   * Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web
   * Services services support tagging, so you can assign the same tag to resources from different
   * services to indicate that the resources are related. For example, you can assign the same tag
   * to an Amazon DynamoDB table resource that you assign to an Lambda function. For more
   * information about using tags, see the Tagging best practices whitepaper. Each Amazon Web
   * Services tag has two parts. A tag key (for example, Cost
   */
  tags?: UpdateTagCollectionFilter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateResourceCollectionFilterSchema: Schema<UpdateResourceCollectionFilter> =
  s.object<UpdateResourceCollectionFilter>(
    {
      cloudFormation: s.optional(s.lazy(() => updateCloudFormationCollectionFilterSchema)),
      tags: s.optional(s.array(s.lazy(() => updateTagCollectionFilterSchema))),
      _keysMap: {
        cloudFormation: "CloudFormation",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
