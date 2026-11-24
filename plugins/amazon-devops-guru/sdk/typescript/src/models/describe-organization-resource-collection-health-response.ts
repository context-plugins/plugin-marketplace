import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountHealthSchema, type AccountHealth } from "./account-health.js";
import { cloudFormationHealthSchema, type CloudFormationHealth } from "./cloud-formation-health.js";
import { serviceHealthSchema, type ServiceHealth } from "./service-health.js";
import { tagHealthSchema, type TagHealth } from "./tag-health.js";

export type DescribeOrganizationResourceCollectionHealthResponse = {
  /**
   * The returned CloudFormationHealthOverview object that contains an InsightHealthOverview object
   * with the requested system health information.
   */
  cloudFormation?: CloudFormationHealth[];
  /**
   * An array of ServiceHealth objects that describes the health of the Amazon Web Services services
   * associated with the resources in the collection.
   */
  service?: ServiceHealth[];
  /** The name of the organization's account. */
  account?: AccountHealth[];
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there
   * are no more pages, this value is null.
   */
  nextToken?: string;
  /**
   * Tags help you identify and organize your Amazon Web Services resources. Many Amazon Web
   * Services services support tagging, so you can assign the same tag to resources from different
   * services to indicate that the resources are related. For example, you can assign the same tag
   * to an Amazon DynamoDB table resource that you assign to an Lambda function. For more
   * information about using tags, see the Tagging best practices whitepaper. Each Amazon Web
   * Services tag has two parts. A tag key (for example, CostCenter, Environment, Project, or
   * Secret). Tag keys are case-sensitive. An optional field known
   */
  tags?: TagHealth[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeOrganizationResourceCollectionHealthResponseSchema: Schema<DescribeOrganizationResourceCollectionHealthResponse> =
  s.object<DescribeOrganizationResourceCollectionHealthResponse>(
    {
      cloudFormation: s.optional(s.array(s.lazy(() => cloudFormationHealthSchema))),
      service: s.optional(s.array(s.lazy(() => serviceHealthSchema))),
      account: s.optional(s.array(s.lazy(() => accountHealthSchema))),
      nextToken: s.optional(s.string()),
      tags: s.optional(s.array(s.lazy(() => tagHealthSchema))),
      _keysMap: {
        cloudFormation: "CloudFormation",
        service: "Service",
        account: "Account",
        nextToken: "NextToken",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
