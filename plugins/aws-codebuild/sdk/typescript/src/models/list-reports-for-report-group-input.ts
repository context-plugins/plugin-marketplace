import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  reportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type ReportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "./report-filter-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";
import { sortOrder5Schema, type SortOrder5 } from "./sort-order5.js";

export type ListReportsForReportGroupInput = {
  /** The ARN of the report group for which you want to return report ARNs. */
  reportGroupArn: string;
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified
   * in maxResults. If there more items in the list, then a unique string called a nextToken is
   * returned. To get the next batch of items in the list, call this operation again, adding the
   * next token to the call. To get all of the items in the list, keep calling this operation with
   * each subsequent next token that is returned, until no more next tokens are returned.
   */
  nextToken?: string;
  /** Use to specify whether the results are returned in ascending or descending order. */
  sortOrder?: SortOrder5;
  /**
   * The maximum number of paginated reports in this report group returned per response. Use
   * nextToken to iterate pages in the list of returned Report objects. The default value is 100.
   */
  maxResults?: number;
  filter?: ReportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listReportsForReportGroupInputSchema: Schema<ListReportsForReportGroupInput> =
  s.object<ListReportsForReportGroupInput>(
    {
      reportGroupArn: s.string(),
      nextToken: s.optional(s.string()),
      sortOrder: s.optional(s.lazy(() => sortOrder5Schema)),
      maxResults: s.optional(s.int()),
      filter: s.optional(s.lazy(() => reportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema)),
    },
    { additionalProperties: s.json() },
  );
