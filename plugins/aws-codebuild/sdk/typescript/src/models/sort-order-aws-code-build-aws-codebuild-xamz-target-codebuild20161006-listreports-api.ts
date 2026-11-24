import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the sort order for the list of returned reports. Valid values are: ASCENDING: return
 * reports in chronological order based on their creation date. DESCENDING: return reports in the
 * reverse chronological order based on their creation date.
 */
export const SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi =
  | (typeof SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi)[keyof typeof SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi]
  | (string & {});

export const sortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiSchema: EnumSchema<SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi> =
  s.enumOf<SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi>(
    SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi,
  );
