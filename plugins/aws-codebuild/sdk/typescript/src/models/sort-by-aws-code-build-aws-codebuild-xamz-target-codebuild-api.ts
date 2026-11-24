import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how the results are sorted. Possible values are: FILE_PATH The results are sorted by
 * file path. LINE_COVERAGE_PERCENTAGE The results are sorted by the percentage of lines that are
 * covered.
 */
export const SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi = {
  LineCoveragePercentage: "LINE_COVERAGE_PERCENTAGE",
  FilePath: "FILE_PATH",
} as const;
export type SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi =
  | (typeof SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi)[keyof typeof SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi]
  | (string & {});

export const sortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema: EnumSchema<SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi> =
  s.enumOf<SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>(
    SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
  );
