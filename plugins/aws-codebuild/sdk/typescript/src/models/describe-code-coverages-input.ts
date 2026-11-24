import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "./sort-by-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";
import {
  sortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "./sort-order-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";

export type DescribeCodeCoveragesInput = {
  /** The ARN of the report for which test cases are returned. */
  reportArn: string;
  /**
   * The nextToken value returned from a previous call to DescribeCodeCoverages. This specifies the
   * next item to return. To return the beginning of the list, exclude this parameter.
   */
  nextToken?: string;
  /** The maximum number of results to return. */
  maxResults?: number;
  /** Specifies if the results are sorted in ascending or descending order. */
  sortOrder?: SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  /**
   * Specifies how the results are sorted. Possible values are: FILE_PATH The results are sorted by
   * file path. LINE_COVERAGE_PERCENTAGE The results are sorted by the percentage of lines that are
   * covered.
   */
  sortBy?: SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  /** The minimum line coverage percentage to report. */
  minLineCoveragePercentage?: number;
  /** The maximum line coverage percentage to report. */
  maxLineCoveragePercentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCodeCoveragesInputSchema: Schema<DescribeCodeCoveragesInput> =
  s.object<DescribeCodeCoveragesInput>(
    {
      reportArn: s.string(),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      sortOrder: s.optional(s.lazy(() => sortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema)),
      sortBy: s.optional(s.lazy(() => sortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema)),
      minLineCoveragePercentage: s.optional(s.float64()),
      maxLineCoveragePercentage: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
