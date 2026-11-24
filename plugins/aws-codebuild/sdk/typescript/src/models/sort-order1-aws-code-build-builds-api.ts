import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The order to list build IDs. Valid values include: ASCENDING: List the build IDs in ascending
 * order by build ID. DESCENDING: List the build IDs in descending order by build ID.
 */
export const SortOrder1AwsCodeBuildBuildsApi = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrder1AwsCodeBuildBuildsApi =
  | (typeof SortOrder1AwsCodeBuildBuildsApi)[keyof typeof SortOrder1AwsCodeBuildBuildsApi]
  | (string & {});

export const sortOrder1AwsCodeBuildBuildsApiSchema: EnumSchema<SortOrder1AwsCodeBuildBuildsApi> =
  s.enumOf<SortOrder1AwsCodeBuildBuildsApi>(SortOrder1AwsCodeBuildBuildsApi);
