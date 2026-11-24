import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The order in which sandbox records should be retrieved. */
export const SortOrderAwsCodeBuildCommandExecutionApi = {
  Ascending: "ASCENDING",
  Descending: "DESCENDING",
} as const;
export type SortOrderAwsCodeBuildCommandExecutionApi =
  | (typeof SortOrderAwsCodeBuildCommandExecutionApi)[keyof typeof SortOrderAwsCodeBuildCommandExecutionApi]
  | (string & {});

export const sortOrderAwsCodeBuildCommandExecutionApiSchema: EnumSchema<SortOrderAwsCodeBuildCommandExecutionApi> =
  s.enumOf<SortOrderAwsCodeBuildCommandExecutionApi>(SortOrderAwsCodeBuildCommandExecutionApi);
