import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reportFilterSchema, type ReportFilter } from "./report-filter.js";
import {
  sortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiSchema,
  type SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi,
} from "./sort-order-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-listreports-api.js";

export type ListReportsInput = {
  /**
   * Specifies the sort order for the list of returned reports. Valid values are: ASCENDING: return
   * reports in chronological order based on their creation date. DESCENDING: return reports in the
   * reverse chronological order based on their creation date.
   */
  sortOrder?: SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi;
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified
   * in maxResults. If there more items in the list, then a unique string called a nextToken is
   * returned. To get the next batch of items in the list, call this operation again, adding the
   * next token to the call. To get all of the items in the list, keep calling this operation with
   * each subsequent next token that is returned, until no more next tokens are returned.
   */
  nextToken?: string;
  /**
   * The maximum number of paginated reports returned per response. Use nextToken to iterate pages
   * in the list of returned Report objects. The default value is 100.
   */
  maxResults?: number;
  filter?: ReportFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listReportsInputSchema: Schema<ListReportsInput> = s.object<ListReportsInput>(
  {
    sortOrder: s.optional(
      s.lazy(() => sortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiSchema),
    ),
    nextToken: s.optional(s.string()),
    maxResults: s.optional(s.int()),
    filter: s.optional(s.lazy(() => reportFilterSchema)),
  },
  { additionalProperties: s.json() },
);
