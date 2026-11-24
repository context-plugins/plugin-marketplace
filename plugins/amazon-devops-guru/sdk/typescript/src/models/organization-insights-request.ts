import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  listInsightsStatusFilterSchema,
  type ListInsightsStatusFilter,
} from "./list-insights-status-filter.js";

export type OrganizationInsightsRequest = {
  statusFilter: ListInsightsStatusFilter;
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results,
   * make another call with the returned nextToken value.
   */
  maxResults?: number;
  /** The ID of the Amazon Web Services account. */
  accountIds?: string[];
  /** The ID of the organizational unit. */
  organizationalUnitIds?: string[];
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this
   * value is null, it retrieves the first page.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationInsightsRequestSchema: Schema<OrganizationInsightsRequest> =
  s.object<OrganizationInsightsRequest>(
    {
      statusFilter: listInsightsStatusFilterSchema,
      maxResults: s.optional(s.int()),
      accountIds: s.optional(s.array(s.string())),
      organizationalUnitIds: s.optional(s.array(s.string())),
      nextToken: s.optional(s.string()),
      _keysMap: {
        statusFilter: "StatusFilter",
        maxResults: "MaxResults",
        accountIds: "AccountIds",
        organizationalUnitIds: "OrganizationalUnitIds",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
