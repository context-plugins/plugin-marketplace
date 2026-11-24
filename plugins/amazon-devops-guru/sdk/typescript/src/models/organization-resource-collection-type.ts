import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web
 * Services resources are defined. The two types of Amazon Web Services resource collections
 * supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that
 * contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web
 * Services resources that are defined in the stacks or that are tagged using the same tag key. You
 * can specify up to 500 Amazon Web Services CloudFormation stacks.
 */
export const OrganizationResourceCollectionType = {
  AwsCloudFormation: "AWS_CLOUD_FORMATION",
  AwsService: "AWS_SERVICE",
  AwsAccount: "AWS_ACCOUNT",
  AwsTags: "AWS_TAGS",
} as const;
export type OrganizationResourceCollectionType =
  | (typeof OrganizationResourceCollectionType)[keyof typeof OrganizationResourceCollectionType]
  | (string & {});

export const organizationResourceCollectionTypeSchema: EnumSchema<OrganizationResourceCollectionType> =
  s.enumOf<OrganizationResourceCollectionType>(OrganizationResourceCollectionType);
