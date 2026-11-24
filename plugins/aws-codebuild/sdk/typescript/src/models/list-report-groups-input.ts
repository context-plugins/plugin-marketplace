import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sortBy1Schema, type SortBy1 } from "./sort-by1.js";
import { sortOrder4Schema, type SortOrder4 } from "./sort-order4.js";

export type ListReportGroupsInput = {
  /**
   * Used to specify the order to sort the list of returned report groups. Valid values are
   * ASCENDING and DESCENDING.
   */
  sortOrder?: SortOrder4;
  /**
   * The criterion to be used to list build report groups. Valid values include: CREATED_TIME: List
   * based on when each report group was created. LAST_MODIFIED_TIME: List based on when each report
   * group was last changed. NAME: List based on each report group's name.
   */
  sortBy?: SortBy1;
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified
   * in maxResults. If there more items in the list, then a unique string called a nextToken is
   * returned. To get the next batch of items in the list, call this operation again, adding the
   * next token to the call. To get all of the items in the list, keep calling this operation with
   * each subsequent next token that is returned, until no more next tokens are returned.
   */
  nextToken?: string;
  /**
   * The maximum number of paginated report groups returned per response. Use nextToken to iterate
   * pages in the list of returned ReportGroup objects. The default value is 100.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listReportGroupsInputSchema: Schema<ListReportGroupsInput> = s.object<ListReportGroupsInput>(
  {
    sortOrder: s.optional(s.lazy(() => sortOrder4Schema)),
    sortBy: s.optional(s.lazy(() => sortBy1Schema)),
    nextToken: s.optional(s.string()),
    maxResults: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
