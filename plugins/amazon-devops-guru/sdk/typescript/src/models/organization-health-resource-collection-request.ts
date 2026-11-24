import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  organizationResourceCollectionTypeSchema,
  type OrganizationResourceCollectionType,
} from "./organization-resource-collection-type.js";

export type OrganizationHealthResourceCollectionRequest = {
  /**
   * An Amazon Web Services resource collection type. This type specifies how analyzed Amazon Web
   * Services resources are defined. The two types of Amazon Web Services resource collections
   * supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that
   * contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon
   * Web Services resources that are defined in the stacks or that are tagged using the same tag
   * key. You can specify up to 500 Amazon Web Services CloudFormation stacks.
   */
  organizationResourceCollectionType: OrganizationResourceCollectionType;
  /** The ID of the Amazon Web Services account. */
  accountIds?: string[];
  /** The ID of the organizational unit. */
  organizationalUnitIds?: string[];
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this
   * value is null, it retrieves the first page.
   */
  nextToken?: string;
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results,
   * make another call with the returned nextToken value.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationHealthResourceCollectionRequestSchema: Schema<OrganizationHealthResourceCollectionRequest> =
  s.object<OrganizationHealthResourceCollectionRequest>(
    {
      organizationResourceCollectionType: organizationResourceCollectionTypeSchema,
      accountIds: s.optional(s.array(s.string())),
      organizationalUnitIds: s.optional(s.array(s.string())),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        organizationResourceCollectionType: "OrganizationResourceCollectionType",
        accountIds: "AccountIds",
        organizationalUnitIds: "OrganizationalUnitIds",
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
