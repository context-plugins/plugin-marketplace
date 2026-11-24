import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sortBy3Schema, type SortBy3 } from "./sort-by3.js";
import { sortOrder7Schema, type SortOrder7 } from "./sort-order7.js";

export type ListSharedReportGroupsInput = {
  /**
   * The order in which to list shared report groups. Valid values include: ASCENDING: List in
   * ascending order. DESCENDING: List in descending order.
   */
  sortOrder?: SortOrder7;
  /**
   * The criterion to be used to list report groups shared with the current Amazon Web Services
   * account or user. Valid values include: ARN: List based on the ARN. MODIFIED_TIME: List based on
   * when information about the shared report group was last changed.
   */
  sortBy?: SortBy3;
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified
   * in maxResults. If there more items in the list, then a unique string called a nextToken is
   * returned. To get the next batch of items in the list, call this operation again, adding the
   * next token to the call. To get all of the items in the list, keep calling this operation with
   * each subsequent next token that is returned, until no more next tokens are returned.
   */
  nextToken?: string;
  /**
   * The maximum number of paginated shared report groups per response. Use nextToken to iterate
   * pages in the list of returned ReportGroup objects. The default value is 100.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSharedReportGroupsInputSchema: Schema<ListSharedReportGroupsInput> =
  s.object<ListSharedReportGroupsInput>(
    {
      sortOrder: s.optional(s.lazy(() => sortOrder7Schema)),
      sortBy: s.optional(s.lazy(() => sortBy3Schema)),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
