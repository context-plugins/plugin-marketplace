import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies if the results are sorted in ascending or descending order. */
export const SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi =
  | (typeof SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi)[keyof typeof SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi]
  | (string & {});

export const sortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema: EnumSchema<SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi> =
  s.enumOf<SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>(
    SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
  );
