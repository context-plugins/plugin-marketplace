import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The order in which to list compute fleets. Valid values include: ASCENDING: List in ascending
 * order. DESCENDING: List in descending order. Use sortBy to specify the criterion to be used to
 * list compute fleet names.
 */
export const SortOrderAwsCodeBuildFleetApi = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrderAwsCodeBuildFleetApi =
  | (typeof SortOrderAwsCodeBuildFleetApi)[keyof typeof SortOrderAwsCodeBuildFleetApi]
  | (string & {});

export const sortOrderAwsCodeBuildFleetApiSchema: EnumSchema<SortOrderAwsCodeBuildFleetApi> =
  s.enumOf<SortOrderAwsCodeBuildFleetApi>(SortOrderAwsCodeBuildFleetApi);
