import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudFormationCollectionSchema,
  type CloudFormationCollection,
} from "./cloud-formation-collection.js";
import { tagCollectionSchema, type TagCollection } from "./tag-collection.js";

export type ResourceCollection = {
  cloudFormation?: CloudFormationCollection;
  /**
   * The Amazon Web Services tags that are used by resources in the resource collection. Tags help
   * you identify and organize your Amazon Web Services resources. Many Amazon Web Services services
   * support tagging, so you can assign the same tag to resources from different services to
   * indicate that the resources are related. For example, you can assign the same tag to an Amazon
   * DynamoDB table resource that you assign to an Lambda function. For more information about using
   * tags, see the Tagging best practices whitepaper. Each Amazon Web Services tag has two parts. A
   * tag key (for example, CostCenter, En
   */
  tags?: TagCollection[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceCollectionSchema: Schema<ResourceCollection> = s.object<ResourceCollection>(
  {
    cloudFormation: s.optional(s.lazy(() => cloudFormationCollectionSchema)),
    tags: s.optional(s.array(s.lazy(() => tagCollectionSchema))),
    _keysMap: {
      cloudFormation: "CloudFormation",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
