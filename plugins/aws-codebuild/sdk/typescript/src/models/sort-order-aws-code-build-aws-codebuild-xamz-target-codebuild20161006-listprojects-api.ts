import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The order in which to list build projects. Valid values include: ASCENDING: List in ascending
 * order. DESCENDING: List in descending order. Use sortBy to specify the criterion to be used to
 * list build project names.
 */
export const SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi =
  | (typeof SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi)[keyof typeof SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi]
  | (string & {});

export const sortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiSchema: EnumSchema<SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi> =
  s.enumOf<SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi>(
    SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi,
  );
