import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The order to sort the results in. The results are sorted by build number, not the build
 * identifier. If this is not specified, the results are sorted in descending order. Valid values
 * include: ASCENDING: List the build identifiers in ascending order, by build number. DESCENDING:
 * List the build identifiers in descending order, by build number. If the project has more than 100
 * builds, setting the sort order will result in an error.
 */
export const SortOrderAwsCodeBuildBuildsApi = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrderAwsCodeBuildBuildsApi =
  | (typeof SortOrderAwsCodeBuildBuildsApi)[keyof typeof SortOrderAwsCodeBuildBuildsApi]
  | (string & {});

export const sortOrderAwsCodeBuildBuildsApiSchema: EnumSchema<SortOrderAwsCodeBuildBuildsApi> =
  s.enumOf<SortOrderAwsCodeBuildBuildsApi>(SortOrderAwsCodeBuildBuildsApi);
